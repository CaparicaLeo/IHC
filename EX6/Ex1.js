const prompt = require('prompt-sync')(); // Executa o prompt-sync corretamente

function main() {
    // Solicita e converte as entradas para número
    let n1 = parseFloat(prompt("Digite o primeiro valor: "));
    let n2 = parseFloat(prompt("Digite o segundo valor: "));

    if (compara(n1, n2)) {
        console.log(`O primeiro valor é maior | ${n1}`);
    } else if (compara(n2, n1)) {
        console.log(`O segundo valor é maior | ${n2}`);
    } else {
        console.log("Os dois valores são iguais!");
    }

    return 0;
}

function compara(a, b) {
    return a > b; // Compara os números corretamente
}

// Chama a função principal
main();
