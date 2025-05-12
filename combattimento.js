function attacco (attaccante, difensore) {
    if (attaccante.statistiche.vita <= 0 && difensore.statistiche.vita <= 0) {
        console.log ("Non è possibile effettuare l'attacco.")
        return 
    } 
    const danno = Math.floor (Math.random () * attaccante.statistiche.attacco) + 1;
    difensore.statistiche.vita -= danno;
    const attaccanteAbilita = attaccante.abilita.find (abilita => abilita.attivo)
    const difensoreAbilita = difensore.abilita.find (abilita => abilita.attivo)
}