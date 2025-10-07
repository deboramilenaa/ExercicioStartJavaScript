//21) Peça ao usuário um número N.
//Use for para verificar se o número é primo (tem apenas dois divisores: 1 e ele
//mesmo).
//Exiba os divisores encontrados e uma mensagem final:
//• “É primo” ou
//• “Não é primo”.


const readline = require("readline-sync");

let numero = Number(readline.question("Digite um numero inteiro positivo: "));

let divisores = 0; 

for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) { 
        divisores = divisores + 1; 
        console.log(`${i} é divisor de ${numero}`);
    }
}

if (divisores == 2) {
    console.log(`O numero ${numero} é primo!`);
} else {
    console.log(`O numero ${numero} nao é primo.`);
}