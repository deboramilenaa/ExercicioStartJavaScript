const readline = require("readline-sync");

let salario = readline.questionFloat("Digite seu salario: ");

let imposto = 0
let percentual = 0

if (isNaN(salario) || salario <=0) {
    console.log("O valor do salário digitado é invalido!")
} else if (salario <= 2000) {
    imposto = 0 
    percentual = 0
    console.log(`Salario R$ ${salario} esta isento de imposto!`)
} else if (salario <= 5000) {
    percentual = 0.10
    imposto = salario *0.10 
    console.log(`Salario na faixa de 10%: ${imposto}`)
} else {
    percentual = 0.20
    imposto = salario *0.20
    console.log(`Salario na faixa de 20%: ${imposto}`)
}
