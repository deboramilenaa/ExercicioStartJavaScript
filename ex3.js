const readline = require("readline-sync");


let preço1 = Number(readline.question("Informe o valor do primeiro produto: R$ "));
let preço2 = Number(readline.question("Informe o valor do segundo produto: R$ "));

if (preço1 < preço2) {
    console.log(`O primeiro produto é mais barato:  R$ ${preço1} `);
} else if (preço2 <preço1) {
    console.log(`O segundo produto é mais barato:  R$ ${preço2} `);
} else {
    console.log("Ambos os produtos possuem o mesmo valor! Promoção especial apenas hoje. ");
}

console.log("Fim do programa.");