const personaggi = require("./personaggi.js"); //metto qui in cima il riferimento importato dall'altro file js. Importazione common js (antica).

function scegliPersonaggio(personaggi) {
    // Invoca la funzione generaIndice sui pg.
  let indiceA = generaIndice(personaggi);
  let indiceB = generaIndice(personaggi);
  // Controllo per verificare che i due pg siano diversi
  if (indiceA === indiceB) {
    indiceB = generaIndice(personaggi);
    return [personaggi[indiceA], personaggi[indiceB]];
  } else {
    //  Ritorna un array coi due pg
    return [personaggi[indiceA], personaggi[indiceB]];
  }
}
function generaIndice(personaggi) {
  // Utilizzare MathRandom, che ci da un numero casuale tra 0 e 1, che moltiplicheremo per la lunghezza dell'array e prenderci i nostri indici.
  return Math.floor(Math.random() * (personaggi.length - 1));
}

const [personaggioA, personaggioB] = scegliPersonaggio(personaggi);

function iniziaGioco() {
  console.log(`Inizia il gioco: ${personaggioA.nome} sfida ${personaggioB.nome}.`);
  const personaggioAStart = {...personaggioA, vita: 100};
  const personaggioBStart = {...personaggioB, vita: 100};
  dannoIniziale(personaggioAStart, personaggioBStart);
  for(let i=0; personaggioAStart.vita > 0 || personaggioBStart.vita > 0; i++) {
    combatti(personaggioAStart, personaggioBStart);
  }
  if(personaggioAStart.vita <= 0) {
    console.log(`${personaggioBStart.nome} ha vinto l'incontro.`);
  } else if(personaggioBStart.vita <= 0) {
    console.log(`${personaggioAStart.nome} ha vinto l'incontro.`);
  } else {
    console.log(`${personaggioBStart.nome} e ${personaggioAStart.nome} hanno pareggiato.`)
  }
}
iniziaGioco();

function dannoIniziale(personaggioAStart, personaggioBStart) {
  if(personaggioAStart.statistiche.agilita > personaggioBStart.statistiche.agilita) {
    personaggioBStart.vita -= 10;
    console.log(`${personaggioA.nome} è stato più rapido, e infligge un danno a ${personaggioB.nome}. La sua vita è ${personaggioBStart.vita}.`);
  } else if (personaggioAStart.statistiche.agilita === personaggioBStart.statistiche.agilita) {
  console.log(`Nessuno riceve un danno`);
  } else {
    personaggioAStart.vita -= 10;
    console.log(`${personaggioB.nome} è stato più rapido, e infligge un danno a ${personaggioA.nome}. La sua vita è ${personaggioAStart.vita}.`);
  }
}

function combatti(personaggioAStart, personaggioBStart) {
  const danno = Math.floor(Math.random() *50);
  if(Math.random() > 0.5) {
    personaggioAStart.vita -= danno;
    console.log(`${personaggioAStart.nome} ha subito un danno di ${danno}. La sua vita residua è ${personaggioAStart.vita}.`);
    } else {
    personaggioBStart.vita -= danno;
    console.log(`${personaggioBStart.nome} ha subito un danno di ${danno}. La sua vita residua è ${personaggioBStart.vita}.`);
  }
}

