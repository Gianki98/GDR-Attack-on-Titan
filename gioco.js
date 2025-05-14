const personaggi = require("./personaggi.js");
const giganti = require("./giganti.js");
const { attacco } = require("./combattimento.js");

//Implementa degli intervalli per le funzioni, con un ciclo temporale finche' la vita di uno dei due non arriva a zero.
// Per adesso la scelta dei personaggi non sara' implementata ma saranno scelti da noi

// do{
//     attacco(personaggi[1], giganti[1]);
// } while (
//     personaggi[1].statistiche.vita >= 0 && giganti[1].statistiche.vita >=0
// )

console.log(`Il combattimento ha inizio..`);
console.log(`${personaggi[1].nome} VS ${giganti[1].nome}`);
let intervallo = setInterval(() => {
  if (Math.random() > 0.5) {
    personaggi[1].abilita[1].attivo = !personaggi[1].abilita[1].attivo;
  } else {
    giganti[1].abilita[1].attivo = !giganti[1].abilita[1].attivo;
  }
  attacco(personaggi[1], giganti[1]);
  if (personaggi[1].statistiche.vita <= 0 || giganti[1].statistiche.vita <= 0) {
    clearInterval(intervallo);
    
      if (personaggi[1].statistiche.vita > 0) {
        setTimeout(() => {
          console.log(`${personaggi[1].nome} ha vinto l'incontro`);
        }, 5000);
      } else {
        setTimeout(() => {
          console.log(`${giganti[1].nome} ha vinto l'incontro`);
        }, 5000);
      }
  }
}, 2000);
