const prompt = require('prompt-sync')();

function main(){
    let nota = prompt("Nota do usuário: ");

    console.log('Caro usuário o senhor foi ' + aprovacao(nota));
}
function aprovacao(nota){
    if(nota<6){
        return "reprovado...";
    }
    else if(nota >= 6 && nota < 8){
        return "aprovado.";
    }
    else if(nota >= 8){
        return "aprovado com louvor!!!";
    }
}

main();