const prompt = require('prompt-sync')(); // Importa o módulo prompt-sync

// Função para calcular o fatorial
function fatorial(n) {
    if (n < 0) return "Fatorial não definido para números negativos."; // Retorna mensagem se n for negativo
    if (n === 0 || n === 1) return 1; // O fatorial de 0 e 1 é 1
    let resultado = 1; // Inicializa o resultado
    for (let i = 2; i <= n; i++) {
        resultado *= i; // Multiplica os números de 2 até n
    }
    return resultado; // Retorna o fatorial calculado
}

// Solicita ao usuário que digite um número
let numero = parseInt(prompt("Digite um número para calcular o fatorial: "), 10);

// Calcula e exibe o fatorial do número fornecido
let resultado = fatorial(numero);
console.log(`O fatorial de ${numero} é: ${resultado}`);
