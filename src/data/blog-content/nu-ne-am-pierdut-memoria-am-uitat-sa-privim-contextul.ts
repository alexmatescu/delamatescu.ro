import type { NewPost } from "@/data/posts";

export const nuNeAmPierdutMemoriaPost = {
  // --- Identitate & conținut ---
  slug: "nu-ne-am-pierdut-memoria-am-uitat-sa-privim-contextul",
  title: "Nu ne-am pierdut memoria. Am uitat să privim contextul.",
  subtitle:
    "Despre memoria omului contemporan, inteligența redusă la un număr, progresul pe care îl judecăm cu măsurile trecutului și incapacitatea noastră de a învăța din propriile comparații.",
  excerpt:
    "Nu mai ținem minte numerele de telefon ale celor apropiați, dar navigăm zilnic prin zeci de aplicații, sisteme și decizii. Un eseu despre ce măsurăm de fapt când spunem că memoria și inteligența sunt în declin, și despre obiceiul de a judeca prezentul cu criteriile unei lumi care nu mai există.",
  metaDescription:
    "Nu mai ținem minte numerele de telefon. Înseamnă asta că memoria și inteligența sunt în declin? Un eseu despre efectul Google, IQ și nostalgia pentru trecut.",
  canonicalPath: "/blog/nu-ne-am-pierdut-memoria-am-uitat-sa-privim-contextul",

  // --- Date ---
  date: "2026-11-22",
  dateModified: "2026-11-22",
  lastReviewed: "2026-11-22",

  // --- Clasificare editorială ---
  category: "Reflecții",
  articleType: "Eseu",

  // --- Structured data suplimentar ---
  about: [
    "Memoria umană și tehnologia digitală",
    "Comparațiile între generații",
    "Limitele IQ-ului ca măsură a inteligenței",
    "Idealizarea trecutului și teama de tehnologiile noi",
  ],
  faq: [
    {
      q: "Oamenii de astăzi au o memorie mai slabă decât cei din trecut?",
      a: "Nu putem trage o concluzie generală din faptul că oamenii memorează astăzi mai puține numere de telefon sau adrese. Performanța memoriei depinde și de tipul informației, de frecvența utilizării, de atenție și de felul în care este evaluată. Instrumentele digitale schimbă ceea ce exersăm, nu oferă singure un verdict asupra întregii memorii umane.",
    },
    {
      q: "De ce țineau oamenii minte mai multe numere de telefon înainte de smartphone?",
      a: "Pentru că erau nevoiți să le folosească și să le repete. Formarea frecventă a numerelor susținea învățarea și recuperarea lor. Astăzi, agenda digitală elimină o parte din această nevoie, iar lipsa exercițiului nu este, în sine, dovada unei deteriorări generale a inteligenței.",
    },
    {
      q: "Ce este efectul Google asupra memoriei?",
      a: "Este denumirea asociată unor observații experimentale potrivit cărora, atunci când ne așteptăm să avem acces ulterior la o informație, putem reține mai bine unde o găsim decât informația în sine. Acest efect nu înseamnă că întregul nostru sistem de memorie a devenit mai slab.",
    },
    {
      q: "Au generațiile noi un IQ mai mic decât generațiile anterioare?",
      a: "Unele populații au înregistrat stagnări sau inversări ale creșterii scorurilor la teste cognitive, după perioade de creștere descrise prin efectul Flynn. Rezultatele nu justifică însă afirmația că toate generațiile tinere, din întreaga lume, sunt mai puțin inteligente. În plus, IQ-ul este o măsură relevantă a anumitor aptitudini cognitive, nu o evaluare completă a omului.",
    },
    {
      q: "Ne face inteligența artificială mai puțin capabili să gândim?",
      a: "Nu există un răspuns universal care să se aplice tuturor utilizărilor. AI poate reduce efortul depus pentru căutare și sarcini repetitive, dar folosirea ei necritică poate încuraja dependența de răspunsuri pe care nu le înțelegem sau verificăm. Diferența o face felul în care folosim instrumentul și ceea ce continuăm să exersăm independent.",
    },
    {
      q: "De ce fiecare generație spune că „înainte era mai bine”?",
      a: "Pentru că trecutul este filtrat de memorie, selecție culturală și familiaritate, în vreme ce prezentul este trăit cu toate incertitudinile sale. Comparația devine adesea inegală: punem ceea ce istoria a păstrat drept valoros lângă tot ceea ce prezentul produce, inclusiv lucrurile banale și mediocre.",
    },
  ],
  citations: [
    {
      name: "Sparrow, Liu, Wegner — Google Effects on Memory: Cognitive Consequences of Having Information at Our Fingertips (Science, 2011)",
      url: "https://pubmed.ncbi.nlm.nih.gov/21764755/",
    },
    {
      name: "Chen, Yan, Moeyaert, Bangert-Drowns — Mobile multitasking in learning: A meta-analysis of effects of mobile phone distraction on young adults’ immediate recall (Computers in Human Behavior, 2024)",
      url: "https://doi.org/10.1016/j.chb.2024.108432",
    },
    {
      name: "Bratsberg, Rogeberg — Flynn effect and its reversal are both environmentally caused (PNAS, 2018)",
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6042097/",
    },
    {
      name: "Platon — Phaidros, traducere de Benjamin Jowett (Internet History Sourcebooks, Fordham University)",
      url: "https://sourcebooks.fordham.edu/ancient/plato-phaedrus.asp",
    },
  ],
  mentions: ["Platon"],
  schemaKeywords: [
    "memorie și tehnologie",
    "externalizarea memoriei",
    "efectul Google",
    "efectul Flynn",
    "IQ și inteligență",
    "atenție și distragere",
    "cunoaștere distribuită",
    "nostalgie și idealizarea trecutului",
  ],
  focusKeyword: "memoria și tehnologia",

  // --- Imagine ---
  heroImage: {
    src: "/images/blog/nu-ne-am-pierdut-memoria-am-uitat-sa-privim-contextul.webp",
    alt: "Ilustrație: într-un muzeu cu coloane de marmură și cupolă de sticlă, vizitatori în veșminte futuriste privesc o vitrină în care un laptop, o tastatură, un telefon, o tabletă, căști wireless și un card bancar sunt expuse ca artefacte; în fundal, statuia unui gânditor și o sferă armilară.",
    width: 1672,
    height: 941,
  },

  // --- SEO / social override-uri ---
  ogDescription:
    "Odinioară știam pe de rost douăzeci de numere de telefon. Azi folosim zilnic douăzeci de aplicații. Ne-am pierdut memoria sau s-au schimbat lucrurile pentru care avem nevoie de ea?",

  // --- Prezentare & autor ---
  author: { name: "Alex Matescu", slug: "alex-matescu", url: "/despre" },
  featured: false,

  // --- Conținut ---
  html: `
<nav class="article-toc" aria-labelledby="cuprins">
  <p id="cuprins" class="article-toc-title">Cuprins</p>
  <ol>
    <li><a href="#de-ce-nu-mai-tinem-minte-numerele-de-telefon-ca-inainte">De ce nu mai ținem minte numerele de telefon ca înainte?</a></li>
    <li><a href="#ne-slabeste-tehnologia-memoria-sau-schimba-ceea-ce-memoram">Ne slăbește tehnologia memoria sau schimbă ceea ce memorăm?</a></li>
    <li><a href="#de-ce-accesul-la-mai-multa-informatie-nu-inseamna-automat-mai-multa-cunoastere">De ce accesul la mai multă informație nu înseamnă automat mai multă cunoaștere?</a></li>
    <li><a href="#de-ce-uitam-o-limba-straina-pe-care-nu-o-mai-folosim">De ce uităm o limbă străină pe care nu o mai folosim?</a></li>
    <li><a href="#a-scazut-inteligenta-noilor-generatii-ce-ne-spune-de-fapt-iq-ul">A scăzut inteligența noilor generații? Ce ne spune, de fapt, IQ-ul?</a></li>
    <li><a href="#inseamna-evolutia-ca-fiecare-generatie-trebuie-sa-fie-mai-inteligenta">Înseamnă evoluția că fiecare generație trebuie să fie mai inteligentă?</a></li>
    <li><a href="#de-ce-se-tem-oamenii-de-tehnologiile-noi-lectia-lui-platon-despre-scriere">De ce se tem oamenii de tehnologiile noi? Lecția lui Platon despre scriere</a></li>
    <li><a href="#de-ce-idealizam-trecutul-si-judecam-prezentul-atat-de-aspru">De ce idealizăm trecutul și judecăm prezentul atât de aspru?</a></li>
    <li><a href="#ne-a-facut-progresul-tehnologic-mai-capabili-sau-doar-mai-ocupati">Ne-a făcut progresul tehnologic mai capabili sau doar mai ocupați?</a></li>
    <li><a href="#cum-schimba-cunoasterea-colectiva-felul-in-care-masuram-performanta">Cum schimbă cunoașterea colectivă felul în care măsurăm performanța?</a></li>
    <li><a href="#de-ce-fiecare-generatie-crede-ca-generatiile-urmatoare-sunt-in-declin">De ce fiecare generație crede că generațiile următoare sunt în declin?</a></li>
    <li><a href="#cum-putem-invata-din-trecut-fara-sa-condamnam-viitorul">Cum putem învăța din trecut fără să condamnăm viitorul?</a></li>
    <li><a href="#intrebari-esentiale-despre-memorie-iq-si-tehnologie">Întrebări esențiale despre memorie, IQ și tehnologie</a>
      <ol>
        <li><a href="#oamenii-de-astazi-au-o-memorie-mai-slaba-decat-cei-din-trecut">Oamenii de astăzi au o memorie mai slabă decât cei din trecut?</a></li>
        <li><a href="#de-ce-tineau-oamenii-minte-mai-multe-numere-de-telefon-inainte-de-smartphone">De ce țineau oamenii minte mai multe numere de telefon înainte de smartphone?</a></li>
        <li><a href="#ce-este-efectul-google-asupra-memoriei">Ce este efectul Google asupra memoriei?</a></li>
        <li><a href="#au-generatiile-noi-un-iq-mai-mic-decat-generatiile-anterioare">Au generațiile noi un IQ mai mic decât generațiile anterioare?</a></li>
        <li><a href="#ne-face-inteligenta-artificiala-mai-putin-capabili-sa-gandim">Ne face inteligența artificială mai puțin capabili să gândim?</a></li>
        <li><a href="#de-ce-fiecare-generatie-spune-ca-inainte-era-mai-bine">De ce fiecare generație spune că „înainte era mai bine”?</a></li>
      </ol>
    </li>
    <li><a href="#poate-ca-nu-memoria-este-problema">Poate că nu memoria este problema</a></li>
    <li><a href="#surse">Surse</a></li>
  </ol>
</nav>

<p>Am auzit în ultima vreme tot mai multe voci care spun că oamenii din zilele noastre nu mai au ținere de minte. Că nu mai sunt capabili să rețină informații, că au devenit dependenți de tehnologie, că nu mai știu să gândească fără să caute pe internet și că, într-un fel sau altul, fiecare nouă generație pare să piardă câte ceva din capacitățile celei care a precedat-o. Aproape de fiecare dată, afirmațiile acestea sunt însoțite de o anumită nostalgie, de un regret rostit uneori cu voce tare, alteori ascuns în spatele unui zâmbet amar, ca și cum am fi asistat cu toții la dispariția unei calități umane extraordinare, pe care am avut-o cândva și pe care, din neglijență sau comoditate, am lăsat-o să se stingă.</p>

<p>Și de fiecare dată când aud asemenea comparații, mă întreb cât din această dezamăgire este justificată de o schimbare reală și cât provine din dificultatea noastră de a înțelege lumea în care trăim, atunci când aceasta nu mai seamănă cu lumea în care am învățat să trăim.</p>

<p>Pentru că există ceva curios în felul în care privim trecutul. Îi admirăm performanțele, îi evocăm oamenii excepționali, îi povestim realizările și îi transformăm obiceiurile în repere, dar uităm aproape întotdeauna să reconstruim întregul context în care acele lucruri au fost posibile, necesare sau pur și simplu obișnuite. Luăm o abilitate care avea o anumită valoare într-o anumită perioadă, o desprindem de condițiile care au făcut-o importantă și o folosim pentru a măsura oamenii unei lumi complet diferite.</p>

<p>Iar când rezultatul comparației nu ne convine, concluzionăm că omenirea este în declin.</p>

<p>Dar oare chiar așa stau lucrurile?</p>

<p><strong>Răspunsul pe care îl caut nu este că oamenii de astăzi ar avea, în mod necesar, o memorie mai bună sau mai slabă decât generațiile anterioare.</strong> Tehnologia a schimbat informațiile pe care suntem nevoiți să le memorăm, felul în care le recuperăm și capacitățile pe care le exersăm zilnic. Unele forme de memorare sunt folosite mai rar, în timp ce navigarea prin sisteme, evaluarea informațiilor și adaptarea la instrumente noi au devenit mult mai importante. Asta nu dovedește nici un progres cognitiv universal, nici un declin general. Pentru o comparație cinstită, trebuie să privim contextul, nu doar lucrurile care au dispărut.</p>

<h2 id="de-ce-nu-mai-tinem-minte-numerele-de-telefon-ca-inainte">De ce nu mai ținem minte numerele de telefon ca înainte?</h2>

<p>Îmi amintesc de perioada de dinaintea telefoanelor inteligente, de anii în care oamenii știau pe de rost numerele de telefon ale părinților, bunicilor, prietenilor și colegilor. Unii puteau reproduce fără ezitare zece, douăzeci sau chiar mai multe numere, puteau spune adrese complete, își aminteau zile de naștere, trasee prin oraș și o mulțime de alte informații pe care astăzi le păstrăm într-o agendă digitală.</p>

<p>Era o performanță? Cu siguranță. Dar era și o necesitate.</p>

<p>Dacă voiai să suni pe cineva și nu aveai numărul la îndemână, trebuia să îl știi. Îl formaseși poate de sute de ori, îl scriseseși pe o foaie, îl repetaseși în minte și îl asociai cu o persoană, cu o voce și cu un loc. Informația aceea era folosită suficient de des încât devenea familiară, aproape automată.</p>

<p>Astăzi, mulți dintre noi nu mai știm nici măcar numerele de telefon ale celor mai apropiați oameni din viața noastră. Le selectăm numele dintr-o listă și îi sunăm. Uneori nici nu mai folosim numărul de telefon, ci o aplicație prin care transmitem mesaje, fotografii, documente, locații sau apeluri video.</p>

<p>Dacă ne oprim aici, putem spune că am pierdut o abilitate.</p>

<p>Dar dacă mergem puțin mai departe?</p>

<p>Omul care nu mai știe douăzeci de numere de telefon poate folosi zilnic douăzeci de aplicații diferite. Știe cum funcționează fiecare, unde găsește informațiile de care are nevoie, cum arată interfețele, ce meniuri trebuie să acceseze, ce opțiuni să selecteze, cum să gestioneze autentificările, ce cont folosește pentru fiecare serviciu și ce trebuie să facă atunci când o actualizare schimbă tot ceea ce învățase până atunci.</p>

<p>Poate să nu mai țină minte un număr de telefon, dar își amintește cum să navigheze prin zeci de sisteme digitale care, pentru cineva obișnuit cu lumea de acum treizeci de ani, ar putea părea imposibil de înțeles dintr-o singură privire.</p>

<p>Și nu vorbim doar despre aplicațiile de pe telefon.</p>

<p>Cei mai mulți dintre noi își desfășoară activitatea profesională într-un mediu construit din programe, platforme, documente, sisteme de comunicare, proceduri, reguli și interfețe care se schimbă permanent. Învățăm cum să folosim un instrument, apoi altul, apoi încă unul, iar uneori, înainte să apucăm să îl stăpânim pe primul, acesta este înlocuit de o versiune nouă.</p>

<p>Între timp, trebuie să ne amintim lucrurile pe care le-am promis, întâlnirile la care trebuie să participăm, oamenii cărora trebuie să le răspundem, deciziile pe care le-am luat și motivele pentru care le-am luat. Trebuie să recunoaștem probleme întâlnite anterior, să asociem informații din contexte diferite și să aplicăm ceea ce am învățat într-o situație nouă, care seamănă suficient de mult cu cea precedentă încât experiența să ne fie utilă, dar suficient de puțin încât să nu putem repeta mecanic același răspuns.</p>

<p>Și toate acestea înainte să ajungem acasă.</p>

<p>Acolo ne așteaptă o altă lume, cu propriile ei informații, responsabilități și decizii. Produsele pe care le cumpărăm, alimentele pe care le consumăm, lucrurile de care are nevoie familia, programările medicale, medicamentele, facturile, aniversările, planurile de concediu, discuțiile purtate cu prietenii, poveștile pe care ni le-au spus și detaliile pe care vrem să le păstrăm pentru că oamenii aceia contează pentru noi.</p>

<p>Cunoaștem sute de produse și le recunoaștem ambalajele. Știm care ne plac, care ne-au dezamăgit, unde le găsim, ce alternative există și cât suntem dispuși să plătim pentru ele. Navigăm printre denumiri comerciale, ingrediente, recomandări, contraindicații, prețuri și experiențe anterioare, de multe ori fără să conștientizăm câte informații trebuie corelate pentru a lua o decizie aparent banală.</p>

<p>Și, dacă după toate acestea mai avem curiozitatea să citim, să învățăm, să scriem, să construim un proiect sau să dezvoltăm o idee de afaceri, adăugăm noi straturi de cunoaștere peste cele pe care le folosim deja.</p>

<p>Mă gândesc inclusiv la propriul meu mod de a învăța, la cantitatea de informație pe care o consum pentru a scrie, pentru a înțelege un fenomen, pentru a construi o strategie sau pentru a dezvolta proiectele în care sunt implicat. Citesc despre subiecte care uneori nu par să aibă nicio legătură între ele, păstrez idei, recunosc asemănări, caut explicații și încerc să construiesc din toate acestea o perspectivă care să îmi aparțină. Uneori, o informație întâlnită cu luni în urmă revine într-un context complet diferit și devine exact piesa care lipsea dintr-un raționament.</p>

<p>Nu este și aceasta o formă de memorie? Nu este și aceasta o performanță?</p>

<p>Nu spun că oamenii de astăzi memorează neapărat mai mult decât cei de ieri și nici că simpla utilizare a tehnologiei este o dovadă de inteligență superioară. Spun doar că, înainte să deplângem dispariția unei abilități, ar trebui să ne întrebăm ce alte abilități au devenit necesare între timp și cât de corect este să comparăm două lumi luând în considerare doar ceea ce una dintre ele a încetat să mai folosească.</p>

<p>Pentru că poate nu ne-am pierdut memoria.</p>

<p>Poate că s-au schimbat lucrurile pentru care avem nevoie de ea.</p>

<h2 id="ne-slabeste-tehnologia-memoria-sau-schimba-ceea-ce-memoram">Ne slăbește tehnologia memoria sau schimbă ceea ce memorăm?</h2>

<p>Există o diferență între a reține o informație și a reține unde poate fi găsită.</p>

<p>Cercetările despre ceea ce a devenit cunoscut drept <em>efectul Google</em> au arătat că, atunci când oamenii se așteaptă să poată recupera ulterior o informație, în anumite condiții tind să rețină mai bine locul în care aceasta poate fi găsită decât conținutul propriu-zis.<sup><a href="#fn-1">1</a></sup></p>

<p>Mi se pare o observație extraordinară, nu pentru că ar demonstra superioritatea tehnologiei, ci pentru că ne invită să privim memoria ca pe un mecanism care își adaptează strategiile la mediul în care funcționează.</p>

<p>Dacă știu că un număr de telefon este salvat într-o agendă pe care o am permanent la îndemână, de ce l-aș repeta zilnic până când îl memorez? Dacă știu că pot consulta un document în câteva secunde, de ce aș reține fiecare detaliu al lui, în loc să păstrez principiile care mă ajută să îl interpretez?</p>

<p>Există însă o limită importantă, iar aici cred că trebuie să fim atenți.</p>

<p>Faptul că știm unde găsim o informație nu înseamnă că o și cunoaștem. Putem avea acces la toate bibliotecile lumii fără să fi înțeles o singură carte. Putem găsi răspunsul la aproape orice întrebare fără să avem suficiente cunoștințe pentru a recunoaște dacă acel răspuns este corect.</p>

<p>Mai mult, cunoașterea pe care o avem deja în minte este cea care ne permite să înțelegem lucruri noi, să facem conexiuni și să observăm contradicții. Nu putem construi orice raționament căutând fiecare piesă separat, fără să avem o structură de cunoștințe în care să le așezăm.</p>

<p>Un arhitect nu devine arhitect doar pentru că are acces la toate normele de proiectare. Un medic nu devine medic pentru că poate căuta simptome și tratamente, iar un inginer nu devine inginer pentru că poate descărca documentația unui sistem.</p>

<p>Valoarea lor vine și din informațiile pe care le-au interiorizat, din experiența acumulată și din capacitatea de a recunoaște relații între lucruri pe care altcineva le-ar privi separat.</p>

<p>Așadar, nu cred că viitorul aparține oamenilor care nu mai trebuie să memoreze nimic.</p>

<p>Cred că aparține, într-o măsură importantă, celor care înțeleg ce merită memorat, ce poate fi externalizat și cum să folosească instrumentele disponibile fără să renunțe la propria judecată.</p>

<p>Pentru că tehnologia poate prelua o parte din sarcinile memoriei, dar nu poate transforma automat informația accesibilă în înțelegere personală.</p>

<p>Și poate că tocmai aceasta este una dintre competențele importante ale prezentului: să știm ce trebuie să păstrăm în noi și ce putem lăsa în grija instrumentelor pe care le-am construit.</p>

<h2 id="de-ce-accesul-la-mai-multa-informatie-nu-inseamna-automat-mai-multa-cunoastere">De ce accesul la mai multă informație nu înseamnă automat mai multă cunoaștere?</h2>

<p>Totuși, aici apare o problemă pe care nu vreau să o ignor.</p>

<p>Am vorbit despre multitudinea aplicațiilor, despre informațiile pe care le întâlnim și despre complexitatea vieții contemporane. Dar simplul fapt că suntem expuși la cantități impresionante de informații nu înseamnă că le procesăm pe toate și cu atât mai puțin că le înțelegem sau că le păstrăm în memorie.</p>

<p>Există o diferență între a vedea o informație, a-i acorda atenție, a o înțelege și a o putea recupera atunci când avem nevoie de ea.</p>

<p>Putem petrece două ore citind știri și să nu reușim să explicăm coerent nici măcar unul dintre evenimentele despre care am citit. Putem urmări zeci de videoclipuri educative și să avem impresia că am învățat enorm, pentru ca a doua zi să descoperim că nu putem reproduce ideile principale fără să le căutăm din nou.</p>

<p>Putem participa la întâlniri, putem asculta prezentări, putem parcurge documente și putem răspunde la mesaje fără să fi avut vreodată suficientă liniște pentru a lega toate aceste informații între ele.</p>

<p>Iar acesta este un risc real.</p>

<p>Atenția noastră este limitată. Memoria de lucru, cea prin care păstrăm temporar informațiile necesare pentru a rezolva o problemă, nu se extinde automat doar pentru că lumea ne cere să gestionăm mai multe lucruri. Când trecem permanent de la o sarcină la alta, plătim un cost cognitiv, chiar dacă am devenit atât de obișnuiți cu această fragmentare încât nici nu o mai observăm.</p>

<p>Cercetările asupra distragerii atenției în timpul învățării au identificat efecte negative asupra capacității de a reține informațiile.<sup><a href="#fn-2">2</a></sup> Nu tot ceea ce tehnologia face posibil este, prin definiție, benefic pentru felul în care gândim.</p>

<p>Și totuși, mi se pare la fel de greșit să folosim aceste observații pentru a condamna întreaga epocă digitală.</p>

<p>Ar fi ca și cum am privi un oraș aglomerat, am constata că traficul produce zgomot, stres și poluare și am concluziona că omenirea a greșit atunci când a început să construiască orașe.</p>

<p>Problemele sunt reale, dar ele nu anulează automat beneficiile și nici nu ne scutesc de obligația de a înțelege ce anume trebuie îmbunătățit.</p>

<p>Poate că omul contemporan nu are nevoie doar de mai multe instrumente care să îi ofere informații, ci și de mai multă disciplină în a decide căror informații merită să le acorde atenție.</p>

<p>Poate că provocarea nu mai este doar să avem acces la cunoaștere, ci să ne putem opri suficient de mult asupra ei încât să o transformăm în ceva care rămâne.</p>

<p>Și poate că, în loc să întrebăm de ce oamenii nu mai rețin atât de multe lucruri, ar trebui să ne întrebăm de ce am construit un mediu în care le cerem să fie disponibili aproape permanent, dar le oferim tot mai puține momente de liniște pentru a reflecta.</p>

<h2 id="de-ce-uitam-o-limba-straina-pe-care-nu-o-mai-folosim">De ce uităm o limbă străină pe care nu o mai folosim?</h2>

<p>Mă gândesc și la oamenii care au învățat mai multe limbi străine.</p>

<p>Cineva poate să fi studiat franceza în școală, să fi vorbit-o foarte bine într-o anumită perioadă a vieții și apoi să nu o mai folosească aproape deloc timp de zece sau douăzeci de ani. Când încearcă să poarte din nou o conversație, caută cuvintele, ezită, confundă structuri gramaticale și poate avea impresia că a uitat tot ceea ce știa.</p>

<p>Dar o altă persoană, care a învățat aceeași limbă la un nivel asemănător și a continuat să o folosească ocazional, poate vorbi mult mai fluent.</p>

<p>Înseamnă că a doua persoană are neapărat o memorie mai bună?</p>

<p>Nu.</p>

<p>Înseamnă, printre altele, că informațiile pe care le folosim și le recuperăm periodic rămân mai accesibile. Repetiția distribuită în timp și exersarea activă a recuperării informațiilor sunt mecanisme bine cunoscute ale consolidării învățării.</p>

<p>Dar ceea ce mă interesează în acest exemplu nu este doar explicația cognitivă.</p>

<p>Mă interesează cât de ușor putem interpreta greșit o diferență de performanță atunci când ignorăm diferența de utilizare.</p>

<p>Omul care știa douăzeci de numere de telefon le folosea. Le forma, le repeta, le verifica, le scria și le asocia cu oamenii din viața sa.</p>

<p>Omul contemporan nu le mai folosește în același fel.</p>

<p>La fel cum cineva care nu a mai vorbit franceza de douăzeci de ani nu poate fi comparat, fără alte explicații, cu cineva care o vorbește săptămânal, nici generațiile nu pot fi comparate doar prin abilitatea de a reproduce informații pe care una dintre ele era nevoită să le utilizeze zilnic, iar cealaltă nu.</p>

<p>Și totuși, exact asta facem.</p>

<p>Ne alegem criteriile din perioada pe care o cunoaștem, observăm că oamenii prezentului nu mai obțin aceleași rezultate și proclamăm declinul.</p>

<p>Rareori ne întrebăm dacă nu cumva, între timp, au apărut alte criterii la care aceiași oameni ar putea obține rezultate diferite.</p>

<h2 id="a-scazut-inteligenta-noilor-generatii-ce-ne-spune-de-fapt-iq-ul">A scăzut inteligența noilor generații? Ce ne spune, de fapt, IQ-ul?</h2>

<p>Din această discuție despre memorie ajung inevitabil la o altă afirmație pe care am întâlnit-o tot mai des: aceea că omenirea ar fi ajuns la prima generație care nu o mai depășește pe cea precedentă din punctul de vedere al inteligenței.</p>

<p>De cele mai multe ori, argumentul face referire la coeficientul de inteligență, la rezultatele testelor IQ și la cercetări care au identificat stagnări sau scăderi ale scorurilor în anumite populații.</p>

<p>Există un fundament real pentru o parte dintre aceste discuții.</p>

<p>De-a lungul secolului trecut, cercetătorii au observat creșterea scorurilor obținute la anumite teste cognitive, fenomen cunoscut drept efectul Flynn. Ulterior, în unele țări, această tendință s-a temperat sau chiar s-a inversat. Cercetări realizate pe date din Norvegia au indicat că factorii de mediu joacă un rol important în explicarea acestor schimbări.<sup><a href="#fn-3">3</a></sup></p>

<p>Dar între observația că anumite scoruri au scăzut într-o anumită populație și afirmația că omenirea a devenit mai puțin inteligentă există o distanță pe care nu o putem traversa doar pentru că ne place concluzia.</p>

<p>IQ-ul măsoară anumite aptitudini cognitive. Este un instrument util, cu valoare științifică, și ar fi la fel de greșit să îi negăm relevanța pe cât ar fi să îl transformăm în singura măsură a inteligenței umane.</p>

<p>Pentru că, oricât de valoros ar fi un indicator, el rămâne un indicator.</p>

<p>Nu măsoară integral creativitatea, înțelepciunea, judecata morală, capacitatea de a construi relații, maturitatea emoțională sau felul în care cineva își folosește cunoștințele pentru a lua decizii cu efecte asupra propriei vieți și asupra celor din jur.</p>

<p>Putem întâlni un om care rezolvă cu o ușurință extraordinară probleme abstracte, dar care nu reușește să gestioneze o relație sau să își organizeze viața. Putem întâlni un altul, fără rezultate spectaculoase la teste cognitive, care construiește o afacere, înțelege oamenii, ia decizii echilibrate și creează condiții în care alții pot progresa.</p>

<p>Nu înseamnă că al doilea este automat mai inteligent decât primul și nici că inteligența poate fi redusă la succesul social sau financiar.</p>

<p>Înseamnă doar că performanța umană are mai multe dimensiuni decât cele pe care le putem surprinde printr-o singură evaluare.</p>

<p>Mai este însă ceva ce mă interesează.</p>

<p>De ce considerăm automat că nivelul atins de o generație anterioară reprezintă reperul corect?</p>

<p>Dacă o generație obținea scoruri mai mari la anumite teste, avem motive să cercetăm de ce. Dar de aici până la a considera acea generație un ideal uman este o diferență enormă.</p>

<p>Ce ne spune acel rezultat despre felul în care oamenii respectivi își construiau societatea, despre deciziile pe care le luau, despre problemele pe care le rezolvau sau despre cele pe care le lăsau moștenire?</p>

<p>Cât din performanța lor cognitivă s-a tradus în bunăstare, cooperare, responsabilitate și înțelegere? Cât s-a tradus în dezvoltare și cât în instrumente sau sisteme ale căror consecințe le gestionăm și astăzi?</p>

<p>Nu formulez întrebările acestea pentru a diminua realizările trecutului, ci pentru că nu înțeleg de ce am transforma un rezultat statistic într-o judecată morală sau civilizațională.</p>

<p>Un număr mai mare nu înseamnă automat o viață mai bună, după cum un număr mai mic nu demonstrează că toate celelalte capacități ale oamenilor au regresat.</p>

<p>Iar dacă vrem cu adevărat să înțelegem ce se întâmplă cu inteligența umană, poate că ar trebui să fim mai curioși în privința cauzelor și mai rezervați în privința verdictelor.</p>

<h2 id="inseamna-evolutia-ca-fiecare-generatie-trebuie-sa-fie-mai-inteligenta">Înseamnă evoluția că fiecare generație trebuie să fie mai inteligentă?</h2>

<p>Suntem tentați să privim evoluția ca pe o linie ascendentă, ca pe un drum în care fiecare etapă trebuie să fie mai bună decât cea de dinainte.</p>

<p>Dar evoluția biologică nu funcționează după criteriile cu care evaluăm rezultatele unui examen sau performanța unei companii.</p>

<p>Selecția naturală nu urmărește maximizarea inteligenței, a fericirii sau a capacității de memorare. Nu identifică un nivel ideal al IQ-ului pe care decide apoi să îl păstreze pentru generațiile următoare. Schimbările observate într-un interval de câteva decenii pot reflecta transformări ale mediului, educației, sănătății și culturii, fără să constituie neapărat dovezi ale unei schimbări genetice.</p>

<p>De altfel, nici ideea că omul ar fi cea mai adaptabilă specie de pe Pământ nu poate fi susținută fără să precizăm foarte atent ce înțelegem prin adaptabilitate.</p>

<p>Există organisme capabile să supraviețuiască în condiții în care noi nu am rezista nici câteva minute. Există forme de viață care se reproduc, se modifică și răspund la schimbările mediului în ritmuri incomparabil mai rapide decât omul.</p>

<p>Și totuși, noi avem o caracteristică remarcabilă.</p>

<p>Am învățat să ne modificăm mediul, să construim instrumente, să cooperăm, să acumulăm cunoștințe și să le transmitem mai departe, astfel încât fiecare generație să poată porni de la un nivel de dezvoltare colectivă pe care generația precedentă a contribuit la construirea lui.</p>

<p>Nu trebuie să reinventăm roata pentru a construi o mașină. Nu trebuie să descoperim individual electricitatea pentru a aprinde lumina și nici să înțelegem toate procesele prin care funcționează internetul pentru a putea comunica prin el.</p>

<p>Civilizația noastră este construită pe o acumulare de cunoaștere care depășește cu mult capacitatea oricărui individ de a o cuprinde în întregime.</p>

<p>Iar asta mă face să mă întreb dacă nu cumva greșim atunci când evaluăm progresul uman exclusiv prin ceea ce poate face un om izolat, fără să luăm în considerare sistemele de cunoaștere și instrumentele la care are acces.</p>

<p>Un om obișnuit din prezent poate realiza anumite lucruri care, cu două secole în urmă, ar fi necesitat efortul coordonat al multor persoane. Poate comunica instantaneu cu oameni aflați pe alte continente, poate accesa lucrări științifice, poate studia o limbă străină, poate construi produse digitale și poate folosi instrumente de inteligență artificială pentru a explora probleme pe care altădată nici nu ar fi știut cum să le abordeze.</p>

<p>Nu înseamnă că este individual mai inteligent decât oamenii de acum două secole.</p>

<p>Înseamnă că instrumentele de care dispune îi schimbă radical posibilitățile.</p>

<p>Și aici cred că apare o diferență importantă între inteligența individuală și performanța unei civilizații.</p>

<p>Poate că un om nu știe să facă toate lucrurile pe care le făceau strămoșii săi. Dar nici strămoșii săi nu știau să facă multe dintre lucrurile pe care el le face astăzi.</p>

<p>Fiecare trăiește într-un mediu care îi solicită, îi antrenează și îi valorifică anumite capacități.</p>

<p>Iar faptul că unele dintre ele devin mai puțin necesare nu dovedește, prin el însuși, că omul a devenit inferior.</p>

<h2 id="de-ce-se-tem-oamenii-de-tehnologiile-noi-lectia-lui-platon-despre-scriere">De ce se tem oamenii de tehnologiile noi? Lecția lui Platon despre scriere</h2>

<p>Există un exemplu istoric la care mă întorc ori de câte ori întâlnesc afirmații despre degradarea omului prin tehnologie.</p>

<p>În dialogul <em>Phaidros</em>, Platon prezintă, prin vocea lui Socrate, povestea inventării scrierii. În această poveste, regele Thamus avertizează că oamenii, odată ce vor putea păstra informațiile în semne scrise, își vor exersa mai puțin memoria. Vor ajunge să se bazeze pe lucruri aflate în exteriorul lor și vor putea dobândi aparența cunoașterii fără să dobândească înțelepciunea care ar trebui să o însoțească.<sup><a href="#fn-4">4</a></sup></p>

<p>Gândiți-vă puțin la această observație.</p>

<p>Acum aproximativ două mii patru sute de ani, scrierea putea fi privită ca o amenințare la adresa memoriei și a cunoașterii autentice.</p>

<p>Astăzi, tocmai scrierea este unul dintre instrumentele prin care admirăm inteligența trecutului. Citim autori antici, cităm filosofi, păstrăm opere literare și studiem idei pe care nu le-am fi cunoscut dacă oamenii nu ar fi găsit o modalitate de a le transmite dincolo de limitele memoriei individuale.</p>

<p>Ceea ce pentru unii reprezenta riscul pierderii unei abilități a devenit unul dintre cele mai importante instrumente ale dezvoltării civilizației.</p>

<p>Și totuși, avertismentul nu era lipsit de sens.</p>

<p>Scrierea nu garantează înțelepciunea, după cum internetul nu garantează cunoașterea, iar inteligența artificială nu garantează gândirea critică.</p>

<p>Pericolul nu a fost niciodată doar existența instrumentului, ci și felul în care alegem să îl folosim și ceea ce renunțăm să mai exersăm odată cu apariția lui.</p>

<p>Ceea ce mă surprinde însă este cât de familiară a rămas structura argumentului.</p>

<p>Atunci era scrierea. Mai târziu au fost alte instrumente, alte tehnologii, alte moduri de a produce, comunica sau învăța. Astăzi sunt telefoanele inteligente, rețelele sociale și inteligența artificială.</p>

<p>De fiecare dată apar oameni care privesc schimbarea cu entuziasm, oameni care o privesc cu teamă și oameni care sunt convinși că tocmai acea schimbare va distruge ceva esențial din natura umană.</p>

<p>Uneori temerile sunt justificate. Alteori sunt exagerate. De multe ori, realitatea aduce simultan beneficii și pierderi pe care nimeni nu le-a anticipat integral.</p>

<p>Dar merită să observăm cât de ușor se repetă reacțiile noastre.</p>

<p>Poate că peste două sute de ani, cineva va vorbi cu nostalgie despre generațiile care încă știau să folosească tastatura, să caute singure informații și să navigheze prin aplicații. Poate că oamenii viitorului vor considera extraordinare niște abilități pe care noi le tratăm astăzi ca pe niște gesturi obișnuite.</p>

<p>Și poate că aceiași oameni își vor privi propriii urmași cu dezamăgire, convinși că lumea a început să decadă în momentul în care aceștia au încetat să mai facă lucrurile așa cum le făceau ei.</p>

<p>Nu ar fi deloc surprinzător.</p>

<p>Ar fi doar încă o repetare a unei povești pe care omenirea pare să o cunoască foarte bine, dar din care învață surprinzător de puțin.</p>

<h2 id="de-ce-idealizam-trecutul-si-judecam-prezentul-atat-de-aspru">De ce idealizăm trecutul și judecăm prezentul atât de aspru?</h2>

<p>Cred că una dintre cele mai mari dificultăți pe care le avem atunci când comparăm generațiile este faptul că nu privim trecutul și prezentul din aceeași poziție.</p>

<p>Trecutul îl cunoaștem prin amintiri, relatări, fotografii, cărți și povești. Îi știm realizările, îi cunoaștem marile personalități și avem posibilitatea să privim retrospectiv evenimente al căror rezultat este deja stabilit.</p>

<p>Prezentul, în schimb, îl trăim fără să știm cum se va încheia.</p>

<p>Îi simțim incertitudinile, oboseala, conflictele, dezamăgirile și toate schimbările cărora încă nu le înțelegem consecințele.</p>

<p>Când privim în urmă, alegem aproape involuntar ceea ce merită păstrat. Ne amintim vacanțele, conversațiile frumoase, prieteniile, oamenii care ne-au inspirat și momentele în care viața părea mai simplă. În unele situații, memoria noastră ajunge să păstreze o imagine mai favorabilă a experiențelor decât felul în care le-am trăit în realitate.</p>

<p>Nu înseamnă că toate amintirile frumoase sunt iluzii. Înseamnă că felul în care ne amintim trecutul nu este întotdeauna o reproducere fidelă a întregii realități.</p>

<p>Și, când comparăm acel trecut cu prezentul, riscăm să punem față în față două lucruri profund diferite: o perioadă pe care am avut timp să o interpretăm și una pe care încă încercăm să o înțelegem.</p>

<p>În trecut, spunem, oamenii aveau mai mult timp unii pentru ceilalți.</p>

<p>Poate că în unele privințe aveau. Dar câți dintre ei aveau libertatea de a comunica instantaneu cu cineva aflat la mii de kilometri? Câți puteau păstra legătura cu persoane de care distanța i-ar fi despărțit definitiv? Câți aveau acces la aceleași oportunități de educație, de informare sau de exprimare?</p>

<p>În trecut, oamenii citeau mai mult.</p>

<p>Care oameni? În ce țări, în ce categorii sociale, la ce vârste și în comparație cu cine? Ce citeau, cât înțelegeau și cât din informația respectivă foloseau ulterior?</p>

<p>În trecut, oamenii erau mai inteligenți.</p>

<p>Care oameni? Ce înțelegem prin inteligență, cum o măsurăm și de ce am ales tocmai acea perioadă drept etalon?</p>

<p>În trecut, oamenii știau să trăiască.</p>

<p>O afirmație frumoasă, dar care merită aceeași întrebare: despre cine vorbim și ce anume alegem să ignorăm atunci când o formulăm?</p>

<p>Nu vreau să transform aceste întrebări într-un rechizitoriu împotriva trecutului. Dimpotrivă, cred că avem enorm de învățat din el.</p>

<p>Dar tocmai pentru că trecutul este atât de valoros, mi se pare nedrept să îl reducem la o imagine romantică, lipsită de contradicții, dificultăți și greșeli.</p>

<p>Îi admirăm oamenii excepționali și uităm uneori că ei nu reprezentau întreaga societate în care trăiau. Luăm operele care au rezistat timpului și le comparăm cu întregul flux de informații produse astăzi, inclusiv cu cele mediocre, superficiale sau lipsite de valoare.</p>

<p>Comparăm, fără să ne dăm seama, ceea ce a supraviețuit selecției istoriei cu ceea ce prezentul produce în timp real.</p>

<p>Este ca și cum am compara o bibliotecă alcătuită din cele mai bune cărți ale ultimelor cinci secole cu toate mesajele, comentariile și articolele publicate într-o singură zi pe internet, iar apoi am concluziona că oamenii din trecut scriau mai bine.</p>

<p>Poate că unii scriau extraordinar.</p>

<p>Dar unde sunt toate textele celor care nu scriau extraordinar? Unde sunt conversațiile banale, greșelile, opiniile superficiale și milioanele de lucruri care nu au meritat să fie păstrate?</p>

<p>Faptul că nu le mai vedem nu înseamnă că nu au existat.</p>

<p>Iar faptul că astăzi le putem vedea aproape pe toate nu înseamnă că întreaga omenire a devenit superficială.</p>

<p>Înseamnă și că avem acces la o parte mult mai mare din ceea ce oamenii gândesc, spun și produc, inclusiv la lucrurile care altădată ar fi rămas necunoscute.</p>

<p>Trecutul are avantajul selecției.</p>

<p>Prezentul poartă povara expunerii.</p>

<h2 id="ne-a-facut-progresul-tehnologic-mai-capabili-sau-doar-mai-ocupati">Ne-a făcut progresul tehnologic mai capabili sau doar mai ocupați?</h2>

<p>Nu aș vrea ca toate aceste argumente să ducă la concluzia că omul contemporan este automat mai performant, mai inteligent sau mai fericit decât predecesorii săi.</p>

<p>Ar fi aceeași eroare, doar că în direcția opusă.</p>

<p>Dacă nostalgia poate transforma trecutul într-un ideal, entuziasmul tehnologic poate transforma prezentul într-o demonstrație permanentă a superiorității noastre.</p>

<p>Și nici una dintre perspective nu este suficientă.</p>

<p>Da, avem instrumente extraordinare. Putem comunica mai repede, putem accesa informații aproape instantaneu, putem automatiza procese și putem produce într-o zi lucruri care altădată necesitau săptămâni sau luni.</p>

<p>Dar ce facem cu timpul pe care îl câștigăm?</p>

<p>Dacă o sarcină care necesita opt ore poate fi realizată în două, folosim cele șase ore rămase pentru a învăța, pentru a reflecta, pentru a petrece timp cu oamenii dragi sau pentru a ne odihni? Sau adăugăm alte trei sarcini, alte două întâlniri și încă un obiectiv pe care trebuie să îl atingem până la sfârșitul zilei?</p>

<p>Dacă tehnologia ne permite să fim disponibili permanent, disponibilitatea aceasta ne face mai eficienți sau ne împiedică să mai fim cu adevărat prezenți în ceea ce facem?</p>

<p>Dacă putem primi răspunsuri instantaneu, devenim mai curioși sau doar mai puțin răbdători?</p>

<p>Dacă avem acces la aproape orice informație, înțelegem mai mult sau ne obișnuim să acumulăm răspunsuri fără să mai petrecem suficient timp cu întrebările?</p>

<p>Sunt întrebări la care nu cred că există un singur răspuns și nici nu ar trebui să existe.</p>

<p>Pentru că experiențele oamenilor sunt diferite, iar progresul nu se distribuie uniform.</p>

<p>Un instrument care pentru cineva înseamnă libertate poate însemna pentru altcineva o nouă sursă de presiune. O tehnologie care elimină o muncă repetitivă poate deschide oportunități extraordinare pentru unii și poate produce nesiguranță pentru alții.</p>

<p>Iar dacă evaluăm performanța numai prin cantitatea de rezultate, fără să luăm în considerare calitatea lor și costul uman al obținerii lor, riscăm să numim progres o stare de epuizare colectivă pe care am învățat doar să o gestionăm mai eficient.</p>

<p>Mă gândesc la omul care petrece o zi întreagă luând decizii. Ascultă oameni, gestionează conflicte, analizează informații, își asumă responsabilități, încearcă să anticipeze consecințe și caută soluții pentru probleme care nu au întotdeauna un răspuns corect.</p>

<p>Ajunge acasă și, înainte să apuce să se așeze, telefonul îi amintește că mai are ceva de făcut. Un mesaj, o notificare, o informație nouă, o problemă care nu poate aștepta sau cel puțin așa pare.</p>

<p>Iar după toate acestea, omul trebuie să mai aibă suficientă răbdare pentru a asculta, suficientă atenție pentru a înțelege și suficientă energie pentru a fi prezent alături de familie.</p>

<p>Poate că nu își mai amintește un număr de telefon.</p>

<p>Poate că uită unde a pus cheile sau ce voia să cumpere de la magazin.</p>

<p>Dar înainte să transformăm aceste momente într-o dovadă a declinului uman, n-ar trebui să ne întrebăm ce anume îi solicită atenția în fiecare zi și câte lucruri încearcă să păstreze simultan în minte?</p>

<p>Și, mai ales, n-ar trebui să ne întrebăm dacă nu cumva adevărata performanță nu constă doar în a face tot mai multe lucruri, ci și în a rămâne întreg ca om în timp ce le faci?</p>

<p>Pentru că nu văd de ce am considera o societate mai avansată doar pentru că produce mai mult, dacă oamenii care o construiesc ajung să aibă tot mai puțin timp să se bucure de ceea ce au produs.</p>

<p>Nu spun că aceasta este inevitabil consecința progresului.</p>

<p>Spun că progresul tehnologic și progresul calității vieții nu sunt automat același lucru, iar diferența dintre ele merită discutată cu aceeași seriozitate cu care discutăm despre productivitate și inteligență.</p>

<h2 id="cum-schimba-cunoasterea-colectiva-felul-in-care-masuram-performanta">Cum schimbă cunoașterea colectivă felul în care măsurăm performanța?</h2>

<p>Poate că una dintre cele mai importante schimbări ale prezentului este faptul că depindem tot mai mult de cunoașterea distribuită.</p>

<p>Niciunul dintre noi nu ar putea reproduce individual întreaga infrastructură care îi permite să își înceapă dimineața.</p>

<p>Aprindem lumina fără să știm toate detaliile sistemului energetic. Folosim apa curentă fără să cunoaștem fiecare instalație prin care a trecut. Conducem mașini ale căror sisteme sunt rezultatul muncii coordonate a mii de specialiști. Deschidem un telefon și folosim tehnologii dezvoltate în zeci de domenii științifice, de oameni pe care nu îi vom cunoaște niciodată.</p>

<p>Ne sprijinim permanent pe inteligența, experiența și munca altora.</p>

<p>Așa a funcționat civilizația de foarte mult timp, dar complexitatea sistemelor actuale face această dependență tot mai vizibilă.</p>

<p>Și cred că aici se află o parte din răspunsul la întrebarea despre performanța individuală.</p>

<p>Dacă un om poate face astăzi lucruri pe care altădată nu le putea face nici o echipă întreagă, nu înseamnă neapărat că mintea lui a devenit mai performantă decât suma minților oamenilor care au trăit înaintea sa.</p>

<p>Înseamnă că lucrează folosind rezultatele muncii lor.</p>

<p>Asta nu îi diminuează realizările. Dar nici nu îi permite să își atribuie întreaga performanță.</p>

<p>La fel cum accesul la un instrument extraordinar nu ne face automat extraordinari, absența nevoii de a realiza manual fiecare etapă a unui proces nu ne transformă în oameni inferiori.</p>

<p>Un om care folosește un calculator pentru a rezolva o problemă complexă nu este neapărat mai puțin capabil decât cel care efectua toate calculele pe hârtie. Dar nici nu putem presupune că știe să interpreteze corect rezultatul doar pentru că a obținut unul.</p>

<p>De aici vine, cred, o responsabilitate nouă.</p>

<p>Pe măsură ce externalizăm tot mai multe operațiuni, devine cu atât mai important să înțelegem principiile care ne permit să le verificăm.</p>

<p>Dacă nu mai trebuie să memorăm toate informațiile, trebuie măcar să învățăm să le evaluăm.</p>

<p>Dacă nu mai trebuie să executăm manual toate procesele, trebuie să înțelegem suficient de bine consecințele lor.</p>

<p>Dacă inteligența artificială poate genera într-o secundă un răspuns care ar fi necesitat cândva ore de cercetare, avem în continuare responsabilitatea de a decide dacă acel răspuns este corect, relevant și potrivit pentru situația în care vrem să îl folosim.</p>

<p>Altfel, riscăm să confundăm capacitatea instrumentelor noastre cu propria capacitate de înțelegere.</p>

<p>Iar aceasta mi se pare o problemă mult mai importantă decât faptul că nu ne mai amintim câteva numere de telefon.</p>

<h2 id="de-ce-fiecare-generatie-crede-ca-generatiile-urmatoare-sunt-in-declin">De ce fiecare generație crede că generațiile următoare sunt în declin?</h2>

<p>Mă întorc la tonul cu care sunt făcute comparațiile de la care am pornit.</p>

<p>La acel regret, la dezamăgirea abia ascunsă și la convingerea că ceva esențial s-a pierdut.</p>

<p>Mă întreb cât din toate acestea vine dintr-o evaluare obiectivă și cât din nevoia noastră de a considera valoroasă lumea în care ne-am format.</p>

<p>Pentru că nu este deloc ușor să accepți că lucruri pentru care ai muncit, pe care le-ai învățat și care cândva îți demonstrau competența au devenit mai puțin necesare.</p>

<p>Nu este ușor să vezi că un om mai tânăr poate obține în câteva minute un rezultat pentru care tu aveai nevoie de ore. Nu este ușor să accepți că experiența ta, deși rămâne valoroasă, nu mai este suficientă pentru a înțelege fiecare schimbare.</p>

<p>Și poate că tocmai de aceea nostalgia este uneori atât de convingătoare.</p>

<p>Nu ne oferă doar o imagine frumoasă a trecutului. Ne oferă și confirmarea că lumea în care am învățat să fim competenți era lumea care conta.</p>

<p>Dacă prezentul devine inferior, trecutul rămâne superior. Iar dacă trecutul rămâne superior, atunci abilitățile, experiențele și reperele noastre își păstrează automat statutul.</p>

<p>Nu spun că oamenii fac întotdeauna aceste comparații din orgoliu sau din teamă. Uneori există pierderi reale, iar cei care le observă au toate motivele să le semnaleze.</p>

<p>Dar cred că merită să ne întrebăm dacă evaluăm schimbarea pentru ceea ce produce sau pentru felul în care ne face să ne simțim.</p>

<p>Pentru că lumea nu a început să se schimbe în momentul în care am devenit noi suficient de maturi încât să observăm schimbarea.</p>

<p>Și nici nu se va opri atunci când noi vom considera că a ajuns la forma ei cea mai bună.</p>

<p>Fiecare generație a moștenit o lume pe care nu a construit-o integral, a modificat-o folosind instrumentele și cunoștințele disponibile și a lăsat în urmă alte probleme, alte oportunități și alte întrebări.</p>

<p>Unele generații au construit instituții pe care le folosim și astăzi. Altele au corectat greșeli considerate anterior normale. Unele au făcut descoperiri extraordinare, iar altele au fost nevoite să gestioneze consecințele acelor descoperiri.</p>

<p>Nu există un moment unic în istorie în care omenirea să fi atins forma ideală de inteligență, moralitate, organizare și bunăstare, după care totul să fi început să se degradeze.</p>

<p>Există progres în anumite privințe, regres în altele, perioade de stabilitate, schimbări bruște, adaptări reușite și greșeli repetate.</p>

<p>Iar ceea ce numim astăzi modernitate va deveni, inevitabil, trecutul despre care vor vorbi generațiile următoare.</p>

<p>Întrebarea este dacă le vom lăsa doar instrumentele pe care le-am construit sau și capacitatea de a le judeca lucid, fără să confunde familiaritatea cu superioritatea.</p>

<h2 id="cum-putem-invata-din-trecut-fara-sa-condamnam-viitorul">Cum putem învăța din trecut fără să condamnăm viitorul?</h2>

<p>Mi se pare că omenirea are o relație ciudată cu propria experiență.</p>

<p>Am construit biblioteci, arhive, universități și sisteme întregi dedicate conservării cunoașterii. Am documentat războaie, crize, descoperiri, conflicte, greșeli și transformări sociale. Avem acces la experiențe acumulate de-a lungul mileniilor și putem analiza consecințele unor decizii înainte ca acestea să se repete în forme noi.</p>

<p>Și totuși, în fața schimbării, continuăm să avem uneori aceeași reacție.</p>

<p>Ne uităm în urmă, identificăm lucrurile pe care prezentul nu le mai face în același fel și ne grăbim să declarăm că lumea merge într-o direcție greșită.</p>

<p>Nu începem prin a întreba ce s-a schimbat în realitate, ce nevoi au apărut, ce probleme au dispărut, ce probleme noi au fost create și ce capacități sunt necesare pentru a le gestiona.</p>

<p>Începem cu verdictul.</p>

<p>Iar apoi căutăm argumentele care să îl susțină.</p>

<p>Poate că în trecut oamenii aveau anumite capacități de memorare mai bine exersate. Poate că prezentul ne-a făcut mai puțin răbdători în unele privințe. Poate că folosirea excesivă a tehnologiei afectează anumite forme de atenție și învățare. Sunt ipoteze și observații care merită cercetate, nu respinse doar pentru că nu se potrivesc cu imaginea noastră despre progres.</p>

<p>Dar poate că oamenii de astăzi au dezvoltat și alte competențe, alte modalități de a organiza informația, alte forme de colaborare și alte capacități de a construi lucruri pe care generațiile anterioare nu aveau cum să le anticipeze.</p>

<p>Și acestea merită înțelese.</p>

<p>Nu cred că avem nevoie să alegem între admirația pentru trecut și încrederea în viitor.</p>

<p>Putem aprecia memoria oamenilor care recitau poezii întregi fără să considerăm că un om care nu le mai recită este inferior. Putem admira erudiția unui filosof fără să presupunem că toți contemporanii săi aveau același nivel de înțelegere. Putem recunoaște beneficiile tehnologiei fără să ignorăm dependențele pe care le creează.</p>

<p>Putem păstra ceea ce a fost valoros fără să încercăm să conservăm întreaga lume în care acel lucru a apărut.</p>

<p>Și putem critica prezentul fără să avem nevoie să inventăm un trecut perfect.</p>

<p>De fapt, cred că aceasta este una dintre formele autentice de maturitate ale unei societăți: capacitatea de a privi în urmă fără idealizare și de a privi înainte fără naivitate.</p>

<p>Să înțelegem că o schimbare nu este bună doar pentru că este nouă, dar nici rea doar pentru că ne obligă să renunțăm la ceva familiar.</p>

<p>Să înțelegem că pierderea unei abilități poate reprezenta un cost real, fără ca acest cost să fie suficient pentru a condamna întregul proces care l-a produs.</p>

<p>Și, mai ales, să înțelegem că generațiile care vin după noi nu au obligația de a reproduce performanțele pe care noi le consideram importante, ci responsabilitatea de a folosi ceea ce au moștenit pentru a răspunde problemelor propriei lor lumi.</p>

<p>Așa cum și noi avem această responsabilitate față de lumea în care trăim.</p>

<h2 id="intrebari-esentiale-despre-memorie-iq-si-tehnologie">Întrebări esențiale despre memorie, IQ și tehnologie</h2>

<h3 id="oamenii-de-astazi-au-o-memorie-mai-slaba-decat-cei-din-trecut">Oamenii de astăzi au o memorie mai slabă decât cei din trecut?</h3>

<p>Nu putem trage o concluzie generală din faptul că oamenii memorează astăzi mai puține numere de telefon sau adrese. Performanța memoriei depinde și de tipul informației, de frecvența utilizării, de atenție și de felul în care este evaluată. Instrumentele digitale schimbă ceea ce exersăm, nu oferă singure un verdict asupra întregii memorii umane.</p>

<h3 id="de-ce-tineau-oamenii-minte-mai-multe-numere-de-telefon-inainte-de-smartphone">De ce țineau oamenii minte mai multe numere de telefon înainte de smartphone?</h3>

<p>Pentru că erau nevoiți să le folosească și să le repete. Formarea frecventă a numerelor susținea învățarea și recuperarea lor. Astăzi, agenda digitală elimină o parte din această nevoie, iar lipsa exercițiului nu este, în sine, dovada unei deteriorări generale a inteligenței.</p>

<h3 id="ce-este-efectul-google-asupra-memoriei">Ce este efectul Google asupra memoriei?</h3>

<p>Este denumirea asociată unor observații experimentale potrivit cărora, atunci când ne așteptăm să avem acces ulterior la o informație, putem reține mai bine unde o găsim decât informația în sine. Acest efect nu înseamnă că întregul nostru sistem de memorie a devenit mai slab.</p>

<h3 id="au-generatiile-noi-un-iq-mai-mic-decat-generatiile-anterioare">Au generațiile noi un IQ mai mic decât generațiile anterioare?</h3>

<p>Unele populații au înregistrat stagnări sau inversări ale creșterii scorurilor la teste cognitive, după perioade de creștere descrise prin efectul Flynn. Rezultatele nu justifică însă afirmația că toate generațiile tinere, din întreaga lume, sunt mai puțin inteligente. În plus, IQ-ul este o măsură relevantă a anumitor aptitudini cognitive, nu o evaluare completă a omului.</p>

<h3 id="ne-face-inteligenta-artificiala-mai-putin-capabili-sa-gandim">Ne face inteligența artificială mai puțin capabili să gândim?</h3>

<p>Nu există un răspuns universal care să se aplice tuturor utilizărilor. AI poate reduce efortul depus pentru căutare și sarcini repetitive, dar folosirea ei necritică poate încuraja dependența de răspunsuri pe care nu le înțelegem sau verificăm. Diferența o face felul în care folosim instrumentul și ceea ce continuăm să exersăm independent.</p>

<h3 id="de-ce-fiecare-generatie-spune-ca-inainte-era-mai-bine">De ce fiecare generație spune că „înainte era mai bine”?</h3>

<p>Pentru că trecutul este filtrat de memorie, selecție culturală și familiaritate, în vreme ce prezentul este trăit cu toate incertitudinile sale. Comparația devine adesea inegală: punem ceea ce istoria a păstrat drept valoros lângă tot ceea ce prezentul produce, inclusiv lucrurile banale și mediocre.</p>

<hr />

<h2 id="poate-ca-nu-memoria-este-problema">Poate că nu memoria este problema</h2>

<p>Mă gândesc din nou la omul care spune că generațiile actuale nu mai țin minte nimic.</p>

<p>Poate că are dreptate într-o anumită privință. Poate că oamenii nu mai rețin la fel de multe numere de telefon, nu mai recită la fel de des poezii și nu mai memorează informații pentru care există acum instrumente de recuperare aproape instantanee.</p>

<p>Poate că unele dintre aceste schimbări reprezintă pierderi pe care ar trebui să le luăm în serios.</p>

<p>Dar aș vrea să îl întreb ce altceva a observat.</p>

<p>A observat cât de multe lucruri trebuie să învețe un om pentru a funcționa într-o lume care se schimbă permanent? Câte sisteme trebuie să înțeleagă, câte informații trebuie să coreleze, câte decizii trebuie să ia și câte contexte diferite trebuie să gestioneze înainte să ajungă la sfârșitul unei zile?</p>

<p>A observat câte instrumente avem astăzi la dispoziție și cât de diferit putem construi, comunica, învăța și colabora datorită lor?</p>

<p>A observat și riscurile reale, dincolo de nostalgia pentru obiceiurile care au dispărut? Fragmentarea atenției, supraîncărcarea informațională, dependența de sisteme pe care nu le înțelegem suficient și tentația de a confunda un răspuns primit cu o problemă înțeleasă?</p>

<p>Sau a ales doar ceea ce lipsește din prezent, fără să privească și ceea ce a apărut în loc?</p>

<p>Pentru că, dacă vrem să judecăm corect o generație, trebuie să încercăm să înțelegem întreaga lume în care aceasta trăiește, nu doar lucrurile pe care nu le mai face așa cum le făceam noi.</p>

<p>Și dacă vrem să înțelegem progresul, trebuie să fim dispuși să recunoaștem atât beneficiile, cât și costurile sale, fără să presupunem că răspunsul era deja cunoscut de generația precedentă.</p>

<p>Nu știu dacă omul de astăzi este, în ansamblu, mai inteligent decât cel de acum o sută de ani. Nu cred că avem suficiente motive să formulăm un asemenea verdict fără să stabilim mai întâi ce înțelegem prin inteligență și cum putem compara condiții de viață atât de diferite.</p>

<p>Dar știu că întrebarea merită mai mult decât o comparație între numere de telefon memorate, poezii recitate și scoruri obținute la un test.</p>

<p>Și mai știu că fiecare generație a avut motive să privească schimbarea cu teamă, admirație sau dezamăgire. Unele temeri s-au adeverit, altele au fost infirmate, iar o parte dintre transformările cele mai importante au produs consecințe pe care nimeni nu le-a anticipat în întregime.</p>

<p>Tocmai de aceea mi se pare atât de important să nu transformăm familiaritatea în adevăr și nostalgia în criteriu de evaluare.</p>

<p>Pentru că trecutul nu este valoros fiindcă ar fi fost perfect, ci fiindcă ne oferă experiența unor oameni care au încercat, asemenea nouă, să înțeleagă o lume aflată în schimbare.</p>

<p>Iar dacă există ceva ce am putea învăța din toate aceste experiențe, poate că este tocmai faptul că nu trebuie să repetăm fiecare judecată pe care au formulat-o cei de dinaintea noastră.</p>

<p>Nu trebuie să ne temem automat de tot ceea ce nu cunoaștem și nici să admirăm fără discernământ tot ceea ce este nou.</p>

<p>Putem să privim mai atent, să punem întrebări mai bune, să recunoaștem ceea ce nu știm și să folosim trecutul pentru a înțelege prezentul, nu pentru a-l condamna.</p>

<p>Poate că problema nu este că oamenii de astăzi nu mai țin minte atât de multe lucruri precum cei de ieri, ci că noi, cei de astăzi, continuăm să uităm cât de des au greșit cei de ieri atunci când au judecat lumea de mâine.</p>

<p>Avem la dispoziție mii de ani de istorie, milioane de pagini de cunoaștere și instrumente capabile să ne aducă aproape instantaneu răspunsuri la întrebări pe care strămoșii noștri nici nu și le-ar fi putut formula. Și totuși, în fața fiecărei schimbări, părem tentați să repetăm aceeași sentință: înainte era mai bine.</p>

<p>Nu neapărat pentru că am demonstrat-o, ci pentru că înainte era lumea pe care o cunoșteam. O lume în care lucrurile aveau sens pentru noi, în care competențele noastre erau utile, în care știam ce trebuie să facem și în care viitorul nu apucase încă să ne arate cât de multe dintre certitudinile noastre erau, de fapt, temporare.</p>

<p>Poate că peste câteva decenii vom fi chiar noi cei care vor privi cu dezamăgire generațiile următoare. Poate că vom povesti cu mândrie cum știam să scriem fără ajutorul inteligenței artificiale, cum navigam singuri prin aplicații, cum învățam să folosim instrumente complicate și cum eram nevoiți să căutăm informațiile în loc să le primim direct.</p>

<p>Și poate că oamenii care ne vor asculta vor zâmbi, așa cum zâmbim și noi astăzi atunci când auzim despre lucruri care cândva păreau indispensabile.</p>

<p>Mi-ar plăcea să cred că vom avea suficientă curiozitate încât să nu confundăm acel zâmbet cu lipsa lor de respect și suficientă înțelepciune încât să nu confundăm propriile noastre amintiri cu măsura universală a progresului.</p>

<p>Pentru că, dacă într-adevăr vrem să lăsăm generațiilor următoare o lume mai bună, nu este suficient să le transmitem ceea ce știm.</p>

<p>Trebuie să le lăsăm și libertatea de a descoperi ceea ce noi încă nu înțelegem.</p>

<p>Iar dacă există o formă de uitare care ar trebui să ne îngrijoreze cu adevărat, poate că nu este uitarea numerelor de telefon, a adreselor, a poeziilor sau a datelor istorice.</p>

<p>Poate că este incapacitatea noastră de a ne aminti că fiecare generație a fost, la un moment dat, prezentul pe care generația anterioară îl privea cu neîncredere.</p>

<p>Și că, în ciuda tuturor lucrurilor pe care am învățat să le memorăm, să le scriem, să le arhivăm și să le recuperăm, continuăm să uităm tocmai lecția pe care istoria ne-a repetat-o de atâtea ori.</p>

<p><strong>Că lumea nu devine neapărat mai rea atunci când încetează să mai semene cu lumea pe care am cunoscut-o noi.</strong></p>

<p>Iar dacă vrem cu adevărat să demonstrăm că suntem o generație capabilă să învețe din trecut, poate că ar trebui să începem prin a nu mai condamna viitorul înainte să încercăm să îl înțelegem.</p>

<h2 id="surse">Surse</h2>

<ol class="footnotes">

  <li id="fn-1">Betsy Sparrow, Jenny Liu, Daniel M. Wegner, „Google Effects on Memory: Cognitive Consequences of Having Information at Our Fingertips”, <em>Science</em>, 333(6043), 2011. <a href="https://pubmed.ncbi.nlm.nih.gov/21764755/" target="_blank" rel="noopener noreferrer">pubmed.ncbi.nlm.nih.gov/21764755</a></li>

  <li id="fn-2">Quan Chen, Zheng Yan, Mariola Moeyaert, Robert L. Bangert-Drowns, „Mobile multitasking in learning: A meta-analysis of effects of mobile phone distraction on young adults’ immediate recall”, <em>Computers in Human Behavior</em>, 2024. <a href="https://doi.org/10.1016/j.chb.2024.108432" target="_blank" rel="noopener noreferrer">doi.org/10.1016/j.chb.2024.108432</a></li>

  <li id="fn-3">Bernt Bratsberg, Ole Rogeberg, „Flynn effect and its reversal are both environmentally caused”, <em>Proceedings of the National Academy of Sciences</em>, 115(26), 2018. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6042097/" target="_blank" rel="noopener noreferrer">pmc.ncbi.nlm.nih.gov/articles/PMC6042097</a></li>

  <li id="fn-4">Platon, <em>Phaidros</em>, traducere în limba engleză de Benjamin Jowett, Internet History Sourcebooks Project, Fordham University. <a href="https://sourcebooks.fordham.edu/ancient/plato-phaedrus.asp" target="_blank" rel="noopener noreferrer">sourcebooks.fordham.edu/ancient/plato-phaedrus.asp</a></li>

</ol>
`,
} satisfies NewPost;
