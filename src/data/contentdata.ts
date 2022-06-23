export enum QuestionTypes {
  OPEN,
  MC,
  RANGE,
}

export interface CardData {
  id?: number;
  question: boolean;
  title: string;
  content: string;
  photo?: string;
  options?: string[];
  range?: number;
  placeholder?: string;
}

const day1: CardData[] = [
  {
    question: true,
    title: "Medication check",
    content: "Have you taken your medication today?",
    options: ["yes", "no", "I will do it now"],
  },
  {
    question: true,
    title: "Introduction",
    content: "What is your name?",
    placeholder: "Fill in your name...",
  },
  {
    question: true,
    title: "Introduction",
    content: "How old are your now?",
    placeholder: "Fill in your age...",
  },
  {
    question: true,
    title: "Introduction",
    content: "What is your gender?",
    options: ["male", "female", "other", "prefer not to say"],
  },
  {
    question: true,
    title: "Daily question",
    content: "How are you feeling today? (0-5)",
    range: 5,
  },
  {
    question: true,
    title: "Medication knowledge",
    content:
      "How would you judge your knowledge about your medication at this moment? (0-5)",
    range: 5,
  },
];

const day2: CardData[] = [
  {
    question: true,
    title: "Medication check",
    content: "Have you taken your medication today?",
    options: ["yes", "no", "I will do it now"],
  },
  {
    question: true,
    title: "Medication knowledge",
    content:
      "How would you judge your knowledge about your medication at this moment? (0-5)",
    range: 5,
  },
  {
    question: true,
    title: "Medication knowledge",
    content: "Name something you have learned about your medication (if any)",
    placeholder: "Fill in...",
  },
  {
    question: true,
    title: "Side effects",
    content: "Have you noticed any side effects from your medication?",
    placeholder: "Fill in...",
  },
];

const day3: CardData[] = [
  {
    question: true,
    title: "Medication check",
    content: "Have you taken your medication today?",
    options: ["yes", "no", "I will do it now"],
  },
  {
    question: true,
    title: "Medication knowledge",
    content:
      "How would you judge your knowledge about your medication at this moment? (0-5)",
    range: 5,
  },
  {
    question: true,
    title: "Side effects",
    content: "Have you noticed any side effects from your medication?",
    placeholder: "Fill in...",
  },
  {
    question: true,
    title: "Rate this application",
    content: "How would you rate this appplication? (0-5)",
    range: 5,
  },
  {
    question: true,
    title: "Medication knowledge",
    content: "Do you think you have learned something about your medication?",
    options: ["yes", "no"],
  },
];

export const allDays: CardData[][] = [day1, day2, day3];

export const allCards: CardData[] = [
  {
    id: 0,
    question: true,
    title: "Daily open question",
    content: "Have you taken your medication?",
    placeholder: "insert someting",
  },
  {
    id: 1,
    question: true,
    title: "Daily mc question",
    content: "What is your gender?",
    options: ["male", "female"],
  },
  {
    id: 2,
    question: true,
    title: "Daily question",
    content: "How are you feeling today?",
    range: 5,
  },
  {
    id: 3,
    question: true,
    title: "Knowledge of your medication",
    content:
      "How do you judge your knowledge about your medication at this moment?",
    range: 5,
  },
  {
    id: 4,
    question: true,
    title: "Medication learnning ",
    content: "What do you want to learn about your medication?",
    placeholder: "fill in",
  },
  {
    id: 5,
    question: true,
    title: "Medication learnning ",
    content: "What knowledge about your medication are you still missing?",
    placeholder: "fill in",
  },
  {
    id: 6,
    question: false,
    title: "Information about your medicine",
    content:
      "Did you know that 60% of american adults are on some form of medication",
    photo: "/med.png",
  },
];

export interface BadgeContent {
  title: string;
  badge: string;
  color: string;
  key: string;
}

