function attacco(attaccante, difensore) {
  let messaggio = null;
  let {
    statistiche: {
      vita: vitaA,
      attacco: attaccoA,
      difesa: difesaA,
      energia: energiaA,
    },
    abilita: abilitaA,
  } = attaccante;
  let {
    statistiche: {
      vita: vitaD,
      attacco: attaccoD,
      difesa: difesaD,
      energia: energiaD,
    },
    abilita: abilitaD,
  } = difensore;

 let sonoTuttiVivi = (vitaD > 0) && (vitaA > 0);

  if (!sonoTuttiVivi) {
    messaggio = "Non è possibile effettuare l'attacco.";
    stampaMessaggio(messaggio, 1000);
    return;
  }

  let danno = Math.floor(Math.random() * attaccoA) + 1;
  const attaccanteAbilita = abilitaA.find((abilita) => abilita.attivo);
  const difensoreAbilita = abilitaD.find((abilita) => abilita.attivo);
//   messaggio = "Calcolo bonus abilità…";
//   stampaMessaggio(messaggio, 0);

//   if (difensoreAbilita && sonoTuttiVivi) {
//     difesaD += Math.round(difesaD * 0.05);

//     messaggio = `${difensore.nome} attiva l'abilita ${difensoreAbilita.nome} e incrementa la sua difesa ${difesaD}`;
//     stampaMessaggio(messaggio, 2000);
//   }

//   if (attaccanteAbilita && sonoTuttiVivi) {
//     danno += danno * 0.05; //aumento 5% del danno
//     if (attaccoA > difesaD && sonoTuttiVivi) {
//       vitaD -= danno;

//       messaggio = `${attaccante.nome} attiva: ${attaccanteAbilita.nome} e incrementa il danno del 5%. `;
//       stampaMessaggio(messaggio, 5000);

//       messaggio = `${attaccante.nome} infligge a ${difensore.nome} un danno di ${danno}`;
//       stampaMessaggio(messaggio, 5000);

//       messaggio = `1) ${difensore.nome} ha una vita residua di: ${
//         vitaD <= 0 ? "0" : vitaD
//       }`;
//       stampaMessaggio(messaggio, 5000);
//       return;
//     } else {
//       console.log(`L'attacco è stato schivato. `);
//       return;
//     }
//   } else {
//     if (attaccoA > difesaD && sonoTuttiVivi) {
//       vitaD -= danno;
//         console.log(attaccoA, difesaD);
//       messaggio = `2) ${attaccante.nome} infligge l'attacco finale a ${difensore.nome} con un danno di ${danno}. ${difensore.nome} ha una vita residua di: ${vitaD <= 0 ? "0" : vitaD}`;
//       stampaMessaggio(messaggio, 6000);
//     }
//      return;
//   }
  if (sonoTuttiVivi) {
    difensore.statistiche.vita -= danno;
    messaggio = `A attacca D: vitaD pari a ${vitaD}.`;
    stampaMessaggio(messaggio, 0);
    console.log(sonoTuttiVivi);
  } else {
    messaggio = `L'attacco viene schivato.`;
    stampaMessaggio(messaggio, 0);
    console.log(sonoTuttiVivi);
  }
}

function stampaMessaggio(messaggio, delay) {
    setTimeout(() => console.log(messaggio), delay);
  }

module.exports = { attacco }; //attacco è la funzione dichiarata nel file e che dobbiamo esportare con {}.
