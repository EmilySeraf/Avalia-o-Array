let notasAcimaCinco = [];
let somaNotasAcimaCinco = 0;

for (let i = 0; i < 5; i++) {
    let aluno = prompt("Digite o nome do aluno:");
    let nota = parseFloat(prompt("Digite a nota de " + aluno + ":"));
    
    if (nota > 5) {
        notasAcimaCinco.push(nota);
        somaNotasAcimaCinco += nota;
    }
}

let mediaNotasAcimaCinco = somaNotasAcimaCinco / notasAcimaCinco.length;

alert("A média das notas acima de 5,0 é: " + mediaNotasAcimaCinco.toFixed(2));
