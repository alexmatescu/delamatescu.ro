---
document_id: "AVL-205"
title: "Fișa entității"
subtitle: "Entity Sheet"
level: "C — Methodology"
version: "0.3.0"
status: "Draft pentru revizuire"
author: "Alex Matescu"
organization: "AI Visibility Lab"
language: "ro-RO"
date_created: "2026-11-03"
date_published: "2026-11-04T07:29:00+02:00"
date_modified: "2026-11-25"
last_reviewed: "2026-11-25"
canonical: "https://delamatescu.ro/lab/metodologie/fisa-entitatii"
normative_dependencies:
  - "AVL-001 — AI Visibility Lab Foundation"
  - "AVL-202 — Cadrul metodologic AI Visibility Lab"
  - "AVL-200 — Standardul de dovezi, măsurare și trasabilitate"
  - "AVL-201 — Tabula Rasa F0: Baseline Measurement Specification (§6.4, §7, §10.1; v1.6.0)"
informative_dependencies:
  - "AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility"
  - "AVL-204 — Grila de interpretare a verificării tehnice"
  - "AVL-MKT-001 — Market Scope & Eligibility Protocol"
  - "AVL-102 — Cum aleg sistemele AI sursele și citările"
  - "AVL-103 — SEO și GEO"
  - "AVL-104 — Cum se măsoară AI Visibility"
keywords:
  - "fișa entității"
  - "entitate"
  - "formă canonică"
  - "harta coliziunilor"
  - "politica crawlere"
  - "baseline T0"
  - "AVL-205"
---

# AVL-205 — Fișa entității

## Entity Sheet

> **Principiu:** o entitate nu poate fi măsurată corect dacă nu știm exact cine este. Fișa fixează, înaintea măsurării, ce declară entitatea despre ea și din ce surse oficiale, ca rezultatele să poată fi comparate cu o referință, nu cu o impresie.

---

## Controlul documentului

AVL-205 este un document de nivel C — Methodology în corpusul AI Visibility Lab Documentation. Descrie fișa entității: documentul de identitate al entității evaluate, redactat de operator din informațiile date de client și confirmat de client înaintea baseline-ului `T0`. Explică fiecare câmp: ce înseamnă, cum se completează și cine dă informația.

Conținutul minim al fișei este stabilit de [AVL-201 §7](/lab/metodologie/tabula-rasa-f0): forma canonică, variante, rol, locație, domeniu, URL-uri oficiale, atribute verificabile, politica crawlere. AVL-205 nu schimbă acest minim. Îl detaliază și adaugă câmpurile care fac fișa folosibilă în lucrul cu clientul. Dacă AVL-205 și AVL-201 diferă, prevalează AVL-201. Pentru politica crawlere (§15 și „Anexa — Politici tehnice ale site-ului”), prevalează [AVL-204 §3.1](/lab/metodologie/grila-interpretare-verificare-tehnica).

Din versiunea 1.6.0 (4 noiembrie 2026), AVL-201 trimite la AVL-205 din §7, unde definește fișa entității, și din §10.1, unde cere fișa completă. Tot de la această dată, [AVL-202](/lab/metodologie) (1.8.0) include AVL-205 în arhitectura metodologiei, în ordinea de lectură și în lista documentelor.

Versiunea curentă, **0.3.0**, este un **draft pentru revizuire** și nu este activă. Deciziile rămase deschise înainte de activare sunt enumerate în §25.

Identificatorul AVL-205 a fost alocat la 4 noiembrie 2026 ca următorul număr liber din seria documentelor Nivelului C, după scanarea registrului de conținut, și confirmat de Alex Matescu.

| Câmp | Valoare |
| --- | --- |
| Document ID | AVL-205 |
| Nivel | C — Methodology |
| Versiune | 0.3.0 |
| Statut | Draft pentru revizuire |
| Autor | Alex Matescu |
| Organizație | AI Visibility Lab |
| Data creării | 3 noiembrie 2026 |
| Data publicării | 4 noiembrie 2026 |
| Ultima actualizare | 25 noiembrie 2026 |
| Ultima verificare | 25 noiembrie 2026 |
| Limbă | română |
| URL canonic | https://delamatescu.ro/lab/metodologie/fisa-entitatii |
| Dependențe normative | AVL-001; AVL-202; AVL-200; AVL-201 (§6.4, §7, §10.1; v1.6.0) |
| Dependențe informative | AVL-203; AVL-204; AVL-MKT-001; AVL-102; AVL-103; AVL-104 |

AVL-205 nu introduce cerințe proprii în această versiune. Termenii **TREBUIE**, **NU TREBUIE** și **AR TREBUI** apar numai în cerințele citate din alte documente (`F0-REQ-*`, `AVL200-REQ-*`, `AVL203-REQ-*`, `AVL204-REQ-*`), cu sensul convențiilor RFC 2119 și RFC 8174 declarat acolo.

---

## 1. Ce este fișa entității?

**Fișa entității este documentul de identitate al entității evaluate: cine este, cum se numește, ce face, unde activează, ce surse controlează, cu cine poate fi confundată și, în anexa de politici tehnice, ce acces vrea pentru crawlere. Se confirmă cu clientul și nu conține nimic din măsurare.**

Entitatea poate fi o persoană, o companie, o organizație, o instituție, o marcă, un produs, un serviciu, un proiect, o publicație sau un site (AVL-201 §3). Operatorul care aplică metoda redactează fișa din informațiile date de client (sau de reprezentantul lui), iar clientul o confirmă înainte de baseline-ul `T0`. `T0` se pregătește și se documentează separat, după confirmarea fișei. Ce ține de etape ulterioare stă în anexele fișei sau în registre proprii.

Fișa are trei roluri:

1. **referința măsurării** — în `T0`, informațiile din fișă se verifică în mediile digitale: site, profiluri, directoare, registre, publicații, Search și răspunsurile AI. Rezultatele verificării se înregistrează în documentele măsurării, nu în fișă. Fără fișă nu se poate decide dacă un răspuns descrie entitatea corectă (AVL-201 §10.1);
2. **condiția verificării tehnice** — o rulare AVL-203 privește numai entități pentru care există o fișă completată de reprezentant (AVL203-REQ-043, AVL204-REQ-015);
3. **baza intervențiilor de după `T0`** — relațiile dintre profiluri, articole, știri și alte surse, definite sau actualizate în etapa sursei canonice și în etapa prezenței distribuite ([AVL-200 §7.1](/lab/metodologie/standard-dovezi-masurare-trasabilitate)). Informațiile pentru website-ul entității, numai pentru clienții care aleg acest serviciu, se predau în anexa de predare a website-ului (§18).

Nimic din fișă nu se publică fără aprobarea clientului, înregistrată în registrul aprobărilor de publicare (§19).

---

## 2. Ce nu este fișa entității?

**Fișa descrie entitatea. Nu este setul de interogări, nu este planul de măsurare și nu este raportul.**

- **Nu este setul de interogări.** Clientul spune pentru ce întrebări vrea să apară (§16), dar setul se construiește de laborator înainte de examinarea rezultatelor și se îngheață la `T0` (AVL-201 §10.2).
- **Nu este planul de măsurare.** Țara, limba, motoarele, fereastra de măsurare, planul de dovezi și declarația de îngheț sunt intrări separate ale `T0` (AVL-201 §7). Fișa poate propune piața și motoarele, planul le fixează. Angajamentele pentru durata `T0` țin de planul de măsurare (§17).
- **Nu este un rezultat și nu conține măsurarea.** Starea informațiilor în surse la `T0` și dovezile ei se înregistrează în documentele măsurării `T0` (§4), nu în fișă.
- **Nu este fișa furnizorului din Market Measurement.** Entitățile identificate într-o instanță de piață se descriu prin fișa furnizorului ([AVL-MKT-001 §10](/lab/metodologie/protocol-delimitare-piata-eligibilitate)), completată de laborator din surse publice, fără participarea entității.
- **Nu se completează pentru concurenții unei entități evaluate.** Aceștia pot apărea în harta coliziunilor (§13) sau în sursele citate, dar nu primesc fișă proprie (AVL-203 §1).

---

## 3. Cum se completează fișa?

**Fiecare câmp are o definiție, un exemplu și un marcaj care spune cine dă informația. Câmpurile cerute de AVL-201 §7 sunt marcate [min].**

