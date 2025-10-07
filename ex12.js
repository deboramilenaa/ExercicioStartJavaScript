//12) Peça ao usuário um número inteiro positivo N. Utilizando um laço for, imprima
//na tela todos os números de 1 até N, acompanhados de uma mensagem
//explicativa.


const readline = require("readline-sync");

let n = Number(readline.question("Digite um numero inteiro positivo: "));

if (n <=0) {
    console.log("O numero precisa ser positivo!");
} else {
    console.log(`Listando todos os numeros de 1 até ${n}: `);
}
for (let i = 1; i <= n; i++) {
    console.log(`Numero ${i}: este é o ${i}º numero da sequência.`);
}