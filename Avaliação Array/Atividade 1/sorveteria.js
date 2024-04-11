let sabores = []
let opcao = -4
let qntSabores = 0

while (opcao != 0) {
    opcao = prompt(`======== MENU ========
    1- Adicionar sabor
    2- Remover sabor
    3- Visualizar sorvete
    4- Finalizar pedido
    `)
    switch(opcao){
        case '1':
            sabores.push(prompt("Cadastre um Sabor: "))
            qntSabores++
                if(qntSabores <= 3){
                    alert('Sabor adicionado!')
                } else{
                    alert('Limite de sabores atingido, remova um sabor!')
                }
                
            break
        case '2':
            sabores.pop()
            if(qntSabores > 0){
                alert('Sabor removido!')
            } else {
                alert('Não existem sabores adicionados!')
            }
            break
        case '3':
            alert(sabores+' ')
            break
        case '4':
            if(qntSabores > 0){
                alert('Pedido realizado')
            } else {
                alert('Seu sorvete não pussui sabores')
            }
            break
    }
}