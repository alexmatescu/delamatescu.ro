import type { LabArticleMeta } from "@/data/lab-seo";

/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const viitorulPareEvidentMeta: LabArticleMeta = {
  title: "Viitorul pare evident abia după ce s-a întâmplat",
  description:
    "De ce ezităm în fața tehnologiilor noi, ce au anticipat Tesla, Bush, Clarke și Goddard și de ce perspectiva trecutului nu garantează viitorul.",
  canonical:
    "https://delamatescu.ro/lab/articole/viitorul-pare-evident-abia-dupa-ce-s-a-intamplat",
  category: "AI Ecosystem",
  articleType: "Analiză",
  datePublished: "2026-11-15T10:15:00+02:00",
  dateModified: "2026-11-15",
  lastReviewed: "2026-11-14",
  image: {
    url: "https://delamatescu.ro/images/lab/viitorul-pare-evident-abia-dupa-ce-s-a-intamplat.webp",
    alt: "Un bărbat într-un birou din anii '80, cu telefon cu fir, calculator cu monitor monocrom, agendă și casete pe masă, privește pe geam spre un oraș actual: oameni cu telefoane și căști, un biciclist, ecrane mari, un autobuz, o dronă și o terasă unde cineva participă la un apel video pe laptop.",
  },
  about: [
    { name: "Technology adoption" },
    { name: "Hindsight bias" },
    { name: "Forecasting" },
    { name: "Artificial intelligence" },
  ],
  keywords: [
    "adopția tehnologiei",
    "reticența față de schimbare",
    "anticipări tehnologice istorice",
    "hindsight bias",
    "prognoză și incertitudine",
    "atitudinea față de AI",
  ],
  citations: [
    {
      name: "Heinssen, Glass & Knight (1987) — Assessing computer anxiety: Development and validation of the Computer Anxiety Rating Scale, Computers in Human Behavior 3(1)",
      url: "https://doi.org/10.1016/0747-5632(87)90010-0",
    },
    {
      name: "Pew Research Center — Section I: Basic Patterns of Internet Use (14 ianuarie 1999)",
      url: "https://www.pewresearch.org/politics/1999/01/14/section-i-basic-patterns-of-internet-use/",
    },
    {
      name: "John B. Horrigan, Pew Research Center — Use of Cloud Computing Applications and Services (12 septembrie 2008)",
      url: "https://www.pewresearch.org/internet/2008/09/12/use-of-cloud-computing-applications-and-services/",
    },
    {
      name: "Aaron Smith, Pew Research Center — Part II: Barriers to Adoption (30 noiembrie 2012)",
      url: "https://www.pewresearch.org/internet/2012/11/30/part-ii-barriers-to-adoption/",
    },
    {
      name: "Amanda Lenhart, Pew Research Center — Adults and Social Network Websites (14 ianuarie 2009)",
      url: "https://www.pewresearch.org/internet/2009/01/14/adults-and-social-network-websites/",
    },
    {
      name: "Bloom, Liang, Roberts & Ying — Does Working from Home Work? Evidence from a Chinese Experiment (NBER Working Paper 18871, 2013)",
      url: "https://www.nber.org/papers/w18871",
    },
    {
      name: "Pew Research Center — Young adults in the U.S. are increasingly wary of AI, concerned it will take jobs (18 august 2026)",
      url: "https://www.pewresearch.org/short-reads/2026/08/18/young-adults-in-the-us-are-increasingly-wary-of-ai-concerned-it-will-take-jobs/",
    },
    {
      name: "E. M. Forster — The Machine Stops (1909), Wikisource",
      url: "https://en.wikisource.org/wiki/The_Machine_Stops",
    },
    {
      name: "NASA — 95 Years Ago: Goddard’s First Liquid-Fueled Rocket (2021)",
      url: "https://www.nasa.gov/history/95-years-ago-goddards-first-liquid-fueled-rocket/",
    },
    {
      name: "NASA — Project Apollo: An Annotated Bibliography, Chapter 6",
      url: "https://www.nasa.gov/history/Apollobib/ch6.html",
    },
    {
      name: "NASA — The Father of Modern Rocketry and the Notion of a Liquid-Fueled Rocket (2017)",
      url: "https://www.nasa.gov/image-article/father-of-modern-rocketry-notion-of-liquid-fueled-rocket/",
    },
    {
      name: "John B. Kennedy — When Woman Is Boss, interviu cu Nikola Tesla, Collier’s (30 ianuarie 1926)",
      url: "https://teslauniverse.com/nikola-tesla/articles/when-woman-boss",
    },
    {
      name: "Vannevar Bush — As We May Think, The Atlantic Monthly (iulie 1945)",
      url: "https://faculty.georgetown.edu/jod/texts/vannevar.bush.html",
    },
    {
      name: "BBC Archive — 1964: Arthur C. Clarke predicts the future (Horizon)",
      url: "https://www.youtube.com/watch?v=YwELr8ir9qM",
    },
    {
      name: "Clifford Stoll — The Internet? Bah!, Newsweek (27 februarie 1995)",
      url: "https://thenextweb.com/news/newsweek-1995-buy-books-newspapers-straight-intenet-uh",
    },
    {
      name: "U.S. Geological Survey — Wegener’s Puzzling Continental Drift Evidence",
      url: "https://www.usgs.gov/educational-resources/wegeners-puzzling-continental-drift-evidence",
    },
    {
      name: "Steven Earle, Physical Geology (BCcampus) — Alfred Wegener, the Father of Plate Tectonics",
      url: "https://opentextbc.ca/physicalgeologyh5p/chapter/alfred-wegener-the-father-of-plate-tectonics/",
    },
    {
      name: "Baruch Fischhoff — Hindsight ≠ foresight: the effect of outcome knowledge on judgment under uncertainty (1975; retipărit în Quality & Safety in Health Care, 2003)",
      url: "https://qualitysafety.bmj.com/content/12/4/304.short",
    },
    {
      name: "Mellers et al. (2014) — Psychological Strategies for Winning a Geopolitical Forecasting Tournament, Psychological Science 25(5)",
      url: "https://doi.org/10.1177/0956797614524255",
    },
  ],
  faq: [],
};

