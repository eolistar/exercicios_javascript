// par nome/valor
const saudacao = 'Opa' //contexto léxico 1
// este termo se assemelha muito ao contexto de escopo

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logadouro: 'Rua Muito Legal',
        numero: 123
    } //aqui temos o exemplo de chave/valor
}
//O contexto léxico é o local onde o código foi escrito e 
//como consequência o escopo é definido.
console.log(saudacao)
console.log(exec())
console.log(cliente)