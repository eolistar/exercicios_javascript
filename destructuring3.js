//criando uma funcao que gera valores aleatórios entre 0 e 1000
//foi usado o operador destructuring para criar a funcao
function rand({ min = 0, max = 1000 }) { 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
/**
 * Explciando a funcao acima:
 * Math.random gera valores 0.1, 0.2, 0.31526, 0.785, 0.89
 * nunca passa de 1
 * Ou seja aplicando o cálculo teremos um valor máximo de 1000
 * o Math.floor é utilizado para retornar apenas o valor inteiro
 * arredondando para baixo. Se fosse Math.ceil seria para cima
 */

//criando um objeto que serve como parametro para a funcao teste
const obj = { max: 50, min: 40 }
console.log(rand(obj)) //gerando aleatórios entre 50 e 40
console.log(rand({min: 955})) //passando o valor minimo
console.log(rand({})) /*chamando a funcao com o parametro padrao
para isso passamos um objeto vazio como parâmetro*/
//console.log(rand()) //erro, não podemos chamar a funcao sem parametros
