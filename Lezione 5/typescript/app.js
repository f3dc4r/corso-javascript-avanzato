"use strict";
exports.__esModule = true;
var Persona_1 = require("./classes/Persona");
var Docente_1 = require("./classes/Docente");
/*
dichiarando una variabile, possiamo opzionalmente dichiarare
anche il suo tipo
*/
var ilMioNumero = 32;
var laMiaStringa = 'hello world';
var doppiApici = "ciao a tutti";
var backtick = "sono una stringa anche io";
var ilMioBoolean = false;
ilMioBoolean = true;
// console.log(ilMioNumero);
var p1 = new Persona_1.Persona('Ryan', 24);
console.log(p1);
var giovanni = new Docente_1.Docente('Giovanni', 30, ['html', 'css', 'javascript']);
var antonio = new Docente_1.Docente('Antonio', 30, ['javascript']);
var iMieiDocenti = [giovanni, antonio];
console.log(iMieiDocenti);
var docenti = [];
