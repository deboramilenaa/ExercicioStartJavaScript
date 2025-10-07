//13) Solicite ao usuário um número inteiro de 1 a 10. Usando for, mostre a tabuada
//desse número (de 1 até 10).

const readline = require("readline-sync");

let numero = readline.questionFloat("Digite um numero de 1 a 10: ");

if (numero >= 1 && numero <= 10) {
    console.log(`\nTabuada do ${numero}:`);
    
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }

} else {
    console.log("Número inválido! Digite um número entre 1 e 10.");
}