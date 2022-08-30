function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

/**
 * funcao semelhante a anterior, mas foi usado o 
 * operador destructuring para inverter os parametros min e max
 * caso max seja menor que min e vice-versa
 * Nesse exemplo também foi usado array no lugar de object
 */

console.log(rand([50, 40])) //passando os valores invertidos
console.log(rand([992])) //informando apenas o min
console.log(rand([, 10])) //informando apenas o max
console.log(rand([])) //passando um array vazio
//console.log(rand()) //erro