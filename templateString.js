const nome = 'Rebeca'
const concatenacao = "Olá " + nome + '!'
const template = `
    Olá
    ${nome}!` /* ao utilizar o template string tudo (incusive 
espaços) que estiver dentro de ` ` é considerado, e para chamar
uma variável colocamos ela dentro de ${variavel}*/
console.log(concatenacao, template)

//o que está dentro das chaves ele tenta interpolar (converter
// e interpretar)
console.log(`1 + 1 = ${1 + 1}`)/*neste caso ele vai interpretar
o que está dentro dos colchetes como uma conta*/

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)