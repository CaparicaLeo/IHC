// Função para calcular a média dos elementos de uma matriz
function mediaMatriz(matriz) {
    let soma = 0; // Inicializa a soma
    let contagem = 0; // Inicializa o contador de elementos

    // Loop através de cada linha da matriz
    for (let i = 0; i < matriz.length; i++) {
        // Loop através de cada elemento da linha
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j]; // Adiciona o elemento à soma
            contagem++; // Incrementa o contador
        }
    }

    return contagem > 0 ? soma / contagem : 0; // Retorna a média ou 0 se a matriz estiver vazia
}

// Definindo uma matriz de exemplo
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Calcula e exibe a média dos elementos da matriz
const resultado = mediaMatriz(matriz);
console.log(`A média dos elementos da matriz é: ${resultado}`);
