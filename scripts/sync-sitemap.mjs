#!/usr/bin/env node
/**
 * Sincronizează `public/sitemap.xml` cu registrul de conținut.
 *
 * Sursa de adevăr pentru date rămâne codul (posts.ts / blogger-posts.json /
 * lab-content / documentele AVL), citit prin `build-content-registry.mjs`.
 * Sitemap-ul e în continuare un fișier static, dar nu se mai editează de mână
 * pentru publicări și modificări de conținut: rulezi acest script.
 *
 * Ce face, pentru fiecare material `publicat` din registru:
 *   1. dacă ruta lipsește din sitemap → adaugă un <url>, înaintea primei intrări
 *      de pe aceeași suprafață (cel mai nou primul), cu formatul majoritar al suprafeței
 *      lui (cu/fără <lastmod>, aceleași changefreq/priority);
 *   2. dacă intrarea are <lastmod> și acesta diferă de ultima modificare din
 *      sursă (`dateModified`, altfel data publicării) → îl actualizează.
 *
 * Ce NU face: nu șterge intrări, nu adaugă <lastmod> unde formatul suprafeței
 * nu-l folosește (documentele AVL, secțiunile Lab), nu atinge changefreq/
 * priority ale intrărilor existente și nici paginile care nu sunt în registru
 * (Home, /despre, /proiecte/* …).
 *
 * Utilizare:
 *   node scripts/sync-sitemap.mjs           # scrie modificările
 *   node scripts/sync-sitemap.mjs --check   # doar raportează; exit 1 dacă e nevoie de sincronizare
 *
 * Regenerează registrul înainte și (după scriere) după, ca wiring-ul și
 * anomaliile să reflecte sitemap-ul nou.
 */
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SITEMAP = path.join(ROOT, "public/sitemap.xml");
const REGISTRU = path.join(ROOT, "docs/registru-continut.json");
const BASE = "https://delamatescu.ro";
const CHECK = process.argv.includes("--check");

const regenereaza = () =>
  execFileSync(
    process.execPath,
    [path.join(ROOT, "scripts/build-content-registry.mjs")],
    {
      cwd: ROOT,
      stdio: "ignore",
    },
  );

regenereaza();
const registru = JSON.parse(fs.readFileSync(REGISTRU, "utf8"));
let xml = fs.readFileSync(SITEMAP, "utf8");

const zi = (d) => (typeof d === "string" ? d.slice(0, 10) : null);
const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Intrările existente: loc → { bloc, lastmod, changefreq, priority }. */
function parseaza(text) {
  const harta = new Map();
  for (const m of text.matchAll(/[ \t]*<url>[\s\S]*?<\/url>\n?/g)) {
    const bloc = m[0];
    const loc = bloc.match(/<loc>([^<]+)<\/loc>/)?.[1]?.trim();
    if (!loc) continue;
    harta.set(loc, {
      bloc,
      lastmod: bloc.match(/<lastmod>([^<]+)<\/lastmod>/)?.[1]?.trim() ?? null,
      changefreq:
        bloc.match(/<changefreq>([^<]+)<\/changefreq>/)?.[1]?.trim() ?? null,
      priority:
        bloc.match(/<priority>([^<]+)<\/priority>/)?.[1]?.trim() ?? null,
    });
  }
  return harta;
}

const publicate = registru.intrari.filter(
  (e) =>
    e.status === "publicat" &&
    typeof e.ruta === "string" &&
    e.ruta.startsWith("/"),
);

// Formatul majoritar pe suprafață, din intrările deja prezente.
const existente = parseaza(xml);
const formatSuprafata = new Map();
for (const e of publicate) {
  const x = existente.get(BASE + e.ruta);
  if (!x) continue;
  const cheie = JSON.stringify([!!x.lastmod, x.changefreq, x.priority]);
  const c = formatSuprafata.get(e.suprafata) ?? new Map();
  c.set(cheie, (c.get(cheie) ?? 0) + 1);
  formatSuprafata.set(e.suprafata, c);
}
const formatPentru = (suprafata) => {
  const c = formatSuprafata.get(suprafata);
  if (!c) return [true, "monthly", "0.7"];
  return JSON.parse([...c.entries()].sort((a, b) => b[1] - a[1])[0][0]);
};

const adaugate = [];
const actualizate = [];

for (const e of publicate) {
  const loc = BASE + e.ruta;
  const asteptat = zi(e.dataModificare || e.dataPublicare);
  const curente = parseaza(xml);
  const x = curente.get(loc);

  if (!x) {
    const [cuLastmod, changefreq, priority] = formatPentru(e.suprafata);
    const linii = ["  <url>", `    <loc>${loc}</loc>`];
    if (cuLastmod && asteptat?.length === 10)
      linii.push(`    <lastmod>${asteptat}</lastmod>`);
    if (changefreq) linii.push(`    <changefreq>${changefreq}</changefreq>`);
    if (priority) linii.push(`    <priority>${priority}</priority>`);
    linii.push("  </url>\n");
    const bloc = linii.join("\n");

    // înaintea primei intrări de pe aceeași suprafață (ex. `blog`, nu `blog (arhivă)`):
    // convenția fișierului e „cel mai nou primul”. Altfel după ultima intrare din
    // aceeași secțiune (/blog/x → /blog/), altfel la final.
    const aceeasiSuprafata = new Set(
      publicate
        .filter((p) => p.suprafata === e.suprafata)
        .map((p) => BASE + p.ruta),
    );
    const sectiune = BASE + e.ruta.replace(/[^/]+$/, "");
    const dinSectiune = [...curente.entries()].filter(
      ([l]) => l.startsWith(sectiune) && l !== sectiune.replace(/\/$/, ""),
    );
    const primaSuprafata = [...curente.entries()].find(([l]) =>
      aceeasiSuprafata.has(l),
    );
    if (primaSuprafata) {
      const i = xml.indexOf(primaSuprafata[1].bloc);
      xml = xml.slice(0, i) + bloc + xml.slice(i);
    } else if (dinSectiune.length) {
      const ultim = dinSectiune.at(-1)[1].bloc;
      const i = xml.lastIndexOf(ultim) + ultim.length;
      xml = xml.slice(0, i) + bloc + xml.slice(i);
    } else {
      xml = xml.replace(/<\/urlset>/, `${bloc}</urlset>`);
    }
    adaugate.push(
      `${e.ruta}${cuLastmod && asteptat ? ` (lastmod ${asteptat})` : ""}`,
    );
    continue;
  }

  if (x.lastmod && asteptat?.length === 10 && x.lastmod !== asteptat) {
    const nou = x.bloc.replace(
      new RegExp(`<lastmod>${escRe(x.lastmod)}</lastmod>`),
      `<lastmod>${asteptat}</lastmod>`,
    );
    xml = xml.replace(x.bloc, nou);
    actualizate.push(`${e.ruta}: ${x.lastmod} → ${asteptat}`);
  }
}

const n = adaugate.length + actualizate.length;
for (const a of adaugate) console.log(`+ adăugat     ${a}`);
for (const a of actualizate) console.log(`~ lastmod     ${a}`);

if (CHECK) {
  console.log(
    n
      ? `sitemap: ${n} modificări necesare (rulează fără --check)`
      : "sitemap: sincronizat",
  );
  process.exit(n ? 1 : 0);
}
if (n) {
  fs.writeFileSync(SITEMAP, xml);
  regenereaza();
  console.log(`sitemap: ${n} modificări scrise în public/sitemap.xml`);
} else {
  console.log("sitemap: sincronizat, nimic de schimbat");
}
