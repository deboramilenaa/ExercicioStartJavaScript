//Solicite base e expoente ao usuário. Calcule base ^ expoente utilizando apenas
//multiplicações dentro de um for (sem usar Math.pow).


const readline = require("readline-sync");

let base = Number(readline.question("Digite a base: "));
let expoente = Number(readline.question("Digite o expoente (inteiro positivo): "));

let resultado = 1; // começa em 1 pois qualquer número elevado a 0 é 1

for (let i = 1; i <= expoente; i++) {
    resultado = resultado * base; // multiplica a base várias vezes
}

console.log(`${base} ^ ${expoente} = ${resultado}`);