Secțiunile §1–§4 explică fișa și nu au câmpuri. Formularul începe la §5, cuprinde §5–§21 și se încheie cu secțiunea „Note”, fără număr. Îi urmează „Anexa — Politici tehnice ale site-ului”, care face parte din fișă, și, numai în serviciul de website, „Anexa de predare a website-ului”. §15, §15.1, §17, §18 și §19 au rămas în formular doar ca titluri care trimit la anexa sau la documentul în care au fost mutate. Numerotarea nu s-a schimbat, ca trimiterile existente (de exemplu „§12”, „§20”) să rămână valabile.

### Cine dă informația

Marcajul arată cine dă informația, nu cine poate edita fișa. Forma de afișare în fișă este „Informația o dă: clientul / împreună / operatorul”.

| Marcaj | Informația o dă |
| --- | --- |
| **C** | clientul: clientul sau reprezentantul entității |
| **Î** | împreună: clientul declară, operatorul formulează și verifică formularea, nu adevărul declarației |
| **L** | operatorul: operatorul care aplică metoda, după verificare; în seriile AI Visibility Lab, Alex Matescu, iar în aplicarea Ichnometria se afișează „Ichnometria” |

**Cine redactează și cine confirmă.** Operatorul redactează fișa, inclusiv câmpurile marcate C, din informațiile date de client. Clientul confirmă fișa integral sau contestă câmpurile cu care nu e de acord (§20).

### Conținutul minim

Câmpurile marcate **[min]** acoperă conținutul minim din AVL-201 §7: forma canonică (§7), variantele (§7.1), rolul (§8), locația (§9), domeniul (§8), URL-urile oficiale (§11.1), atributele verificabile (§10) și politica crawlere (§15, completată în „Anexa — Politici tehnice ale site-ului”). **Domeniul** înseamnă domeniul de activitate al serviciilor entității, nu domeniul web; site-ul intră la URL-urile oficiale. AVL-201 folosește din versiunea 1.6.0 formularea „domeniul de activitate”.

Fișa cuprinde și **harta coliziunilor** (§13) și **lista activelor oficiale** (§11). AVL-201 §7 le tratează ca intrări distincte, dar §8 le livrează împreună cu fișa, iar §6.4 cere subiectului să declare activele controlate. În AVL-205 sunt păstrate în același document.

Anexa de politici tehnice face parte din fișă: se completează împreună cu clientul la revizuire și se confirmă odată cu fișa, înainte de `T0`. Astfel, politica crawlere rămâne în fișă, cum cer AVL-201 §7 și AVL204-REQ-017.

### Fluxul fișei

1. **Chestionarul clientului** (Documentul A) se trimite clientului, care îl completează.
2. **Importul în fișă:** răspunsurile din chestionar devin valorile câmpurilor.
3. **Verificarea preliminară** a operatorului (mai jos).
4. **„Trimite clientului spre revizuire”:** fișa, cu câmpurile [min] completate, ajunge la client. La revizuire se lămuresc clarificările și se completează împreună anexa de politici tehnice.
5. **Confirmarea:** clientul confirmă fișa integral sau cu contestații (§20).

După confirmare, `T0` se pregătește separat, iar planul de măsurare preia versiunea confirmată a fișei.

### Fișa minimă

O fișă se trimite clientului spre revizuire numai cu toate câmpurile [min] completate. Excepția este permisă numai cu un motiv obligatoriu, înregistrat împreună cu lista câmpurilor [min] care lipseau. Pentru politica crawlere, la trimitere este suficient răspunsul din chestionar la întrebarea despre restricțiile pentru roboți; detaliile se completează la revizuire, în anexa de politici tehnice.

### Verificarea preliminară

**După importul chestionarului și înainte de revizuirea cu clientul, operatorul verifică informațiile, fără proces de dovezi și fără valoare de măsurare.** Scopul este să confirme informațiile și să pregătească clarificările pentru revizuire.

- Valorile completate atunci primesc proveniența „verificare preliminară”, distinctă de „măsurare”.
- La verificarea preliminară se completează §13 („Coliziuni identificate în verificări”) și coloanele operatorului din §14.
- O valoare din verificarea preliminară nu este o observație a măsurării: nu are Evidence ID, nu primește o stare din §4 și nu se raportează ca rezultat. Măsurarea documentată rămâne la `T0`, unde fiecare observație materială se leagă de dovada ei (AVL200-REQ-019).

### Ce se notează la fiecare informație

| Coloană | Ce înseamnă |
| --- | --- |
| Valoare | informația dată de client sau formulată împreună |
| Sursa | pagina, documentul sau registrul care susține informația, notate pe rândul ei; dacă nu există, „declarația reprezentantului, [data]”. Niciun tabel nu are o sursă comună pentru toate rândurile. |
| Proveniența | de unde vine valoarea: chestionarul clientului, revizuirea cu clientul sau verificarea preliminară. Nicio valoare din fișă nu are proveniența „măsurare”. |

Starea informației în surse la `T0` și Evidence ID-ul ei nu se notează în fișă. Se înregistrează în documentele măsurării `T0` (§4).

### Chestionarul clientului

Informațiile clientului intră în fișă prin chestionarul clientului (Documentul A). Versiunea 3 a chestionarului:

- **Accesul roboților:** o singură întrebare obligatorie, „Aveți restricții pentru roboți sau pagini ascunse intenționat? Da / Nu / Nu știu”. Ea înlocuiește cele trei întrebări anterioare: preferința generală, ce e blocat și de ce, paginile excluse. Detaliile se lămuresc la revizuire, în anexa de politici tehnice.
- **Înghețul:** cele patru întrebări despre înghețul pe durata `T0` ies din chestionar și trec în pregătirea `T0` (§17): nu modific nimic pe durata măsurării inițiale; până la ce dată; anunț schimbările neplanificate; forma înghețului între măsurări.
- **Schimbările programate:** întrebarea „Schimbări deja programate, care nu pot fi amânate” rămâne, în secțiunea „Schimbări planificate”.
- **Versiunea aplicată:** un chestionar început pe versiunea anterioară rămâne pe ea; versiunea 3 se aplică chestionarelor create după publicarea ei.

### Ce își asumă reprezentantul

**Ce declară reprezentantul în fișă este asumat de el și considerat corect.** Laboratorul nu verifică veridicitatea declarațiilor, de exemplu angajatorul, studiile sau certificările: verificarea lor nu face parte din măsurare. Operatorul verifică formularea, adică dacă informația e clară, completă și scrisă la fel în toată fișa, nu adevărul ei.

Fișa rămâne referința măsurării. Când o sursă publică afirmă altceva decât fișa, starea înregistrată la măsurare descrie sursa (§4), nu entitatea. Excepția este entitatea ambiguă sau suspectă (§4.1).

### Ce nu se trece în fișă

Parolele, token-urile, cheile API, cookie-urile și alte secrete de acces nu se trec niciodată în fișă (AVL-200 §18.3, AVL200-REQ-028). Un acces autorizat, de exemplu la Search Console sau la logurile serverului, se notează doar ca existent, cu canalul prin care a fost acordat (§11.4).

---

## 4. Cum se verifică reprezentarea fișei în surse?

**Pentru fiecare informație din fișă, verificarea `T0` notează ce afirmă sursele publice despre ea, cu sursa și data verificării. Se verifică reprezentarea informației în surse, nu adevărul ei (§3, „Ce își asumă reprezentantul”).**

Capitolul arată la ce servește fișa în măsurare. Stările de mai jos nu sunt câmpuri ale fișei: se înregistrează în documentele măsurării `T0`, cu Evidence ID-ul fiecărei observații ([AVL-200 §11](/lab/metodologie/standard-dovezi-masurare-trasabilitate)). Verificarea preliminară (§3) nu folosește aceste stări.

Stările preiau categoriile din AVL-201 §10.6 („atribute corecte, lipsă, vechi sau false”) și semantica valorilor necunoscute din AVL-200 §6.

