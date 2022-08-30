let valor //não inicializada, gera undefined
console.log(valor)

valor = null //ausência de valor, gera null
console.log(valor)
//qunado quiser zerar o valor de uma variavel use null
//console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco seria a maneira de deletar o produto
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)