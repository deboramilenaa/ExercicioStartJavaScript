//Relatório Escolar
//Você foi contratado para criar um sistema que calcule as médias de uma turma.
//Regras:
//• Pergunte ao usuário quantos alunos serão cadastrados.
//• Para cada aluno, peça:
//• Nome
///• Três notas (0 a 10)
//• Calcule a média das três notas.
//• Mostre um relatório final com:
//• Nome do aluno
//• Média (com 2 casas decimais)
//• Situação:
//• Aprovado (média ≥ 7)
//• Recuperação (5 ≤ média < 7)
//• Reprovado (média < 5)



const readline = require("readline-sync");


let numAlunos = Number(readline.question("Quantos alunos serão cadastrados? "));


let nomes = [];
let medias = [];
let situacoes = [];


for (let i = 1; i <= numAlunos; i++) {
    let nome = readline.question(`Digite o nome do aluno ${i}: `);

    let nota1 = Number(readline.question("Digite a nota 1 (0 a 10): "));
    let nota2 = Number(readline.question("Digite a nota 2 (0 a 10): "));
    let nota3 = Number(readline.question("Digite a nota 3 (0 a 10): "));

    
    let media = (nota1 + nota2 + nota3) / 3;

   
    let situacao;
    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

   
    nomes.push(nome);
    medias.push(media);
    situacoes.push(situacao);
}

console.log("\n=== RELATÓRIO FINAL DA TURMA ===");
for (let i = 0; i < numAlunos; i++) {
    console.log(`\nNome: ${nomes[i]}`);
    console.log(`Média: ${medias[i].toFixed(2)}`);
    console.log(`Situação: ${situacoes[i]}`);
    console.log("---------------------------");
}