| Stare | Sens |
| --- | --- |
| `CORECT` | sursa publică verificată afirmă aceeași informație ca fișa |
| `VECHI` | sursa afirmă o informație care a fost corectă, dar nu mai este actuală |
| `FALS` | sursa afirmă altceva decât fișa sau atribuie informația altei entități |
| `LIPSĂ` | informația a fost căutată în sursele declarate și nu apare |
| `UNKNOWN` | informația a fost căutată, dar nu se poate stabili ce afirmă sursa (de exemplu, pagina nu se încarcă sau sursa e ambiguă) |
| `NEVERIFICAT` | informația nu a fost încă verificată |

`LIPSĂ` descrie sursa, nu entitatea: faptul că o informație nu apare online nu o face falsă (AVL-200 §6, AVL200-REQ-010). Starea se notează pe sursă: aceeași informație poate fi `CORECT` pe site și `VECHI` pe un profil.

**La punctele următoare (`F1` … `Fn`), verificarea se repetă pe aceleași surse și cu aceleași stări, față de fișa valabilă la acel punct.** Schimbările de stare dintre puncte se notează pe sursă, cu Evidence ID-ul fiecărui punct, în documentele fiecărui punct de măsurare. Pentru o fișă completată retroactiv (§17.1), prima verificare pe surse se face la primul punct de măsurare de după completare și devine referința stărilor pentru punctele următoare; starea de la `T0` nu se reconstituie. Documentele acelui punct notează punctul verificării (de exemplu, `F4`).

### 4.1. Entitate ambiguă sau suspectă

**AI Visibility Lab nu lucrează cu entități a căror asociere poate afecta imaginea laboratorului sau a lui Alex Matescu.** O entitate este considerată ambiguă sau suspectă (cele două denumiri formează un singur statut) când, în mediul digital, apare cel puțin una dintre situațiile următoare:

1. mai multe surse independente contrazic sistematic fișa;
2. apar dovezi care pun la îndoială entitatea (persoana sau organizația) ori serviciul ei;
3. entității îi sunt aduse public acuzații.

Statutul poate apărea la completarea fișei, la verificarea preliminară, în `T0` sau în orice etapă ulterioară. Când este constatat:

- colaborarea se închide;
- faptul se documentează intern, cu sursele și dovezile care l-au motivat ([AVL-200 §11](/lab/metodologie/standard-dovezi-masurare-trasabilitate)); documentarea nu se publică (AVL-001 §21);
- clientului i se comunică închiderea colaborării și statutul „entitate ambiguă sau suspectă”.

Diferențele obișnuite dintre fișă și surse, de exemplu o informație veche pe un profil, un atribut lipsă sau o coliziune de nume (§13), nu fac o entitate ambiguă sau suspectă. Ele sunt chiar obiectul măsurării.

---

## 5. Identificarea fișei

**Cine este entitatea în raport cu laboratorul, cine o reprezintă și ce serviciu a cerut.**

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Informația o dă |
| --- | --- | --- | --- |
| ID fișă | identificatorul documentului, cu versiunea | `FE-exemplu-srl-v1` | L |
| Versiunea fișei | crește la fiecare modificare a unei informații (§21) | `1`, `2` | L |
| ID entitate | identificator scurt, stabil, fără diacritice, folosit în plan, dovezi și rapoarte | `exemplu-srl`, `delamatescu-ro` | L |
| Relația cu laboratorul | proiect, client sau laborator (site propriu); o rulare AVL-203 se face numai pentru aceste relații (AVL203-REQ-043) | client | Î |
| Reprezentantul entității | persoana care declară informațiile și politica crawlere în numele entității, cu calitatea ei | Ion Popescu, administrator | C |
| Data completării | ziua în care reprezentantul confirmă versiunea curentă (§20) | 4 noiembrie 2026 | Î |
| Responsabilul de metodologie | aprobă fișa și confirmă forma canonică și domeniul de activitate (AVL-201 §6.1), înainte de trimiterea spre revizuire | Alex Matescu | L |
| Operatorul de măsurare | cine execută verificările (AVL-201 §6.2) | Alex Matescu | L |
| Conflict de interese | relația comercială, de control sau de participare cu entitatea; se declară dacă rezultatele se publică ([AVL-001 §21](/lab/introducere), AVL-202 „Independență și conflict de interese”) | „Site-ul propriu al laboratorului” | L |
| Serviciul contractat | ce s-a cerut: audit, etapa sursei canonice, etapa prezenței distribuite, website sau alt serviciu | audit AI Visibility | Î |

---

## 6. Tipul entității

**Ce fel de entitate este măsurată. Tipul decide ce pagini și ce surse sunt relevante.**

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Informația o dă |
| --- | --- | --- | --- |
| Tipul de entitate | categoria din AVL-201 §3: persoană, companie, organizație, instituție, marcă, produs, serviciu, proiect, publicație, site | persoană | Î |
| Tipul pentru verificarea tehnică | categoria din AVL-203 §1.1 și AVL-204 §11: organizație cu servicii, magazin online, afacere locală, profesionist independent sau alt tip, cu motiv | profesionist independent | L |
| Entități legate care se tratează separat | persoana și firma ei, o marcă și compania care o deține sunt entități distincte; fiecare primește fișa ei sau se trece ca relație în §12 | persoana X și firma X SRL | Î |

Un profesionist independent care lucrează sub numele propriu și are un site propriu primește o singură fișă, a persoanei. Site-ul se trece ca activ oficial (§11.1), nu ca entitate separată, iar ID-ul entității poate fi format din domeniul site-ului, ca în seria AVL-203 (exemplu: `delamatescu-ro` pentru Alex Matescu și delamatescu.ro).

---

## 7. Forma canonică și variantele [min]

**Forma canonică este numele și identificarea oficială stabilite pentru entitate și folosite ca referință în analiză (AVL-201 §5).** Trebuie să fie destul de precisă încât un revizor să poată decide dacă un răspuns se referă la entitatea corectă (AVL-201 §10.1). E bine să fie folosită identic pe site, în profiluri și în datele structurate ([„Ce este o entitate pentru AI”](/lab/articole/ce-este-entitate-ai-studiu-de-caz)).

Forma canonică nu este același lucru cu sursa canonică. Forma canonică este numele de referință, iar sursa canonică este ansamblul surselor controlate de entitate (AVL-200 §7.1; aici §11).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Informația o dă |
| --- | --- | --- | --- |
| Forma canonică a numelui [min] | numele principal, scris exact cum îl folosește entitatea public | „Alex Matescu” | Î |
| Denumirea legală, dacă diferă | numele din registrul comerțului sau din actele oficiale | „Exemplu Consulting SRL” pentru marca „Exemplu” | C |
| Scrierea cu și fără diacritice | forma folosită public; motoarele pot trata formele cu și fără diacritice ca echivalente sau ca diferite ([AVL-102](/lab/cercetare/cum-aleg-motoarele-ai)) | „Mătescu” nu este folosită; forma publică este „Matescu” | Î |

### 7.1. Variante legitime și aliasuri [min]

**Numele reale sub care entitatea apare legitim: numele complet, o prescurtare, o transliterare, un nume anterior, un nume de marcă.** Nu se trec grafii inventate pentru căutare. Variantele legitime pot deveni `alternateName` în datele structurate (§18).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Informația o dă |
| --- | --- | --- | --- |
| Variantă | numele alternativ, exact cum apare | „Alexandru Matescu” | C |
| Tipul variantei | nume complet, prescurtare, transliterare, nume anterior, nume de marcă | nume complet | Î |
| Unde este folosită | sursa în care apare varianta | acte oficiale, LinkedIn | C |

### 7.2. Forme greșite observate

**Grafiile greșite sau apropiate care pot produce confuzii, de exemplu o literă dublată sau o diacritică omisă.** Nu sunt forme ale entității. Se folosesc în interogările de dezambiguizare și în harta coliziunilor (§13). Coloanele operatorului se completează la verificarea preliminară (§3), cu proveniența „verificare preliminară”.

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Informația o dă |
| --- | --- | --- | --- |
| Formă greșită | grafia care nu aparține entității, dar o poate atrage în rezultate | „Alex Mateescu” | Î |
| Unde apare | sursa sau suprafața în care a fost observată | o căutare Google pe numele entității | L |
| Cu cine poate fi confundată | entitatea reală care poartă această formă, dacă există | o altă persoană cu acest nume, din alt oraș | L |

---

## 8. Rolul și activitatea [min]

