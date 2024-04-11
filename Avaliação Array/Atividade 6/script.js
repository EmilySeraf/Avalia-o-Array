let numeros = []
let numerosImpares = []
for (let i = 0; i < 10; i++) {
    let numero = parseInt(prompt("Digite o " + (i + 1) + "º número"));
    numeros.push(numero);
}

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 ) {
        numerosImpares.push(numeros[i]);
    }
}

alert("Números Ímpares: " + numerosImpares.join(", "));