export const viitorulPareEvidentHtml = `
      <p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
      <p>Publicat: <time datetime="2026-11-15T10:15:00+02:00">15 noiembrie 2026</time> · Ultima verificare factuală: <time datetime="2026-11-14">14 noiembrie 2026</time></p>

      <figure>
        <img src="/images/lab/viitorul-pare-evident-abia-dupa-ce-s-a-intamplat.webp" alt="Un bărbat într-un birou din anii '80, cu telefon cu fir, calculator cu monitor monocrom, agendă și casete pe masă, privește pe geam spre un oraș actual: oameni cu telefoane și căști, un biciclist, ecrane mari, un autobuz, o dronă și o terasă unde cineva participă la un apel video pe laptop." width="1672" height="941" loading="eager" />
      </figure>

      <nav class="article-toc" aria-labelledby="cuprins">
        <p id="cuprins" class="article-toc-title">Cuprins</p>
        <ol>
          <li><a href="#pe-scurt">Pe scurt</a></li>
          <li><a href="#de-ce-era-atat-de-greu-sa-vezi-urmatoarea-etapa">De ce era atât de greu să vezi următoarea etapă?</a></li>
          <li><a href="#ce-ii-retinea-pe-oameni-inainte-ca-noul-sa-devina-obisnuinta">Ce îi reținea pe oameni înainte ca noul să devină obișnuință?</a></li>
          <li><a href="#ce-castigam-si-ce-riscam-sa-pierdem-prin-schimbare">Ce câștigăm și ce riscăm să pierdem prin schimbare?</a></li>
          <li><a href="#cine-a-vazut-devreme-fragmente-din-lumea-de-astazi">Cine a văzut devreme fragmente din lumea de astăzi?</a>
            <ol>
              <li><a href="#e-m-forster-viata-trecuta-printr-un-sistem">E. M. Forster: viața trecută printr-un sistem</a></li>
              <li><a href="#nikola-tesla-aparatul-care-incape-in-buzunar">Nikola Tesla: aparatul care încape în buzunar</a></li>
              <li><a href="#vannevar-bush-legaturile-dintre-informatii">Vannevar Bush: legăturile dintre informații</a></li>
              <li><a href="#arthur-c-clarke-munca-de-oriunde-si-extrapolarea-ei">Arthur C. Clarke: munca de oriunde și extrapolarea ei</a></li>
            </ol>
          </li>
          <li><a href="#au-fost-toti-vizionarii-ridiculizati">Au fost toți vizionarii ridiculizați?</a>
            <ol>
              <li><a href="#goddard-un-caz-documentat-de-ridiculizare">Goddard: un caz documentat de ridiculizare</a></li>
              <li><a href="#negroponte-si-stoll-optimismul-si-scepticismul-in-aceeasi-pagina">Negroponte și Stoll: optimismul și scepticismul, în aceeași pagină</a></li>
              <li><a href="#cand-obiectia-are-o-baza-reala">Când obiecția are o bază reală</a></li>
            </ol>
          </li>
          <li><a href="#de-ce-ni-se-pare-evident-trecutul">De ce ni se pare evident trecutul?</a></li>
          <li><a href="#putem-prezice-astazi-mai-bine-ce-urmeaza">Putem prezice astăzi mai bine ce urmează?</a></li>
          <li><a href="#cum-intampinam-urmatoarea-schimbare-fara-sa-cerem-o-garantie-imposibila">Cum întâmpinăm următoarea schimbare fără să cerem o garanție imposibilă?</a></li>
          <li><a href="#surse-si-metodologie">Surse și metodologie</a>
            <ol>
              <li><a href="#nota-de-volatilitate">Notă de volatilitate</a></li>
            </ol>
          </li>
        </ol>
      </nav>

      <p>Imaginează-ți un birou din 1985. Pe masă sunt un telefon, o agendă cu numere scrise de mână, câteva dosare și, poate, un calculator pe care cineva încearcă încă să învețe să lucreze. Dincolo de geam, oamenii își continuă ziua. Intră în magazine, citesc ziare, cer recomandări, așteaptă un apel și se întâlnesc ca să discute lucruri care, pentru ei, se discută firesc față în față.</p>

      <p>Spune-i omului din acel birou că va purta în buzunar un aparat prin care își va vedea familia aflată pe alt continent, va compara sute de oferte, va plăti fără să scoată bancnote și va cere unei mașini să îi explice ce alegere ar putea fi potrivită pentru el. S-ar putea să te creadă în parte. S-ar putea să fie fascinat. S-ar putea să întrebe cine ar avea nevoie de toate acestea.</p>

      <p>Întreabă-l apoi în ce an vor deveni obișnuite, cât vor costa, ce firme le vor construi, ce meserii vor transforma și ce probleme vor produce. Aici, chiar și imaginația foarte bună începe să piardă din precizie.</p>

      <p>Astăzi ne este ușor să privim înapoi și să spunem că direcția era evidentă. Avem însă un avantaj enorm asupra omului din fotografie: știm ce s-a întâmplat după ce a fost făcută.</p>

      <h2 id="pe-scurt">Pe scurt</h2>

      <p><strong>A anticipa o posibilitate nu înseamnă a cunoaște forma, calendarul și consecințele ei.</strong> Istoria tehnologiei cuprinde idei remarcabile, critici greșite, îngrijorări justificate și scenarii care nu s-au realizat. Cunoașterea rezultatului ne poate face să supraestimăm cât de previzibil era acesta.</p>

      <ul>
        <li>Reticența poate veni din cost, neîncredere, competențe insuficiente, pierderea controlului sau o utilitate încă neclară.</li>
        <li>Unele anticipări istorice seamănă surprinzător cu prezentul; altele sunt confirmate numai parțial sau sunt interpretate prea generos.</li>
        <li>Ridiculizarea este documentată în anumite cazuri. Ea nu trebuie atribuită automat tuturor celor considerați astăzi vizionari.</li>
        <li>Metodele de prognoză se pot îmbunătăți, fără să transforme viitorul social și tehnologic într-un rezultat garantat.</li>
        <li>O reacție utilă la AI presupune întrebări precise, experimente limitate și disponibilitatea de a schimba concluzia când se schimbă dovezile.</li>
      </ul>

      <h2 id="de-ce-era-atat-de-greu-sa-vezi-urmatoarea-etapa">De ce era atât de greu să vezi următoarea etapă?</h2>

      <p><strong>Pentru că o tehnologie se răspândește prin întâlnirea mai multor condiții, iar posibilitatea tehnică este numai una dintre ele.</strong></p>

      <p>Privită din prezent, succesiunea pare ordonată: calculatorul personal, internetul, serviciile online, smartphone-ul, platformele sociale și inteligența artificială. Așezăm câteva date pe o linie și obținem impresia unui drum aproape inevitabil.</p>

      <p>Din interiorul fiecărei perioade, lucrurile arătau mai puțin ordonat. Existau produse concurente, standarde diferite, prețuri greu de justificat, experiențe frustrante și promisiuni pe care tehnologia disponibilă nu le putea încă susține. Unele idei puteau fi demonstrate, dar nu puteau fi livrate ieftin. Altele aveau o utilizare, dar nu aveau publicul, infrastructura sau modelul economic potrivit.</p>

      <p>A intui că oamenii vor comunica mai ușor la distanță este o anticipare importantă. A descrie exact aparatul, rețeaua, aplicațiile, obiceiurile, companiile dominante și efectele asupra relațiilor umane este o sarcină mult mai dificilă.</p>

      <p>La fel, în anii ’80 puteai să vezi că un calculator va prelua o parte din munca administrativă. Era mult mai greu să stabilești în ce ordine aveau să se schimbe distribuția informației, cumpărăturile, publicitatea, felul în care găsim un restaurant sau așteptarea de a primi un răspuns imediat.</p>

      <p>Pentru o prognoză completă ar fi trebuit să anticipezi simultan cel puțin cinci lucruri:</p>

      <ol>
        <li><strong>Capabilitatea:</strong> ce va deveni posibil tehnic.</li>
        <li><strong>Accesibilitatea:</strong> cât va costa și cine va avea acces.</li>
        <li><strong>Adopția:</strong> cine va folosi tehnologia, pentru ce și cu ce reticențe.</li>
        <li><strong>Organizarea pieței:</strong> ce infrastructuri, reguli și modele economice o vor susține.</li>
        <li><strong>Consecințele:</strong> ce activități va transforma și ce probleme noi va crea.</li>
      </ol>

      <p>O intuiție corectă despre primul punct nu rezolvă automat celelalte patru. Poți vedea o direcție și să greșești cu două decenii calendarul ei. Poți prevedea produsul și să ratezi felul în care va fi folosit. Poți înțelege beneficiul și să subestimezi costul suportat de cei obligați să se adapteze.</p>

      <p>De aceea, întrebarea „Cum de nu și-au dat seama?” merită însoțită de alta: „Ce puteau să știe atunci, fără informațiile pe care le avem noi acum?”</p>

      <h2 id="ce-ii-retinea-pe-oameni-inainte-ca-noul-sa-devina-obisnuinta">Ce îi reținea pe oameni înainte ca noul să devină obișnuință?</h2>

      <p><strong>Oamenii evaluau o schimbare prin comparație cu ceea ce știau deja să facă și cu riscurile pe care le puteau vedea în acel moment.</strong></p>

      <p>Pentru cineva care lucrează bine cu agenda, calculatorul poate însemna mai întâi ore de învățare. Pentru cineva care cumpără dintr-un magazin cunoscut, plata pe un site necunoscut poate însemna pierderea unei siguranțe. Pentru cineva care își ține documentele pe propriul calculator, cloudul poate părea o mutare a controlului în mâinile altcuiva.</p>

      <p>Cuvintele „mai rapid” și „mai comod” nu răspund singure la întrebările „pentru cine?”, „după cât efort?” și „cu ce dependențe?”.</p>

      <p>Tabelul de mai jos urmărește etapele discutate în <a href="/lab/articole/clientul-ajunge-pe-site-dupa-selectia-ai">articolul despre schimbarea traseului clientului</a>. Întrebările sunt <strong>formulări ilustrative</strong>, nu citate din sondaje. Dovezile provin din perioadele în care tehnologiile erau adoptate; nu trebuie confundate cu măsurători făcute înainte de inventarea lor.</p>

      <table>
        <thead><tr><th>Schimbarea</th><th>O întrebare firească în perioada de adopție</th><th>Ce este documentat</th></tr></thead>
        <tbody>
          <tr><td>Agenda și lucrul pe hârtie → calculatorul personal, anii ’80</td><td>Voi reuși să îl folosesc sau îmi voi complica munca?</td><td>Cercetări din 1987 analizau anxietatea față de calculator, evitarea învățării și asocierea cu așteptări și performanțe mai slabe la utilizare.<sup><a href="#fn-1">1</a></sup></td></tr>
          <tr><td>Informarea și cumpărăturile fizice → web, anii ’90</td><td>Cui îi dau numărul cardului și ce fac dacă ceva nu merge?</td><td>Într-un raport Pew publicat în 1999, 61% dintre utilizatorii de internet care nu cumpăraseră online spuneau că temerile privind siguranța cardului îi făcuseră reticenți.<sup><a href="#fn-2">2</a></sup></td></tr>
          <tr><td>Programe și fișiere locale → servicii online și cloud, anii 2000</td><td>Cine îmi controlează datele și ce poate face cu ele?</td><td>În 2008, utilizatorii americani apreciau comoditatea serviciilor cloud, dar exprimau îngrijorări puternice față de posibila vânzare sau folosire comercială a datelor.<sup><a href="#fn-3">3</a></sup></td></tr>
          <tr><td>Telefonul mobil de bază → smartphone, din 2007 și în anii 2010</td><td>De ce să plătesc mai mult dacă telefonul meu funcționează?</td><td>În 2012, dintre americanii cu telefon mobil fără smartphone, 37% menționau prețul, într-o formă sau alta, ca motiv principal pentru neadoptare, iar 29% spuneau că nu au nevoie de unul mai avansat.<sup><a href="#fn-4">4</a></sup></td></tr>
          <tr><td>Relații și recomandări personale → profiluri și rețele sociale, anii 2000–2010</td><td>Cine vede ce public și cum separ munca de viața personală?</td><td>Raportul Pew din 2009 arăta că 60% dintre utilizatorii adulți ai rețelelor sociale restricționau accesul la profil la prieteni; existau și profiluri separate pentru contexte personale și profesionale.<sup><a href="#fn-5">5</a></sup></td></tr>
          <tr><td>Prezența fizică → colaborare și tranzacții la distanță, accelerate în 2020</td><td>Cum știm că lucrul la distanță funcționează și ce se pierde pe drum?</td><td>Un studiu publicat inițial în 2013 pornea de la temerile privind scăderea efortului în munca de acasă și testa această presupunere într-un call-center din China.<sup><a href="#fn-6">6</a></sup></td></tr>
          <tr><td>Căutarea și comparația făcute personal → asistență AI, 2022–2026</td><td>Cât pot avea încredere în răspuns și cât control păstrez asupra alegerii?</td><td>În sondajul Pew din iunie 2026, 52% dintre adulții americani se declarau mai degrabă îngrijorați decât entuziasmați de utilizarea crescută a AI în viața cotidiană.<sup><a href="#fn-7">7</a></sup></td></tr>
        </tbody>
      </table>

      <p>Aceste exemple nu descriu o populație omogenă și nici un refuz universal. Uneori, entuziasmul și neîncrederea existau în aceeași persoană. Poți folosi un serviciu zilnic și, în același timp, să fii nemulțumit de condițiile în care îl folosești.</p>

      <p>O parte din reticență se poate diminua prin experiență, prețuri mai mici și produse mai bune. O altă parte se poate confirma. Faptul că o tehnologie ajunge larg răspândită nu demonstrează că toate îngrijorările inițiale au fost neîntemeiate.</p>

      <p>În exemplul muncii de acasă, experimentul de nouă luni analizat de Nicholas Bloom și colegii săi a găsit un câștig de performanță, dar și o rată mai mică de promovare raportată la performanță pentru cei care lucrau de acasă.<sup><a href="#fn-6">6</a></sup> Avem, așadar, rezultate diferite pe dimensiuni diferite. Nici experiența unui call-center din China nu poate răspunde, de una singură, pentru toate profesiile și toate organizațiile.</p>

      <p>Un utilizator care ezită poate avea nevoie de o demonstrație, de acces sau de o explicație. Poate avea și un motiv întemeiat să refuze. Înțelegerea diferenței este mai utilă decât eticheta comodă de „om care nu ține pasul”.</p>

      <h2 id="ce-castigam-si-ce-riscam-sa-pierdem-prin-schimbare">Ce câștigăm și ce riscăm să pierdem prin schimbare?</h2>

      <p><strong>O tehnologie poate reduce un anumit efort și poate introduce simultan alte costuri, responsabilități sau dependențe.</strong></p>

      <p>În prezentările despre viitor, beneficiile au de obicei o formă clară: economisești timp, ajungi mai departe, găsești mai repede, compari mai mult. Pierderile sunt adesea mai difuze. Se observă după ce noul instrument a intrat în rutină, iar vechiul mod de lucru nu mai este la fel de ușor de recuperat.</p>

      <p>Un document digital te ajută să cauți și să copiezi informația. Îți cere, în schimb, să gestionezi versiuni, acces și copii de siguranță. Un serviciu online poate elimina instalarea locală, dar te face dependent de cont, conexiune și condițiile furnizorului. Un telefon inteligent pune multe instrumente în buzunar și aduce cu ele posibilitatea de a fi întrerupt oriunde.</p>

      <p>Acestea sunt exemple de compromisuri, nu un bilanț universal al fiecărei tehnologii. Pentru un om, un anumit schimb poate fi avantajos; pentru altul, poate veni prea devreme sau poate costa prea mult.</p>

      <p>Nici „eliminarea” nu este întotdeauna completă. Un canal nou poate schimba proporția în care folosim un canal vechi, fără să îl facă să dispară. Telefonul, magazinul fizic și întâlnirea directă pot continua să aibă roluri precise într-un proces tot mai digital.</p>

      <p>În cazul AI, întrebarea devine foarte concretă: ce deleg și ce continui să verific? Dacă un asistent selectează informații pentru mine, pot economisi timp. Trebuie însă să decid cum verific sursele, ce criterii îi dau și cât din comparația lui pot trata ca bază pentru alegerea mea.</p>

      <p>Tocmai de aceea, a ghici ce funcție va avea o tehnologie este mai ușor decât a înțelege întreaga relație pe care oamenii o vor construi cu ea. Produsul poate apărea într-o demonstrație. Obiceiul, dependența și schimbarea regulilor de lucru se formează în timp.</p>

      <h2 id="cine-a-vazut-devreme-fragmente-din-lumea-de-astazi">Cine a văzut devreme fragmente din lumea de astăzi?</h2>

      <p><strong>Există anticipări surprinzătoare, dar ele trebuie citite în formularea și contextul lor, cu distincție între ficțiune, viziune tehnică și demonstrație științifică.</strong></p>

      <p>O afirmație largă despre comunicarea la distanță nu este echivalentă cu descrierea exactă a internetului. O povestire care seamănă cu viața conectată nu devine automat o prognoză cu termen. Iar un cercetător care proiectează și testează un dispozitiv participă la construirea rezultatului pe care îl anticipase.</p>

      <table>
        <thead><tr><th>Personalitate și moment</th><th>Ce a descris sau susținut</th><th>Ce putem afirma cu precizie</th></tr></thead>
        <tbody>
          <tr><td><strong>E. M. Forster, 1909</strong></td><td>Oameni care comunică și își organizează viața printr-un sistem tehnic de care depind.</td><td>Este un scenariu literar despre mediere și dependență, recognoscibil astăzi în anumite aspecte.<sup><a href="#fn-8">8</a></sup></td></tr>
          <tr><td><strong>Robert H. Goddard, 1919–1920</strong></td><td>Posibilitatea folosirii rachetelor pentru altitudini extreme și, în perspectiva discutată, pentru a ajunge la Lună.</td><td>Avem o propunere științifică, lucru experimental și o reacție publică de ridiculizare documentată.<sup><a href="#fn-9">9</a></sup></td></tr>
          <tr><td><strong>Nikola Tesla, 1926</strong></td><td>Comunicare instantanee, cu sunet și imagine, prin aparate suficient de mici pentru buzunar.</td><td>Anticiparea unor funcții este remarcabilă; ea nu descrie întregul smartphone și ecosistemul său.<sup><a href="#fn-10">10</a></sup></td></tr>
          <tr><td><strong>Vannevar Bush, 1945</strong></td><td>O arhivă personală consultabilă rapid, cu legături asociative între informații.</td><td>„Memex” este o viziune asupra organizării cunoașterii, concepută cu alte mijloace tehnice decât webul.<sup><a href="#fn-11">11</a></sup></td></tr>
          <tr><td><strong>Arthur C. Clarke, 1964</strong></td><td>Comunicare globală și posibilitatea desfășurării activității la mare distanță de sediul tradițional.</td><td>A intuit funcții importante ale muncii la distanță, alături de extrapolări mai ample despre orașe.<sup><a href="#fn-12">12</a></sup></td></tr>
        </tbody>
      </table>

      <h3 id="e-m-forster-viata-trecuta-printr-un-sistem">E. M. Forster: viața trecută printr-un sistem</h3>

      <p>În <em>The Machine Stops</em>, publicată în 1909, Forster imaginează oameni separați fizic, dar conectați prin aparate. Conversațiile și prelegerile pot avea loc la distanță, iar sistemul care susține viața devine atât de prezent încât contestarea lui provoacă disconfort.<sup><a href="#fn-8">8</a></sup></p>

      <p>Lectura ne poate duce cu gândul la videoconferințe și la dependența de infrastructuri digitale. Aceasta este o comparație contemporană cu ficțiunea sa. Textul nu oferă calendarul internetului și nici o demonstrație că autorul ar fi cunoscut viitorul. Valoarea lui stă și în întrebarea pe care o păstrează deschisă: cât din relația cu lumea ajunge să fie înlocuit de relația cu sistemul care ne-o prezintă?</p>

      <h3 id="nikola-tesla-aparatul-care-incape-in-buzunar">Nikola Tesla: aparatul care încape în buzunar</h3>

      <p>În interviul acordat lui John B. Kennedy pentru <em>Collier’s</em>, la 30 ianuarie 1926, Tesla descria comunicarea imediată indiferent de distanță, posibilitatea de a ne vedea și auzi și un aparat suficient de mic pentru buzunar.<sup><a href="#fn-10">10</a></sup></p>

      <p>Legătura cu anumite funcții ale telefonului de astăzi este puternică. Totuși, între anticiparea funcției și produsul real se află infrastructuri, componente, modele economice și multe contribuții. Interviul conține și alte proiecții, inclusiv despre transport și transmiterea energiei; fragmentul reușit nu le validează automat pe toate. Chiar prezentarea contemporană a lui Tesla este admirativă. Acest document nu susține povestea unui om pe care nimeni nu îl lua în serios.</p>

      <h3 id="vannevar-bush-legaturile-dintre-informatii">Vannevar Bush: legăturile dintre informații</h3>

      <p>În <em>As We May Think</em>, din iulie 1945, Bush descria „memex”, un dispozitiv personal pentru stocarea și consultarea cărților, documentelor și comunicărilor. Miza era și construirea unor trasee asociative între informații, care puteau fi regăsite și împărtășite.<sup><a href="#fn-11">11</a></sup></p>

      <p>Vedem o înrudire conceptuală cu navigarea prin legături și cu instrumentele de organizare a cunoașterii. Dar dispozitivul imaginat folosea microfilm și mecanisme specifice epocii. A spune că Bush a descris exact internetul ar șterge această diferență. Introducerea editorială îl prezenta deja ca director al Office of Scientific Research and Development, biroul care coordona cercetarea științifică americană în timpul războiului. Nici aici nu avem temei să adăugăm automat o poveste de marginalizare.</p>

      <h3 id="arthur-c-clarke-munca-de-oriunde-si-extrapolarea-ei">Arthur C. Clarke: munca de oriunde și extrapolarea ei</h3>

      <p>În emisiunea BBC <em>Horizon</em> din septembrie 1964, Clarke vorbea despre comunicarea globală și despre posibilitatea ca un om să își desfășoare afacerile din Tahiti sau Bali la fel de bine ca din Londra. El lega această posibilitate și de o schimbare profundă a rolului tradițional al orașului.<sup><a href="#fn-12">12</a></sup></p>

      <p>Prima direcție seamănă cu posibilități devenite familiare. Extinderea ei către o lume care nu mai are nevoie de oraș în forma lui tradițională nu descrie lumea în care trăim. O funcție tehnică poate fi anticipată bine, în timp ce consecința socială este exagerată. Meritul intuiției rămâne, dar trebuie evaluat pe afirmații distincte, cu formulările condiționale păstrate.</p>

      <h2 id="au-fost-toti-vizionarii-ridiculizati">Au fost toți vizionarii ridiculizați?</h2>

      <p><strong>Nu. Unele idei au fost ironizate public; altele au circulat în medii prestigioase, au primit sprijin sau au fost întâmpinate cu reacții mixte.</strong></p>

      <p>Povestea geniului singur, înconjurat de oameni care râd, este ușor de reținut. Are un conflict, o nedreptate și o reparație finală. Istoria reală poate conține aceste elemente, dar conține și colaboratori, finanțatori, critici competenți și obiecții care au ajutat ideea să devină mai solidă.</p>

      <h3 id="goddard-un-caz-documentat-de-ridiculizare">Goddard: un caz documentat de ridiculizare</h3>

      <p>La 13 ianuarie 1920, <em>The New York Times</em> a ironizat ideile lui Robert Goddard, invocând greșit imposibilitatea funcționării unei rachete în vid și punând la îndoială cunoștințele sale elementare de fizică.<sup><a href="#fn-13">13</a></sup> La 17 iulie 1969, în timpul misiunii Apollo 11, ziarul a publicat o corecție.<sup><a href="#fn-9">9</a></sup></p>

      <p>Aici, contrastul dintre disprețul inițial și recunoașterea ulterioară este documentat. Goddard a murit în 1945, înaintea corecției. Cazul arată cât de mult poate întârzia o reparație publică.</p>

      <p>Dar nu era complet lipsit de sprijin. Smithsonian îi acordase finanțare în 1917 și i-a publicat cercetarea în 1919.<sup><a href="#fn-13">13</a></sup> Formularea corectă este că a întâmpinat ridiculizare și subestimare, în timp ce alții i-au recunoscut valoarea. Această diferență păstrează în poveste și oamenii care au făcut cercetarea posibilă.</p>

      <h3 id="negroponte-si-stoll-optimismul-si-scepticismul-in-aceeasi-pagina">Negroponte și Stoll: optimismul și scepticismul, în aceeași pagină</h3>

      <p>Un alt exemplu de reacție contemporană se găsește în articolul lui Clifford Stoll din <em>Newsweek</em>, din 27 februarie 1995. Stoll privea ironic predicția lui Nicholas Negroponte că vom cumpăra cărți și ziare prin internet și era foarte sceptic față de promisiunile comerțului online.<sup><a href="#fn-14">14</a></sup></p>

      <p>Citind astăzi, vedem cât de mult a subestimat acea direcție. Totuși, textul său ridica și problema informației nefiltrate, a accesului dificil la informația relevantă și a calității contactului uman. Aceste obiecții pot fi discutate separat de prognoza comercială greșită.</p>

      <p>Același document poate conține o anticipare respinsă prea ușor și o îngrijorare care merită păstrată. Dacă îl folosim numai ca să râdem de autor, riscăm să repetăm forma de judecată pe care o criticăm.</p>

      <h3 id="cand-obiectia-are-o-baza-reala">Când obiecția are o bază reală</h3>

      <p>Cazul lui Alfred Wegener arată o altă nuanță. Ideea deplasării continentelor, formulată de el în 1912, a întâmpinat rezistență. O problemă importantă era lipsa unui mecanism satisfăcător pentru mișcarea unor mase atât de mari, limită pe care manualele de geologie o descriu explicit.<sup><a href="#fn-15">15</a></sup></p>

      <p>Confirmarea ulterioară a mobilității continentelor, în cadrul tectonicii plăcilor, nu înseamnă că fiecare explicație inițială era corectă sau că orice critică fusese lipsită de sens. În plus, vorbim aici despre o ipoteză privind funcționarea Pământului, nu despre o predicție comercială. Comparația este utilă pentru felul în care judecăm ideile, fără să confundăm tipurile de afirmații.</p>

      <p>Faptul că o idee este respinsă nu dovedește nici că este falsă, nici că este genială. Pentru ambele concluzii avem nevoie de altceva decât de reacția publicului.</p>

      <h2 id="de-ce-ni-se-pare-evident-trecutul">De ce ni se pare evident trecutul?</h2>

      <p><strong>Cunoașterea rezultatului schimbă felul în care evaluăm indiciile care îl precedau și poate mări impresia că am fi putut să îl anticipăm.</strong></p>

      <p>În cercetarea publicată în 1975, Baruch Fischhoff a arătat că aflarea unui rezultat îi putea face pe participanți să îl considere retrospectiv mai probabil și să supraestimeze ce ar fi știut fără acea informație. Acest efect este cunoscut ca <em>hindsight bias</em>, sau distorsiune retrospectivă.<sup><a href="#fn-16">16</a></sup></p>

      <p>După ce cunoaștem deznodământul, semnalele care duc spre el capătă importanță, iar alternativele pot părea mai puțin plauzibile decât păreau atunci. De aici vine o parte din ușurința cu care spunem „era clar” despre un trecut pe care nu l-am trăit cu informațiile de atunci.</p>

      <p>Se adaugă o selecție pe care o facem când povestim istoria. Dintr-un număr mare de proiecții, le alegem pe cele care seamănă cu prezentul. O frază despre comunicarea globală ajunge pe o imagine distribuită de mii de ori; paginile vecine, cu alte termene sau alte idei, pot rămâne necitite.</p>

      <p>O anticipare reușită merită recunoscută. Ca să evaluăm însă capacitatea unui autor de a prezice, ar trebui să vedem și restul afirmațiilor, precizia lor, termenele și rata de confirmare. Altfel, admirăm un fragment și îl confundăm cu o competență fără limite.</p>

      <p>Același lucru se întâmplă cu scenariile. Au existat multe imagini ale viitorului, inclusiv unele surprinzător de apropiate de experiența noastră. Existența unui scenariu nu înseamnă însă că el era demonstrat, probabil sau suficient de precis pentru a putea ghida o decizie costisitoare.</p>

      <p>Cu cât o formulare este mai largă, cu atât mai multe realități viitoare pot încăpea în ea. „Oamenii vor comunica altfel” cere mai puțină precizie decât descrierea unui aparat, a modului său de utilizare și a perioadei în care va deveni accesibil. Nu este corect să le evaluăm ca pe aceeași performanță.</p>

      <p>Mai există și diferența dintre admirația fără risc și susținerea unei idei neconfirmate. Este ușor să îi ridici astăzi un monument cuiva ale cărui contribuții sunt demonstrate. La momentul propunerii, cei din jur trebuiau să decidă cât timp, ce resurse și câtă reputație pot investi într-o posibilitate.</p>

      <p>Aceasta nu scuză ridiculizarea. Ne ajută însă să înțelegem de ce respectul acordat după confirmare poate fi mult mai larg decât încrederea acordată înaintea ei. Posteritatea poate repara reputația unui om fără să îi mai poată restitui timpul în care ar fi avut nevoie de sprijin.</p>

      <h2 id="putem-prezice-astazi-mai-bine-ce-urmeaza">Putem prezice astăzi mai bine ce urmează?</h2>

      <p><strong>În anumite probleme, da: putem avea date mai bune și metode mai bune. Acuratețea trebuie însă demonstrată pentru o întrebare și un interval, nu dedusă din cantitatea de tehnologie disponibilă.</strong></p>

      <p>Avem acces la cercetări, produse în dezvoltare, serii de date, simulări și instrumente de analiză pe care oamenii din anii ’80 nu le aveau la îndemână în aceeași formă. Putem observa mai multe semnale și putem construi mai multe variante ale unei explicații.</p>

      <p>Dar mai multe informații nu garantează că am ales semnalele relevante. Mai multe scenarii nu ne spun singure care se va realiza. Iar un text foarte coerent despre viitor poate ascunde presupuneri fragile la fel de bine cum le poate clarifica.</p>

      <p>Există dovezi că procesul de prognoză poate fi îmbunătățit. Într-un studiu din 2014 despre un turneu de prognoză geopolitică, Barbara Mellers și colegii săi au găsit beneficii ale instruirii probabilistice, colaborării și identificării participanților cu performanțe bune. Rezultatele priveau prognoze evaluate după criterii explicite.<sup><a href="#fn-17">17</a></sup></p>

      <p>Aceasta susține ideea că putem prognoza mai disciplinat. Nu dovedește că un model AI sau un expert poate descrie exact următoarele decenii. Precizia asupra unor evenimente delimitate și explicația completă a unei transformări sociale sunt sarcini diferite.</p>

      <p>Merită să separăm și limbajul pe care îl folosim:</p>

      <table>
        <thead><tr><th>Tipul afirmației</th><th>Ce încearcă să facă</th><th>Cum ar trebui judecată</th></tr></thead>
        <tbody>
          <tr><td>Viziune</td><td>Descrie o direcție sau o lume posibilă.</td><td>Prin valoarea ideii și coerența ei, fără a o trata automat drept prognoză exactă.</td></tr>
          <tr><td>Scenariu</td><td>Explorează ce s-ar putea întâmpla în anumite condiții.</td><td>Prin ipotezele declarate și utilitatea pentru pregătirea deciziilor.</td></tr>
          <tr><td>Prognoză</td><td>Estimează un rezultat, de preferat cu probabilitate și termen.</td><td>Prin comparația ulterioară cu ceea ce s-a întâmplat, pe un set suficient de cazuri.</td></tr>
          <tr><td>Plan</td><td>Stabilește ce vrem să facem.</td><td>Prin execuție și capacitatea de adaptare; intenția nu este dovadă că mediul va coopera.</td></tr>
        </tbody>
      </table>

      <p>O întrebare precum „Va schimba AI vânzarea?” lasă aproape orice rezultat să fie prezentat ca o confirmare. Una precum „În următoarele 12 luni, vor crește solicitările care menționează o recomandare AI, în condițiile unei colectări consecvente a acestei informații?” este mai restrânsă și mai ușor de verificat. Chiar și aici trebuie să definim ce măsurăm și ce limite are observarea.</p>

      <p>În plus, viitorul social se schimbă și prin reacțiile la prognoze. O predicție poate atrage investiții, poate grăbi o reglementare sau poate determina oamenii să evite un risc. Uneori, ceea ce anticipăm devine parte din cauza care schimbă rezultatul.</p>

      <p>Instrumentele actuale ne pot ajuta să lucrăm mai bine cu incertitudinea. Nu ne oferă poziția privilegiată din care privim astăzi fotografiile anului 1985.</p>

      <h2 id="cum-intampinam-urmatoarea-schimbare-fara-sa-cerem-o-garantie-imposibila">Cum întâmpinăm următoarea schimbare fără să cerem o garanție imposibilă?</h2>

      <p><strong>Prin curiozitate însoțită de criterii: încercăm, măsurăm, păstrăm opțiuni și ne schimbăm concluziile când dovezile o cer.</strong></p>

      <p>Istoria poate fi folosită pentru a ne vinde două certitudini la fel de comode. Prima spune că noul va transforma totul și trebuie acceptat imediat. A doua spune că promisiunile sunt exagerate și putem continua fără să cercetăm ce se schimbă.</p>

      <p>Nici una nu ne scutește de evaluarea concretă a lucrului pe care îl avem în față. Faptul că internetul s-a răspândit nu validează orice produs AI. Faptul că anumite predicții despre internet au fost exagerate nu justifică ignorarea unei capabilități care funcționează deja.</p>

      <p>Pentru o afacere, aș transforma această atitudine în câteva obiceiuri:</p>

      <ol>
        <li><strong>Formulează schimbarea pe care o observi.</strong> Ce face diferit clientul, nu doar ce promite furnizorul tehnologiei?</li>
        <li><strong>Separă observația de presupunere.</strong> Un client spune că a venit prin AI; aceasta este o observație. Afirmația că toți clienții vor veni astfel este o extrapolare.</li>
        <li><strong>Alege un experiment cu miză limitată.</strong> Testează o pagină, o sarcină sau un proces pe care îl poți corecta.</li>
        <li><strong>Definește criteriul înainte de rezultat.</strong> Decide ce ar însemna progres și ce ar justifica oprirea sau schimbarea abordării.</li>
        <li><strong>Notează ce ți-ar schimba părerea.</strong> O convingere care nu poate fi revizuită prin nicio dovadă este greu de evaluat.</li>
        <li><strong>Păstrează capacitatea de verificare.</strong> Înțelege suficient procesul încât să poți observa când instrumentul greșește.</li>
      </ol>

      <p>Acestea sunt propuneri de lucru, nu o metodă care garantează succesul. Valoarea lor este că te ajută să înveți înainte să transformi o presupunere într-un angajament greu de schimbat.</p>

      <p>În cazul traseului clientului, aplicarea este apropiată: poți clarifica serviciile, publica informații verificabile și observa cum ajung oamenii la ofertă. Aceste lucruri îi pot ajuta și pe cei care vin dintr-o recomandare personală, și pe cei care folosesc un motor de căutare, și pe cei care discută cu un asistent AI. Nu este necesar să prezici exact ce platformă va domina pentru a elimina o neclaritate pe care o vezi deja.</p>

      <p>Am dezvoltat această parte practică în <a href="/lab/articole/clientul-ajunge-pe-site-dupa-selectia-ai">„Când clientul ajunge pe site, alegerea a început deja”</a>, despre felul în care site-ul poate primi un om care și-a început informarea și comparația în altă parte.</p>

      <p>Poate că lecția cea mai grea a istoriei este să ne imaginăm prezentul nostru fără privilegiul de a-l cunoaște deja ca trecut. Într-o zi, cineva va privi instrumentele, reclamele, entuziasmul și rezervele noastre așa cum privim noi astăzi biroul din 1985. Va ști ce produse au rămas, ce firme au dispărut și care dintre frazele rostite cu siguranță s-au dovedit grăbite.</p>

      <p>Va putea alege câteva predicții reușite și va putea întreba de ce restul lumii nu le-a luat mai în serios. Nu va mai simți însă, cu aceeași intensitate, zgomotul celorlalte promisiuni, costul încercărilor și lipsa de informație din mijlocul cărora trebuia să alegem.</p>

      <p>Noi încă suntem în acel mijloc. Putem să îi ascultăm pe cei care văd altfel, să cerem argumente fără dispreț și să recunoaștem valoarea unei idei înainte să devină confortabil să o admirăm. Putem, în același timp, să refuzăm o promisiune care nu se susține.</p>

      <p>Nu știm încă ce parte din ziua de astăzi va părea evidentă mâine. Știm însă cum putem trata oamenii și ideile până atunci: cu suficientă deschidere pentru a învăța și cu suficientă rigoare pentru a nu confunda speranța cu dovada.</p>

      <h2 id="surse-si-metodologie">Surse și metodologie</h2>

      <p>Surse consultate și reverificate la 14 noiembrie 2026. Scena biroului din 1985 și întrebările din tabel sunt ilustrative. Datele de adopție se referă la populațiile și perioadele menționate; ele nu reprezintă estimări pentru România. Asemănările dintre operele istorice și prezent sunt interpretări delimitate în text. Nu este atribuită ridiculizare unei persoane numai fiindcă unele idei ale sale au fost confirmate mai târziu. Recomandările practice sunt sinteză editorială.</p>

      <ol class="avl-footnotes">
        <li id="fn-1">Robert K. Heinssen Jr., Carol R. Glass și Luanne A. Knight, <a href="https://doi.org/10.1016/0747-5632(87)90010-0" target="_blank" rel="noopener noreferrer">Assessing computer anxiety: Development and validation of the Computer Anxiety Rating Scale</a>, <em>Computers in Human Behavior</em>, 1987. Rezultatele privesc participanții studiați, nu o prevalență națională a anxietății.</li>
        <li id="fn-2">Pew Research Center, <a href="https://www.pewresearch.org/politics/1999/01/14/section-i-basic-patterns-of-internet-use/" target="_blank" rel="noopener noreferrer">Section I — Basic Patterns of Internet Use</a>, 14 ianuarie 1999. Procentul de 61% se referă la utilizatorii de internet care nu cumpăraseră online, nu la toți americanii.</li>
        <li id="fn-3">John B. Horrigan, Pew Research Center, <a href="https://www.pewresearch.org/internet/2008/09/12/use-of-cloud-computing-applications-and-services/" target="_blank" rel="noopener noreferrer">Use of Cloud Computing Applications and Services</a>, 12 septembrie 2008. Preocupările privesc scenarii de utilizare a datelor prezentate respondenților, nu dovada că toate platformele aplicau acele practici. Sondajul nu măsoară separat adopția CRM de către companii.</li>
        <li id="fn-4">Aaron Smith, Pew Research Center, <a href="https://www.pewresearch.org/internet/2012/11/30/part-ii-barriers-to-adoption/" target="_blank" rel="noopener noreferrer">Part II: Barriers to Adoption</a>, 30 noiembrie 2012. Baza procentelor citate: deținătorii americani de telefoane mobile care nu aveau smartphone.</li>
        <li id="fn-5">Amanda Lenhart, Pew Research Center, <a href="https://www.pewresearch.org/internet/2009/01/14/adults-and-social-network-websites/" target="_blank" rel="noopener noreferrer">Adults and Social Network Websites</a>, 14 ianuarie 2009. Folosirea setărilor de confidențialitate descrie o prudență în utilizare, nu refuzul platformei.</li>
        <li id="fn-6">Nicholas Bloom, James Liang, John Roberts și Zhichun Jenny Ying, <a href="https://www.nber.org/papers/w18871" target="_blank" rel="noopener noreferrer">Does Working from Home Work? Evidence from a Chinese Experiment</a>, NBER Working Paper 18871, martie 2013; publicat ulterior în <em>The Quarterly Journal of Economics</em>, 2015. Experiment de nouă luni cu angajați voluntari ai unui call-center CTrip din China, repartizați aleatoriu. Rezultatele nu reprezintă toate tipurile de muncă.</li>
        <li id="fn-7">Pew Research Center, <a href="https://www.pewresearch.org/short-reads/2026/08/18/young-adults-in-the-us-are-increasingly-wary-of-ai-concerned-it-will-take-jobs/" target="_blank" rel="noopener noreferrer">Young adults in the U.S. are increasingly wary of AI, concerned it will take jobs</a>, 18 august 2026; sondaj 22–28 iunie 2026. Procentul citat în articol privește toți adulții americani, nu numai tinerii și nu exclusiv AI folosit la cumpărături.</li>
        <li id="fn-8">E. M. Forster, <a href="https://en.wikisource.org/wiki/The_Machine_Stops" target="_blank" rel="noopener noreferrer">The Machine Stops</a>, publicată în <em>The Oxford and Cambridge Review</em>, noiembrie 1909; text integral pe Wikisource. Folosit ca sursă literară primară.</li>
        <li id="fn-9">NASA, <a href="https://www.nasa.gov/history/95-years-ago-goddards-first-liquid-fueled-rocket/" target="_blank" rel="noopener noreferrer">95 Years Ago: Goddard’s First Liquid-Fueled Rocket</a>, 17 martie 2021; editorialul din 13 ianuarie 1920, corecția din 17 iulie 1969 și moartea lui Goddard în 1945. Vezi și <a href="https://www.nasa.gov/history/Apollobib/ch6.html" target="_blank" rel="noopener noreferrer">Project Apollo: An Annotated Bibliography, Chapter 6</a>, care descrie documentul de presă contemporan.</li>
        <li id="fn-10">John B. Kennedy, <a href="https://teslauniverse.com/nikola-tesla/articles/when-woman-boss" target="_blank" rel="noopener noreferrer">When Woman Is Boss — interviu cu Nikola Tesla</a>, <em>Collier’s</em>, 30 ianuarie 1926, p. 17; transcriere arhivată de Tesla Universe. Este utilizat textul interviului, nu o colecție de citate fără proveniență.</li>
        <li id="fn-11">Vannevar Bush, <a href="https://faculty.georgetown.edu/jod/texts/vannevar.bush.html" target="_blank" rel="noopener noreferrer">As We May Think</a>, <em>The Atlantic Monthly</em>, iulie 1945; reproducere cu permisiune, găzduită de Georgetown University. Secțiunile despre memex și introducerea editorială susțin descrierea și contextul citate.</li>
        <li id="fn-12">BBC Archive, <a href="https://www.youtube.com/watch?v=YwELr8ir9qM" target="_blank" rel="noopener noreferrer">1964: Arthur C. Clarke predicts the future</a>, extras din <em>Horizon: The Knowledge Explosion</em>, difuzat inițial în septembrie 1964. Ideea privind viitorul orașelor este redată ca extrapolare, nu ca citat exact.</li>
        <li id="fn-13">NASA, <a href="https://www.nasa.gov/image-article/father-of-modern-rocketry-notion-of-liquid-fueled-rocket/" target="_blank" rel="noopener noreferrer">The Father of Modern Rocketry and the Notion of a Liquid-Fueled Rocket</a>, 2017. Documentează remarca editorialului din 1920 despre cunoștințele de liceu ale lui Goddard, grantul Smithsonian din 1917 și publicarea, în 1919, a lucrării <em>A Method of Reaching Extreme Altitudes</em>.</li>
        <li id="fn-14">Clifford Stoll, <a href="https://thenextweb.com/news/newsweek-1995-buy-books-newspapers-straight-intenet-uh" target="_blank" rel="noopener noreferrer">The Internet? Bah!</a>, <em>Newsweek</em>, ediția din 27 februarie 1995; text integral republicat de The Next Web în 2010. Sursă contemporană pentru reacția lui Stoll la predicția atribuită lui Nicholas Negroponte și pentru scepticismul privind comerțul online.</li>
        <li id="fn-15">U.S. Geological Survey, <a href="https://www.usgs.gov/educational-resources/wegeners-puzzling-continental-drift-evidence" target="_blank" rel="noopener noreferrer">Wegener’s Puzzling Continental Drift Evidence</a>, pentru termenul „continental drift” folosit de Wegener în 1912; Steven Earle, <em>Physical Geology</em>, BCcampus, <a href="https://opentextbc.ca/physicalgeologyh5p/chapter/alfred-wegener-the-father-of-plate-tectonics/" target="_blank" rel="noopener noreferrer">Alfred Wegener — the Father of Plate Tectonics</a>, pentru lipsa unui mecanism convingător al deplasării continentelor. Distincție între ipoteza inițială și dezvoltarea ulterioară a tectonicii plăcilor.</li>
        <li id="fn-16">Baruch Fischhoff, <a href="https://qualitysafety.bmj.com/content/12/4/304.short" target="_blank" rel="noopener noreferrer">Hindsight ≠ foresight: The effect of outcome knowledge on judgment under uncertainty</a>, studiu original din 1975, republicat cu permisiune în <em>Quality &amp; Safety in Health Care</em>, 2003. Este utilizat efectul experimental al cunoașterii deznodământului asupra judecății retrospective.</li>
        <li id="fn-17">Barbara Mellers și colaboratorii, <a href="https://doi.org/10.1177/0956797614524255" target="_blank" rel="noopener noreferrer">Psychological Strategies for Winning a Geopolitical Forecasting Tournament</a>, <em>Psychological Science</em>, 2014. Rezumatul este disponibil și în <a href="https://pubmed.ncbi.nlm.nih.gov/24659192/" target="_blank" rel="noopener noreferrer">PubMed</a>. Studiul susține îmbunătățirea unor prognoze evaluate, nu posibilitatea unei predicții certe a transformărilor tehnologice.</li>
      </ol>

      <h3 id="nota-de-volatilitate">Notă de volatilitate</h3>

      <p>Datele de sondaj citate descriu perioadele în care au fost colectate. Seria Pew despre atitudinea față de AI se actualizează periodic, iar linkurile către arhive și reproduceri ale textelor istorice se pot muta. Sursele au fost verificate la 14 noiembrie 2026.</p>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală și a surselor: 14 noiembrie 2026.</em></p>
`;
