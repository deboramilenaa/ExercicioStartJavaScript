 
const readline = require("readline-sync");

console.log("Bem vindo(a) ao StarShow!");
let idade = Number(readline.question("Informe sua idade: "));

if (idade >=18) {
    console.log("Entrada permitida! Seja bem vindo: ");
} else {
    console.log("Proibida a entrada de menores de 18 anos!");
}

console.log("Fim do programa.");

