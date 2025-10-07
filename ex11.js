const readline = require("readline-sync");


    let nome = readline.question("Digite o nome do cliente: ");
    let idade = readline.questionFloat("Digite a idade: ");

    if (idade >= 18) {
    
        let valor = readline.questionFloat("Digite o valor do ingresso: R$ ");
        if (valor >= 100) {
            let desconto = valor * 0.20;
            valor = valor - desconto;
            console.log(`Desconto de 20% aplicado!`);
            console.log("Compra aprovada!");
            console.log(`Nome: ${nome}\nIdade: ${idade}\nValor a pagar: R$ ${valor}`)
    }
    
    } else {
     
        console.log(`Desculpe, ${nome}. Venda não permitida para menores de 18 anos.`);
    }
   
