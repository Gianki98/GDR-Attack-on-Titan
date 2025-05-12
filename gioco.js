const personaggi = require("./personaggi.js");
const giganti = require("./giganti.js");
const { attacco } = require("./combattimento.js");

attacco(personaggi[1], giganti[1]);
//Implementa degli intervalli per le funzioni, con un ciclo temporale finche' la vita di uno dei due non arriva a zero.
// Per adesso la scelta dei personaggi non sara' implementata ma saranno scelti da noi
