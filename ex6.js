const readline = require("readline-sync");


let valorCompra = Number(readline.question("Digite o vaalor da sua compra: "));


if (valorCompra >= 200) {
    let desconto = valorCompra * 0.15;
    let valorFinal = valorCompra - desconto;
    console.log(`Desconto de 15% aplicado! Sua compra ficou em: R$ ${valorFinal.toFixed(2)}`);
} else if (valorCompra < 200 ) {
    let desconto = valorCompra * 0.05;
    let valorFinal = valorCompra - desconto;
    console.log(`Desconto de 5% aplicado! Sua compra ficou em: R$ ${valorFinal.toFixed(2)}`);
}

console.log("Fim do programa.");

