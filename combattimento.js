function attacco(attaccante, difensore) {
  if (attaccante.statistiche.vita <= 0 || difensore.statistiche.vita <= 0) {
    console.log("Non è possibile effettuare l'attacco.");
    return;
  }

  //Delay prima di calcolare il danno.

  let danno = Math.floor(Math.random() * attaccante.statistiche.attacco) + 1;
  const attaccanteAbilita = attaccante.abilita.find(
    (abilita) => abilita.attivo
  );
  const difensoreAbilita = difensore.abilita.find((abilita) => abilita.attivo);

  console.log("Calcolo bonus abilità…");

  //Se c'è un'abilità attiva si aumenta o la difesa o l'attacco dei pg.

  // Delay extra per far vedere il bonus abilità, prima dell'applicazione vera e propria.

  if (
    difensoreAbilita &&
    (difensore.statistiche.vita > 0 || attaccante.statistiche.vita > 0)
  ) {
    difensore.statistiche.difesa = Math.round(
      difensore.statistiche.difesa + difensore.statistiche.difesa * 0.05
    );
    setTimeout(() => {
      console.log(
        `${difensore.nome} attiva l'abilita ${difensoreAbilita.nome} e incrementa la sua difesa ${difensore.statistiche.difesa}`
      );
    }, 5000);
  }

  if (
    attaccanteAbilita &&
    (difensore.statistiche.vita > 0 || attaccante.statistiche.vita > 0)
  ) {
    danno = danno + danno * 0.05; //aumento 5% del danno
    if (
      (attaccante.statistiche.attacco > difensore.statistiche.difesa &&
        attaccante.statistiche.vita >= 0) &&
      difensore.statistiche.vita >= 0
    ) {
      difensore.statistiche.vita -= danno;
      setTimeout(() => {
        console.log(
          `${attaccante.nome} attiva: ${attaccanteAbilita.nome} e incrementa il danno del 5%. `
        );
      }, 5000);
      setTimeout(() => {
        console.log(
          `${attaccante.nome} infligge a ${difensore.nome} un danno di ${danno}`
        );
      }, 5000);
      setTimeout(() => {
        console.log(
          `1${difensore.nome} ha una vita residua di: ${
            difensore.statistiche.vita <= 0 ? "0" : difensore.statistiche.vita
          }`
        );
      }, 5000);
      return;
    } else {
      console.log(`L'attacco è stato schivato. `);
      return;
    }
  } else {
    if (
      attaccante.statistiche.attacco > difensore.statistiche.difesa &&
      (attaccante.statistiche.vita > 0 && difensore.statistiche.vita > 0)
    ) {
      difensore.statistiche.vita -= danno;
      setTimeout(() => {
        console.log(
          `${attaccante.nome} infligge l'attacco finale a ${difensore.nome} con un danno di ${danno}`
        );
        console.log(
          `2${difensore.nome} ha una vita residua di: ${
            difensore.statistiche.vita <= 0 ? "0" : difensore.statistiche.vita
          }`
        );
      }, 6000);
      return;
    }
  }
}
module.exports = { attacco }; //attacco è la funzione dichiarata nel file e che dobbiamo esportare con {}.
