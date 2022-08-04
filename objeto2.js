console.log(typeof Object)
console.log(typeof new Object)

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto)
console.log(typeof new Produto)

/* Podemos ver que independente se estamos falando de
um objeto, função ou classe eles são funções, mas novos tipos 
(instâncias)são objetos
 */