const prompt = require('prompt-sync')();


let letra = prompt("Digite uma letra: ").toLowerCase(); 

if (letra === "a") {
    console.log("A");
} else if (letra === "b") {
    console.log("B");
} else {
    console.log("Outra letra");
}
