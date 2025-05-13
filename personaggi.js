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
      effetto: "Aumenta l'attacco del 10% per 2 turni.",
      attivo: false,

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
      effetto: "Infligge un danno del 20% in più. ",
      attivo: false //aggiungere questa chiave a tutti i personaggi
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


module.exports = personaggi; //personaggi è la costante dichiarata nel file

