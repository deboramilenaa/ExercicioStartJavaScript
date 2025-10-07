const readline = require("readline-sync");

const login = "deboramilena";
const senhaCerta = 123;

let usuario = readline.question("Digite o login: ");
let senha = readline.question("Digite a senha: ");

if (usuario == login && senha == 123) {
   console.log("Acesso liberado!");
} else  {
    console.log("Acesso negado!")
}
 