export const badges: BadgeContent[] = [
  {
    title: "Logged in on the application",
    badge: "/assets/badges/shield-silver-colored-20-check-1000.png",
    key: "login-silver",
    color: "silver",
  },
  {
    title: "Answered all questions",
    badge: "/assets/badges/shield-silver-colored-19-question-1000.png",
    color: "silver",
    key: "question-silver",
  },
  {
    title: "2 day streak",
    badge: "/assets/badges/shield-silver-colored-06-clock-1000.png",
    color: "silver",
    key: "day-silver",
  },
  {
    title: "3 day question streak",
    badge: "/assets/badges/shield-gold-colored-19-question-1000.png",
    color: "gold",
    key: "question-gold",
  },
  {
    title: "Halfway on your medication",
    badge: "/assets/badges/shield-silver-colored-01-heart-1000.png",
    color: "silver",
    key: "medication-silver",
  },
  {
    title: "Knowledge gainer",
    badge: "/assets/badges/shield-silver-colored-04-lightbulb-1000.png",
    color: "silver",
    key: "lightbulb-silver",
  },
  {
    title: "3 day streak",
    badge: "/assets/badges/shield-gold-colored-06-clock-1000.png",
    color: "gold",
    key: "day-gold",
  },
  {
    title: "Medication Einstein",
    badge: "/assets/badges/shield-gold-colored-04-lightbulb-1000.png",
    color: "gold",
    key: "lightbulb-gold",
  },
  {
    title: "Completed your medication",
    badge: "/assets/badges/shield-gold-colored-01-heart-1000.png",
    color: "gold",
    key: "medication-gold",
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export interface Medication {
  name: string;
  informal_name?: string;
  dosis: number;
  next_med_moment_hour: number;
  next_med_moment_minute: number;
  information: string;
  faq?: FAQ[];
}

export const HayFever: Medication = {
  name: "cetirzine",
  informal_name: "anti-allergiemedicijn",
  dosis: 2,
  next_med_moment_hour: 14,
  next_med_moment_minute: 32,
  information: `Cetirizine is een anti-allergiemedicijn.
  Bij allergie, zoals hooikoorts, door allergie ontstoken ogen of neus, jeuk en netelroos.
  Werkt na ongeveer een uur. De werking houdt een dag aan.`,
  faq: [
    {
      question: `Wat doet cetrizine en waarbij gebruik ik het?`,
      answer: `Cetirizine is een anti-allergiemedicijn.
Het wordt gebruikt bij verschillende vormen van allergie, zoals hooikoorts, langdurig ontstoken neusslijmvlies, ontstoken ogen door allergie, netelroos en jeuk.`,
    },
    {
      question: `Wat zijn de mogelijke bijwerkingen?`,
      answer: `Behalve het gewenste effect kan dit medicijn bijwerkingen geven.De belangrijkste bijwerkingen zijn de volgende:
      
Zelden (bij 1 tot 10 op de 100 mensen) 
- Sufheid, slaperigheid en vermoeidheid.
- Hoofdpijn en duizeligheid. 
- Droge mond, keel of neus. 
- Als u het syndroom van Sjögren heeft, een aandoening waarbij de slijmvliezen van onder andere ogen en mond droger zijn dan normaal: u kunt meer klachten krijgen.
      
Zeer zelden (bij minder dan 1 op de 100 mensen)
- Maagdarmklachten, zoals misselijkheid, buikpijn en diarree.  
- Kriebelingen, jeuk of tintelingen op de huid.
- Opwinding, slapeloosheid, verwardheid, agressie, beven en trillen. 
- Hartkloppingen, versnelde hartslag, kortademigheid. 
- Vocht vasthouden (oedeem) en gewichtstoename. 
- Leveraandoeningen. U kunt dit merken aan een gevoelige, opgezwollen buik of een gele verkleuring van het oogwit of van de huid. 
- Overgevoeligheid voor dit medicijn. 
- Moeilijk kunnen plassen. 

Neem contact op met uw apotheker of arts als u te veel last heeft van deze of andere bijwerkingen waar u zich zorgen over maakt.
`,
    },
    {
      question: `Hoe gebruik ik dit medicijn?`,
      answer: `Hoe? 
- Tabletten: innemen met een half glas water. 
Drank: schud de fles voor gebruik. Meet de juiste hoeveelheid af met het maatbekertje of de maatlepel. Drink die hoeveelheid op. Spoel het maatbekertje na met wat water en drink dat ook op.  

Wanneer? 
- Heeft u altijd last van allergie, neem het dan elke dag in. 
- Heeft u af en toe last, neem het dan alleen in als u een allergische reactie heeft, of een uur voor u een allergische reactie verwacht te krijgen. Bijvoorbeeld bij een bezoek aan iemand met een huisdier waar u allergisch voor bent.  
- Als u last heeft van bijwerkingen, zoals sufheid en slaperigheid, dan kunt u de tablet het beste 's avonds innemen. U kunt ook een halve tablet 's ochtends en een halve tablet 's avonds innemen. De kans op bijwerkingen is dan kleiner.  

Hoe lang? 
Voor hooikoorts is enkele weken gebruik meestal voldoende. Bij een allergie het hele jaar door kunt u het gebruiken zolang u klachten heeft.
Mocht u na drie dagen gebruik geen verbetering merken, dan heeft u waarschijnlijk geen baat bij dit medicijn. Overleg dan met uw arts.`,
    },
    {
      question: `Wat moet ik doen als ik een dosis ben vergeten?`,
      answer: `- Als u dit medicijn 1 keer per dag gebruikt: duurt het nog meer dan acht uur voor u de volgende dosis normaal inneemt? Neem de vergeten dosis dan alsnog in. Duurt het nog minder dan acht uur? Sla de vergeten tablet dan over. 
- Als u dit medicijn 2 keer per dag gebruikt: duurt het nog meer dan vier uur voor u de volgende dosis normaal inneemt? Neem de vergeten dosis dan alsnog in. Duurt het nog minder dan vier uur? Sla de vergeten dosis dan over. 
- Als u dit medicijn 4 keer per dag gebruikt: duurt het nog meer dan 1 uur voor u de volgende dosis normaal inneemt? Neem de vergeten dosis dan alsnog in. Duurt het nog minder dan 1 uur? Sla de vergeten dosis dan over.`,
    },
    {
      question: `Kan ik met dit medicijn autorijden, alcohol drinken en alles eten of drinken?`,
      answer: `autorijden?
Meestal heeft dit medicijn geen effect op de rijvaardigheid. Maar het kan zijn dat u de eerste dagen dat u dit medicijn gebruikt, wat suf, slaperig, vermoeid of duizelig bent. Heeft u hier last van? Dan kunt u beter niet autorijden. Na enkele dagen zijn deze bijwerkingen meestal weer over. Autorijden is dan geen probleem.

Voor meer algemene informatie kunt u het thema 'Medicijnen in het verkeer' lezen. In dit thema leest u bijvoorbeeld wat de wet zegt over medicijnen in het verkeer. Ook vindt u adviezen waarmee u rekening moet houden als u wel (weer) mag autorijden.

alcohol drinken?
Alcohol kan net als dit medicijn versuffend werken. Hierdoor kunnen uw coördinatie- en beoordelingsvermogen afnemen. Probeer het drinken van alcohol daarom eerst met mate.

alles eten?
Bij dit medicijn zijn hiervoor geen beperkingen.`,
    },
    {
      question: `Mag ik cetirizine met andere medicijnen gebruiken?`,
      answer: `Er zijn van dit medicijn geen belangrijke wisselwerkingen met andere medicijnen bekend.`,
    },
    {
      question: `Mag ik dit medicijn gebruiken als ik zwanger ben, wil worden of borstvoeding geef?`,
      answer: `Probeer eerst uw allergische klachten te behandelen met medicijnen in de vorm van oogdruppels, neussprays of crème. Van deze medicijnen komt namelijk minder in uw bloed terecht dan van medicijnen die u via de mond inneemt. De kans is dan ook kleiner dat het medicijn via u bij de baby terechtkomt. Overleg met uw arts welk medicijn voor u mogelijk is.

Zijn oogdruppels, neussprays of crème voor u niet mogelijk of zijn de klachten zeer hevig? Dan kunt u hieronder het advies voor cetirizine vinden.

Zwangerschap
U kunt dit medicijn veilig gebruiken als u zwanger bent of binnenkort wilt worden. Het wordt al jarenlang gebruikt door vrouwen die zwanger zijn of willen worden zonder problemen met de vruchtbaarheid, voor de zwangerschap of voor het kind.

Borstvoeding
U kunt dit medicijn veilig gebruiken als u borstvoeding geeft. Het komt in kleine hoeveelheden in de moedermelk terecht. Bij vrouwen die dit medicijn hebben gebruikt tijdens het geven van borstvoeding, zijn tot nu toe geen problemen bij het kind ontstaan.

Gebruikt u medicijnen op recept of die u zonder recept koopt? Wilt u helpen om de kennis over medicijngebruik tijdens zwangerschap en borstvoeding te vergroten? Meld dan uw ervaring bij Moeders van Morgen.`,
    },
    {
      question: `Mag ik dit medicijn gebruiken als de werking van mijn nieren of lever minder is?`,
      answer: `Nieren
Werken uw nieren minder goed? Of dialyseert u? Overleg dan met uw apotheker. Het kan zijn dat de dosering van uw medicijn aangepast moet worden.

Lever
Heeft u levercirrose? Gebruik dit medicijn alleen na overleg met uw arts. Levercirrose kan de hoeveelheid van dit medicijn in uw bloed verhogen. Hierdoor kan dit medicijn meer bijwerkingen veroorzaken. Het kan zijn dat uw dosering aangepast moet worden.

Voor meer algemene informatie kunt u het thema “Verminderde nierfunctie en medicijnen”  lezen. In dit thema leest u bijvoorbeeld wat de invloed van een verminderde nierfunctie is op uw medicijnen. En leest u hoe uw apotheker u kan helpen bij veilig medicijngebruik als uw nieren niet goed werken.`,
    },
    {
      question: `Mag ik zomaar met dit medicijn stoppen?`,
      answer: `U kunt op elk moment in één keer met het gebruik van dit medicijn stoppen.`,
    },
    {
      question: `Onder welke namen is cetirizine verkrijgbaar?`,
      answer: `De werkzame stof cetirizine zit in de volgende producten:
Zyrtec, Reactine, Cetirizine, Prevalin, Allerstop, Hooikoortstablet Cetirizine, Allergietablet Cetirizine

De officiële bijsluiter van de verschillende producten van cetirizine vindt u op: Geneesmiddeleninformatiebank van het CBG.`,
    },
    {
      question: `Heb ik een recept nodig?`,
      answer: `Cetirizine is sinds 1987 internationaal op de markt. Het is zonder recept verkrijgbaar onder de merknamen Hooikoortstablet Cetirizine, Allergietablet cetirizine, Prevalin Allerstop, Reactine en Zyrtec en als het merkloze Cetirizine in tabletten en in drank.

Wilt u meer weten over de prijs en vergoeding van uw medicijn? Lees dan verder in het thema: Medicijnprijzen en vergoedingen.`,
    },
  ],
};

export const Pill: Medication = {
  name: "ethinylestradiol",
  informal_name: "anticonceptiepil",
  dosis: 1,
  next_med_moment_hour: 9,
  next_med_moment_minute: 15,
  information: `De pil voorkomt dat je zwanger wordt.
In de gewone pil zitten 2 hormonen.
Je slikt 3 weken lang elke dag 1 pil. Daarna 1 week niet. Dit heet de stopweek.
In de stopweek word je ongesteld. Dit kan je ook uitstellen.`,
  faq: [
    {
      question: `Werking anticonceptiepil`,
      answer: `De werkzame stoffen in de pil zijn hormonen. Hormonen zijn stofjes die je lichaam zelf aanmaakt en die via de bloedbaan de organen en weefsels aansturen om allerlei lichaamsfuncties te regelen. De hormonen in de pil lijken op de hormonen die de eierstokken van een vrouw maakt, namelijk oestrogeen en progestageen. Oestrogeen en progestageen  regelen de maandelijkse cyclus. Ze zorgen dat er elke maand een eicel vrijkomt (de eisprong of ovulatie). En dat het lichaam het baarmoederslijmvlies opbouwt. Als de eicel niet bevrucht is, zorgen de hormonen ervoor dat het lichaam het baarmoederslijmvlies afbreekt en de eicel afstoot (de menstruatie).

De hormonen in de pil zorgen dat er juist géén eicel vrijkomt. Ze zogen er ook voor dat de  baarmoederwand ongeschikt is voor het innestelen van een bevruchte eicel. Bovendien wordt het slijm in de baarmoederhals dikker, waardoor zaadcellen minder goed in de baarmoeder kunnen doordringen. Deze drie effecten zorgen er samen voor dat de pil ervoor zorgt dat u niet zwanger wordt.`,
    },
    {
      question: `Soorten anticonceptiepil en betrouwbaarheid`,
      answer: `Er zijn verschillende soorten pillen. Het verschil zit in de hoeveelheid hormonen die erin zit en de onderlinge verhouding tussen de hormonen. Meestal zitten er 21 pillen in een strip. Daarna volgt de stopweek. Ook zijn er strips met 28 pillen. De pil met een verlengd doseringsschema bevat 91 tabletten per strip. 

Als u de pil netjes volgens de gebruiksaanwijzing slikt, is hij zeer betrouwbaar, ook in de stopweek.
- De éénfasepil bevat een vaste dosis oestrogeen en progestageen. Alle pillen in een strip zijn hetzelfde. De éénfasepil is bijna 100 procent betrouwbaar.
- De driefasenpil, meerfasenpil en pil met een verlengd doseringsschema bevatten ook oestrogeen en progestageen, maar de verhouding verschilt per fase. In een strip zitten verschillend gekleurde pillen die in de juiste volgorde gebruikt moeten worden. De pil met een verlengd doseringsschema moet continu worden ingenomen gedurende 13 weken. Deze pillen zijn ook bijna honderd procent betrouwbaar, maar alleen als ze in de goede volgorde worden ingenomen.
- De minipil bevat alleen een kleine dosis progestageen. De minipil is iets minder betrouwbaar dan de andere soorten.
`,
    },
    {
      question: `Vanaf welke leeftijd kan er worden gestart met de pil?`,
      answer: `De verschillende soorten anticonceptiepillen zijn officieel geregistreerd bij vrouwen vanaf de eerste menstruatie. Dit betekent dat de fabrikant de pil bij deze vrouwen uitgebreid heeft onderzocht. Uit het onderzoek van de fabrikant blijkt dat het vanaf de eerste menstruatie veilig is en werkt. De overheid heeft goedgekeurd dat het vanaf de eerste menstruatie mag worden gebruikt.`,
    },
    {
      question: `Beginnen met de pil`,
      answer: `Wilt u de pil gaan gebruiken? Neem dan contact op met uw huisarts. Uw huisarts u een aantal vragen stellen en bepalen welke pil voor u het meest geschikt is. Met het recept van de huisarts kunt u de pil bij de apotheek halen.

U kunt na een paar maanden met uw huisarts bespreken hoe de pil u bevalt. Inwendig onderzoek is niet nodig.
      
Zo gebruikt u de pil:
- Zitten er 21 pillen in een strip? Dan wacht u 7 dagen als de strip leeg is. In die week (de pauzeweek) krijgt u een bloeding die lijkt op de menstruatie. Na 7 dagen begint u aan de volgende strip. U neemt de eerste pil van een strip dus altijd op dezelfde dag van de week.
- Zitten er 28 pillen in een strip? Dan begint u als de strip leeg is meteen met de volgende. De laatste vier pillen bevatten namelijk geen hormonen. Sommige mensen vinden het makkelijker om iedere dag een pil te slikken en geen pauzeweek te hebben. Ook bij deze pillen krijgt u een bloeding tussen de 24ste en de 28ste dag.
- Zitten er 91 pillen in een strip? Dan begint u als de strip leeg is meteen met de volgende. De laatste zeven pillen bevatten alleen oestrogeen. Tijdens het gebruik van deze pillen krijgt u een bloeding.
- Houd bij een meerfasenpil altijd de volgorde aan die op de pilstrip is aangegeven.`,
    },
    {
      question: `Vanaf wanneer werkt de pil?`,
      answer: `Begint u de pil te slikken op de eerste dag van de menstruatie, dan bent u meteen tegen zwangerschap beschermd. Als u op een andere dag begint, werkt de pil nog niet meteen. Dit duurt dan 7 dagen. In deze 7 dagen moet u dan een extra voorbehoedmiddel gebruiken, zoals een condoom.

Na een abortus of een miskraam kunt u dezelfde dag of de volgende dag beginnen met de pil. U bent dan meteen beschermd tegen zwangerschap.`,
    },
    {
      question: `Weer beginnen met pil na de bevalling`,
      answer: `Wanneer u weer moet beginnen met de pil na de bevalling, hangt af van het soort voeding dat u uw baby geeft.

- Geeft u flesvoeding? Begin dan 3 weken na de bevalling met de pil of een ander voorbehoedmiddel. Gebruikt u de minipil? Begin dan al 2 weken na de bevalling.
- Geeft u volledige borstvoeding en heeft u geen vaginaal bloedverlies? Dan is de kans dat u zwanger wordt in de eerste vier maanden na de bevalling heel klein. Wilt u niet zwanger raken, gebruik dan voor de zekerheid condooms. 
- Eventueel kunt u vanaf 6 weken na de geboorte van uw kind met de pil beginnen. Mogelijk loopt de borstvoeding hierdoor terug. De minipil heeft geen invloed op de borstvoeding. Maar die is wel iets minder veilig.
- Gebruik in ieder geval een voorbehoedmiddel als u bijvoeding gaat geven of als u weer ongesteld wordt.
      
Overleg met uw huisarts als u twijfelt wanneer u het beste de pil kunt gaan slikken.`,
    },
    {
      question: `Pil vergeten`,
      answer: `Wat als u de pil bent vergeten? Hiervan is sprake als u meer dan 12 uur (bij Yaz en Zoely meer dan 24 uur) te laat bent met innemen. Als u 1 pil vergeet, kunt u de vergeten pil toch nog gewoon innemen en is de pil nog steeds betrouwbaar. Let op: dit geldt niet in de eerste maand dat u de pil gebruikt.

Als u meer dan 1 pil vergeet, kan de betrouwbaarheid afnemen. In hoeverre dit het geval is, hangt af van de periode waarin u de pillen vergeten bent en het soort anticonceptiepil dat u slikt. `,
    },
    {
      question: `Helpt de pil tegen menstruatiepijn?`,
      answer: `Pijn tijdens de menstruatie komt doordat de baarmoeder samentrekt. Hierdoor kan het slijmvlies van de baarmoeder uit de vagina naar buiten. Dit geeft krampen in de onderbuik die pijn kunnen doen. Ook kunt u pijn in uw rug of benen hebben. Dit heet menstruatiepijn. Als u ongesteld bent, kunt u ook andere soorten pijn hebben, bijvoorbeeld hoofdpijn en spierpijn.

Vaak gaat menstruatiepijn vanzelf over. Maar sommige vrouwen kunnen hier erg veel last van blijven hebben. Heeft u veel menstruatiepijn en helpt paracetamol of een ontstekingsremmende pijnstiller niet? Dan kan uw arts u de pil voorschrijven.
      
De pil zorgt ervoor dat u minder pijn heeft tijdens de menstruatie. Ook kan het de bloedverlies minder maken. De pil kan ook andere menstruatieklachten minder maken, zoals pijn aan uw borsten en een opgeblazen gevoel. Ook zorgt de pil ervoor dat u minder vocht zult vasthouden als u ongesteld bent.`,
    },
    {
      question: `Bijwerkingen en risico's van de pil`,
      answer: `Bijwerkingen van de pil komen vooral voor als u met de pil begint. Voorbeelden zijn gevoelige of gespannen borsten; hoofdpijn; stemmingsveranderingen; misselijkheid; gewichtstoename of doorbraakbloedingen. Ze gaan doorgaans binnen enkele dagen tot maanden over. Houdt u er last van, overleg dan met uw huisarts.

Kans op kanker
In het algemeen geeft de pil een kleine kans op borstkanker. De kans hierop is klein, maar voor sommige vrouwen groter. Zoals voor oudere vrouwen en bij vrouwen die eerder borstkanker hebben gehad. Ook als u de pil heel lang gebruikt, wordt de kans hierop groter.
      
Kans op trombose
Pilgebruik vergroot de kans op een bloedstolsel (trombose). De kans op trombose is het grootst in het eerste jaar van het pilgebruik.
      
Trombose is een bloedstolsel in een ader, meestal in het been. Klachten die passen bij trombose zijn:
- een dik, rood en pijnlijk been;
- kortademig zijn of pijn op de borst, soms met het ophoesten van bloed. 
Neem bij deze klachten meteen contact op met uw huisarts.
      
De kans op trombose is klein, maar voor sommige vrouwen groter. Zoals voor vrouwen:
- die eerder een trombose hebben gehad;
- met trombose in de familie;
- met een erfelijke afwijking waardoor het bloed sneller stolt;
- ouder dan 35 jaar; 
- met ernstig overgewicht (BMI van 30 of hoger);
- die net bevallen zijn (korter dan 3 maanden geleden);
- die een operatie krijgen of een periode minder mobiel zijn. Bijvoorbeeld omdat de vrouw enige tijd bedrust houdt of niet loopt. Het risico is dan tijdelijk groter. 
Sommige soorten pillen geven meer risico op trombose dan andere: het risico is het hoogst bij pillen die desogestrel en gestodeen bevatten, maar is dan nog steeds laag.  Het laagste risico op trombose geven pillen die levonorgestrel of norgestimaat bevatten. Deze pillen hebben de voorkeur bij de huisartsen voor de meeste vrouwen.
      
Medicijnen die minder goed samengaan met de pil 
Sommige medicijnen maken de pil minder betrouwbaar. De voornaamste zijn:
- medicijnen tegen epilepsie;
- sommige medicijnen tegen tuberculose;
- medicijnen tegen schimmelinfecties (antimycotica).`,
    },
    {
      question: `Beschermt de pil tegen soa?`,
      answer: `Soa zijn seksueel overdraagbare aandoeningen. U kunt het krijgen door (onveilige) seks.

Let op! De pil beschermt NIET tegen soa. U moet ook altijd een condoom gebruiken als u zichzelf wilt beschermen tegen soa.`,
    },
    {
      question: `Op welke leeftijd stoppen met de pil`,
      answer: `Als u ouder wordt, neemt de kans op trombose toe. En de pil kan het risico hierop verder verhogen. Voor veel vrouwen boven de 35 jaar is daarom een ander voorbehoedsmiddel geschikter dan de pil. Overleg hierover met uw arts.

Vanaf de leeftijd van 52 jaar wordt sowieso geadviseerd om de pil te stoppen door de risico's bij langdurig gebruik van de pil. Het risico op ernstige bijwerkingen neemt toe, zoals borstkanker en hart- en vaatziekten.  
      
Ook zijn op deze leeftijd veel vrouwen in de overgang. Overleg hierover met uw arts. Nadat u bent gestopt wordt afgewacht of de menstruatie terugkeert. Als die niet terugkeert, weet u dat u in de overgang bent. Er is een heel kleine kans dat u nog niet in de overgang bent. Daarom zal uw arts andere voorbehoedsmiddelen adviseren in de periode dat u wacht of de menstruatie terugkeert.`,
    },
  ],
};

export const Amoxicilline: Medication = {
  name: "amoxicilline",
  informal_name: "antibioticum",
  dosis: 2,
  next_med_moment_hour: 9,
  next_med_moment_minute: 15,
  information: `Amoxicilline doodt bacteriën (antibioticum). Bij infecties van onder andere longen, luchtpijp, keel, bijholtes, middenoor, blaas, huid, hart, maag en darmen. Ook bij de ziekte van Lyme, hersenvliesontsteking en geslachtsziekten zoals chlamydia en gonorroe. Amoxicilline werkt binnen enkele dagen. Neem amoxicilline goed verdeeld over de dag in. Het werkt dan beter.`,
  faq: [
    {
      question: `Wat doet amoxicilline en waarbij gebruik ik het?`,
      answer: `Amoxicilline behoort tot de penicilline-antibiotica. Het werkt tegen infecties met bacteriën.

Artsen schrijven het voor bij veel soorten infecties met bacteriën, zoals:
- luchtweginfecties (longontsteking, acute bronchitis, middenoorontsteking, bijholteontsteking, keelpijn door keelontsteking);
- blaasontsteking, ook nierbekkenontsteking en prostaatontsteking;
- geslachtsziekten (SOA), namelijk chlamydia en gonorroe;
- Lymeziekte;
- maag- of darmzweer;
- huidontsteking;
- hersenvliesontsteking.
Artsen schrijven amoxicilline ook voor als er waarschijnlijk sprake is van een longontsteking door het Corona-virus (COVID-19).`,
    },
    {
      question: `Wat zijn de mogelijke bijwerkingen?`,
      answer: `Behalve het gewenste effect kan dit medicijn bijwerkingen geven.De belangrijkste bijwerkingen zijn de volgende:
      
Zelden (bij 1 tot 10 op de 100 mensen)
- Maagdarmklachten, zoals diarree, misselijkheid of slappe ontlasting en lichte buikkrampen: Dit gaat vanzelf over binnen enkele dagen. Zeer zelden ontstaat een ernstige diarree (meer dan 7 keer per dag) met buikkrampen en soms met koorts. Waarschuw dan een arts. Drink voldoende vocht als u diarree heeft, anders raakt u uitgedroogd.
- Huiduitslag met rode vlekjes en bultjes: Dit kan ook nog enkele dagen na afloop van de kuur ontstaan. Meestal is de uitslag onschuldig en verdwijnt het vanzelf binnen een week. Huiduitslag kan ook het gevolg zijn van overgevoeligheid voor dit medicijn. Heeft u huiduitslag? Laat uw arts het controleren, zodat deze kan bepalen of het overgevoeligheid betreft.
- Droge mond en een veranderde smaak.
- Ontstoken slijmvliezen van mond, mondhoeken, keelholte, vagina of poepgat: Het is meestal een schimmelinfectie van de slijmvliezen. Dat komt omdat het normale evenwicht tussen de verschillende soorten bacteriën en schimmels is verstoord. Raadpleeg uw arts als u last krijgt van wit beslag in uw mond, een zwarte tong, of jeuk en witte vloed in de vagina of schaamlippen.
- Overgevoeligheid voor dit medicijn. U merkt dit aan huiduitslag, puistjes, galbulten, paarse vlekjes op de huid en jeuk.
       
Als u last heeft van deze klachten, ga dan naar uw arts.
Zeer zelden kunt u benauwd of duizelig worden, flauwvallen of koorts krijgen. Of u kunt zwellingen krijgen in het gezicht, de lippen, mond en keel. U kunt hierbij erg benauwd worden.
In zeldzame gevallen kan een ernstige huidaandoening ontstaan met blaarvorming. De blaren ontstaan met name op de lippen en op de slijmvliezen van de mond en geslachtsdelen. Ook kan een ernstige overgevoeligheidsreactie optreden met koorts, gezwollen lymfeklieren en huiduitslag. Waarschuw in deze gevallen direct een arts, of ga naar de Eerste-hulpdienst.
Als blijkt dat u overgevoelig bent voor amoxicilline, mag u dit medicijn of erop lijkende antibiotica niet meer gebruiken. Geef dit aan de apotheker door. Het apotheekteam kan er dan op letten dat u dit medicijn of soortgelijke medicijnen niet opnieuw krijgt.

Neem contact op met uw apotheker of arts als u te veel last heeft van deze of andere bijwerkingen waar u zich zorgen over maakt.
`,
    },
    {
      question: `Hoe gebruik ik dit medicijn?`,
      answer: `Kijk voor de juiste dosering altijd op het etiket van de apotheek of in de bijsluiter.

Hoe?
- Capsules innemen met een half glas water.
- Oplostabletten ('dispers'): laat de tablet uiteen vallen in water, roer even en drink dan op. Spoel het glas daarna na met een beetje water en drink dat ook op.
- Drank: schud de fles voor gebruik. Meet de juiste hoeveelheid af met het maatbekertje of de maatlepel en slik de drank door. Spoel het maatbekertje of de lepel na met wat water en drink dat ook op.
- Injectie of infuus: dit wordt klaargemaakt en gegeven door een verpleegkundige of arts.
      
Wanneer?
Verdeel de doses zo goed mogelijk over de dag, voor een constant effect. Het beste kunt u vaste tijdstippen kiezen, dan vergeet u minder snel een dosis.
Om te voorkomen dat een infectie ontstaat door een operatie of tandartsbehandeling: meestal neemt u dit medicijn een half uur tot een uur voor de ingreep in uw mondholte of de operatie.
      
Hoe lang?
De kuurduur hangt af van de plaats en de ernst van de infectie. Normaal gesproken duurt een kuur 5 tot 10 dagen. Bij bepaalde infecties (Lymeziekte, infecties in gewrichten) kan de kuur enkele weken bedragen. Bij een ernstige huidontsteking rond het kaakgebied duurt een kuur vaak 6 weken tot een half jaar.

Houd er rekening mee dat u de kuur niet mag onderbreken en dat u hem helemaal moet afmaken. Ook al merkt u van de infectie al vóór afloop van de kuur niets meer. Dit betekent namelijk niet dat alle bacteriën zijn verdwenen.
      
Als de kuur is afgerond, kan het nog zijn dat er bacteriën zitten en u nog steeds anderen kunt besmetten.
      
Zo kunt u bij de geslachtsziekten chlamydia en gonorroe tot ruim een week na de behandeling nog anderen besmetten. Bij chlamydia en gonorroe gelden tot een week na de behandeling de volgende adviezen:
- Zorg dat u helemaal geen seksueel contact hebt. Ook niet met condoom en ook niet met handen of mond.
- Hebt u geen vaste partner? Vrij dan 1 week niet en blijf daarna veilig vrijen mét condoom.
- Hebt u wel een vaste partner? Vrij dan dus niet tot een week nadat jij en je partner(s) klaar zijn met de antibiotica en de soa-test geen andere geslachtsziekten heeft aangetoond.`,
    },
    {
      question: `Wat moet ik doen als ik een dosis ben vergeten?`,
      answer: `- Als u dit medicijn 2 keer per dag gebruikt: duurt het nog meer dan 4 uur voor u de volgende dosis normaal inneemt? Neem de vergeten dosis dan alsnog in. Duurt het nog minder dan 4 uur? Sla de vergeten dosis dan over. De vergeten dosis neemt u aan het eind van de kuur in. U verschuift dus het moment waarop u de kuur beëindigt. Maak dus de volledige kuur af, anders bestaat de kans dat de klachten terugkeren.
- Als u dit medicijn 3 of 4 keer per dag gebruikt: duurt het nog meer dan 2 uur voor u de volgende dosis normaal inneemt? Neem de vergeten dosis dan alsnog in. Duurt het nog minder dan 2 uur? Sla de vergeten dosis dan over. De vergeten dosis neemt u aan het eind van de kuur in. U verschuift dus het moment waarop u de kuur beëindigt. Maakt u dus de volledige kuur af, anders bestaat de kans dat de klachten terugkeren.`,
    },
    {
      question: `Kan ik met dit medicijn autorijden, alcohol drinken en alles eten of drinken?`,
      answer: `Bij dit medicijn zijn hiervoor geen beperkingen.`,
    },
    {
      question: `Mag ik cetirizine met andere medicijnen gebruiken?`,
      answer: `Dit medicijn heeft wisselwerkingen met andere medicijnen. In de tekst hieronder staan alleen de werkzame stoffen van deze medicijnen, dus niet de merknamen. Of uw medicijn een van die werkzame stoffen bevat, kunt u nagaan in uw bijsluiter onder het kopje 'samenstelling'.

De medicijnen waarmee de belangrijkste wisselwerkingen optreden, zijn de volgende.
      
- Bloedverdunners. Gebruikt u acenocoumarol of fenprocoumon? U kunt een eenmalige dosis amoxicilline zonder problemen gebruiken. Krijgt u een langere kuur? Uw apotheek zal bij de eerste keer uw trombosedienst inlichten dat u amoxicilline gebruikt. Vertel ook zelf de trombosedienst wanneer u begint of als u stopt met amoxicilline of als de dosering verandert. Uw stolling moet dan extra worden gemeten.
- Antibiotica van het tetracycline-type, zoals doxycycline, minocycline en tetracycline. Deze medicijnen en amoxicilline kunnen elkaar tegenwerken. Dit is vooral belangrijk bij ernstige infecties, zoals hersenvliesontsteking, ontsteking in het hart (endocarditis) of in het bloed. Bij deze infecties mag u ze niet samen gebruiken. Overleg hierover met uw arts. Bij andere infecties is combinatie van tetracyclines met amoxicilline geen probleem.
- Buiktyfusvaccin-capsules. Amoxicilline maakt het buiktyfusvaccin in de capsules onwerkzaam. Gebruik daarom beide medicijnen niet samen. Als tussen beide medicijnen minimaal 3 dagen zit, is er geen probleem. Wilt u capsules met buiktyfusvaccin gebruiken? Wacht dan minimaal 3 dagen na afloop van de kuur met amoxicilline. Of vraag uw arts om een injectie tegen buiktyfus. De wisselwerking treedt dan niet op. Heeft u minder dan 3 dagen geleden capsules met buiktyfus-vaccin gebruikt en moet u nu starten met amoxicilline? Neem dan contact op met uw arts.

Twijfelt u eraan of een van de bovenstaande wisselwerkingen voor u van belang is? Neem dan contact op met uw apotheker of arts.`,
    },
    {
      question: `Mag ik dit medicijn gebruiken als ik zwanger ben, wil worden of borstvoeding geef?`,
      answer: `U kunt dit medicijn veilig gebruiken als zwanger bent, binnenkort wilt worden of als u borstvoeding geeft.
Het wordt al jarenlang gebruikt door vrouwen die zwanger willen worden, zwangere vrouwen en vrouwen die borstvoeding geven, zonder problemen met de vruchtbaarheid, voor de zwangerschap of voor het kind.`,
    },
    {
      question: `Mag ik dit medicijn gebruiken als de werking van mijn nieren of lever minder is?`,
      answer: `Nieren
Werken uw nieren minder goed? Overleg dan met uw apotheker. Het kan zijn dat de dosering van uw medicijn aangepast moet worden.
Dialyseert u? Overleg dan met uw apotheker. Het kan zijn dat aanpassing van uw medicijngebruik nodig is. Bijvoorbeeld:
- een andere dosering;
- een andere dag of ander tijdstip waarop u uw medicijn moet innemen;
- een ander medicijn.

Lever
Heeft u levercirrose (een ziekte van de lever)? U mag dit medicijn gebruiken, zoals uw arts heeft voorgeschreven. Dit medicijn heeft geen gevolgen voor de werking van uw lever. En levercirrose heeft geen invloed op de werking en de bijwerkingen van dit medicijn.`,
    },
    {
      question: `Mag ik zomaar met dit medicijn stoppen?`,
      answer: `Als u stopt heeft u kans dat niet alle bacteriën verdwenen zijn. De infectie blijft dan bestaan of keert terug. Maak dus altijd de kuur af, volgens de aanwijzingen van uw arts.
Als u allergische reacties of ernstige bijwerkingen krijgt, moet u wel stoppen. Neem in dat geval direct contact op met uw arts.`,
    },
    {
      question: `Onder welke namen is cetirizine verkrijgbaar?`,
      answer: `De werkzame stof amoxicilline zit in de volgende producten: Amoxi Amoxicilline Panclamox

De officiële bijsluiter van de verschillende producten van cetirizine vindt u op: Geneesmiddeleninformatiebank van het CBG.`,
    },
    {
      question: `Heb ik een recept nodig?`,
      answer: `Amoxicilline is sinds 1972 internationaal op de markt. Het is op recept verkrijgbaar als het merkloze Amoxicilline en Amoxi. Het is te verkrijgen in capsules, oplostabletten ('dispers'), drank en injecties.

Amoxicilline is ook verkrijgbaar in combinatie met een andere werkzame stof, onder de merknamen Augmentin, Panclamox en als het merkloze Amoxicilline/Clavulaanzuur. Deze combinaties zijn te verkrijgen in tabletten, drank en injecties.`,
    },
  ],
};

export const Diclofenac: Medication = {
  name: "diclofenac",
  informal_name: "diclofenac",
  dosis: 2,
  next_med_moment_hour: 9,
  next_med_moment_minute: 15,
  information: `Diclofenac vermindert uw pijn, remt uw ontstekingen en verlaagt uw koorts. Bij gewrichtspijn, reumatoïde artritis, ziekte van Bechterew, jicht, koliekpijn, menstruatieklachten en griep. De tabletten verminderen na 1 uur uw pijn. Deze werken 6 uur lang. Vertraagde-afgifte-tabletten werken na ongeveer 2 uur. Deze werken 12 tot 24 uur lang. De injectie werkt na 15 minuten. Een zetpil werkt ongeveer een half uur. Roodheid en zwelling verminderen binnen 1 week.`,
  faq: [
    {
      question: `Wat doet diclofenac en waarbij gebruik ik het?`,
      answer: `Diclofenac is een ontstekingsremmende pijnstiller. Dit soort pijnstillers wordt ook wel NSAID's genoemd. Het werkt pijnstillend, ontstekingsremmend en koortsverlagend.

Het is te gebruiken bij pijn waarbij ook sprake is van een ontsteking, zoals bij gewrichtspijn, reumatoïde artritis (ontsteking van de gewrichten), ziekte van Bechterew en jicht (ontsteking in uw gewricht).
      
Bovendien bij koliekpijn, menstruatieklachten, zoals abnormaal vaginaal bloedverlies, migraine en hoofdpijn. Het wordt soms ook gebruikt bij artrose (het kraakbeen in uw gewrichten wordt dunner), spierpijn en klachten door griep of verkoudheid.`,
    },
    {
      question: `Wat zijn de mogelijke bijwerkingen?`,
      answer: `Behalve het gewenste effect kan dit medicijn bijwerkingen geven.De belangrijkste bijwerkingen zijn de volgende:
      
Soms (bij 10 tot 30 op de 100 mensen)
- Maagklachten: maagirritatie, buikpijn, misselijkheid, braken, vol gevoel, gebrek aan eetlust, boeren en zuurbranden.
- Darmklachten: diarree, verstopping en winderigheid.
      
Zelden (bij 1 tot 10 op de 100 mensen)
- Een maag- of darmzweer of andere ernstige beschadiging van maag, darmen of slokdarm.
- Heeft u een slokdarmstenose, een vernauwing van de slokdarm?
- Hoofdpijn.
- Draaierigheid en duizelingen.
- Huiduitslag met jeuk.
- Heeft u een bloedstollingsziekte.
      
Zeer zelden (bij minder dan 1 op de 100 mensen)
- Ontstekingen in de mondholte en op de tong.
- Oorsuizen of slechter horen. Neem bij deze verschijnselen contact op met uw arts.
- Wazig zien of dubbelzien.
- Dikke enkels of polsen door vasthouden van vocht in armen en benen(oedeem). Benauwdheid door vochtophoping in de longen.
- Haaruitval.
- Psychische klachten, zoals vermoeidheid, slaperigheid, nachtmerries, slapeloosheid onrust, opwinding, in de war zijn (verwardheid), geheugenstoornissen, nervositeit, angstgevoelens en neerslachtigheid. Ook kunt u dingen gaan zien, horen of voelen die er niet zijn (hallucinaties).
- Overgevoeligheid voor dit medicijn.
- Als u aan psoriasis lijdt: u kunt meer last krijgen van deze ziekte.
- Aantasting van de nieren.
- Bloedafwijkingen, ontsteking van de alvleesklier of leverontsteking.
      
Zeer zelden, bij gebruik gedurende meerdere weken en hoge dosis
- Hart- en vaatziektes, zoals meer kans op een hartaanval of beroerte.

Neem contact op met uw apotheker of arts als u te veel last heeft van deze of andere bijwerkingen waar u zich zorgen over maakt.
`,
    },
    {
      question: `Hoe gebruik ik dit medicijn?`,
      answer: `Kijk voor de juiste dosering altijd op het etiket van de apotheek of in de bijsluiter.

Hoe?
- Omhulde tabletten. Innemen met een half glas water.
- Maagsapresistente tabletten (MSR). Dit zijn tabletten die tegen maagzuur kunnen. Innemen met een half glas water zonder te kauwen. Als u de tabletten kauwt, gaat het beschermende laagje kapot en komt het medicijn al in de maag vrij, in plaats van in de darmen. Het kan dan maagklachten geven.
- Tabletten met vertraagde afgifte (te herkennen aan Retard, MGA of MVA). Heel doorslikken met een half glas water. De tabletten niet kauwen of fijnmaken, omdat dan onbedoeld al het werkzame bestanddeel tegelijk vrijkomt. De tabletten zijn zo gemaakt, dat ze langzaam oplossen, waardoor ze minder bijwerkingen geven en langer werken.
- Zetpillen. De zetpil in de anus (poepgat) inbrengen. Het maakt daarbij niet zo veel uit of u de zetpil met de punt naar voren of met de stompe kant naar voren inbrengt. U kunt de zetpil met een beetje water bevochtigen. Hierdoor kunt u hem wat makkelijker inbrengen.
- Infuus. Het infuus wordt klaargemaakt door een verpleegkundige of een arts. Een infuus zal meestal 15 minuten duren.

Voor, bij of na het eten?
- Omhulde tabletten. Als u snel effect wilt op een lege maag innemen. Tijdens of na het eten innemen als u snel last heeft van uw maag of als u dit medicijn chronisch gebruikt. U vermindert hierdoor de bijwerkingen op de maag.
- Maagsapresistente tabletten (MSR). Bij voorkeur in op een lege maag innemen, dus een half uur voor het eten of twee tot drie uur erna. Neem de tablet in zijn geheel in, dus niet kauwen of doorbreken. Deze tabletten hebben een laag die ervoor zorgt dat dit medicijn pas in de darmen vrijkomt en nog niet in de maag. Deze 'maagsapresistente' laag lost op bij een gevulde maag. Heeft u toch last van uw maag, nadat u dit medicijn heeft ingenomen? Neem het dan in het vervolg op een volle maag in.
- Tabletten met vertraagde afgifte (retard, MGA of MVA). Tijdens of net na het eten innemen.
- Zetpillen. Het maakt niet uit wanneer u deze inbrengt.

Wanneer?
- Bij langdurige pijnklachten is het belangrijk dit medicijn consequent in te nemen. Dan houdt u de pijn het beste onder controle.
- Bij ochtendstijfheid door reuma. Neem voor de nacht een tablet met vertraagde afgifte of een zetpil.
- Jichtaanvallen (ontsteking in de gewrichten). Als u dit medicijn gebruikt tegelijk met medicijnen die jichtaanvallen moeten voorkomen. Begin tegelijk met beide soorten medicijnen.
- Migraine. Neem dit medicijn meteen in als u een migraine-aanval voelt opkomen. Het heeft dan het meeste effect.`,
    },
    {
      question: `Wat moet ik doen als ik een dosis ben vergeten?`,
      answer: `Gebruikt u dit medicijn langdurig op recept van uw arts? Bij langdurige pijnklachten is het belangrijk dit medicijn consequent in te nemen. Mocht u toch een dosis vergeten zijn:
- Als u dit medicijn 1 keer per dag gebruikt: duurt het nog meer dan 8 uur voor u de volgende dosis normaal inneemt? Neem de vergeten dosis dan alsnog in. Duurt het nog minder dan 8 uur? Sla de vergeten dosis dan over.
- Als u dit medicijn 2 keer per dag gebruikt: duurt het nog meer dan 4 uur voor u de volgende dosis normaal inneemt? Neem de vergeten dosis dan alsnog in. Duurt het nog minder dan 4 uur? Sla de vergeten dosis dan over.
- Als u dit medicijn 3 keer per dag gebruikt: duurt het nog meer dan 2 uur voor u de volgende dosis normaal inneemt? Neem de vergeten dosis dan alsnog in. Duurt het nog minder dan 2 uur? Sla de vergeten dosis dan over.
- Als u dit middel 4, 5 of 6 keer per dag gebruikt: duurt het nog meer dan 1 uur voor u de volgende dosis normaal inneemt? Neem de vergeten dosis dan alsnog in. Duurt het nog minder dan 1 uur? Sla de vergeten dosis dan over.`,
    },
    {
      question: `Kan ik met dit medicijn autorijden, alcohol drinken en alles eten of drinken?`,
      answer: `autorijden?
Ja, dat kan. U mag autorijden.
      
alcohol drinken?
Alcohol irriteert de maag, net als dit medicijn. U kunt daardoor eerder last krijgen van uw maag. Probeer het drinken van alcohol eerst met mate. U kunt dan zelf inschatten of u hier veel last van krijgt. In het algemeen is enkele keren per week een glas wijn geen probleem.
      
alles eten?
U mag eten en drinken zoals u normaal ook doet.`,
    },
    {
      question: `Mag ik diclofenac met andere medicijnen gebruiken?`,
      answer: `Dit medicijn heeft wisselwerkingen met andere medicijnen. In de tekst hieronder staan alleen de werkzame stoffen van deze medicijnen, dus niet de merknamen. Of uw medicijn een van die werkzame stoffen bevat, kunt u nagaan in uw bijsluiter onder het kopje 'samenstelling'.
De pijnstiller paracetamol kunt u in alle onderstaande gevallen wel gebruiken.

De medicijnen waarmee de belangrijkste wisselwerkingen optreden, zijn de volgende.
- Andere ontstekingsremmende pijnstillers (deze worden ook wel NSAID's genoemd). Als u beide pijnstillers tegelijkertijd gebruikt, verdubbelt u de kans op bijwerkingen, zoals maagdarmklachten. De namen van andere ontstekingsremmende pijnstillers zijn aceclofenac, acetylsalicylzuur, carbasalaatcalcium, celecoxib, dexketoprofen, etoricoxib, fenylbutazon, flurbiprofen, ibuprofen, indometacine, ketoprofen, meloxicam, nabumeton, naproxen, parecoxib, piroxicam, propyfenazon, sulindac en tiaprofeenzuur. Gebruik deze pijnstillers dus niet tegelijkertijd met diclofenac.
- De bloedverdunners acenocoumarol, fenprocoumon, acetylsalicylzuur en carbasalaatcalcium. Bij de combinatie heeft u meer kans op bijwerkingen op de maag of zelfs een maagbloeding. Meestal zal de arts u een maagbeschermer voorschrijven om deze maagklachten te voorkomen. Wees extra alert op het effect op uw maag en raadpleeg uw arts bij maagklachten. Ook kan diclofenac soms de werking van bloedverdunners versterken. Vertel bij uw volgend bezoek aan de trombosedienst dat u diclofenac gebruikt of heeft gebruikt.
- De bloedverdunners apixaban, dabigatran en rivaroxaban. Deze medicijnen verhogen de kans op bloedingen in maag en darmen. Gebruik daarom liever paracetamol als pijnstiller. Die heeft dat nadeel niet. Moet u toch een bloedverdunner samen met diclofenac gebruiken? Wees dan extra alert. Raadpleeg uw arts bij maagklachten. Meestal adviseert de arts u een maagbeschermer te slikken om maagklachten te voorkomen. Overleg met uw arts of dat bij u nodig is.`,
    },
    {
      question: `Mag ik dit medicijn gebruiken als ik zwanger ben, wil worden of borstvoeding geef?`,
      answer: `Zwangerschap
Bent u zwanger of wilt u zwanger worden? U kunt dan beter paracetamol gebruiken bij pijn. Paracetamol is een veiligere pijnstiller tijdens de zwangerschap. Werkt paracetamol niet voldoende tegen uw pijn? Overleg dan met uw arts.
Gebruik diclofenac NIET bij pijn tijdens de laatste 3 maanden van de zwangerschap. Dit medicijn is dan schadelijk voor de baby. Het risico op aangeboren afwijkingen bij de baby is verhoogd. Ook kan het problemen geven bij de bevalling. Gebruikt u dit medicijn al? Overleg dan met uw arts. Misschien kunt u overstappen op een ander medicijn. Een medicijn dat wel veilig is tijdens de zwangerschap.
Wilt u dit medicijn gebruiken tijdens de eerste 6 maanden van de zwangerschap? Of als u zwanger wilt worden? Overleg dan met uw arts. Ook dan kunt u dit medicijn beter NIET gebruiken. Bespreek met uw arts of u (tijdelijk) kunt overstappen op een ander medicijn dat wel veilig is. Is dat niet mogelijk? Dan kunt u af en toe dit medicijn gebruiken, in een zo laag mogelijke dosering.
Als uw arts vindt dat dit medicijn toch noodzakelijk is, voor een langere periode of in een hoge dosering. Bijvoorbeeld bij een ernstige vorm van reumatoide artritis. Dan zal de arts de baby en de hoeveelheid vruchtwater regelmatig controleren.
      
Borstvoeding
U kunt dit medicijn veilig gebruiken als u borstvoeding geeft. Het medicijn komt in zeer kleine hoeveelheden in de moedermelk terecht, maar is niet schadelijk voor het kind.`,
    },
    {
      question: `Mag ik dit medicijn gebruiken als de werking van mijn nieren of lever minder is?`,
      answer: `Nieren
Werken uw nieren minder goed? Overleg dan met uw apotheker. Het kan zijn dat een ander medicijn geschikter is. Of dat de werking van uw nieren vaker gecontroleerd moet worden.
Dialyseert u? Overleg dan met uw apotheker. Bij dialyse kan dit medicijn meer bijwerkingen veroorzaken. Het kan zijn dat aanpassing van uw medicijngebruik nodig is.

Lever
Heeft u levercirrose (een ziekte van de lever)? Overleg met uw arts. U mag dit medicijn NIET gebruiken. Bij levercirrose kan dit medicijn meer bijwerkingen veroorzaken. Mogelijk kunt u overstappen op een ander medicijn.`,
    },
    {
      question: `Mag ik zomaar met dit medicijn stoppen?`,
      answer: `U kunt op elk moment in één keer met het gebruik van dit medicijn stoppen.`,
    },
    {
      question: `Onder welke namen is cetirizine verkrijgbaar?`,
      answer: `De werkzame stof amoxicilline zit in de volgende producten: Voltaren Cataflam Diclofenac Diclofenacnatrium

De officiële bijsluiter van de verschillende producten van cetirizine vindt u op: Geneesmiddeleninformatiebank van het CBG.`,
    },
    {
      question: `Heb ik een recept nodig?`,
      answer: `Diclofenac is sinds 1974 internationaal op de markt. Het is verkrijgbaar onder de merknamen Cataflam en Voltaren, en als het merkloze Diclofenac.
Kleine verpakkingen van tabletten diclofenac in de sterkte 12.5 mg (max. 24 tabletten) zijn zonder recept verkrijgbaar bij apotheek en drogisterij. Grotere verpakkingen van deze sterkte en verpakkingen van de sterkte 25 mg zijn zonder recept uitsluitend bij de apotheek verkrijgbaar. Koopt u diclofenac bij de apotheek, dan controleert de apotheek of het geschikt voor u is en of het samengaat met uw andere medicijnen.
Sterktes hoger dan 25 mg zijn alleen verkrijgbaar op recept.
Het is te verkrijgen in tabletten, zetpillen, injecties, gel en oogdruppels. De toepassing van diclofenac in het oog en op de huid is hier niet beschreven.
Diclofenac wordt ook gebruikt in combinatie met een andere werkzame stof, onder de merknaam Arthrotec.`,
    },
  ],
};

export const Salbutamol: Medication = {
  name: "salbutamol",
  informal_name: "astma puffer",
  dosis: 2,
  next_med_moment_hour: 9,
  next_med_moment_minute: 15,
  information: `Salbutamol opent uw luchtwegen. Hierdoor wordt u minder benauwd. Bij de longziekten astma en COPD (chronische obstructieve longziekte). Binnen 5 minuten na het inademen van salbutamol merkt u dat u minder benauwd bent. Daarom wordt dit medicijn een snelwerkende luchtwegverwijder genoemd. Het werkt 4 tot 6 uur lang.`,
  faq: [
    {
      question: `Wat doet salbutamol inhalatie en waarbij gebruik ik het?`,
      answer: `Salbutamol is een luchtwegverwijder.
Artsen schrijven het voor bij astma en bij COPD (chronische obstructieve longziekte).`,
    },
    {
      question: `Wat zijn de mogelijke bijwerkingen?`,
      answer: `Behalve het gewenste effect kan dit medicijn bijwerkingen geven. Dit medicijn komt rechtstreeks in uw luchtwegen terecht en heeft daarom maar weinig bijwerkingen.
      
Zelden (bij 1 tot 10 op de 100 mensen)
- Trillende handen en zeer zelden hartkloppingen en versnelde hartslag.
- Hoesten
- Hoofdpijn, misselijk zijn en duizelig zijn.
- Psychische klachten, zoals rusteloos zijn en zeer zelden angstig zijn of dingen zien, horen of voelen die er niet zijn (hallucinaties). 
- Zweten
- Vieze smaak, brandend gevoel van de tong en zeer zelden geïrriteerde mond en keel.
      
Zeer zelden (bij minder dan 1 op de 100 mensen)
- Spierkramp
- Meer kans op gaatjes (tandcariës).
- Meer last van benauwheidsklachten direct na toedienen van het medicijn.
- Veranderingen in uw bloedsuikerspiegel.
- Overgevoeligheid
- Erger worden van bestaande hartklachten, zoals pijn op de borst direct na toedienen van het medicijn.
- Meer kans op hartritmestoornissen.
- Te weinig bloedplaatjes. Hierdoor heeft u meer kans op bloedingen, zoals bloedneuzen.
- Slaapproblemen
      
Neem contact op met uw apotheker of arts als u te veel last heeft van deze of andere bijwerkingen waar u zich zorgen over maakt.
`,
    },
    {
      question: `Hoe gebruik ik dit medicijn?`,
      answer: `Kijk voor de juiste dosering altijd op het etiket van de apotheek of in de bijsluiter.

Hoe?
- Goed inhaleren vergt veel oefening. Alleen als u goed inhaleert komt de werkzame stof diep genoeg in uw longen om te werken.
- De apotheekmedewerker zal u uitleggen hoe het apparaat werkt en het inhaleren een keer voordoen. Daarna kunt u een keer oefenen en kan de apotheekmedewerker nagaan of u alle handelingen goed uitvoert.
- Laat regelmatig, bijvoorbeeld elk jaar, in de apotheek controleren of u nog op de juiste manier inhaleert. Lukt het u niet om goed te inhaleren? Er zijn verschillende typen inhalatieapparaatjes. Mogelijk is een ander type apparaat geschikter voor u. Vraag uw arts of apotheker om advies.

Hoe lang? 
Gebruik dit middel zolang u last heeft van benauwdheid en zolang de arts het voorschrijft.

Wanneer?
- U hoeft meestal alleen te inhaleren wanneer u benauwd bent. Behalve als uw arts u een schema heeft gegeven.
- Heeft u vooral last van benauwdheidsaanvallen door inspanning, bijvoorbeeld tijdens het sporten? Dan kunt u dit middel tien tot vijftien minuten voor de inspanning gebruiken.
- Moet u een paar maal per dag inhaleren? Doe dit dan op vaste tijdstippen, goed verdeeld over de dag.`,
    },
    {
      question: `Wat moet ik doen als ik een dosis ben vergeten?`,
      answer: `U hoeft meestal alleen salbutamol in te ademen wanneer u benauwd bent. Tenzij uw arts u een schema heeft geadviseerd. Bent u in dat geval een inhalatie vergeten, dan kunt u deze alsnog nemen. Zorg ervoor dat u de volgende inhalatie minimaal vier uur hierna gebruikt.`,
    },
    {
      question: `Kan ik met dit medicijn autorijden, alcohol drinken en alles eten of drinken?`,
      answer: `Bij dit medicijn zijn hiervoor geen beperkingen.`,
    },
    {
      question: `Mag ik salbutamol met andere medicijnen gebruiken?`,
      answer: `De medicijnen waarmee de belangrijkste wisselwerkingen optreden, zijn bètablokkers.
- Sommige bètablokkers, dit zijn hart- en vaatmiddelen die worden gebruikt bij hoge bloeddruk, hartkramp, hartritmestoornissen en migraine. Ze worden ook gebruikt bij verhoogde oogboldruk (glaucoom). Sommige bètablokkers kunnen het effect van salbutamol tegengaan. Hierdoor heeft salbutamol minder effect. Bovendien kunnen bètablokkers bij daarvoor gevoelige patienten een benauwdheidsaanval oproepen. U kunt dus meer last van benauwdheid krijgen.
- De bètablokkers bij hart- en vaatziekten waarbij de wisselwerking optreedt, zijn carvedilol, labetalol, oxprenolol, propranolol en sotalol. Neem contact op met uw apotheek of arts als u deze combinatie voorgeschreven krijgt. Mogelijk is een ander middel geschikter voor u.
- Gebruikt u oogdruppels met een bètablokker? Namelijk oogdruppels met betaxolol, carteolol, levobunolol, metipranolol en timolol. Dan kunt u extra benauwheidsklachten voorkomen door na het indruppelen een minuut de traanbuisjes dicht te drukken. Dit doet u door met duim en wijsvinger in de neus te knijpen ter hoogte van de binnenooghoek. U voorkomt hiermee dat de werkzame stof uit de oogdruppel via de traanbuis in uw neus komt en vandaar uit in het bloed wordt opgenomen.`,
    },
    {
      question: `Mag ik dit medicijn gebruiken als ik zwanger ben, wil worden of borstvoeding geef?`,
      answer: `U kunt dit medicijn veilig gebruiken als u zwanger bent, binnenkort wilt worden of als u borstvoeding geeft. Het wordt al jarenlang gebruikt door vrouwen die zwanger willen worden, zwangere vrouwen en vrouwen die borstvoeding geven, zonder problemen met de vruchtbaarheid voor de zwangerschap of voor het kind.`,
    },
    {
      question: `Mag ik zomaar met dit medicijn stoppen?`,
      answer: `U kunt op elk moment in één keer met het gebruik van dit medicijn stoppen.`,
    },
    {
      question: `Onder welke namen is cetirizine verkrijgbaar?`,
      answer: `De werkzame stof amoxicilline zit in de volgende producten: Airomir, Ventolin inhalatie, Salbutamol inhalatie, Salamol, Steri-Neb

De officiële bijsluiter van de verschillende producten van cetirizine vindt u op: Geneesmiddeleninformatiebank van het CBG.`,
    },
    {
      question: `Heb ik een recept nodig?`,
      answer: `Salbutamol is sinds 1968 internationaal op de markt. Het is op recept verkrijgbaar onder de merknamen Airomir, Ventolin, Salamol Steri-Neb en als het merkloze Salbutamol. Het is te verkrijgen in inhalatiepoeder, inhalatievloeistof, inhalatiespray (aerosol).
Salbutamol is ook verkrijgbaar in drank en tabletten en in combinatie met een andere werkzame stof, onder de merknamen Combivent en Ipramol en als het merkloze Ipratropium/salbutamol. Deze tekst gaat alleen over salbutamol-inhalaties.`,
    },
  ],
};

export const Methylfenidaat: Medication = {
  name: "Methylfenidaat",
  informal_name: "ritalin",
  dosis: 2,
  next_med_moment_hour: 9,
  next_med_moment_minute: 15,
  information: `Methylfenidaat zorgt ervoor dat u meer aandacht heeft. Ook verbetert het uw stemming. Bij ADHD (u bent snel afgeleid, doet drukker en doet dingen zonder er bij na te denken). Ook bij narcolepsie (u moet vaak overdag slapen terwijl u genoeg geslapen heeft). Soms bij mensen op hun sterfbed, om de sufheid door sterke pijnstillers te verminderen en de stemming te verbeteren. Tabletten en capsules met verlengde afgifte: 's ochtends innemen. Methylfenidaat werkt na 1 tot 2 uur. Kijk op het etiket of u het voor, tijdens of na het ontbijt moet innemen. Heel doorslikken, zonder te kauwen.`,
  faq: [
    {
      question: `Wat doet Methylfenidaat en waarbij gebruik ik het?`,
      answer: `Methylfenidaat is een stimulerend medicijn dat de aandacht en stemming kan verbeteren.
Artsen schrijven het voor bij ADHD, bij narcolepsie en in de palliatieve zorg.`,
    },
    {
      question: `Wat zijn de mogelijke bijwerkingen?`,
      answer: `Behalve het gewenste effect kan dit medicijn bijwerkingen geven. 
      
Soms (bij 10 tot 30 op de 100 mensen)
- Hoofdpijn
- Slapeloosheid en zelden moeite met inslapen, rusteloosheid en hyperactiviteit.
- Nervositeit, zelden stress en zeer zelden een gevoel van spanning.
- Hartkloppingen, zelden versnelde hartslag en verhoogde bloeddruk. Gebruik methylfenidaat niet als u een hartafwijking heeft.
- Misselijkheid en zelden buikpijn, braken en diarree. 
- Droge mond
- Minder eetlust, waardoor gewichtsverlies optreedt. 

Zelden (bij 1 tot 10 op de 100 mensen)
- Duizeligheid
- Hartaandoeningen, zoals hartkramp (angina pectoris) en meer kans op een hartaanval. De kans hierop is groter bij mensen met hartkramp (angina pectoris) of al eerder een hartaanval hebben gehad. 
- Extra prikkelbaarheid en snel uit het evenwicht zijn.
- Bepaalde psychische aandoeningen kunnen verergeren, zoals ernstige geestelijke verwarring en ernstige angststoornissen. 
- Tics, zoals bij het syndroom van Gilles de la Tourette, verbeteren vaak bij gebruik van dit medicijn. Maar bij ernstige tics of bij gebruik van een hoge dosering kunnen ze soms ook verergeren. U kunt ook last krijgen van onrust, waardoor u bijvoorbeeld niet stil kunt zitten.
- Mensen met schizofrenie (psychose) kunnen meer klachten krijgen. U kunt dan hallucinaties (waandenkbeelden) krijgen. 
- Sneller last van koude handen en voeten. Dit is het gevolg van het nauwer worden van de bloedvaten. Vooral mensen met de ziekte van Raynaud merken deze bijwerking doordat ze meer last krijgen van koude vingers en tenen. 
- Kortademigheid en hoesten
- Verlies van spontaniteit.
- Slaperigheid en vermoeidheid.
- Minder zin in vrijen. Bij mannen: moeilijker krijgen van een erectie en langdurige en soms pijnlijke erectie. 
- Trillende handen, spier- of gewrichtspijn, stijfheid en moeite met lopen en spreken. Ook kan tandenknarsen en een tintelend gevoel in handen of voeten voorkomen.
- Wazig zien, dubbelzien, droge ogen, duizelingen en slap gevoel en spierzwakte.
- Veel zweten.
- Huiduitslag, jeuk of galbulten. Dit kan wijzen op overgevoeligheid voor dit medicijn, maar dat hoeft niet. 
      
Zeer zelden (bij minder dan 1 op de 100 mensen)
- Overgevoeligheid voor dit medicijn. Dit kunt u merken aan huiduitslag, galbulten, jeuk of gewrichtspijn. In zeer zeldzame gevallen ontstaat koorts, zwellingen in het gezicht, lippen, tong, mond en keel of een ernstige huidafwijking. 
- Bij jarenlang gebruik kan depressie ontstaan. 
- Meer kans op hartritmestoornissen. U kunt last krijgen van plotselinge duizelingen of u kunt kortdurend buiten bewustzijn raken. 
- Borstvorming bij mannen. Vrouwen kunnen last krijgen van opvliegers en menstruatiestoornissen. 
- Een iets verhoogd risico op een beroerte. Een beroerte merkt u aan plotselinge klachten. Deze kunnen zijn verlammingen in het gezicht (scheve mond bijvoorbeeld), verward spreken en denken, verlammingen aan arm of been, verlies van gezichtsvermogen, en tintelingen. 
      
Neem contact op met uw apotheker of arts als u te veel last heeft van deze of andere bijwerkingen waar u zich zorgen over maakt.
`,
    },
    {
      question: `Hoe gebruik ik dit medicijn?`,
      answer: `Kijk voor de juiste dosering altijd op het etiket van de apotheek of in de bijsluiter.

Hoe?
Als u snel last van uw maag krijgt, kunt u de tabletten of de capsules het beste met wat voedsel innemen.
- Gewone tabletten (Ritalin, Medikinet en Methylfenidaat): innemen met een half glas water.
- Tabletten met verlengde afgifte (Concerta en Kinecteen): slik de tabletten heel door met een half glas water, zonder te kauwen. De tabletten zijn voorzien van een beschermende laag die het werkzame bestanddeel langzaam gedurende de hele dag afgeeft aan het lichaam. Als u de tabletten kauwt of fijnmaakt gaat het beschermende laagje kapot en komt al het werkzame bestanddeel onbedoeld tegelijk vrij.
- Capsules met verlengde afgifte (Equasym XL en Medikinet CR): slik de capsules heel door met een half glas water, zonder te kauwen.
- U kunt ook de capsules openen en de inhoud van de capsule strooien over een eetlepel appelmoes. Neem dit meteen in, zonder te kauwen. Drink daarna een half glas water. De korrels in de capsules zijn voorzien van een beschermende laag die het werkzame bestanddeel langzaam gedurende 8 uur afgeeft aan het lichaam. Als u de capsules of de korrels kauwt of fijnmaakt, gaat het beschermende laagje kapot en komt al het werkzame bestanddeel onbedoeld tegelijk vrij.

Hoe lang? 
ADHD
Na ongeveer 4 weken kunnen u en de arts meestal beoordelen of de behandeling aanslaat. Het is aan te raden dit ook zelf bij te houden, bijvoorbeeld door het gedrag dagelijks in een cijfer uit te drukken.
Hoe lang u dit medicijn moet gebruiken, verschilt. Meestal moet u dit medicijn langdurig gebruiken. Wanneer u het langer dan een jaar moet gebruiken, adviseert de arts meestal één of meer keren per jaar gedurende enkele weken te stoppen. Tijdens deze 'medicijnvakantie' kunnen u en de arts beoordelen of methylfenidaat nog nodig is. Mogelijk bent u inmiddels voldoende in staat met de aandachtsstoornis en de overmatige activiteit om te gaan, zodat de methylfenidaat niet meer nodig is.

Narcolepsie
Methylfenidaat geneest uw aandoening niet, maar werkt alleen tegen de verschijnselen van narcolepsie. U zult dit medicijn daarom meestal langdurig moeten gebruiken.

Wanneer?
Meestal raadt de arts aan de dagdosering in 2 of 3 keer in te nemen. Gebruikelijk is dan dat u de eerste tablet 's ochtends neemt, meteen na het opstaan, en de tweede rond één uur 's middags. Het werkt dan gedurende de hele dag. Neem de laatste dosis niet later dan 4 uur voor het slapengaan, omdat u anders moeite met inslapen kan krijgen.
Als de tabletten zijn uitgewerkt, na 3-6 uur, kunt u korte tijd extra actief zijn. Door de tijdstippen goed te plannen, kunt u proberen de verhoogde activiteit op een rustig moment van de dag te laten vallen.`,
    },
    {
      question: `Wat moet ik doen als ik een dosis ben vergeten?`,
      answer: `Het is belangrijk dit medicijn consequent in te nemen. Mocht u toch een dosis vergeten zijn:
Duurt het nog minstens 2 uur voor de volgende portie? Neem hem dan alsnog. Maar is de volgende portie binnen de komende 2 uur, sla deze tablet(ten) dan over of verschuif de volgende portie tot later op de dag, maar niet later dan 4 uur voor het slapengaan.
Ontdekt u binnen 4 uur vóór bedtijd dat u de tabletten bent vergeten, sla ze dan over. Later op de avond heeft u vaak te veel problemen om in te slapen.`,
    },
    {
      question: `Kan ik met dit medicijn autorijden, alcohol drinken en alles eten of drinken?`,
      answer: `autorijden?
Dit medicijn kan bijwerkingen veroorzaken, zoals nervositeit, slaperigheid, angst en duizeligheid. Heeft u hier last van? Dan mag u niet autorijden. Het kan gevaarlijk zijn aan het verkeer deel te nemen zo lang u last heeft van deze bijwerkingen. Deze bijwerkingen komen vooral de eerste dagen van het gebruik voor. Ook als de dosering omhoog gaat, kunt u (extra) last hebben van deze bijwerkingen.
Let op: ook ADHD en slaapziekte kunnen een reden zijn dat u niet mag autorijden. Overleg met uw arts of dat bij u het geval is. Wilt u meer informatie over autorijden bij bepaalde aandoeningen? Kijk dan op de website van het CBR.
      
alcohol drinken?
Alcohol versterkt de bijwerkingen van methylfenidaat. Ook beïnvloedt alcohol het beoordelingsvermogen. Beperk daarom het gebruik van alcohol.
      
alles eten?
Bij dit medicijn zijn hiervoor geen beperkingen.`,
    },
    {
      question: `Mag ik Methylfenidaat met andere medicijnen gebruiken?`,
      answer: `Dit medicijn heeft wisselwerkingen met andere medicijnen. In de tekst hieronder staan alleen de werkzame stoffen van deze medicijnen, dus niet de merknamen. Of uw medicijn een van die werkzame stoffen bevat, kunt u nagaan in uw bijsluiter onder het kopje 'samenstelling'.

De medicijnen waarmee de belangrijkste wisselwerkingen optreden, zijn de volgende.
- Fenelzine en tranylcypromine, medicijnen tegen depressiviteit. Door de combinatie heeft u meer kans op een zeer ernstige verhoging van de bloeddruk. Raadpleeg uw arts.

Twijfelt u eraan of een van de bovenstaande wisselwerkingen voor u van belang is? Neem dan contact op met uw apotheker of arts.`,
    },
    {
      question: `Mag ik dit medicijn gebruiken als ik zwanger ben, wil worden of borstvoeding geef?`,
      answer: `Zwangerschap
Over het gebruik van dit medicijn tijdens de zwangerschap is nog te weinig bekend. Meld het aan uw arts en apotheker zodra u zwanger bent of dit binnenkort wilt worden. Samen kunt u bespreken wat het risico voor de baby is als u doorgaat met het medicijn. Of wat het risico voor u of uw baby is als u met het medicijn stopt.
      
Borstvoeding
Wilt u borstvoeding geven, overleg dan met uw arts of apotheker. Dit medicijn komt in de moedermelk. Het is niet bekend of dit medicijn schadelijk voor de baby is. Mogelijk kan de arts u (tijdelijk) een ander medicijn voorschrijven, waarvan wel bekend is dat u het veilig kunt gebruiken.
Als uw arts vindt dat u borstvoeding kunt geven: let dan goed op mogelijke bijwerkingen bij het kind. Dit merkt u doordat uw baby minder goed drinkt en minder goed slaapt. Als deze bijwerkingen optreden, neem dan contact op met uw arts.`,
    },
    {
      question: `Mag ik zomaar met dit medicijn stoppen?`,
      answer: `U kunt niet in één keer stoppen. Bouw in enkele dagen af. Als u plotseling stopt, kunt u misselijk worden of gaan trillen en beven.
Er is een heel kleine kans dat u tijdelijk erg neerslachtig of verward wordt. Ook dit kunt u voorkomen door geleidelijk het aantal tabletten of capsules te minderen. Bij ADHD voorkomt u hiermee ook een teleurstelling als het oude gedrag in alle hevigheid terugkomt.`,
    },
    {
      question: `Onder welke namen is Methylfenidaat verkrijgbaar?`,
      answer: `De werkzame stof amoxicilline zit in de volgende producten: Ritalin, Concerta, Methylfenidaat, Equasym XL, Medikinet, Medikinet CR, Kinecteen

De officiële bijsluiter van de verschillende producten van cetirizine vindt u op: Geneesmiddeleninformatiebank van het CBG.`,
    },
    {
      question: `Heb ik een recept nodig?`,
      answer: `Methylfenidaat is sinds 1954 internationaal op de markt. Het is op recept verkrijgbaar in gewone tabletten onder de merknamen Ritalin en Medikinet en als het merkloze Methylfenidaat, in tabletten met een verlengde afgifte onder de merknaam Concerta en Kinecteen en in capsules met verlengde afgifte onder de merknamen Equasym XL en Medikinet CR.`,
    },
  ],
};

export const Naproxennatrium: Medication = {
  name: "Naproxennatrium",
  informal_name: "naproxen",
  dosis: 2,
  next_med_moment_hour: 9,
  next_med_moment_minute: 15,
  information: `Naproxen vermindert uw pijn, remt uw ontstekingen en verlaagt uw koorts. Bij gewrichtspijn, reumatoïde artritis, ziekte van Bechterew, jicht, koliekpijn, hoofdpijn, migraine, menstruatieklachten, artrose (versleten gewrichten), spierpijn en griep of verkoudheid. De tabletten verminderen binnen 1 uur uw pijn. Zetpillen werken binnen anderhalfuur. Deze werken 7 tot 12 uur lang. Bij ontstekingen verdwijnen de rode en opgezette plekken binnen 1 week.`,
  faq: [
    {
      question: `Wat doet Naproxen en waarbij gebruik ik het?`,
      answer: `Naproxen is een ontstekingsremmende pijnstiller. Dit soort pijnstillers wordt ook wel NSAID genoemd. Het werkt pijnstillend, ontstekingsremmend en koortsverlagend.

Het is te gebruiken bij pijn waarbij ook sprake is van een ontsteking, zoals bij gewrichtspijn. Ook bij ontstekingen van de gewrichten zoals reumatoïde artritis, ziekte van Bechterew en jicht. Bovendien bij koliekpijn, hoofdpijn, migraine en menstruatieklachten, zoals abnormaal vaginaal bloedverlies. Het wordt soms ook gebruikt bij pijnlijke, stijve en versleten gewrichten (artrose), spierpijn en klachten door griep of verkoudheid.`,
    },
    {
      question: `Wat zijn de mogelijke bijwerkingen?`,
      answer: `Behalve het gewenste effect kan dit medicijn bijwerkingen geven. 

Zelden (bij 1 tot 10 op de 100 mensen)
- Maagklachten: maagirritatie, buikpijn, misselijkheid, braken, vol gevoel, boeren, zuurbranden en zeer zelden gebrek aan eetlust.
- Een maag- of darmzweer of andere ernstige beschadigingen van uw maag, darmen of slokdarm.
- Darmklachten: winderigheid en zelden diarree en verstopping.
- Hoofdpijn
- Slaperigheid
- Oorsuizen en zeer zelden slechter horen. Raadpleeg dan uw arts.
- Draaierigheid en duizeligheid
- Heeft u een bloedstollingsziekte? U heeft meer kans op bloedingen. Overleg met uw arts of apotheker voor u dit medicijn gaat gebruiken.
      
Zeer zelden (bij minder dan 1 op de 100 mensen)
- Ontstekingen in uw mondholte en op de tong. Droge mond en dorstgevoel.
- Wazig zien of dubbelzien.
- Dikke enkels, polsen en benauwdheid. Dit komt doordat uw lichaam vocht vasthoudt (oedeem). Vooral mensen met een hart dat minder goed pompt (hartfalen) kunnen hier last van krijgen. Overleg met uw arts als u meer last krijgt van benauwdheid en vochtophoping.
- Haaruitval
- Psychische klachten, zoals nachtmerries, onrust, en angst. Ook kunt u dingen gaan zien, horen of voelen die er niet zijn (hallucinaties).
- Huiduitslag met jeuk. Dit kan komen door allergie (zie hierna).
- Overgevoeligheid voor dit medicijn. Bijvoorbeeld in de vorm van huiduitslag, zwelling of duizelig worden. Mensen met astma zijn vaker overgevoelig voor dit medicijn.
- Heeft u psoriasis? U kunt meer last krijgen.
- Schade aan uw nieren
- Bloedafwijkingen, ontsteking van de alvleesklier of leverontsteking. Raadpleeg uw arts als u last krijgt van: hevige pijn in uw bovenbuik, geelzucht, onverklaarbare blauwe plekken, extreme vermoeidheid, keelpijn met koorts of blaren in de mond. Overleg ook met uw arts als u last heeft van uw alvleesklier. De klachten kunnen verergeren. 
      
Neem contact op met uw apotheker of arts als u te veel last heeft van deze of andere bijwerkingen waar u zich zorgen over maakt.
`,
    },
    {
      question: `Hoe gebruik ik dit medicijn?`,
      answer: `Kijk voor de juiste dosering altijd op het etiket van de apotheek of in de bijsluiter.

Hoe?
- Gewone en omhulde tabletten. Innemen met een half glas water.
- Maagsapresistente tabletten (MSR). Dit zijn tabletten die tegen maagzuur kunnen. Innemen met een half glas water zonder te kauwen. Als u de tabletten kauwt, gaat het beschermende laagje kapot en komt het medicijn al in de maag vrij, in plaats van in de darmen. Het kan dan maagklachten geven.
- Zetpillen. De zetpil in de anus (poepgat) inbrengen. Het maakt daarbij niet zo veel uit of u de zetpil met de punt naar voren of met de stompe kant naar voren inbrengt. U kunt de zetpil met een beetje water bevochtigen. Hierdoor kunt u hem wat makkelijker inbrengen. De natuurlijke reflex om de zetpil uit te poepen verdwijnt zodra de zetpil is gesmolten (na ongeveer één minuut).

Hoe lang? 
- Pijn, zoals gewrichtspijn. Neem contact op met uw arts als deze pijnstiller na twee weken nog altijd onvoldoende effect heeft. Mogelijk is een andere pijnstiller voor u beter geschikt. Heeft u dit medicijn enkele weken gebruikt en nog altijd veel last van uw gewrichten? Neem dan contact op met uw arts.
- langdurige gewrichtsontstekingen, zoals reumatoïde artritis en de ziekte van Bechterew. Het duurt zeker enkele dagen tot een week voor de ontsteking vermindert. Bij reumatoïde artritis schrijven artsen dit medicijn meestal voor als de reumamedicijnen nog aan moeten slaan of gedurende periodes dat de ziekte verergert.
- Kortdurende gewrichtsontstekingen. Bij gewrichtsontstekingen zoals slijmbeursontsteking en peesontstekingen moet u dit medicijn meestal enkele dagen gebruiken voor de ontsteking is genezen. Dit merkt u aan een afname van de roodheid, pijn en zwelling.
- Artrose. Een ziekte waarbij het kraakbaan in uw gewrichten dunner wordt. Hierdoor worden ze stijf en doen ze pijn. Gebruik dit medicijn niet langer dan twee weken achter elkaar. Bij verergering van de klachten kunt u het opnieuw gebruiken. Vraag uw arts na hoeveel tijd dat weer kan en hoelang en hoe vaak u het dan kunt gebruiken.
- Onsteking in de gewricht (jicht). Zijn de klachten na twee tot drie dagen nog niet verbeterd? Raadpleeg dan uw arts. Mogelijk is een ander medicijn voor u beter geschikt.
- Hoofdpijn. gebruik dit medicijn alleen gedurende korte tijd. Heeft u al langer dan drie maanden vaak hoofdpijn, gebruikt u meer dan honderd tabletten per maand en heeft u meer dan vijftien dagen per maand hoofdpijn? Mogelijk wordt uw hoofdpijn juist door dit medicijn veroorzaakt. Neem in dat geval contact op met uw arts voor een advies.
- Migraine. Gebruik dit medicijn alleen tijdens een migraineaanval. Deze duurt in het algemeen tussen de vier en zestien uur. Raadpleeg uw arts als u voortdurend last van hoofdpijn heeft, of als de migraineaanvallen vaker dan twee keer per maand optreden. U kunt dan misschien beter een medicijn gebruiken dat migraineaanvallen voorkomt.
- Menstruatieklachten, zoals pijn, overmatig bloedverlies of migraine.
- Heeft u vooral last van pijn en krampen? Begin meteen als u ongesteld wordt en slik gedurende twee tot drie dagen door.
- Heeft u altijd last van hoofdpijn of migraine tijdens de menstruatie of stopweek van de pil? Gebruikt u dit medicijn om een dergelijke aanval te voorkomen? Start twee tot vier dagen voor de menstruatie begint met deze pijnstiller. Meestal is drie dagen gebruik voldoende.
- Heeft u last van te veel bloedverlies tijdens de menstruatie? Gebruik dit medicijn dan de eerste drie dagen van de menstruatie. Begin minstens een dag voor u de menstruatie verwacht. Probeer na drie tot zes maanden of u dit medicijn nog nodig heeft. Gebruik het daartoe een keer niet en kijk of de klachten al zijn afgenomen.
- Bij pijn door trekken van tanden of kiezen of door andere tandheelkundige ingrepen: neem de eerste dosis vóór de ingreep. Ga niet langer door dan tot 24 uur erna.
- Overige pijnen, zoals operatiepijn. Stop met het gebruik als de pijn is verdwenen of weer voldoende is te verdragen.
- Koorts. Gebruik dit medicijn alleen om hoge koorts (meer dan 39.5 ºC) te onderdrukken. Houdt de hoge koorts langer dan vijf dagen aan, neem dan contact op met uw arts.

Wanneer?
- Bij langdurige pijnklachten is het belangrijk dit medicijn consequent in te nemen. Dan houdt u de pijn het beste onder controle.
- Bij ochtendstijfheid door reuma: neem voor de nacht een zetpil.
- Jichtaanvallen: als u dit medicijn gebruikt tegelijk met medicijnen die jichtaanvallen moeten voorkomen. Begin tegelijk met beide soorten medicijnen.
- Migraine. Neem dit medicijn meteen in als u een migraine-aanval voelt opkomen. Het heeft dan het meeste effect.`,
    },
    {
      question: `Wat moet ik doen als ik een dosis ben vergeten?`,
      answer: `Gebruikt u dit middel zonder recept voor een kortdurende klacht en heeft u het middel nog nodig? U kunt de tablet alsnog innemen, maar zorg dat er altijd minstens acht uur tussen twee doseringen zit. Gebruik niet meer dan 660 mg naproxen per dag.

Bij langdurige pijnklachten is het belangrijk dit medicijn consequent in te nemen. Mocht u toch een dosis vergeten zijn:
- Als u dit medicijn 1 keer per dag gebruikt: duurt het nog meer dan 8 uur voor u de volgende dosis normaal inneemt? Neem de vergeten dosis dan alsnog in. Duurt het nog minder dan 8 uur? Sla de vergeten dosis dan over.
- Als u dit medicijn 2 keer per dag gebruikt: duurt het nog meer dan 4 uur voor u de volgende dosis normaal inneemt? Neem de vergeten dosis dan alsnog in. Duurt het nog minder dan 4 uur? Sla de vergeten dosis dan over.
- Als u dit medicijn 3 keer per dag gebruikt: duurt het nog meer dan 2 uur voor u de volgende dosis normaal inneemt? Neem de vergeten dosis dan alsnog in. Duurt het nog minder dan 2 uur? Sla de vergeten dosis dan over.`,
    },
    {
      question: `Kan ik met dit medicijn autorijden, alcohol drinken en alles eten of drinken?`,
      answer: `autorijden?
Bij dit medicijn zijn hiervoor geen beperkingen.
      
alcohol drinken?
Alcohol irriteert de maag, net als dit medicijn. U kunt daardoor eerder last krijgen van uw maag. Probeer het drinken van alcohol eerst met mate. U kunt dan zelf inschatten of u hier veel last van krijgt. In het algemeen is enkele keren per week een glas wijn geen probleem.
      
alles eten?
Bij dit medicijn zijn hiervoor geen beperkingen.`,
    },
    {
      question: `Mag ik dit medicijn gebruiken als ik zwanger ben, wil worden of borstvoeding geef?`,
      answer: `Zwangerschap
Bent u zwanger of wilt u zwanger worden? U kunt dan beter paracetamol gebruiken bij pijn. Paracetamol is een veiligere pijnstiller tijdens de zwangerschap. Werkt paracetamol niet voldoende tegen uw pijn? Overleg dan met uw arts.
Gebruik naproxen NIET bij pijn tijdens de laatste 3 maanden van de zwangerschap. Dit medicijn is dan schadelijk voor de baby. Het risico op aangeboren afwijkingen bij de baby is verhoogd. Ook kan het problemen geven bij de bevalling. Gebruikt u dit medicijn al? Overleg dan met uw arts. Misschien kunt u overstappen op een ander medicijn. Een medicijn dat wel veilig is tijdens de zwangerschap.
Wilt u dit medicijn gebruiken tijdens de eerste 6 maanden van de zwangerschap? Of als u zwanger wilt worden? Overleg dan met uw arts. Ook dan kunt u dit medicijn beter NIET gebruiken. Misschien kunt u (tijdelijk) overstappen op een ander medicijn. Een medicijn dat wel veilig is tijdens de zwangerschap. Is dat niet mogelijk? Dan kunt u af en toe dit medicijn gebruiken, in een zo laag mogelijke dosering.
Als uw arts vindt dat dit medicijn toch noodzakelijk is, voor een langere periode of in een hoge dosering. Bijvoorbeeld bij een ernstige vorm van reumatoide artritis. Dan zal de arts de baby en de hoeveelheid vruchtwater regelmatig controleren.
      
Borstvoeding
Gebruikt u dit medicijn langdurig en wilt u borstvoeding geven, overleg dan met uw arts. U kunt dit medicijn beter NIET gebruiken als u borstvoeding geeft. Dit medicijn komt in de moedermelk en kan schadelijk zijn voor de baby. Mogelijk kan de arts u (tijdelijk) een ander medicijn voorschrijven, waarvan wel bekend is dat u het veilig kunt gebruiken.
Gebruikt u dit medicijn kortdurend? U kunt dit medicijn veilig gebruiken als u borstvoeding geeft. Dit medicijn komt in de moedermelk, maar is niet schadelijk voor het kind.`,
    },
    {
      question: `Mag ik zomaar met dit medicijn stoppen?`,
      answer: `U kunt op elk moment in één keer met het gebruik van dit medicijn stoppen.`,
    },
    {
      question: `Onder welke namen is Naproxennatrium verkrijgbaar?`,
      answer: `De werkzame stof amoxicilline zit in de volgende producten: Naproxen, Aleve Classic, Naproxennatrium, Aleve Feminax, Naproxenum, Aleve Intense, Aleve Select, Vimovo

De officiële bijsluiter van de verschillende producten van cetirizine vindt u op: Geneesmiddeleninformatiebank van het CBG.`,
    },
    {
      question: `Heb ik een recept nodig?`,
      answer: `Naproxen is sinds 1973 internationaal op de markt. Het is verkrijgbaar onder de merknaam Aleve en als het merkloze Naproxen, Naproxenum en Naproxennatrium in tabletten en zetpillen.
Kleine verpakkingen van tabletten naproxen in de sterktes 220 mg en 275 mg (max. 12 tabletten) zijn zonder recept verkrijgbaar bij apotheek en drogisterij. Grotere verpakkingen van deze sterktes en tabletten van 550 mg zijn zonder recept uitsluitend bij de apotheek verkrijgbaar. Koopt u naproxen bij de apotheek, dan controleert de apotheek of het geschikt voor u is en of het samengaat met uw andere medicijnen.
De zetpillen en de meeste tabletten van 500 mg zijn uitsluitend op recept verkrijgbaar.
Naproxen wordt ook gebruikt in combinatie met esomeprazol, onder de merknaam Vimovo.`,
    },
  ],
};

export const Omeprazol: Medication = {
  name: "omeprazol",
  informal_name: "omeprazol",
  dosis: 2,
  next_med_moment_hour: 9,
  next_med_moment_minute: 15,
  information: `Omeprazol zorgt voor minder maagzuur. Bij maagklachten zoals brandend maagzuur, ontsteking van de maag, maagzweren en darmzweren. Ook bij het syndroom van Zollinger-Ellison. Dit is een ziekte met veel maagklachten. Omeprazol helpt ook om uw maag te beschermen als u andere medicijnen gebruikt die maagklachten geven. U hoeft omeprazol dan alleen te slikken op dagen dat u medicijnen gebruikt die de maag kunnen beschadigen. Binnen een paar dagen heeft u minder last van uw maag.`,
  faq: [
    {
      question: `Wat doet omeprazol en waarbij gebruik ik het?`,
      answer: `Omeprazol is een maagzuurremmer. Het behoort tot de protonpompremmers. Het vermindert de aanmaak van zuur in de maag.

      Artsen schrijven het voor bij maagklachten, maag- en darmzweren, ontsteking van de maag en bij het syndroom van Zollinger-Ellison.`,
    },
    {
      question: `Wat zijn de mogelijke bijwerkingen?`,
      answer: `Behalve het gewenste effect kan dit medicijn bijwerkingen geven. De belangrijkste bijwerkingen zijn de volgende:

Zelden (bij 1 tot 10 op de 100 mensen)
- Maagdarmklachten, zoals misselijkheid, braken, buikpijn, diarree, verstopping, winderigheid.
- Hoofdpijn   

Zeer zelden (bij minder dan 1 op de 100 mensen)
- Duizeligheid, slaperigheid of slapeloosheid.
- Tekort aan vitamine B12, een bepaalde stof in het bloed. Dit merkt u aan tintelingen of een doof gevoel in vingers en tenen of evenwichtsstoornissen.
- Tekort aan magnesium in het bloed. Dit merkt u aan vermoeidheid, spierpijn, spierkramp, duizeligheid en hartkloppingen.
- Zweten, haaruitval of gevoelsstoornissen.
- Meer kans op infecties in de maag of darmen.
- Wazig zien of dubbelzien, oorsuizen of een verminderd gehoor.
- Kortademigheid of vocht vasthouden in de benen.
- Psychische klachten kunnen ontstaan of verergeren. Bijvoorbeeld verwardheid en depressie. Ook kunt u dingen gaan zien, voelen of horen die er niet zijn (hallucinaties).
- Jeuk, huiduitslag. Dit kan wijzen op overgevoeligheid, maar dat hoeft niet.
- Overgevoeligheid voor dit medicijn. U merkt dat aan huiduitslag, galbulten of jeuk.
- In zeer zeldzame gevallen kan een ernstige huidaandoening ontstaan met een uitgebreide roodheid, bulten of blaren op de huid of opgezwollen lippen, tong of gezicht, benauwdheid en flauwvallen.
- Bij mannen: borstvorming en erectiestoornissen.
- Klachten van uw mond en keel, zoals een droge mond en keel en ontsteking van het mondslijmvlies.
- Ontsteking van de nieren of van de lever en bloedafwijkingen. Waarschuw uw arts bij een of meer van de volgende verschijnselen: minder plassen, troebele urine, pijn in de zij of plotselinge hevige pijn in uw bovenbuik, een gele kleur van uw huid en oogwit, onverklaarbare blauwe plekken, extreme vermoeidheid of keelpijn met koorts en blaren in de keel.
- Meer kans op botbreuken of breuken in de ruggenwervels (rugpijn).
- Hartritmestoornissen. U merkt dit soms alleen aan plotselinge duizelingen of als u even wegraakt. Vooral mensen met de aangeboren vorm van de hartritmestoornis verlengd QT-interval hebben hier meer kans op.

Neem contact op met uw apotheker of arts als u te veel last heeft van deze of andere bijwerkingen waar u zich zorgen over maakt.
`,
    },
    {
      question: `Hoe gebruik ik dit medicijn?`,
      answer: `Kijk voor de juiste dosering altijd op het etiket van de apotheek of in de bijsluiter.

Hoe?
- Capsules: innemen zonder te kauwen. U mag de capsule eventueel openmaken. Neem de korreltjes in met wat water, yoghurt of vruchtensap. U mag de korreltjes niet fijnmalen of er op kauwen. Dan gaat namelijk het beschermende laagje kapot. Hierdoor komt het medicijn al in de maag vrij, in plaats van in de darmen. Dan werkt het minder goed.
- Tabletten: innemen zonder te kauwen. Als u moeite heeft met slikken, mag u de tablet in een half glas water uit elkaar laten vallen. Het valt dan uiteen in kleine korreltjes die allemaal voorzien zijn van een beschermende laag. Roer de vloeistof om en drink hem op. Spoel het glas daarna na met een beetje water en drink dit op, om de achtergebleven korrels ook in te nemen. Als de tablet een breukstreep heeft, mag u de tablet op de breukstreep doormidden breken. De beide helften moet u heel doorslikken met een beetje water.
- Drank: Schud de fles goed voor gebruik. Meet de juiste hoeveelheid af met een doseerspuit of een maatbekertje en slik de drank door. De drank kan ook via een NG sonde of PEG sonde worden gegeven. Vraag uw apotheker om advies.

Hoe lang? 
Het hangt af van uw klachten hoelang u het moet gebruiken. Een maag- of darmzweer kan in 4 tot 8 weken genezen. Soms schrijft de arts het medicijn langdurig voor om te verhinderen dat de zweer terugkomt.
Slikt u dit medicijn als maagbeschermer bij ontstekingsremmende pijnstillers of bijnierschorshormonen? Gebruik de maagbeschermer dan zolang u die medicijnen slikt.
Heeft u het syndroom van Zollinger-Ellison? U moet het medicijn vaak zeer langdurig gebruiken.

Wanneer?
U mag het medicijn innemen op elk moment van de dag. Het beste kunt u vaste tijdstippen kiezen, dan vergeet u minder snel een dosis. Als u het 1 keer per dag gebruikt: bij voorkeur 's ochtends. Als u het 2 keer per dag gebruikt: 's ochtends en 's avonds.
Gebruikt u de drank? Neem deze in op een lege maag, dus minimaal een half uur voor het eten. Dit medicijn wordt namelijk slecht opgenomen als er ook voedsel in de maag zit.`,
    },
    {
      question: `Wat moet ik doen als ik een dosis ben vergeten?`,
      answer: `- Gebruikt u dit medicijn 1 keer per dag? Duurt het nog meer dan 8 uur voor u de volgende dosis normaal inneemt? Neem de vergeten dosis dan alsnog in. Duurt het nog minder dan 8 uur? Sla de vergeten dosis dan over.
- Gebruikt u dit medicijn 2 keer per dag? Duurt het nog meer dan 4 uur voor u de volgende dosis normaal inneemt? Neem de vergeten dosis dan alsnog in. Duurt het nog minder dan 4 uur? Sla de vergeten dosis dan over.`,
    },
    {
      question: `Kan ik met dit medicijn autorijden, alcohol drinken en alles eten of drinken?`,
      answer: `autorijden?
Ja, dat kan. Dit medicijn heeft geen invloed op hoe goed u kunt autorijden.
      
alcohol drinken?
Alcohol irriteert de maag. Drink daarom liever geen alcohol.
      
alles eten?
U kunt alles eten wat uw maag verdraagt. Bepaalde soorten voedsel zijn echter af te raden als u last heeft van uw maag.`,
    },
    {
      question: `Mag ik dit medicijn gebruiken als ik zwanger ben, wil worden of borstvoeding geef?`,
      answer: `Zwangerschap
U kunt dit medicijn veilig gebruiken. Het wordt al jarenlang gebruikt door zwangere vrouwen zonder nadelige gevolgen voor het kind.
      
Borstvoeding
U kunt dit medicijn veilig gebruiken als u borstvoeding geeft. Dit medicijn komt in een zeer kleine hoeveelheid in de moedermelk, maar is niet schadelijk voor het kind.`,
    },
    {
      question: `Mag ik zomaar met dit medicijn stoppen?`,
      answer: `Gebruikt u dit medicijn langer dan 8 weken achter elkaar? Dan kunt u beter niet in één keer stoppen. Uw maag reageert dan namelijk met de aanmaak van extra veel maagzuur, waardoor uw klachten weer terugkomen. U kunt het gebruik het beste in 2 tot 3 weken langzaam afbouwen om dit te voorkomen. Overleg hierover met uw apotheker of arts.
Heeft u het korter dan 8 weken gebruikt? Dan kunt u wel in één keer stoppen.`,
    },
    {
      question: `Onder welke namen is Omeprazol verkrijgbaar?`,
      answer: `De werkzame stof amoxicilline zit in de volgende producten: Losec Omeprazol Losecosan Omecat Maagzuurremmer Omeprazol Pedippi

De officiële bijsluiter van de verschillende producten van cetirizine vindt u op: Geneesmiddeleninformatiebank van het CBG.`,
    },
    {
      question: `Heb ik een recept nodig?`,
      answer: `Omeprazol is sinds 1988 internationaal op de markt. Het is op recept verkrijgbaar in capsules, tabletten en als drank onder de merknamen Losecosan, Losec, Omecat en Pedippi en als het merkloze Omeprazol en Maagzuurremmer Omeprazol.

Omeprazol is in lage dosering voor maagklachten ook zonder recept bij apotheek en drogisterij verkrijgbaar onder de merknaam Losecosan in tabletten. En als het merkloze Maagzuurremmer Omeprazol in capsules. Koopt u omeprazol bij de apotheek, dan controleert de apotheek of het geschikt voor u is en of het samengaat met uw andere medicijnen.`,
    },
  ],
};

export const medications = [
  { name: "hayFever", content: HayFever },
  { name: "pill", content: Pill },
  { name: "amoxicilline (antibiotica)", content: Amoxicilline },
  { name: "diclofenac (pijnstiller)", content: Diclofenac },
  { name: "salbutamol inhalatie", content: Salbutamol },
  { name: "Methylfenidaat(adhd)", content: Methylfenidaat },
  { name: "Naproxennatrium(naproxen)", content: Naproxennatrium },
  { name: "Omeprazol(maagzuurremmer)", content: Omeprazol },
];
