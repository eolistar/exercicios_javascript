// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa //tire de dentro do objeto esses
//atributos
console.log(nome, idade)

const{ nome: n, idade: i } = pessoa //usando a mesma notação acima
//mas atribuindo esses atributos a variáveis com nomes diferentes
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)
//acessando atributos que não existem no objeto

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep) //acessando os atributos
//dentro de endereco, ele não vai criar a variável endereco

console.log(pessoa.endereco.logradouro, pessoa.endereco.numero)
//usando notação ponto para acessar esses atributos