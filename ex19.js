//19) Pergunte ao usuário quantos números ele deseja digitar. Leia cada número em
//um for, calcule a soma e depois a média. Mostre todos os números digitados e a
//média com duas casas decimais.

const readline = require("readline-sync");

let qtd = Number(readline.question("Quantos numeros deseja digitar? "));

let numeros = []; // vetor que vai guardar todos os números
let soma = 0;     // variável para somar os números

for (let i = 1; i <= qtd; i++) {
    let num = Number(readline.question(`Digite o ${i}o numero`));
    numeros.push(num); // adiciona o número ao vetor
    soma += num;       // soma os números
}

let media = soma / qtd;

console.log("\nNumeros digitados:", numeros);
console.log(`Media: ${media.toFixed(2)}`);