**Ce face entitatea acum și cum vrea să fie descrisă.** O persoană sau o firmă poate avea mai multe roluri legitime. Când sursele le prezintă separat, fără legături între ele, unui sistem îi poate fi mai greu să stabilească faptul că descriu aceeași entitate ([„Ce este o entitate pentru AI”](/lab/articole/ce-este-entitate-ai-studiu-de-caz), fragmentarea).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Informația o dă |
| --- | --- | --- | --- |
| Descrierea principală | o propoziție: cine este și ce face entitatea acum | „Exemplu SRL oferă audit energetic pentru clădiri rezidențiale în Sibiu.” | Î |
| Rolul principal [min] | activitatea pe care entitatea vrea să o comunice acum | auditor energetic | C |
| Roluri secundare | experiența care explică traiectoria; nu se ascund roluri reale | proiectant instalații | C |
| Domeniul de activitate al serviciilor [min] | domeniul în care entitatea oferă servicii sau produse | eficiență energetică în construcții | C |
| Serviciile sau produsele principale | lista serviciilor, cu numărul lor; paginile lor intră în planul AVL-203 ca pagini de ofertă (AVL-203 §1.1) | audit energetic, certificat energetic | C |
| Pentru cine lucrează entitatea | tipul de clienți sau publicul | proprietari de locuințe, asociații de proprietari | C |
| Diferențiatori declarați | ce o deosebește de alți furnizori; numai afirmații pe care entitatea le poate susține cu dovezi, fără calificative ca „primul” sau „cel mai bun” (AVL-MKT-001 §17) | „auditori atestați, cu raport în 5 zile lucrătoare” | C |
| Roluri sau poziționări anterioare | informații corecte în trecut, care pot apărea în surse ca `VECHI` și pot concura cu descrierea actuală | fost angajat al firmei Y până în 2024 | C |

---

## 9. Locația și piața [min]

**Unde activează entitatea și cum poate fi contactată public.** Aceleași date, scrise la fel peste tot, reduc riscul ca reprezentarea entității să se bifurce (AVL-102, „Consecvența semnalelor”).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Informația o dă |
| --- | --- | --- | --- |
| Țara [min] | țara în care activează entitatea | România | C |
| Localitatea [min] | orașul sau localitatea de referință | Sibiu | C |
| Adresa publică | numai dacă entitatea o face publică; o persoană fizică poate declara doar localitatea | str. Exemplu nr. 1, Sibiu | C |
| Zona deservită | local, regional, național sau internațional | județul Sibiu și județele vecine | C |
| Limbile de comunicare | limbile în care entitatea oferă informații și servicii | română, engleză | C |
| Telefonul și e-mailul publice | datele de contact pe care entitatea le vrea publice, identice în toate sursele | contact@exemplu.ro | C |
| Programul, dacă se aplică | pentru afacerile locale (AVL-204 §11) | luni–vineri, 9–17 | C |

---

## 10. Atribute verificabile [min]

**Faptele de identitate care pot fi confirmate dintr-o sursă oficială (AVL-201 §10.1).** Ele sunt materialul cu care se compară descrierile produse de motoare: rol, locație, experiență, organizații asociate, cronologie (AVL-201 §10.6). Pentru fiecare atribut se notează și dacă poate fi publicat (da, nu sau de decis).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Informația o dă |
| --- | --- | --- | --- |
| Data înființării sau anul de început al activității | când a început entitatea să existe sau să activeze | 2018 | C |
| Forma juridică și datele de registru | forma juridică, codul fiscal (CUI), numărul de la registrul comerțului | SRL, CUI și număr ONRC | C |
| Fondatori, asociați, conducere | persoanele care conduc sau dețin entitatea, când sunt publice | administrator: Ion Popescu | C |
| Organizații asociate | angajator, parteneri, asociații profesionale | membru al unei asociații profesionale | C |
| Studii, certificări, autorizații | calificările care susțin rolul declarat | atestat de auditor energetic | C |
| Proiecte, publicații, cărți | lucrările atribuibile entității | o carte, un proiect public | C |
| Premii și apariții în presă | distincții și articole despre entitate | interviu într-o publicație locală | C |
| Cronologia principală | etapele importante, în ordine | 2018 înființare, 2022 extindere | Î |
| Identificatori publici | ORCID, Wikidata, ISNI sau ID-uri din registre profesionale; numai cei care aparțin sigur entității | un ID ORCID verificat | Î |

---

## 11. Activele oficiale [min]

**Sursele controlate direct de entitate și profilurile pe care le administrează.** Ele formează sursa canonică: site-ul oficial, paginile canonice, datele structurate și textele de identificare (AVL-200 §7.1). Clientul le declară (AVL-201 §6.4). Dacă fiecare există, ce afirmă și dacă trimite înapoi la sursa canonică se verifică la `T0` și se înregistrează în documentele măsurării (§4).

### 11.1. Site și pagini canonice [min]

**Adresele site-ului și paginile lui de referință.** Categoriile urmează planul de măsurare din AVL-203 §1.1.

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Informația o dă |
| --- | --- | --- | --- |
| Originea canonică (domeniul web) | adresa oficială a site-ului, cu varianta aleasă: cu sau fără `www`, cu `https` | `https://delamatescu.ro` | C |
| Pagina principală | prima pagină a site-ului | `https://exemplu.ro/` | C |
| Pagina canonică despre entitate | pagina „Despre” sau de profil, care explică cine este entitatea | `https://exemplu.ro/despre` | C |
| Pagina de contact sau de date de identitate | pagina care arată cine răspunde de site; obligatorie în planul AVL-203, iar dacă lipsește, absența se raportează (AVL203-REQ-042) | `https://exemplu.ro/contact` | C |
| Paginile principale de servicii sau produse | câte o pagină pentru fiecare serviciu principal din §8 | `https://exemplu.ro/audit-energetic` | C |
| Paginile de referință desemnate de entitate | hub-uri sau pagini-pilon pe care entitatea le consideră cele mai bune surse despre ea | un ghid publicat pe site | C |
| Subdomenii | alte adrese sub același domeniu | `blog.exemplu.ro` | C |
| Alte domenii deținute | inclusiv domenii vechi sau redirecționate | `exemplu-vechi.ro` | C |

### 11.2. Profiluri și conturi administrate de entitate

**Conturile pe care entitatea le controlează pe alte platforme.** Pentru fiecare se notează URL-ul, numele afișat, descrierea (bio), dacă trimite la site și cine îl administrează. Numele și descrierea ar trebui să fie coerente cu forma canonică (§7) și cu descrierea principală (§8).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Informația o dă |
| --- | --- | --- | --- |
| LinkedIn | profilul personal sau pagina companiei | `https://www.linkedin.com/in/…` | C |
| Facebook | pagina sau profilul public | `https://www.facebook.com/…` | C |
| Instagram | contul public | `https://www.instagram.com/…` | C |
| X | contul public | `https://x.com/…` | C |
| YouTube | canalul | `https://www.youtube.com/@…` | C |
| TikTok | contul public | `https://www.tiktok.com/@…` | C |
| Google Business Profile | profilul afacerii în Google, pentru entitățile cu locație | linkul profilului | C |
| Pagini de autor | paginile de autor din publicații sau platforme pe care entitatea le administrează | pagina de autor dintr-o revistă | C |
| Directoare și registre cu profil creat de entitate | profiluri pe care entitatea și le-a creat sau le întreține | un director profesional | C |
| Alte platforme | orice alt profil administrat de entitate | — | C |

Pentru fiecare profil se notează:

| Coloană | Ce înseamnă |
| --- | --- |
| URL | adresa exactă a profilului |
| Nume afișat | numele sub care apare profilul, exact cum e scris; de comparat cu forma canonică (§7) |
| Descrierea (bio) | textul de prezentare al profilului; de comparat cu descrierea principală (§8) |
| Trimite la site? | dacă profilul are link către site-ul entității |
| Cine îl administrează | entitatea, o agenție sau altă persoană |

### 11.3. Imagini oficiale

**Fotografia sau logo-ul pe care entitatea le folosește oficial, cu drepturile de utilizare.** Verificarea `T0` notează și imaginile afișate de motoare: o imagine greșită este o eroare de reprezentare chiar dacă textul este corect ([studiul Tabula Rasa](/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz), §11).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Informația o dă |
| --- | --- | --- | --- |
| Fotografia de profil sau logo-ul | imaginea oficială, ca URL sau fișier | `https://exemplu.ro/logo.svg` | C |
| Drepturile de utilizare | cine deține imaginea și unde poate fi folosită | fotografie proprie, utilizare liberă pe site și profiluri | C |

