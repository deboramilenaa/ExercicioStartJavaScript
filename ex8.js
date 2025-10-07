const readline = require("readline-sync");

let idade = readline.question("Digite sua idade: ");


if (idade <12) {
   console.log("Infatil!");
} else if (idade >=13 && idade <=17) {
    console.log("Juvenil!");
} else if (idade >=18 && idade <=39) {
    console.log("Adulto!");
} else {
    console.log("Master!");
}