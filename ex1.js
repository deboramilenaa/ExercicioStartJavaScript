const readline = require("readline-sync");

let valor = Number(readline.question("Digite o valor que deseja sacar: "));

if (valor % 2 == 0) {
    console.log(`Esse valor é PAR!`);
} else {
    console.log("Esse valor é IMPAR!");
}