const prod1 = {} //criando um objeto vazio
prod1.nome = 'Celular Ultra Mega' //passando atributos 
prod1.preco = 4998.90
prod1['desconto Legal'] = 0.40 //evitar atributos com espaço

console.log(prod1)

const prod2 = { //podemos definir no próprio objeto seus atrb
    nome: 'Camisa Polo',
    preco: 79.90
}

'{ "nome": "Camisa Polo", "preco": 79.90}' /* transformando 
prod2 em um json */

console.log(prod2)