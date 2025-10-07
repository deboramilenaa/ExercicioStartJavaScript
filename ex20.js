//Leia um número N. Mostre os N primeiros elementos da sequência de Fibonacci:
//0, 1, 2, 3, 5, 8...
//Explique no programa que cada número é a soma dos dois anteriores.

// fiz esse com ajuda do chat mas nao me orgulho kk


const readline = require("readline-sync");

let N = Number(readline.question("Quantos numeros da sequencia de Fibonacci voce quer ver? "));

let a = 0; // primeiro número da sequência
let b = 1; // segundo número da sequência
let proximo; // vai guardar o próximo número

console.log("Sequência de Fibonacci:");

for (let i = 1; i <= N; i++) {
    console.log(`${a}`); // mostra o número atual
    proximo = a + b; // soma os dois anteriores
    a = b;           // o 'b' vira o novo 'a'
    b = proximo;     // e o 'próximo' vira o novo 'b'
}
