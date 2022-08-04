const valores = [7.7, 8.9, 6.3, 9.2] //criando array    
console.log(valores[0], valores[3]) //exibindo itens
console.log(valores[4])

valores[4] = 10 //atribuindo um novo valor ao array
console.log(valores)
console.log(valores.length) //exibindo o tamanho do array

valores.push({id: 3}, false, null, 'teste') //funçao adiciona itens
//no array
console.log(valores)

console.log(valores.pop()) //funçao retira o ultimo item do array
delete valores[0] //deleta um atributo do array, o item fica vazio
console.log(valores)

console.log(typeof valores) //arrays em javascript são objects