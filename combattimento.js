function attacco(attaccante, difensore) {
  console.log(`Il combattimento ha inizio..`);
  console.log(`${attaccante.nome} VS ${difensore.nome}`);
  if (attaccante.statistiche.vita <= 0 && difensore.statistiche.vita <= 0) {
    console.log("Non è possibile effettuare l'attacco.");
    return;
  }
  const danno = Math.floor(Math.random() * attaccante.statistiche.attacco) + 1;
  const attaccanteAbilita = attaccante.abilita.find(
    (abilita) => abilita.attivo
  );
  const difensoreAbilita = difensore.abilita.find((abilita) => abilita.attivo);

  //Se c'è un'abilità attiva si aumenta o la difesa o l'attacco dei pg.

  if (difensoreAbilita) {
    difensore.statistiche.difesa =
      difensore.statistiche.difesa + difensore.statistiche.difensore * 0.05;
    console.log(
      `${difensore.nome} attiva l'abilita ${difensoreAbilita.nome} e incrementa la sua difesa ${difensore.statistiche.difesa}`
    );
  }
  if (attaccanteAbilita) {
    danno = danno + danno * 0.05; //aumento 5% del danno
    if (attaccante.statistiche.attacco > difensore.statistiche.difesa) {
      difensore.statistiche.vita -= danno;
      console.log(
        `${attaccante.nome} attiva: ${attaccanteAbilita.nome} e incrementa il danno del 5%. `
      );
      console.log(
        `${attaccante.nome} infligge a ${difensore.nome} un danno di ${danno}`
      );
      console.log(
        `${difensore.nome} ha una vita residua di: ${difensore.statistiche.vita}`
      );
      return;
    } else {
      console.log(`L'attacco è stato schivato. `);
      return;
    }
  } else {
    if (attaccante.statistiche.attacco > difensore.statistiche.difesa) {
      difensore.statistiche.vita -= danno;
      console.log(
        `${attaccante.nome} infligge a ${difensore.nome} un danno di ${danno}`
      );
      console.log(
        `${difensore.nome} ha una vita residua di: ${difensore.statistiche.vita}`
      );
      return;
    }
  }
}

module.exports = { attacco }; //attacco è la funzione dichiarata nel file e che dobbiamo esportare con {}.
