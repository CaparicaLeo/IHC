// Função para encontrar o maior número em um vetor
function encontrarMaiorNumero(vetor) {
    let maior = vetor[0]; // Inicializa maior com o primeiro elemento do vetor

    // Loop através dos elementos do vetor
    for (let i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i]; // Atualiza maior se um número maior for encontrado
        }
    }

    return maior; // Retorna o maior número encontrado
}

// Definindo um vetor de exemplo
const vetor = [10, 25, 5, 67, 34, 89, 21];

// Calcula e exibe o maior número do vetor
const maiorNumero = encontrarMaiorNumero(vetor);
console.log(`O maior número do vetor é: ${maiorNumero}`);
