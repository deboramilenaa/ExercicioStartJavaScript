const readline = require("readline-sync");


let nota = Number(readline.question("Digite a nota: "));


if (nota >=7) {
    console.log("Aluno aprovado! ");
} else if (nota >=5 &&  nota < 7 ) {
    console.log("Aluno em recuperação!");
} else if (nota < 5) {
    console.log("Aluno reprovado! ");
} else {
    console.log("Nota invalida! Digite entre 0 a 10.");
}

console.log("Fim do programa.");

