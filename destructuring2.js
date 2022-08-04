const [a] = [10] //criando um array
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)
// usando destructuring para fazer a atribuição à variáveis

const [, [, nota]] = [[, 8, 8], [10, 6, 8]]
console.log(nota)
// mostrando que podemos pular valores para atribuir