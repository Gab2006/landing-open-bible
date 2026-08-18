const fs = require('fs');
const path = require('path');

const baseVerses = [
  { reference: "Giovanni 3:16", text: "Perché Dio ha tanto amato il mondo, che ha dato il suo unigenito Figlio, affinché chiunque crede in lui non perisca, ma abbia vita eterna." },
  { reference: "Filippesi 4:13", text: "Io posso ogni cosa in colui che mi fortifica." },
  { reference: "Salmi 23:1", text: "Il SIGNORE è il mio pastore: nulla mi manca." },
  { reference: "Geremia 29:11", text: "Infatti io so i pensieri che medito per voi, dice il SIGNORE: pensieri di pace e non di male, per darvi un avvenire e una speranza." },
  { reference: "Proverbi 3:5", text: "Confida nel SIGNORE con tutto il cuore e non ti appoggiare sul tuo discernimento." },
  { reference: "Romani 8:28", text: "Or sappiamo che tutte le cose cooperano al bene di quelli che amano Dio, i quali sono chiamati secondo il suo disegno." },
  { reference: "Isaia 41:10", text: "Tu, non temere, perché io sono con te; non ti smarrire, perché io sono il tuo Dio; io ti fortifico, io ti soccorro, io ti sostengo con la destra della mia giustizia." },
  { reference: "Salmi 119:105", text: "La tua parola è una lampada al mio piede e una luce sul mio sentiero." },
  { reference: "Giosuè 1:9", text: "Non te l'ho io comandato? Sii forte e coraggioso; non ti spaventare e non ti sgomentare, perché il SIGNORE, il tuo Dio, sarà con te dovunque andrai." },
  { reference: "Romani 12:2", text: "Non conformatevi a questo mondo, ma siate trasformati mediante il rinnovamento della vostra mente, affinché conosciate per esperienza quale sia la volontà di Dio, la buona, gradita e perfetta volontà." },
  { reference: "Matteo 11:28", text: "Venite a me, voi tutti che siete affaticati e oppressi, e io vi darò riposo." },
  { reference: "Romani 15:13", text: "Or il Dio della speranza vi riempia di ogni gioia e di ogni pace nella fede, affinché abbondiate nella speranza, per la potenza dello Spirito Santo." },
  { reference: "Salmi 46:1", text: "Dio è per noi un rifugio e una forza, un aiuto sempre pronto nelle difficoltà." },
  { reference: "Giovanni 14:27", text: "Vi lascio pace; vi do la mia pace. Io non vi do come il mondo dà. Il vostro cuore non sia turbato e non si sgomenti." },
  { reference: "2 Timoteo 1:7", text: "Dio infatti ci ha dato uno spirito non di timidezza, ma di forza, d'amore e di autocontrollo." },
  { reference: "Proverbi 4:23", text: "Custodisci il tuo cuore più di ogni altra cosa, poiché da esso provengono le sorgenti della vita." },
  { reference: "1 Corinzi 16:14", text: "Tutte le cose vostre siano fatte con amore." },
  { reference: "Giacomo 1:5", text: "Se qualcuno di voi manca di saggezza, la chieda a Dio che dona a tutti generosamente senza rinfacciare, e gli sarà data." },
  { reference: "Efesini 2:8", text: "Infatti è per grazia che siete stati salvati, mediante la fede; e ciò non viene da voi; è il dono di Dio." },
  { reference: "Isaia 40:31", text: "Ma quelli che sperano nel SIGNORE acquistano nuove forze, si alzano a volo come aquile, corrono e non si stancano, camminano e non si affaticano." },
  { reference: "Salmi 27:1", text: "Il SIGNORE è la mia luce e la mia salvezza; di chi temerò? Il SIGNORE è il baluardo della mia vita; di chi avrò paura?" },
  { reference: "Matteo 6:33", text: "Cercate prima il regno e la giustizia di Dio, e tutte queste cose vi saranno date in più." },
  { reference: "Romani 5:8", text: "Ma Dio mostra la grandezza del proprio amore per noi in questo: che, mentre eravamo ancora peccatori, Cristo è morto per noi." },
  { reference: "1 Giovanni 4:19", text: "Noi amiamo perché egli ci ha amati per primo." },
  { reference: "Salmi 118:24", text: "Questo è il giorno che il SIGNORE ha preparato; festeggiamo e rallegriamoci in esso." },
  { reference: "Proverbi 16:3", text: "Affida al SIGNORE le tue opere, e i tuoi progetti avranno successo." },
  { reference: "Matteo 5:14", text: "Voi siete la luce del mondo. Una città posta sopra un monte non può rimanere nascosta." },
  { reference: "Colossesi 3:15", text: "E la pace di Cristo, alla quale siete stati chiamati per essere un solo corpo, regni nei vostri cuori; e siate riconoscenti." },
  { reference: "1 Tessalonicesi 5:16-18", text: "Siate sempre gioiosi; non cessate mai di pregare; in ogni cosa rendete grazie, perché questa è la volontà di Dio in Cristo Gesù verso di voi." },
  { reference: "Ebrei 11:1", text: "Or la fede è certezza di cose che si sperano, dimostrazione di realtà che non si vedono." },
  { reference: "Apocalisse 3:20", text: "Ecco, io sto alla porta e busso: se qualcuno ascolta la mia voce e apre la porta, io entrerò da lui e cenerò con lui ed egli con me." }
];

const verses = [];
for (let i = 0; i < 365; i++) {
  verses.push({
    day: i + 1,
    ...baseVerses[i % baseVerses.length]
  });
}

const targetPath = path.join(__dirname, 'src', 'data', 'verses.json');
fs.writeFileSync(targetPath, JSON.stringify(verses, null, 2));
console.log('Verses generated successfully at ' + targetPath);
