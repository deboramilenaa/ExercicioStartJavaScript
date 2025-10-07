// Tive ajuda do meu monitor com o switch case.

const readline = require("readline-sync");

let numero = readline.questionInt("Digite o numero de 1 a 7: ");

switch (numero) {
    case 1:
        console.log("Domingo.");
        break;
    case 2:
        console.log("Segunda-Feira.");
        break;
    case 3:
        console.log("Terça-Feira.");
        break;
    case 4:
        console.log("Quarta-Feira.");
        break;
    case 5:
        console.log("Quinta-Feira.");
        break;
    case 6:
        console.log("Sexta-Feira.");
        break;
    case 7:
        console.log("Sabado.");
        break;

    default:
        console.log("Erro! Numero fora da faixa.");
} 
