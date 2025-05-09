function scegliPersonaggio(personaggi) {
    // Invoca la funzione generaIndice sui pg.
  let indiceA = generaIndice(personaggi);
  let indiceB = generaIndice(personaggi);
  // Controllo per verificare che i due pg siano diversi
  if (indiceA === indiceB) {
    indiceB = generaIndice(personaggi);
  } else {
    //  Ritorna un array coi due pg
    return [personaggi[indiceA], personaggi[indiceB]];
  }
}
function generaIndice(personaggi) {
  // Utilizzare MathRandom, che ci da un numero casuale tra 0 e 1, che moltiplicheremo per la lunghezza dell'array e prenderci i nostri indici.
  return Math.floor(Math.random() * (personaggi.length - 1));
}
