//14) Leia um número N. Use for para somar todos os números de 1 até N.

const readline = require("readline-sync");

let num = readline.questionFloat("Digite um numero: ");

    for (let i = 1; i <= num; i++) {
        console.log(`${num} + ${i} = ${num + i}`);
    } 