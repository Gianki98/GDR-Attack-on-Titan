const personaggi = [

  {
    nome: "Eren Jaeger",
    eta: 15,
    divisione: "Corpo di Ricerca",
    grado: "Recluta",
    specializzazione: "Combattimento corpo a corpo",
    gigante: "Attacco",
    statistiche: {
      livello: 1,
      esperienza: 0,
      vita: 8,
      attacco: 7,
      energia: 5,
      difesa: 6,
    },
    abilita: [
    {
      nome: "Furia del Titano",
      descrizione: "Eren si trasforma nel gigante di Attacco per un turno.",
      costo: 3,
      effetto: "Aumenta l'attacco e la difesa del 50% per un turno."
    },
    {
      nome: "Manovra 3D Avanzata",
      descrizione: "",
      costo: 2,
      effetto: "Infligge il 10% di attacco in più per due turni."
    }
  ],
    background: "Ha giurato di sterminare tutti i titani dopo la distruzione di Shiganshina.",
  },


  {
    nome: "Mikasa Ackerman",
    eta: 15,
    divisione: "Corpo di Ricerca",
    grado: "Recluta",
    specializzazione: "Manovree aeree",
    gigante: null,
    statistiche: {
      livello: 1,
      esperienza: 0,
      vita: 9,
      attacco: 8,
      energia: 7,
      difesa: 8,
    },
    abilita: [
    {
      nome: "Furia Ackerman",
      descrizione: "",
      costo: 2,
      effetto: "Aumenta l'attacco del 10% per 2 turni."
    },
    {
      nome: "Sciarpa Rossa",
      descrizione: "Mikasa stringe a se la sua sciarpa rossa, ricordando il giorno in cui Eren le ha salvato la vita.",
      costo: 1,
      effetto: "Aumenta la difesa del 10% per 2 turni."
    }
  ],
    background: "Salvata da Eren da bambina, è profondamente legata a lui e si è unita al Corpo di Ricerca per proteggerlo e combattere i titani.",
  },


  {
    nome: "Armin Arlert",
    eta: 15,
    divisione: "Corpo di Ricerca",
    grado: "Recluta",
    specializzazione: "Strategia e supporto tattico",
    gigante: null,
    statistiche: {
      livello: 1,
      esperienza: 0,
      vita: 7,
      attacco: 5,
      energia: 5,
      difesa: 6,
    },
    abilita: [
    {
      nome: "",
      descrizione: "",
      effetto: ""
    },
    {
      nome: "",
      descrizione: "",
      effetto: ""
    }
  ],
  background: "Timido ma incredibilmente brillante, Armin si è unito al Corpo di Ricerca per cambiare il mondo e scoprire la verità oltre le mura.",
  },

  {
    nome: "Erwin Smith", // Aggiungere come personaggio sbloccabile poichè è leggermente OP (?)
    eta: 39,
    divisione: "Corpo di Ricerca",
    grado: "Comandante",
    specializzazione: "Leadership e strategia militare",
    gigante: null,
    statistiche: {
      livello: 1,
      esperienza: 0,
      vita: 7,
      attacco: 8,
      energia: 10,
      difesa: 7,
    },
    abilita: [
    {
      nome: "Offrite i vostri cuori!",
      descrizione: "Erwin incita il team ad offrire il proprio cuore per la battaglia.",
      costo: 5,
      effetto: "Aumenta l'attacco e la difesa del team del 20% per 2 turni."
    },
    {
      nome: "",
      descrizione: "",
      effetto: ""
    }
  ],
    background: "Comandante del Corpo di Ricerca, disposto a sacrificare tutto, anche sé stesso, per la libertà e la verità sull'origine dei titani.",
  },


  {
    nome: "Levi Ackerman",
    eta: 35,
    divisione: "Corpo di Ricerca",
    grado: "Capitano",
    specializzazione: "Eliminazione rapida dei titani e combattimento ravvicinato",
    gigante: null,
    statistiche: {
      livello: 1,
      esperienza: 0,
      vita: 8,
      attacco: 8,
      energia: 7,
      difesa: 7,
    },
    abilita: [
    {
      nome: "Attacco trottola.",
      costo: 3,
      descrizione: "",
      effetto: "Infligge un danno del 20% in più. "
    },
    {
      nome: "",
      costo: 0,
      descrizione: "",
      effetto: "",
    }
  ],
    background: "Considerato l’uomo più forte dell’umanità, Levi è temuto dai nemici e rispettato dai suoi uomini. Dietro la freddezza, nasconde un forte senso di giustizia e lealtà incrollabile verso Erwin.",
  },
];


const giganti = [
  {
    nome: "Gigante 5m",
    statistiche: {
      vita: 8,
      attacco: 4,
      energia: 5,
      difesa: 5,
    },
    abilita: [
    {
      nome: "",
      costo: 0,
      descrizione: "",
      effetto: "",
    },
    {
      nome: "",
      costo: 0,
      descrizione: "",
      effetto: "",
    }
  ],
    background: "Creatura misteriosa dall'aspetto umanoide e priva di raziocinio. Compare improvvisamente in aree abitate, rappresentando una minaccia costante per l'umanità.",
  },

  {
    nome: "Gigante 10m",
    statistiche: {
      vita: 10,
      attacco: 6,
      energia: 5,
      difesa: 6,
    },
    abilita: [
    {
      nome: "",
      costo: 0,
      descrizione: "",
      effetto: "",
    },
    {
      nome: "",
      costo: 0, 
      descrizione: "",
      effetto: "",
    }
  ],
    background: "Creatura misteriosa dall'aspetto umanoide e priva di raziocinio. Compare improvvisamente in aree abitate, rappresentando una minaccia costante per l'umanità.",
  },

  {
    nome: "Gigante 15m",
    statistiche: {
      vita: 10,
      attacco: 8,
      energia: 5,
      difesa: 7,
  },
  abilita: [
    {
      nome: "",
      costo: 0,
      descrizione: "",
      effetto: "",
    },
    {
      nome: "",
      costo: 0,
      descrizione: "",
      effetto: "",
    }
  ],
    background: "Questo tipo di titano è raramente incontrato ma estremamente pericoloso. La sua grandezza e forza bruta gli permettono di dominare interi campi di battaglia, costringendo le forze umane a manovre rischiose per eliminarlo.",
  }
]

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

module.exports = personaggi; //personaggi è la costante dichiarata nel file
