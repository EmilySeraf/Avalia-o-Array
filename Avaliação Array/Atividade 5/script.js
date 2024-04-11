let numeros = [17, 10, 27 , 34, 70]
let maior = 0
let indiceMaior

for(let i = 0; i < numeros.length; i++){
    if(numeros[i] > maior){
        maior = numeros[i]
        indiceMaior = i
    }
}
console.log(numeros[indiceMaior])