### 11.4. Acces autorizat pentru măsurare

**Instrumentele la care entitatea dă acces, ca observațiile externe să fie completate cu date interne.** Se notează doar dacă accesul a fost acordat și prin ce canal, niciodată parola.

Google Search Console și Bing Webmaster Tools sunt utile. Logurile serverului sau ale CDN-ului și Analytics sunt **opționale**: conțin date ale vizitatorilor site-ului clientului (adrese IP, identificatori), deci se folosesc numai după acordul de prelucrare a datelor dintre client și operator.

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Informația o dă |
| --- | --- | --- | --- |
| Google Search Console | datele de indexare și căutare ale site-ului în Google | da, invitație pe contul operatorului | C |
| Bing Webmaster Tools | datele site-ului în Bing | nu | C |
| Logurile serverului sau ale CDN-ului (opțional) | cererile primite de site, inclusiv de la crawlere; numai după acordul de prelucrare a datelor | da, export lunar, după semnarea acordului | C |
| Analytics (opțional) | traficul site-ului, inclusiv vizitele venite din sisteme AI; numai după acordul de prelucrare a datelor | nu | C |

---

## 12. Relații și ancore de dezambiguizare

**Legăturile dintre entitate și oameni, organizații, locuri și surse.** Relațiile arată că mai multe surse descriu aceeași entitate. Tot ele pot servi drept ancore de dezambiguizare: contexte precum orașul, compania sau domeniul web, după care un sistem găsește entitatea corectă ([studiul Tabula Rasa](/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz), §1).

Fiecare relație se scrie pe un rând, în forma subiect — relație — obiect, cu sursa care o confirmă. Subiectul este implicit entitatea fișei și se schimbă numai când relația aparține altcuiva, de exemplu fondatorului.

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Informația o dă |
| --- | --- | --- | --- |
| Subiect | implicit entitatea fișei; altă entitate numai când relația îi aparține | Exemplu SRL; Ion Popescu, pentru o relație a fondatorului | Î |
| Relație | legătura, formulată ca verb | are sediul în | Î |
| Obiect | persoana, organizația, locul, domeniul sau publicația | Sibiu | Î |
| Sursa | pagina sau registrul în care relația apare explicit, pe rândul relației | pagina „Despre” a firmei | Î |

Exemple de relații: are sediul în, locuiește în, lucrează la, este fondator al, deține domeniul, este autor al, este membru al.

Ancorele pe care clientul le cunoaște deja se trec într-un câmp separat:

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Informația o dă |
| --- | --- | --- | --- |
| Profiluri și pagini prin care vă recunosc deja motoarele de căutare (dacă le știți) | profilurile și paginile externe pe care clientul știe că motoarele le asociază deja cu entitatea | Google Business Profile, LinkedIn, Wikidata sau Wikipedia, ONRC, articole de presă | C |

---

## 13. Harta coliziunilor

**Entitățile cu nume identic sau asemănător, cu sursele lor dominante (AVL-201 §7).** Harta servește la interogările de dezambiguizare și la clasificarea `COLIZIUNE` (AVL-201 §13). Auditul de coliziune verifică cine altcineva „răspunde” la numele entității ([AVL-103](/lab/cercetare/seo-vs-geo)).

În formular, lista se numește „Coliziuni identificate în verificări”. O completează operatorul la verificarea preliminară (§3), cu proveniența „verificare preliminară”, iar clientul o confirmă la revizuire. Coliziunile observate la măsurare se documentează în documentele `T0`.

Despre alte persoane se notează numai informația publică necesară pentru a le distinge de entitate. Ele nu se publică fără anonimizare (AVL-001 §21).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Informația o dă |
| --- | --- | --- | --- |
| Entitatea concurentă | cine mai poartă numele sau un nume apropiat | o firmă cu nume asemănător | L |
| Numele sau forma | forma exactă sub care apare | „Exemplu Group SA” | L |
| Ce o distinge | rolul, localitatea sau organizația care o separă de entitatea din fișă | alt oraș, alt domeniu de activitate | L |
| Sursele ei dominante | sursele în care apare cel mai des | site propriu, un director de firme | L |
| Tipul coliziunii | omonim, nume apropiat, firmă cu nume similar sau termen generic | nume apropiat | L |
| Unde a fost observată | suprafața în care s-a produs confuzia | Google Search, ChatGPT | L |

---

## 14. Prezența distribuită

**Informațiile despre entitate din afara sursei canonice: publicații, știri, interviuri, directoare, registre și mențiuni, controlate sau independente (AVL-200 §7.1, AVL-201 §10.8).** În formular, câmpul se numește „Lista surselor externe”. Clientul declară ce cunoaște. Operatorul completează coloanele lui (marcate L) la verificarea preliminară (§3), cu proveniența „verificare preliminară”; starea fiecărei surse la `T0` se documentează în măsurare. Lista este baza matricei prezenței distribuite.

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Informația o dă |
| --- | --- | --- | --- |
| Sursa | publicația, directorul sau registrul | o publicație locală | Î |
| URL | adresa exactă a paginii | `https://…` | Î |
| Data | data publicării sau a ultimei actualizări | 12 martie 2025 | L |
| Controlată sau independentă | dacă entitatea poate modifica sursa | independentă | L |
| Ce afirmă despre entitate | informația relevantă, pe scurt | rolul și localitatea | L |
| Trimite la sursa canonică? | dacă sursa are link către site-ul entității | nu | L |
| Acțiunea propusă după `T0` | ce merită corectat, aliniat sau completat | cerere de actualizare a rolului | Î |

Acțiunea propusă se notează în fișă, dar nu se execută până la închiderea baseline-ului (AVL-201 §10.9, F0-REQ-001).

---

## 15. Politica crawlere [min]

