// 18) Peça um número N. Percorra de 1 até N usando for. Monte duas listas diferentes: uma com os números pares e outra com os ímpares. Exiba os dois vetores no final.

const readline = require("readline-sync");

let N = Number(readline.question("Digite um numero inteiro positivo: "));

let pares = [];   // vetor para armazenar números pares
let impares = []; // vetor para armazenar números ímpares

for (let i = 1; i <= N; i++) {
    if (i % 2 === 0) {
        pares.push(i);     // adiciona o número no vetor de pares
    } else {
        impares.push(i);   // adiciona o número no vetor de ímpares
    }
}

// Exibe os resultados
console.log("\n Números pares:", pares);
console.log("Números ímpares:", impares);