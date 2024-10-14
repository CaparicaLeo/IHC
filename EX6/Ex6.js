// Função para calcular a soma dos elementos de uma matriz
function somaMatriz(matriz) {
    let soma = 0; // Inicializa a soma

    // Loop através de cada linha da matriz
    for (let i = 0; i < matriz.length; i++) {
        // Loop através de cada elemento da linha
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j]; // Adiciona o elemento à soma
        }
    }

    return soma; // Retorna a soma total
}

// Definindo uma matriz de exemplo
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Calcula e exibe a soma dos elementos da matriz
const resultado = somaMatriz(matriz);
console.log(`A soma dos elementos da matriz é: ${resultado}`);
