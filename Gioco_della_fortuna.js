import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native';


const CARTE = [
  { id:'1',  nome:'Il sedile storto',                emoji:'🪑', sfiga:2,   desc:'Il pilota monta in macchina e si accorge che il sedile è leggermente fuori posizione, perde 3 secondi ai box per risistemarlo.' },
  { id:'2',  nome:'Il granello traditore',           emoji:'😣', sfiga:4,   desc:'Un piccolo granello di gomma entra nel casco durante la partenza, costringendo il pilota a stringere gli occhi per alcuni giri.' },
  { id:'3',  nome:'Il dado ballerino',               emoji:'🔩', sfiga:6,   desc:'Il volante vibra più del solito per un dado non stretto a dovere: il pilota guida con disagio ma riesce a finire la gara.' },
  { id:'4',  nome:'Il DRS sonnolento',               emoji:'📡', sfiga:8,   desc:'Il DRS non si apre al primo tentativo in un rettilineo chiave, si recupera al giro successivo ma si perde il sorpasso.' },
  { id:'5',  nome:'La pioggia puntuale',             emoji:'🌧️', sfiga:10,  desc:'Una pioggerella improvvisa inizia proprio quando la vettura è rientrata ai box con gomme slick da asciutto: il team attende e si azzecca.' },
  { id:'6',  nome:'Il copricerchio in fuga',         emoji:'🛞', sfiga:12,  desc:'Il pilota parte con il copricerchio ancora attaccato alla ruota anteriore: cade dopo pochi metri senza conseguenze, ma il team è imbarazzato.' },
  { id:'7',  nome:"L'ospite nel casco",              emoji:'🐜', sfiga:14,  desc:'Una formica entra nel casco del pilota durante la sosta ai box, distraendolo per due giri.' },
  { id:'8',  nome:'Il muto di Singapore',            emoji:'🔇', sfiga:16,  desc:'Il sistema radio si guasta per metà gara: il pilota non sente le istruzioni del muretto ma gestisce la situazione autonomamente.' },
  { id:'9',  nome:"L'uccello aerodinamico",          emoji:'🐦', sfiga:18,  desc:"Un uccello colpisce il muso della vettura al rettilineo del traguardo, lasciando una macchia sul muso che disturba il flusso aerodinamico leggermente." },
  { id:'10', nome:'Un giro di troppo',               emoji:'⏱️', sfiga:20,  desc:'La strategia prevede una sosta al giro 20, ma il safety car virtuale esce al giro 19: il team non riesce a cambiare piano in tempo e si perdono 4 secondi.' },
  { id:'11', nome:'La ghiaia del venerdì',           emoji:'🪨', sfiga:22,  desc:"Il pilota finisce in gravel trap nell'ultimo giro libero delle prove, non abbastanza a lungo da perdere il tempo, ma abbastanza da stressare il team." },
  { id:'12', nome:"L'inciampo da 0.3",               emoji:'🦶', sfiga:24,  desc:'Il pit stop viene eseguito perfettamente, ma il meccanico del pneumatico posteriore destro inciampa e il pilota riparte con 0.3 secondi di ritardo.' },
  { id:'13', nome:'Il calore elettrico',             emoji:'⚡', sfiga:26,  desc:'Il MGU-K si spegne per 5 giri a causa di un surriscaldamento: si perde circa 0.2 s/giro in rettilineo.' },
  { id:'14', nome:'La bandiera al momento sbagliato',emoji:'🏁', sfiga:28,  desc:'Il pilota incappa in una bandiera gialla doppia proprio mentre stava preparando il giro di qualifica più veloce.' },
  { id:'15', nome:'I detriti della discordia',       emoji:'💥', sfiga:30,  desc:'Detriti in pista costringono il pilota a un giro di rientro in regime di safety car virtuale: si perde la posizione sul diretto rivale.' },
  { id:'16', nome:'Due giri fatali',                 emoji:'🔄', sfiga:32,  desc:'Il team sbaglia il momento della sosta di 2 giri: il pilota rientra su gomme più dure del previsto e non riesce a sorpassare chi lo precede.' },
  { id:'17', nome:"La foratura dell'ultimo metro",   emoji:'🫧', sfiga:34,  desc:"Una foratura lenta al posteriore si manifesta solo nelle ultime 5 curve dell'ultimo giro: il pilota taglia il traguardo in ultima posizione invece che quarta." },
  { id:'18', nome:'Le gomme di ghiaccio',            emoji:'🥶', sfiga:36,  desc:'Il pilota scivola in quarta posizione al via perché le gomme non erano in temperatura: perde 1.5 secondi nel primo settore e non riesce più a recuperare.' },
  { id:'19', nome:'Hard quando non serve',           emoji:'🔴', sfiga:38,  desc:'Il team monta il pneumatico sbagliato durante il pit stop — hard invece di medium — ci si accorge dopo 3 giri e si rientra perdendo 25 secondi.' },
  { id:'20', nome:'Il vento del sorpasso',           emoji:'💨', sfiga:40,  desc:'Un violento colpo di vento laterale al momento del sorpasso spinge la vettura fuori traiettoria: si va in ghiaia ma si rientra in pista senza danni.' },
  { id:'21', nome:'Il falso verde',                  emoji:'🚦', sfiga:42,  desc:'Il semaforo verde si accende con un leggero ritardo anomalo: il pilota in pole brucia la partenza ed è costretto a fare un drive-through.' },
  { id:'22', nome:"L'ala aperta per sempre",         emoji:'✈️', sfiga:44,  desc:"Il DRS si inceppa in posizione aperta: la vettura non è controllabile nelle curve ad alta velocità, si è costretti al ritiro." },
  { id:'23', nome:'La dieta forzata',                emoji:'⛽', sfiga:46,  desc:'Perdita di carburante minore rilevata ai box: la gara si completa, ma il pilota deve rallentare per rispettare i consumi e perde due posizioni.' },
  { id:'24', nome:'Il lento di troppo',              emoji:'🐢', sfiga:48,  desc:'Un doppiatino non cede la posizione abbastanza velocemente e blocca il pilota in un sorpasso cruciale: si perdono 4 secondi e la finestra di undercut.' },
  { id:'25', nome:'Il testacoda involontario',       emoji:'🌀', sfiga:50,  desc:'Il volante si blocca parzialmente durante una chicane veloce: il pilota perde il controllo per un istante, va in testacoda e riparte ultimo.' },
  { id:'26', nome:'La frizione arrostita',           emoji:'🔥', sfiga:52,  desc:'La frizione si surriscalda dopo il via e il pilota non può gestire correttamente la partenza: scivola di 4 posizioni nel primo giro.' },
  { id:'27', nome:"La pietruzza nell'ingranaggio",   emoji:'⚙️', sfiga:54,  desc:"Una pietruzza entra nell'intercooler e danneggia le alette del compressore: la potenza scende progressivamente fino al ritiro dopo 30 giri." },
  { id:'28', nome:'I 5 secondi postumi',             emoji:'⏳', sfiga:56,  desc:"Il pilota prende bandiera a scacchi convinto di essere terzo, poi scopre che un'investigazione post-gara lo penalizza di 5 secondi: finisce quinto." },
  { id:'29', nome:'La marcia fantasma',              emoji:'👻', sfiga:58,  desc:"Un guasto elettrico all'indicatore del rapporto inserito fa sbagliare marcia al pilota in frenata: il motore va in fuori giri e si rompe un anello." },
  { id:'30', nome:'Il safety car puntuale',          emoji:'🚗', sfiga:60,  desc:'Il safety car rientra proprio quando il pilota stava per sfruttare le gomme fresche per attaccare: il vantaggio si azzera e si finisce dietro al rivale.' },
  { id:'31', nome:'La visiera tradita',              emoji:'😵', sfiga:62,  desc:'Un detrito colpisce la visiera del pilota: si incrina e il pilota strappa lo strato protettivo sbagliato durante la gara.' },
  { id:'32', nome:'Il disco esploso',                emoji:'💣', sfiga:64,  desc:'Mancanza di refrigerazione al freno anteriore sinistro a causa di un canale bloccato: il disco esplode al giro 40 mentre si era in lotta per il podio.' },
  { id:'33', nome:'Il traffico al rientro',          emoji:'🚧', sfiga:66,  desc:'Il pilota esce dai box dopo la sosta e trova un traffico insolitamente denso di doppiatini: perde 7 secondi in un solo giro e scende di tre posizioni.' },
  { id:'34', nome:'Il dado cross-threadato',         emoji:'🔧', sfiga:68,  desc:'Il pit stop dura 11 secondi invece di 2.3 perché un dado della ruota posteriore sinistra si cross-threada: si perde la vittoria ormai certa.' },
  { id:'35', nome:"Il punto dell'ape",               emoji:'🐝', sfiga:70,  desc:"Un'ape colpisce la tuta del pilota durante la sosta in pista dopo un testacoda: il pilota viene punto e deve correre con il dolore per 20 giri." },
  { id:'36', nome:'Doppia punizione',                emoji:'😤', sfiga:72,  desc:'La vettura parte dalla pit lane da squalificato in qualifica, rimonta fino al terzo posto, ma viene nuovamente penalizzata per unsafe release.' },
  { id:'37', nome:'Il crollo nel caldo',             emoji:'🏥', sfiga:74,  desc:'Il pilota accusa un malore improvviso durante la gara in condizioni di calore estremo: è costretto al ritiro per temperatura in abitacolo oltre i limiti sicuri.' },
  { id:'38', nome:'Il millimetro proibito',          emoji:'📏', sfiga:76,  desc:"La vettura supera il traguardo con pochissimo carburante e si ferma subito dopo: il campione del carburante rivela un'irregolarità lieve, squalifica." },
  { id:'39', nome:'La gomma a 300',                  emoji:'💀', sfiga:78,  desc:'Una foratura improvvisa a tutta velocità in curva ad alta percorrenza fa perdere aderenza al posteriore: violento impatto con le barriere, pilota illeso ma ritiro.' },
  { id:'40', nome:'Il primo giro rubato',            emoji:'😡', sfiga:80,  desc:"La vettura viene colpita da un rivale alla prima curva nel giro inaugurale: l'ala anteriore è distrutta e si è costretti al pit stop immediato — da primo a diciottesimo." },
  { id:'41', nome:'Il motore a tre giri',            emoji:'💔', sfiga:82,  desc:'Il motore si rompe a tre giri dalla fine mentre si è in testa con 20 secondi di vantaggio: il pilota guarda passare tutti i rivali fermo ai bordi della pista.' },
  { id:'42', nome:'La bandiera a scacchi anticipata',emoji:'🏴', sfiga:84,  desc:'Il team prepara la strategia perfetta per la pioggia, ma i commissari dichiarano la gara terminata anticipatamente prima del sorpasso decisivo.' },
  { id:'43', nome:'Il congelamento crudele',         emoji:'🥹', sfiga:86,  desc:'Una bandiera rossa sospende la gara mentre il pilota sta effettuando il sorpasso per la vittoria: alla ripartenza le posizioni vengono congelate.' },
  { id:'44', nome:'Il giro di lancio muto',          emoji:'⚰️', sfiga:88,  desc:"L'alternatore si guasta nel giro di lancio: la vettura perde tutti i sistemi elettronici compreso il controllo trazione — abbandono alla partenza." },
  { id:'45', nome:'La penalità alla vittima',        emoji:'😭', sfiga:90,  desc:'Il pilota viene penalizzato di 10 secondi per un contatto di gara dove era lui la vittima: errore dei commissari confermato solo dopo la premiazione.' },
  { id:'46', nome:'La vite che cambia tutto',        emoji:'🪛', sfiga:92,  desc:"Il titolo iridato sfuma all'ultimo giro perché una vite che si stacca dalla vettura che precede fora lo pneumatico posteriore destro a 300 km/h." },
  { id:'47', nome:'La pole cancellata',              emoji:'🚫', sfiga:94,  desc:'Il pilota fa il giro più veloce di sempre in qualifica e registra la pole, poi le gomme non rispettavano la temperatura minima prescritta: squalificato.' },
  { id:'48', nome:"Il fuoco del giro d'onore",       emoji:'🔥', sfiga:96,  desc:"Con la vittoria del campionato già matematicamente raggiunta, il motore esplode nel giro d'onore: l'incendio brucia parte della carrozzeria davanti al mondo intero." },
  { id:'49', nome:'I 0.5 millimetri fatali',         emoji:'😱', sfiga:98,  desc:'Il pilota vince la gara, sale sul podio, poi una protesta tecnica porta alla sua squalifica per irregolarità al fondo piatto di soli 0.5mm.' },
  { id:'50', nome:"L'ultimo metro maledetto",        emoji:'🤌', sfiga:100, desc:"Con il titolo iridato in mano all'ultima curva dell'ultima gara, un rivale lo tampona deliberatamente: entrambi si ritirano, il titolo va a un terzo pilota che non se lo aspettava." },
];

function prendiCasuale(idGiaUsati, quante) {
  const disponibili = CARTE.filter(c => !idGiaUsati.includes(c.id));
  const mescolate = disponibili.sort(() => Math.random() - 0.5);
  return mescolate.slice(0, quante);
}