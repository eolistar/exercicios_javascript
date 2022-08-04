const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
//função arrow
/**
 * Explicando o que foi feito: 
 * o operador ternário é composto por 3 operadores
 * o primeiro (nota >= 7) é um operador de comparação
 * o segundo é o retorno caso seja verdadeiro a comparação
 * ('Aprovado')
 * e o terceiro é o retorno em casio falso ('Reprovado')
 * o operador é ? e a separação é :
 */

console.log(resultado(7.1))
console.log(resultado(6.7))

