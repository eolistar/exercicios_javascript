const escola = "Cod3r";

console.log(escola.charAt(4)); //índice começa em 0
console.log(escola.charAt(5)); //apresenta um valor inexistente
console.log(escola.charCodeAt(3)); //retorna o valor do código,
// unicode relacionado ao índice 3 dessa string
console.log(escola.indexOf('3')); //retorna se existe o valor passado
// nessa string

//função usada para exibir uma parte da string especificada
console.log(escola.substring(1));
console.log(escola.substring(0, 3));

console.log('Escola '.concat(escola).concat('!')); //aqui usamos
//uma função para concatenar strings e variáveis
console.log('Escola ' + escola + '!') //concatena igual acima
console.log(escola.replace(3, 'e')); //função substitui um valor
//por outro, nesse caso o valor 3 por 'e'

console.log('Ana,Maria,Pedro'.split(',')); //função transforma
// string em array passamos para a função o valor que separa
// os elementos desse array