import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const Figurine = [
    {
      id: '1',
      nome: 'Il sedile storto',
      descrizione:
        'Il pilota monta in macchina e si accorge che il sedile è leggermente fuori posizione, perde 3 secondi ai box per risistemarlo',
      sfiga: '2',
    },
    {
      id: '2',
      nome: 'Il granello traditore',
      descrizione:
        'Un piccolo granello di gomma entra nel casco durante la partenza, costringendo il pilota a stringere gli occhi per alcuni giri',
      sfiga: '4',
    },
    {
      id: '3',
      nome: 'Il dado ballerino',
      descrizione:
        'Il volante vibra più del solito per un dado non stretto a dovere: il pilota guida con disagio ma riesce a finire la gara',
      sfiga: '6',
    },
    {
      id: '4',
      nome: 'Il DRS sonnolento',
      descrizione:
        'Il DRS non si apre al primo tentativo in un rettilineo chiave, si recupera al giro successivo ma si perde il sorpasso',
      sfiga: '8',
    },
    {
      id: '5',
      nome: 'La pioggia puntuale',
      descrizione:
        'Una pioggerella improvvisa inizia proprio quando la vettura è rientrata ai box con gomme slick da asciutto: il team attende e si azzecca',
      sfiga: '10',
    },
    {
      id: '6',
      nome: 'Il copricerchio in fuga',
      descrizione:
        'Il pilota parte con il copricerchio ancora attaccato alla ruota anteriore: cade dopo pochi metri senza conseguenze, ma il team è imbarazzato',
      sfiga: '12',
    },
    {
      id: '7',
      nome: "L'ospite nel casco",
      descrizione:
        'Una formica entra nel casco del pilota durante la sosta ai box, distraendolo per due giri',
      sfiga: '14',
    },
    {
      id: '8',
      nome: 'Il muto di Singapore',
      descrizione:
        'Il sistema radio si guasta per metà gara: il pilota non sente le istruzioni del muretto ma gestisce la situazione autonomamente',
      sfiga: '16',
    },
    {
      id: '9',
      nome: "L'uccello aereodinamico",
      descrizione:
        'Un uccello colpisce il muso della vettura al rettilineo del traguardo, lasciando una macchia sul muso che disturba il flusso aerodinamico leggermente',
      sfiga: '18',
    },
    {
      id: '10',
      nome: 'Un giro di troppo',
      descrizione:
        'La strategia prevede una sosta al giro 20, ma il safety car virtuale esce al giro 19: il team non riesce a cambiare piano in tempo e si perde 4 secondi',
      sfiga: '20',
    },
    {
      id: '11',
      nome: 'La ghiaia del venerdì',
      descrizione:
        "Il pilota finisce in gravel trap nell'ultimo giro libero delle prove, non abbastanza a lungo da perdere il tempo, ma abbastanza da stressare il team",
      sfiga: '22',
    },
    {
      id: '12',
      nome: "L'inciampo da 0.3",
      descrizione:
        'Il pit stop viene eseguito perfettamente, ma il meccanico del pneumatico posteriore destro inciampa e il pilota riparte con 0.3 secondi di ritardo',
      sfiga: '24',
    },
    {
      id: '13',
      nome: 'Il calore elettrico',
      descrizione:
        'Il MGU-K si spegne per 5 giri a causa di un surriscaldamento: si perde circa 0.2 s/giro in rettilineo',
      sfiga: '26',
    },
    {
      id: '14',
      nome: 'La bandiera al momento sbagliato',
      descrizione:
        'Il pilota incappa in una bandiera gialla doppia proprio mentre stava preparando il giro di qualifica più veloce',
      sfiga: '28',
    },
    {
      id: '15',
      nome: 'I detriti della discordia',
      descrizione:
        'Detriti in pista costringono il pilota a un giro di rientro in regime di safety car virtuale: si perde la posizione sul diretto rivale',
      sfiga: '30',
    },
    {
      id: '16',
      nome: 'Due giri fatali',
      descrizione:
        'Il team sbaglia il momento della sosta di 2 giri: il pilota rientra su gomme più dure del previsto e non riesce a sorpassare chi lo precede',
      sfiga: '32',
    },
    {
      id: '17',
      nome: "La foratura dell'ultimo metro",
      descrizione:
        "Una foratura lenta al posteriore si manifesta solo nelle ultime 5 curve dell'ultimo giro: il pilota taglia il traguardo in ultima posizione invece che quarta",
      sfiga: '34',
    },
    {
      id: '18',
      nome: 'Le gomme di ghiaccio',
      descrizione:
        'Il pilota scivola in quarta posizione al via perché le gomme non erano in temperatura: perde 1.5 secondi nel primo settore e non riesce più a recuperare',
      sfiga: '36',
    },
    {
      id: '19',
      nome: 'Hard quando non serve',
      descrizione:
        'Il team monta il pneumatico sbagliato durante il pit stop — hard invece di medium — ci si accorge dopo 3 giri e si rientra ai box perdendo 25 secondi',
      sfiga: '38',
    },
    {
      id: '20',
      nome: 'Il vento del sorpasso',
      descrizione:
        'Un violento colpo di vento laterale al momento del sorpasso spinge la vettura fuori traiettoria: si va in ghiaia ma si rientra in pista senza danni',
      sfiga: '40',
    },
    {
      id: '21',
      nome: 'Il falso verde',
      descrizione:
        'Il semaforo verde si accende con un leggero ritardo anomalo: il pilota in pole brucia la partenza ed è costretto a fare un drive-through',
      sfiga: '42',
    },
    {
      id: '22',
      nome: "L'ala aperta per sempre",
      descrizione:
        'Il DRS si inceppa in posizione aperta: la vettura non è controllabile nelle curve ad alta velocità, si è costretti al ritiro',
      sfiga: '44',
    },
    {
      id: '23',
      nome: 'La dieta forzata',
      descrizione:
        'Perdita di carburante minore rilevata ai box: la gara si completa, ma il pilota deve rallentare per rispettare i consumi e perde due posizioni',
      sfiga: '46',
    },
    {
      id: '24',
      nome: 'Il lento di troppo',
      descrizione:
        'Un doppiatino non cede la posizione abbastanza velocemente e blocca il pilota in un sorpasso cruciale: si perde 4 secondi e la finestra di undercut',
      sfiga: '48',
    },
    {
      id: '25',
      nome: 'Il testacoda involontario',
      descrizione:
        'Il volante si blocca parzialmente durante una chicane veloce: il pilota perde il controllo per un istante, va in testacoda e riparte ultimo',
      sfiga: '50',
    },
    {
      id: '26',
      nome: 'La frizione arrostita',
      descrizione:
        'La frizione si surriscalda dopo il via e il pilota non può gestire correttamente la partenza: scivola di 4 posizioni nel primo giro',
      sfiga: '52',
    },
    {
      id: '27',
      nome: "La pietruzza nell'ingranaggio",
      descrizione:
        "Una pietruzza entra nell'intercooler e danneggia le alette del compressore: la potenza scende progressivamente fino al ritiro dopo 30 giri",
      sfiga: '54',
    },
    {
      id: '28',
      nome: 'I 5 secondi postumi',
      descrizione:
        "Il pilota prende bandiera a scacchi convinto di essere terzo, poi scopre che un'investigazione post-gara lo penalizza di 5 secondi: finisce quinto",
      sfiga: '56',
    },
    {
      id: '29',
      nome: 'La marcia fantasma',
      descrizione:
        "Un guasto elettrico all'indicatore del rapporto inserito fa sbagliare marcia al pilota in frenata: il motore va in fuori giri e si rompe un anello",
      sfiga: '58',
    },
    {
      id: '30',
      nome: 'Il safety car puntuale',
      descrizione:
        'Il safety car rientra proprio quando il pilota stava per sfruttare le gomme fresche per attaccare: il vantaggio si azzera e si finisce dietro al rivale',
      sfiga: '60',
    },
    {
      id: '31',
      nome: 'La visiera tradita',
      descrizione:
        'Un detrito colpisce la visiera del pilota: si incrina e il pilota strappa lo strato protettivo sbagliato durante la gara',
      sfiga: '62',
    },
    {
      id: '32',
      nome: 'Il disco esploso',
      descrizione:
        'Mancanza di refrigerazione al freno anteriore sinistro a causa di un canale bloccato: il disco esplode al giro 40 mentre si era in lotta per il podio',
      sfiga: '64',
    },
    {
      id: '33',
      nome: 'Il traffico al rientro',
      descrizione:
        'Il pilota esce dai box dopo la sosta e trova un traffico insolitamente denso di doppiatini: perde 7 secondi in un solo giro e scende di tre posizioni',
      sfiga: '66',
    },
    {
      id: '34',
      nome: 'Il dado cross-threadato',
      descrizione:
        'Il pit stop dura 11 secondi invece di 2.3 perché un dado della ruota posteriore sinistra si cross-threada: si perde la vittoria ormai certa',
      sfiga: '68',
    },
    {
      id: '35',
      nome: "Il punto dell'ape",
      descrizione:
        "Un'ape colpisce la tuta del pilota durante la sosta in pista dopo un testacoda: il pilota viene punto e deve correre con il dolore per 20 giri",
      sfiga: '70',
    },
    {
      id: '36',
      nome: 'Doppia punizione',
      descrizione:
        'La vettura parte dalla pit lane da squalificato in qualifica, rimonta fino al terzo posto, ma viene nuovamente penalizzata per unsafe release',
      sfiga: '72',
    },
    {
      id: '37',
      nome: 'Il crollo nel caldo',
      descrizione:
        'Il pilota accusa un malore improvviso durante la gara in condizioni di calore estremo: è costretto al ritiro per temperatura in abitacolo oltre i limiti sicuri',
      sfiga: '74',
    },
    {
      id: '38',
      nome: 'Il millimetro proibito',
      descrizione:
        "La vettura supera il traguardo con pochissimo carburante e si ferma subito dopo: il campione del carburante rivela un'irregolarità lieve, squalifica",
      sfiga: '76',
    },
    {
      id: '39',
      nome: 'La gomma a 300',
      descrizione:
        'Una foratura improvvisa a tutta velocità in curva ad alta percorrenza fa perdere aderenza al posteriore: violento impatto con le barriere, pilota illeso ma ritiro',
      sfiga: '78',
    },
    {
      id: '40',
      nome: 'Il primo giro rubato',
      descrizione:
        "La vettura viene colpita da un rivale alla prima curva nel giro inaugurale: l'ala anteriore è distrutta e si è costretti al pit stop immediato — da primo a diciottesimo",
      sfiga: '80',
    },
    {
      id: '41',
      nome: 'Il motore a tre giri',
      descrizione:
        'Il motore si rompe a tre giri dalla fine mentre si è in testa con 20 secondi di vantaggio: il pilota guarda passare tutti i rivali fermo ai bordi della pista',
      sfiga: '82',
    },
    {
      id: '42',
      nome: 'La bandiera a scacchi anticipata',
      descrizione:
        'Il team prepara la strategia perfetta per la pioggia, ma i commissari dichiarano la gara terminata anticipatamente prima del sorpasso decisivo',
      sfiga: '84',
    },
    {
      id: '43',
      nome: 'Il congelamento crudele',
      descrizione:
        'Una bandiera rossa sospende la gara mentre il pilota sta effettuando il sorpasso per la vittoria: alla ripartenza le posizioni vengono congelate',
      sfiga: '86',
    },
    {
      id: '44',
      nome: 'Il giro di lancio muto',
      descrizione:
        "L'alternatore si guasta nel giro di lancio: la vettura perde tutti i sistemi elettronici compreso il controllo trazione — abbandono alla partenza",
      sfiga: '88',
    },
    {
      id: '45',
      nome: 'La penalità alla vittima',
      descrizione:
        'Il pilota viene penalizzato di 10 secondi per un contatto di gara dove era lui la vittima: errore dei commissari confermato solo dopo la premiazione',
      sfiga: '90',
    },
    {
      id: '46',
      nome: 'La vite che cambia tutto',
      descrizione:
        "Il titolo iridato sfuma all'ultimo giro perché una vite che si stacca dalla vettura che precede fora lo pneumatico posteriore destro a 300 km/h",
      sfiga: '92',
    },
    {
      id: '47',
      nome: 'La pole cancellata',
      descrizione:
        'Il pilota fa il giro più veloce di sempre in qualifica e registra la pole, poi le gomme non rispettavano la temperatura minima prescritta: squalificato',
      sfiga: '94',
    },
    {
      id: '48',
      nome: "Il fuoco del giro d'onore",
      descrizione:
        "Con la vittoria del campionato già matematicamente raggiunta, il motore esplode nel giro d'onore: l'incendio brucia parte della carrozzeria davanti al mondo intero",
      sfiga: '96',
    },
    {
      id: '49',
      nome: 'I 0.5 millimetri fatali',
      descrizione:
        'Il pilota vince la gara, sale sul podio, poi una protesta tecnica porta alla sua squalifica per irregolarità al fondo piatto di soli 0.5mm',
      sfiga: '98',
    },
    {
      id: '50',
      nome: "L'ultimo metro maledetto",
      descrizione:
        "Con il titolo iridato in mano all'ultima curva dell'ultima gara, un rivale lo tampona deliberatamente: entrambi si ritirano, il titolo va a un terzo pilota che non se lo aspettava",
      sfiga: '100',
    },
  ];
}
