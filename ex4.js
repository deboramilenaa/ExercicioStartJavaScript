const readline = require("readline-sync");


let temp = Number(readline.question("Digite a temperatura em graus celsius: "));


if (temp <= 0) {
    console.log("A agua estaria em estado solido! ");
} else if (temp > 0 && temp < 100 ) {
    console.log("A agua estaria em estado liquido! ");
} else  {
    console.log("A agua estaria em estado gasoso! ");
}

console.log("Fim do programa.");