**Mutată în [„Anexa — Politici tehnice ale site-ului”, la „Politica crawlere”](#anexa-politica-crawlere).** Politica rămâne în conținutul minim al fișei (AVL-201 §7): anexa face parte din fișă, se completează împreună cu clientul la revizuire și se confirmă odată cu fișa, înainte de `T0`.

### 15.1. Indexare și răspunsuri declarate intenționat

**Mutată în [„Anexa — Politici tehnice ale site-ului”, la „Indexare și răspunsuri declarate intenționat”](#anexa-indexare-si-raspunsuri-declarate-intentionat).**

---

## 16. Ce vrea entitatea să i se recunoască

**Ce întrebări contează pentru entitate și ce ar trebui să spună un răspuns corect despre ea.** Este informație de intrare pentru setul de interogări, nu setul însuși. Setul se construiește de laborator înainte de examinarea rezultatelor, pe intenții (identitate, rol, informație factuală, comparație, recomandare), și se îngheață la `T0` (AVL-201 §10.2, F0-REQ-008; [AVL-104](/lab/cercetare/cum-se-masoara-ai-visibility)).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Informația o dă |
| --- | --- | --- | --- |
| Întrebările pentru care vrea să apară | formulările pe care le folosesc clienții ei | „cine face audit energetic în Sibiu?” | C |
| Ce ar trebui să spună corect un răspuns | 3–5 fapte esențiale despre entitate | rolul, localitatea, serviciul principal | Î |
| Informații greșite sau vechi deja observate | ce a văzut entitatea până acum, cu exemplu și dată | un răspuns AI care o descrie cu rolul vechi | C |
| Recomandarea pentru care vrea să fie aleasă | rol + domeniu de activitate + zonă geografică | auditor energetic în județul Sibiu | C |
| Piața și limbile de măsurat | propunere pentru planul `T0` (AVL-201 §7, „Țara și limba”) | România, română și engleză | Î |
| Motoarele de interes | propunere; lista finală o stabilește laboratorul în planul `T0` | ChatGPT, Google AI Mode | Î |

---

## 17. Angajamente pentru durata `T0`

**Mutată în pregătirea `T0`, în planul de măsurare.** Angajamentele pentru durata `T0` nu fac parte din fișă. Planul de măsurare le fixează: înghețul pe durata `T0` (F0-REQ-001; „Declarația de îngheț”, intrare distinctă în AVL-201 §7), forma înghețului între punctele de măsurare și anunțarea schimbărilor neplanificate (F0-REQ-002). Schimbările deja programate, declarate în chestionar la „Schimbări planificate” (§3), se preiau în planul de măsurare.

### 17.1. Completarea retroactivă

**Când fișa se completează după un `T0` deja făcut, de exemplu pentru o serie începută înaintea AVL-205, ea devine referința punctelor următoare (`F1` … `Fn`).** Completarea retroactivă nu schimbă rezultatele `T0` și nici referința folosită atunci (AVL200-REQ-013). Fișa notează că a fost completată după `T0` și data completării. Prima verificare pe surse a unei fișe completate retroactiv se face la punctul următor (§4). Exemplu: fișa pentru delamatescu.ro și Alex Matescu (§25, deciziile 1 și 4), verificată pe surse la `F4` Tabula Rasa.

---

## 18. Informații pentru website (serviciu opțional)

**Mutată în [„Anexa de predare a website-ului”](#anexa-de-predare-a-website-ului).**

---

## 19. Revizuire și aprobare înainte de publicare

**Mutată în registrul aprobărilor de publicare.** Aprobarea formei exacte a unui text despre client, înainte de publicare, o dă clientul ca înregistrare proprie în registrul aprobărilor de publicare, nu ca tabel completat de mână în fișă. În aplicarea Ichnometria, registrul este ținut în portalul clientului. Publicarea nu este niciodată permisă implicit.

Nicio informație din fișă nu se publică pe site, în profiluri, în articole sau într-un studiu de caz fără această aprobare. Un audit privat nu devine automat studiu de caz public (AVL-201 §3; [Auditul AI Visibility](/lab/audit-ai-visibility)). Informațiile confidențiale ale clientului nu se publică fără acord explicit (AVL-001 §21).

---

## 20. Confirmarea reprezentantului

**Reprezentantul confirmă sau contestă factual fișa (AVL-201 §6.4).** Confirmarea nu este un câmp de completat. O dă numai clientul, pe versiunea transmisă spre revizuire, integral sau cu contestații. Fișa afișează doar decizia înregistrată.

| Ce se afișează | Ce înseamnă |
| --- | --- |
| Reprezentantul și calitatea | cine a decis și în ce calitate |
| Data și ora | momentul deciziei |
| Decizia | confirmare integrală sau confirmare cu contestații |
| Câmpurile contestate | lista câmpurilor cu care reprezentantul nu e de acord |
| Observațiile | ce a notat reprezentantul, de exemplu valoarea propusă și sursa ei |

Până la confirmare, fișa afișează „Așteaptă confirmarea clientului”.

---

## 21. Istoricul fișei

**Fișa se versionează.** O corectură păstrează valoarea anterioară, valoarea corectată, data, motivul și sursa (AVL-MKT-001 §19). Valorile folosite într-o măsurare deja făcută nu se schimbă retroactiv (AVL200-REQ-013). Versiunea fișei folosită la `T0` se menționează în planul de măsurare și în raport (AVL-201 §20); fișa nu marchează ea însăși o versiune ca reper `T0`.

Istoricul se afișează doar în citire, din versiunile înregistrate. Comparația câmp cu câmp între versiuni este o etapă ulterioară.

| Ce se afișează | Ce înseamnă |
| --- | --- |
| Versiunea fișei | numărul versiunii |
| Data | ziua înregistrării versiunii |
| Motivul schimbării | de ce s-a creat versiunea, de exemplu schimbarea activității, anunțată de reprezentant |
| Cine a confirmat sau a contestat | reprezentantul care a decis asupra versiunii |
| Ce anume | câmpurile confirmate sau contestate |

---

## Note

**Secțiunea finală a formularului, fără număr.** Aici se trec observațiile care nu au loc într-un câmp anume.

---

## Anexa — Politici tehnice ale site-ului

**Se completează împreună cu clientul, la revizuirea fișei, înainte de `T0`, și se confirmă odată cu fișa.** Anexa face parte din fișă (§3, „Conținutul minim”). Cuprinde politica crawlere și declarația paginilor intenționat neindexate, redirecționate, cu erori sau cu canonical spre altă pagină, ca auditul tehnic să nu le raporteze greșit ca probleme. Punctul de plecare este răspunsul din chestionar la întrebarea despre restricțiile pentru roboți (§3, „Chestionarul clientului”).

### Politica crawlere

**Accesul pe care entitatea îl vrea pentru crawlerele de căutare, de antrenare și de fetch la cererea utilizatorului (AVL-201 §7, AVL-204 §3.1).** Îl completează reprezentantul entității. AI Visibility Lab recomandă accesul total pentru toate crawlerele.

Dacă reprezentantul nu declară o politică diferită, se înregistrează accesul total, cu sursa „recomandarea AI Visibility Lab, nemodificată de reprezentant”. O politică diferită se declară pe crawler sau pe categorie, cu sursa și data. Politica se copiază în planul AVL-203 înaintea rulării și nu se deduce din `robots.txt`: ea descrie ce vrea entitatea, iar verificarea tehnică arată ce livrează serverul (AVL204-REQ-017).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Informația o dă |
| --- | --- | --- | --- |
| Opțiunea reprezentantului | acceptă recomandarea (acces total) sau declară o politică diferită | accept recomandarea | C |
| Categoria | căutare, antrenare sau fetch la cererea utilizatorului | antrenare | C |
| Crawlerul | numele agentului sau al tokenului din `robots.txt` | `GPTBot` | C |
| Politica | `PERMIS` sau `BLOCAT_INTENTIONAT` | `BLOCAT_INTENTIONAT` | C |
| Domeniul de aplicare | tot site-ul sau anumite căi | tot site-ul | C |
| Sursa și data declarației | cine a declarat politica și când | declarația administratorului, 4 noiembrie 2026 | Î |

Crawlerele urmărite la data acestui document sunt cele din planul primei rulări AVL-203 ([CS-002](/lab/studii-de-caz/verificare-tehnica-delamatescu-ro)):

| Categorie | Crawlere |
| --- | --- |
| căutare | `Googlebot`, `bingbot`, `OAI-SearchBot`, `Claude-SearchBot`, `PerplexityBot` |
| antrenare | `GPTBot`, `ClaudeBot`, `Google-Extended` (token în `robots.txt`, nu User-Agent separat), `CCBot` |
| fetch la cererea utilizatorului | `ChatGPT-User`, `Claude-User`, `Perplexity-User` |

Crawlerele de fetch la cererea utilizatorului se raportează numai ca observație, pentru că furnizorii lor declară că regulile din `robots.txt` pot să nu li se aplice ([AVL-203 §6](/lab/metodologie/protocol-verificare-tehnica), AVL204-REQ-018). Lista se reverifică la fiecare versiune a protocolului AVL-203.

### Indexare și răspunsuri declarate intenționat

**Paginile pe care entitatea nu vrea să le indexeze și răspunsurile pe care le-a configurat deliberat.** Un răspuns declarat aici nu se raportează drept problemă în verificarea tehnică (AVL-204 §6.2, §6.5).

| Câmp | Ce înseamnă | Exemplu sau cum se completează | Informația o dă |
| --- | --- | --- | --- |
| Pagina sau zona | URL-ul sau grupul de pagini | `/cont/` | C |
| Vrea să fie indexată? | da sau nu | nu | C |
| Redirect, eroare sau canonical intenționat | răspunsul configurat deliberat | redirect permanent de la domeniul vechi | C |
| Motiv | de ce a fost configurat așa | domeniul vechi a fost înlocuit | C |

---

## Anexa de predare a website-ului

**Se completează numai în serviciul de website și se predă clientului la lansare, cu datele structurate exact cum sunt pe site.** Informațiile se preiau din fișa confirmată, iar textele despre client se publică numai cu aprobarea din registrul aprobărilor de publicare (§19). Etapa sursei canonice nu are încă un document normativ propriu (AVL-001), deci anexa este operațională, nu normativă. Tabelul arată de unde vine fiecare proprietate.

Datele structurate descriu doar ce apare vizibil pe pagină. Nu garantează indexarea, menționarea sau citarea ([AVL-202 §7](/lab/metodologie)).

| Informație pe site | Proprietatea schema.org | Se aplică la | Vine din |
| --- | --- | --- | --- |
| Numele canonic | `name` | persoană, organizație | §7 |
| Variantele legitime | `alternateName` | persoană, organizație | §7.1 |
| Descrierea principală | `description` | persoană, organizație | §8 |
| Rolul | `jobTitle` | persoană | §8 |
| Pagina canonică despre entitate | `url`, cu un `@id` stabil | persoană, organizație | §11.1 |
| Localitatea | `homeLocation` | persoană | §9 |
| Adresa | `address` | persoană, organizație | §9 |
| Zona deservită | `areaServed` | organizație | §9 |
| Domeniile de expertiză | `knowsAbout` | persoană, organizație | §8 |
| Profilurile care identifică sigur entitatea | `sameAs`, numai pentru identități fără echivoc | persoană, organizație | §11.2 |
| Organizația la care lucrează persoana | `worksFor` | persoană | §12 |
| Fondatorul organizației | `founder` | organizație | §12 |
| Organizațiile din care face parte | `memberOf` | persoană, organizație | §12 |
| Imaginea oficială | `image` | persoană, organizație | §11.3 |
| Logo-ul | `logo` | organizație | §11.3 |
| Datele de contact | `email`, `telephone`, `contactPoint` | persoană, organizație | §9 |
| Data înființării | `foundingDate` | organizație | §10 |

Proprietățile și tipurile cărora li se aplică au fost verificate pe schema.org la 4 noiembrie 2026 ([Person](https://schema.org/Person), [Organization](https://schema.org/Organization)).

---

## 22. Proveniența câmpurilor

**De unde provine fiecare secțiune a fișei.** Secțiunile fără bază normativă sunt marcate „operațional”.

| Secțiune | Sursa în corpus |
| --- | --- |
| Conținutul minim [min] | AVL-201 §7 |
| §3 „Ce își asumă reprezentantul”, §4.1 Entitate ambiguă sau suspectă | operațional; decizii Alex Matescu, 4 noiembrie 2026; AVL-001 §21; AVL-200 §11 |
| §1–§3: fișa fără măsurare, cine dă informația, fluxul fișei, fișa minimă, verificarea preliminară, chestionarul clientului (versiunea 3), sursa pe fiecare rând | operațional; decizii Alex Matescu, 25 noiembrie 2026, după testul V-33 din aplicarea Ichnometria; AVL-201 §6.4, §7; AVL200-REQ-019; AVL204-REQ-017 |
| §4 Verificarea la `F1` … `Fn` și a fișei completate retroactiv | operațional; decizie Alex Matescu, 4 noiembrie 2026; AVL-200 §7, AVL200-REQ-013 |
| §5 Identificarea fișei | AVL-201 §6.1–6.4; AVL-203 §1, AVL203-REQ-043; AVL-204 AVL204-REQ-015; AVL-001 §21; AVL-202 „Independență și conflict de interese”; confirmarea responsabilului înainte de trimiterea spre revizuire: operațional, decizie Alex Matescu, 25 noiembrie 2026 |
| §6 Tipul entității | AVL-201 §3, §5; AVL-203 §1.1; AVL-204 §11 |
| §7 Forma canonică și variantele | AVL-201 §5, §10.1; AVL-102; articolul „Ce este o entitate pentru AI”; §7.2, completarea la verificarea preliminară: operațional, decizie Alex Matescu, 25 noiembrie 2026 |
| §8 Rolul și activitatea | AVL-201 §7, §10.6; AVL-MKT-001 §17; articolul „Ce este o entitate pentru AI”; documentul de lucru „Audit F0 — Tabula Rasa” (2 iulie 2026), din pachetul de dovezi `T0` pentru Alex Matescu |
| §9 Locația și piața | AVL-201 §7; AVL-102; AVL-204 §11 |
| §10 Atribute verificabile | AVL-201 §7, §10.1, §10.6; articolul „Ce este o entitate pentru AI” |
| §11 Activele oficiale | AVL-200 §7.1, §18.3; AVL-201 §6.4, §7, §9, §10.8; AVL-203 §1.1, AVL203-REQ-042; pagina Auditul AI Visibility; studiul Tabula Rasa §11; §11.4, logurile și Analytics opționale: operațional, decizie Alex Matescu, 25 noiembrie 2026 |
| §12 Relații și ancore | studiul Tabula Rasa §1; articolul „Ce este o entitate pentru AI”; AVL-202 §7; forma subiect — relație — obiect și câmpul ancorelor: operațional, decizii Alex Matescu, 25 noiembrie 2026 |
| §13 Harta coliziunilor | AVL-201 §7, §13; AVL-103; AVL-001 §21; completarea la verificarea preliminară: operațional, decizie Alex Matescu, 25 noiembrie 2026 |
| §14 Prezența distribuită | AVL-200 §7.1; AVL-201 §10.8, §10.9; AVL-202 §7; „Lista surselor externe” și completarea la verificarea preliminară: operațional, decizie Alex Matescu, 25 noiembrie 2026 |
| §15 Politica crawlere și „Anexa — Politici tehnice ale site-ului” | anexa, parte a fișei: operațional, decizie Alex Matescu, 25 noiembrie 2026; AVL-201 §6.4, §7; AVL-203 §1.1, §6; AVL-204 §3.1, §6.2, §6.3, §6.5, AVL204-REQ-017, AVL204-REQ-018; CS-002 |
| §16 Ce vrea entitatea să i se recunoască | AVL-201 §7, §10.2, F0-REQ-008; AVL-104; pagina Auditul AI Visibility |
| §17 Angajamente pentru `T0` (în planul de măsurare din 0.3.0) | AVL-201 §6.4, §7, F0-REQ-001, F0-REQ-002; forma înghețului între puncte și §17.1: operațional, decizii Alex Matescu, 4 noiembrie 2026; mutarea în planul de măsurare: decizie Alex Matescu, 25 noiembrie 2026; AVL200-REQ-013 |
| §18 și „Anexa de predare a website-ului” | operațional; mutarea în anexă: decizie Alex Matescu, 25 noiembrie 2026; AVL-200 §7.1; AVL-202 §7; articolul „Ce este o entitate pentru AI”; schema.org |
| §19 Revizuire și aprobare (registrul aprobărilor de publicare) | AVL-201 §3; AVL-001 §21; pagina Auditul AI Visibility; registrul: operațional, decizie Alex Matescu, 25 noiembrie 2026 |
| §20 Confirmarea reprezentantului | AVL-201 §6.4; afișarea deciziei înregistrate: operațional, decizie Alex Matescu, 25 noiembrie 2026 |
| §21 Istoricul fișei | AVL-MKT-001 §19; AVL200-REQ-013; AVL200-REQ-030; AVL-201 §20 |

---

## 23. Documente asociate

### Normative

- [AVL-001 — AI Visibility Lab Foundation](/lab/introducere)
- [AVL-202 — Cadrul metodologic AI Visibility Lab](/lab/metodologie)
- [AVL-200 — Standardul de dovezi, măsurare și trasabilitate](/lab/metodologie/standard-dovezi-masurare-trasabilitate)
- [AVL-201 — Tabula Rasa F0: Baseline Measurement Specification](/lab/metodologie/tabula-rasa-f0)

### Informative

- [AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility](/lab/metodologie/protocol-verificare-tehnica)
- [AVL-204 — Grila de interpretare a verificării tehnice](/lab/metodologie/grila-interpretare-verificare-tehnica)
- [AVL-MKT-001 — Market Scope & Eligibility Protocol](/lab/metodologie/protocol-delimitare-piata-eligibilitate)
- [AVL-102 — Cum aleg sistemele AI sursele și citările](/lab/cercetare/cum-aleg-motoarele-ai)
- [AVL-103 — SEO și GEO](/lab/cercetare/seo-vs-geo)
- [AVL-104 — Cum se măsoară AI Visibility](/lab/cercetare/cum-se-masoara-ai-visibility)
- [Ce este o entitate pentru AI și motoarele de căutare](/lab/articole/ce-este-entitate-ai-studiu-de-caz)
- [Studiul de caz Tabula Rasa — identitatea Alex Matescu](/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz)
- [FE-delamatescu-ro-v1 — fișa entității pentru delamatescu.ro și Alex Matescu](https://github.com/alexmatescu/alexmatescu-hub-reflection/blob/main/docs/fise-entitate/FE-delamatescu-ro-v1.md) (exemplu aplicat, completat retroactiv)
- [CS-002 — Verificarea tehnică AVL-203 a delamatescu.ro](/lab/studii-de-caz/verificare-tehnica-delamatescu-ro)
- [Auditul AI Visibility](/lab/audit-ai-visibility)

### Referințe externe

- [Schema.org — Person](https://schema.org/Person)
- [Schema.org — Organization](https://schema.org/Organization)

---

## 24. Istoricul versiunilor

| Versiune | Dată | Statut | Modificări |
| --- | --- | --- | --- |
| 0.1.0 | 4 noiembrie 2026 | Draft pentru revizuire | Primul draft. Descrie fișa entității cerută de AVL-201 §7: rolul ei, ce nu este, cum se completează, stările verificării `T0` și definițiile tuturor câmpurilor, în 17 secțiuni (§5–§21), cu proveniența fiecărei secțiuni. Precizează că „domeniu” din AVL-201 §7 înseamnă domeniul de activitate al serviciilor (decizie Alex Matescu, 4 noiembrie 2026). Nu introduce cerințe proprii. |
| 0.1.1 | 4 noiembrie 2026 | Draft pentru revizuire | PATCH: trimiteri la AVL-201 1.6.0, care trimite la AVL-205 din §7 și §10.1 și folosește formularea „domeniul de activitate”, și la AVL-202 1.8.0, care include AVL-205 în corpus. Deciziile deschise 2 (închisă), 3 și 6 (parțial închise) sunt actualizate. Fără schimbări ale câmpurilor fișei. |
| 0.2.0 | 4 noiembrie 2026 | Draft pentru revizuire | MINOR, decizii Alex Matescu din 4 noiembrie 2026, după prima fișă completă. §3: marcajul „Î” precizează că Alex Matescu verifică formularea, nu adevărul declarației; subsecțiune nouă „Ce își asumă reprezentantul”: declarațiile reprezentantului sunt asumate de el și considerate corecte. §4 se numește „Cum se verifică reprezentarea fișei în surse?”. Subsecțiune nouă §4.1 „Entitate ambiguă sau suspectă”: criteriile, închiderea colaborării, documentarea internă și comunicarea către client. §6: o singură fișă pentru profesionistul independent cu site propriu. §11.2: ce se notează pentru fiecare profil, cu numele afișat. §17: forma înghețului între punctele de măsurare; subsecțiune nouă §17.1 „Completarea retroactivă”. §4: verificarea pe surse la punctele `F1` … `Fn` și prima verificare a unei fișe completate retroactiv. Deciziile deschise 1 (parțial) și 3 (integral) sunt închise; decizia 4: testul stărilor se face la `F4` Tabula Rasa; trimitere la fișa FE-delamatescu-ro-v1. Nu introduce cerințe proprii. |
| 0.3.0 | 25 noiembrie 2026 | Draft pentru revizuire | MINOR, decizii Alex Matescu din 25 noiembrie 2026, după testul V-33 din aplicarea Ichnometria. Fișa devine documentul de identitate al entității, confirmat cu clientul, fără nimic din măsurare; `T0` se pregătește și se documentează separat, după confirmarea fișei. Numerotarea nu se schimbă: §15, §15.1, §17, §18 și §19 rămân titluri care trimit la locul nou. §1–§4 rămân explicative; formularul începe la §5 și se încheie cu secțiunea „Note”, fără număr. Coloana „Stare la `T0`” și Evidence ID-ul ies din fișă (§3, §11.2) și se înregistrează în documentele măsurării `T0` (§4). §3: marcajul C/Î/L arată cine dă informația, iar L este operatorul care aplică metoda; operatorul redactează fișa, clientul o confirmă sau contestă câmpuri; subsecțiuni noi: fluxul fișei, fișa minimă (trimiterea spre revizuire numai cu câmpurile [min] completate sau cu motiv înregistrat), verificarea preliminară (proveniența „verificare preliminară”, fără dovezi și fără valoare de măsurare), chestionarul clientului, versiunea 3; sursa se notează pe fiecare rând. §5: operatorul execută verificările; serviciul contractat nu mai pomenește „baseline `T0`”; responsabilul de metodologie confirmă înainte de trimiterea spre revizuire. §11.4: logurile și Analytics sunt opționale, numai după acordul de prelucrare a datelor. §12: relațiile în forma subiect — relație — obiect; câmp nou „Profiluri și pagini prin care vă recunosc deja motoarele de căutare (dacă le știți)”. §7.2 (coloanele operatorului), §13 și §14 se completează la verificarea preliminară; câmpul din §14 se numește „Lista surselor externe”. §15 și §15.1 trec în „Anexa — Politici tehnice ale site-ului”, parte a fișei; §17 trece în planul de măsurare; §18 trece în „Anexa de predare a website-ului”, numai pentru serviciul de website; §19 trece în registrul aprobărilor de publicare. §20: fișa afișează doar decizia înregistrată a clientului. §21: istoricul se afișează doar în citire. Nu introduce cerințe proprii. |

---

## 25. Decizii deschise înainte de 1.0.0

1. **Primul test pe o entitate reală.** Fișa se completează integral pentru delamatescu.ro și Alex Matescu, entitatea primei rulări AVL-203. Parțial închisă la 4 noiembrie 2026: prima fișă completă, [`FE-delamatescu-ro-v1`](https://github.com/alexmatescu/alexmatescu-hub-reflection/blob/main/docs/fise-entitate/FE-delamatescu-ro-v1.md), a fost confirmată de reprezentant și publicată, completată retroactiv (§17.1). Din observațiile completării, versiunea 0.2.0 a preluat coloanele profilurilor (§11.2), fișa unică pentru profesionistul independent (§6), forma înghețului între puncte și completarea retroactivă (§17). Rămân de discutat înainte de activare rolul principal diferit între surse și ancorele folosite de motoare, dar absente din sursa canonică.
2. **Precizarea „domeniu” în AVL-201.** Închisă la 4 noiembrie 2026 (decizie Alex Matescu): AVL-201 1.6.0 folosește „domeniul de activitate” la §6.1 și §7, cu același sens ca AVL-205 §3.
3. **Trimiterea din AVL-201, AVL-203 și AVL-204.** Închisă la 4 noiembrie 2026 (decizie Alex Matescu): AVL-201 1.6.0 trimite la AVL-205 din §7 și §10.1, iar AVL-203 0.6.2 și AVL-204 0.3.2 trimit direct la AVL-205, ca dependență informativă; conținutul minim rămâne cel din AVL-201 §7.
4. **Stările verificării (§4).** Vocabularul `CORECT`, `VECHI`, `FALS`, `LIPSĂ`, `UNKNOWN`, `NEVERIFICAT` se testează pe o fișă completă reală. Decizie Alex Matescu, 4 noiembrie 2026: primul test se face pe seria Tabula Rasa (`T0` din 2 iulie 2026), la `F4`, pe fișa [`FE-delamatescu-ro-v1`](https://github.com/alexmatescu/alexmatescu-hub-reflection/blob/main/docs/fise-entitate/FE-delamatescu-ro-v1.md). Verificarea pe surse face parte din măsurarea `F4`, iar dovezile ei intră în pachetul `F4`. Decizia se închide după `F4`, cu observațiile testului.
5. **Cerințe proprii.** Rămâne de decis dacă AVL-205 primește cerințe `AVL205-REQ-*`, de exemplu pentru conținutul minim sau pentru versionarea fișei, sau rămâne un document descriptiv.
6. **Locul în corpus.** Parțial închisă la 4 noiembrie 2026: AVL-202 1.8.0 menționează AVL-205 în arhitectura metodologiei, în ordinea de lectură, în ordinea din hub și în lista documentelor. La activare rămân de făcut actualizarea statutului în AVL-202 și includerea în lista Nivelului C din AVL-001.

Aceste puncte nu trebuie tratate ca închise până la o decizie explicită, documentată în istoricul versiunilor.

> **Declarație finală**
>
> O măsurare spune ce văd sistemele despre o entitate. Fișa spune ce este entitatea.
> Fără a doua, prima nu poate fi verificată.
