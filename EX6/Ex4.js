const prompt = require('prompt-sync')();

function main(){
    let i=0;
    let notas = [];
    let nota;
    console.log("CALCULADORA DE MEDIA DE NOTAS\nPARA DETERMINAR FIM DO VETOR , DIGITE -1.")
    do {
        nota = parseFloat(prompt("Digite a sua nota: "));
        if (nota !== -1) {
            notas.push(nota); // Adiciona a nota ao array
        }
    } while (nota !== -1);
    console.log(`media das notas: ${media(notas)}`)
}
function media(notas){
    let soma=0;
    for(let i=0; i < notas.length;i++){
        soma+=notas[i];
    }
    
    return soma/notas.length;
}

main();