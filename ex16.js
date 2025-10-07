// Inicializa o contador
let contador = 0;

// Laço de 1 a 100
for (let i = 1; i <= 100; i++) {
    // Verifica se i é múltiplo de 5
    if (i % 5 === 0) {
        console.log(i); // Exibe o múltiplo
        contador++;     // Incrementa o contador
    }
}

// Mostra o total de múltiplos
console.log("Total de múltiplos de 5:", contador);