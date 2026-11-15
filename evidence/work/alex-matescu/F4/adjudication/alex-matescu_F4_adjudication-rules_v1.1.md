# Tabula Rasa F4 — reguli de adjudecare (metadata v1.1)

Matricea: `alex-matescu_F4_adjudication_v1.1.csv`. Data adjudecării: 15 noiembrie 2026.

F4 folosește neschimbate regulile de adjudecare ale F3 (`alex-matescu_F3_adjudication-rules_v1.2.md`, publicate în `evidence-alex-matescu-f3-v1.0-m1.2`): aceleași definiții de verdict (HIT, HIT-C, HIT PARȚIAL, COLIZIUNE, COLIZIUNE dezambiguizată corect, CONFABULARE, NULL, NEDETERMINAT, statutul NEAFIȘAT) și regulile de departajare 1–13. Mai jos sunt doar elementele specifice F4.

## Unitatea de analiză

- Execuția = grupul de capturi cu același `Query group ID` și `Analysis inclusion status = INCLUDE` din indexul `alex-matescu_F4_evidence-index_v1.0.csv`.
- 113 execuții: 14 interogări × 8 suprafețe capturate, plus a doua rulare Google Q07, păstrată în analiză (decizia lui Alex, 2026-11-15).
- Execuțiile din afara analizei nu primesc verdict: capturile ChatGPT Q11 de la 16:13, puse eronat în folderul Query10; reluarea ChatGPT Q13; a doua execuție Claude Q12; căutarea sugerată de Google după Q09 (`SUPPLEMENTAL-002`).
- Verdictul se dă pe conținutul vizibil în capturi.

## Elemente specifice F4

**F4-1. Google AI Overviews, rând derivat.** F4 nu are o rulare dedicată pentru Google AI Overviews. Rezumatul AI e adjudecat din capturile Google Search, ca rând separat în matrice (`GOOGLEAIOVERVIEWS`), cu aceleași Evidence ID-uri. Verdictul se dă pe rezumatul din vederea originală (regula 6); unde Google nu afișează rezumat, statutul e NEAFIȘAT. Comparația cu F3 se face doar cu notă: în F3, sesiunea AIO a fost separată și fără reselectarea formei „Matescu” (decizia lui Alex, 2026-11-15).

**F4-2. Google Q07, două rulări.** Ambele rulări au verdict în matrice. În rezumatul pe interogare:
- Google Search Q07 = HIT (rulările sunt concordante);
- Google AI Overviews Q07 = **INSTABIL**: rezumatul nu apare în Run1 și apare în Run2 (COLIZIUNE dezambiguizată corect). Eticheta INSTABIL e cea definită în CS-001 §4.
Numărătorile pe suprafață din studiu folosesc rezumatul pe interogare (14 pe suprafață); matricea păstrează ambele execuții.

**F4-3. Ecranul rescris de Google și Bing.** În F4, operatorul a capturat și ecranul inițial cu rezultatele rescrise spre „Mateescu”, înainte de selecția manuală a formei originale. Verdictul Google Search se dă pe vederea originală (regula 6); ecranul rescris e descris în notă. Bing Q14: operatorul nu a selectat varianta „only”, deci verdictul se dă pe rezultatele cu „Mateescu” incluse (diferență de protocol față de F3).

**F4-4. Refuzul.** Refuzul Gemini la Q04 („safety settings”) e NULL în taxonomia studiului, cu natura de refuz notată (categoria REFUZ / LIMITARE din AVL-201 §13 nu e folosită separat în CS-001).

**F4-5. Suprafețe generative: rezultat principal vs. listă paralelă.** Un răspuns centrat pe subiect, care menționează la final alte persoane cu nume apropiat ca alternativă, e HIT / HIT-C. Un răspuns care prezintă în paralel mai multe persoane reale, inclusiv subiectul, corect și fără contopire, e COLIZIUNE (dezambiguizată corect). Este aplicarea definițiilor F3, formulată explicit pentru F4.

**F4-6. HIT-C cere citarea vizibilă a sursei canonice.** Un link a cărui destinație nu e vizibilă în captură (de exemplu „Profilul Alex Matescu”) sau o citare doar a LinkedIn nu fac HIT-C; verdictul e HIT.

## Abateri de formulare

- Q12 „https://delamatescu.ro/” în loc de „delamatescu.ro”: Google AI Mode, ChatGPT și prima execuție Claude (inclusă în analiză). Forma cu https e acceptată de Alex (2026-11-15). Copilot, Gemini, Perplexity, Google Search și Bing au primit forma canonică.
- ChatGPT Q13, reluarea (în afara analizei): „cine este in spatele delamatescu.ro?” (minuscule, fără diacritice).

## Decizii și confirmări ale lui Alex (2026-11-15)

- Google Search Q03 = NULL (pagina 1 fără subiect, doar zgomot); Google Search Q09 = HIT (subiectul separat de avocat prin propriile pagini; rezultatele sunt materialele studiului).
- Corecte: „Lead System Engineer la AUMOVIO din septembrie 2025”, cu HaynesPro, Bertrandt și Continental înainte (Perplexity Q10, Q11); Taste the Corn a funcționat din mai până în decembrie 2025, apoi s-a închis (Perplexity Q04, Q05; ChatGPT Q05); contul X @MatescuAlex (Perplexity Q04).
- Fals: implicarea într-un „corporate AI Living Lab pilot project” la AUMOVIO (Gemini Q10) → HIT PARȚIAL (regula 11).
- Fotografia afișată de ChatGPT lângă fișa „Alex Matescu” la Q04 și Q05 nu îl reprezintă pe subiect. Fotografiile din Perplexity Q01, Q05, Q07 și Q11 sunt ale altor persoane.
- Adresa de e-mail și telefonul subiectului afișate de Google AI Mode la Q04 sunt date publice; capturile se publică neschimbate.

## Asistența AI

Adjudecarea a fost pregătită cu asistența unui model AI (Claude), pe capturile din pachet, după regulile F3 și elementele F4-1–F4-6 de mai sus. Claude este și una dintre suprafețele măsurate. Verdictele de graniță și faptele biografice neobișnuite au fost confirmate de Alex înainte de publicare.

## Versiuni

- v1.1 (2026-11-15): prima matrice de adjudecare F4. Arhiva de dovezi e identică cu `evidence-alex-matescu-f4-v1.0` (același SHA-256).
