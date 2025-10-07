// 23) Crie um programa que exiba um menu com opções (ex: 1 – Mostrar mensagem,
//2 – Mostrar hora, 0 – Sair). O menu deve ser repetido até que o usuário digite 0.

const readline = require("readline-sync");

let opcao = -1; 

while (opcao !== 0) {
   
    console.log("\n--- MENU ---");
    console.log("1 – Mostrar mensagem");
    console.log("2 – Mostrar hora");
    console.log("0 – Sair");

    opcao = Number(readline.question("Escolha uma opcao: "));


    if (opcao === 1) {
        console.log("Você escolheu mostrar a mensagem! Olá!");
    } else if (opcao === 2) {
        let data = new Date();
        console.log("Hora atual:", data.toLocaleTimeString());
    } else if (opcao === 0) {
        console.log("Saindo do programa...");
    } else {
        console.log("Opção inválida! Tente novamente.");
    }
}