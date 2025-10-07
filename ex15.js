//15) Peça ao usuário um número inteiro positivo N. Calcule o fatorial de N
//(N! = N*(N-1)*(N-2)*...*1) usando 

// não entendi e precisei recorrer ao chat 

const readline = require("readline-sync");

let N = Number(readline.question("Digite um numero inteiro nao negativo (ex: 0, 1, 2, ...): "));

// validação: inteiro e não-negativo
if (!Number.isInteger(N) || N < 0) {
  console.log("Entrada inválida. Digite um inteiro >= 0.");
} else {
  // caso N seja 0, a lógica abaixo já funciona (resultado = 1)
  let resultado = 1;

  for (let i = 1; i <= N; i++) {
    resultado = resultado * i;
  }

  console.log(`${N}! = ${resultado}`);
}