let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //uma maneira de transformar algo não
//Boolean em Boolean é fazer a dupla negação, que do ponto de
//vista lógico estamos negando a negação

console.log(`os verdadeiros...`) //todo número inteiro positivo ou negativo é verdadeiro
console.log(!!3)
console.log(!!-1)
console.log(!!' ')//espaçoes em branco e strings tb são verdade
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log(`os falsos...`)
console.log(!!0)// 0, espaço vazio são falsos
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log(`pra finalizar...`)/*aqui usamos o operador ou || 
ele vai retornar o resultado da operação lógica*/
console.log(!!('' || null || 0 || ' '))

let nome = '' /*essa é uma forma característica de colocar
um valor padrão para uma variável. Dessa forma se a variavel
não tiver preenchida (nome) retorna 'desconhecido'*/
console.log(nome || 'Desconhecido')