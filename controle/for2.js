const notas = [7.5, 8.4, 9, 6, 7.1]

for (let i in notas) {
    console.log(i, notas[i])
    //console.log(`A nota ${i} é ${notas[i]}`)
    //console.log(`Tivemos uma nota ${notas[i]}`)
} //como podemos ver com o for in conseguimos iterar os elementos de um array facilmente

const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
/*sempre bom usar let antes das variáveis para que fique apenas detro do escopo*/