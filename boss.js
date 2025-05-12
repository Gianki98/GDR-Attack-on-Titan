const boss = [
  {
    nome: "Gigante colossale",
    statistiche: {
      vita: 15,
      attacco: 10,
      energia: 5,
      difesa: 8,
    },
    abilita: [
    {
      nome: "Evaporazione di calore",
      costo: 5,
      descrizione: "Rilascia un'onda di calore che danneggia i nemici.",
      effetto: "Questa abilità ha una probabiltà del 50% di lasciare un membro del team scottato.",
    },
    {
      nome: "",
      descrizione: "",
      effetto: "",
    }
  ],
  background: "Il più imponente tra tutti i titani conosciuti. La sua sola presenza può cambiare il corso di una battaglia. Non si manifesta spesso, ma quando lo fa, il suo potere distruttivo è ineguagliabile.",
  },

  {
    nome: "Gigante corazzato",
    statistiche: {
      vita: 12,
      attacco: 8,
      energia: 5,
      difesa: 15,
    },
    abilita: [
    {
      nome: "Corazza rinforzata",
      costo: 8,
      descrizione: "Il gigante corazzato rinforza la sua corazza, rendendola più resistente.",
      effetto: "Il gigante corazzato aumenta la sua difesa del 50% per 2 turni.",
    },
    {
      nome: "Carica corazzata",
      costo: 5,
      descrizione: "Il gigante corazzato carica contro il nemico, infliggendo danni.",
      effetto: "Il gigante corazzato causa il doppio del danno se l'attacco va a segno.",
    }
  ],
    background: "Creatura imponente dotata di una protezione naturale che lo rende un avversario quasi inarrestabile.",
  },

  {
    nome: "Gigante femmina",
    statistiche: {
      vita: 12,
      attacco: 8,
      energia: 5,
      difesa: 13,
    },
    abilita: [
    {
      nome: "Cristalizzazione",
      costo: 3,
      descrizione: "Il gigante femmina si cristallizza per proteggersi.",
      effetto: "Il gigante femmina aumenta la sua difesa del 50% per 2 turni.",
    },
    {
      nome: "Richiamo",
      costo: 5,
      descrizione: "Il gigante femmina emette un urlo che richiama altri giganti.",
      effetto: "Possibilità del 30% di evocare un gigante 5m o 10m.",
    }
  ],
    background: "Il Gigante Femmina unisce forza fisica, agilità e intelligenza tattica. È noto per la sua capacità di adattarsi alle situazioni di combattimento con strategie mirate e movimenti agili.",
  },

  {
    nome: "Gigante bestia",
    statistiche: {
      vita: 15,
      attacco: 10,
      energia: 13,
      difesa: 8,
    },

    abilita: [
    {
      nome: "Lancio devastante.",
      costo: 3,
      descrizione: "Il gigante bestia scaglia delle pietre a tutto il team.",
      effetto: "Possibilità del 30% di essere colpiti dalle pietre lanciate.",
    },
    {
      nome: "Boato del gigante bestia",
      costo: 5,
      descrizione: "Usa il boato per richiamare a se i giganti, rafforzandoli per 2 turni.",
      effetto: "Possibilità del 50% di evocare un gigante 5m o 10m. In più potenza il loro attacco e la loro difesa del 20% per 2 turni.",
    }
    ],
    background: "Gigante dall’aspetto animalesco e insolito, è temuto per la sua intelligenza, il comportamento calmo ma calcolatore, e la capacità di infliggere danni su larga scala anche da lontano.",
  }
]

module.exports = boss;