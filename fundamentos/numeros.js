const peso1 = 1.0;
const peso2 = Number('2.0'); //duas maneiras de declarar um numero

/* como podemos ver em JS a atribução do tipo de dado é feita 
automaticamente, por mais que colocamos o ponto ele interpreta
como inteiro */

console.log(peso1, peso2);
console.log(Number.isInteger(peso1)); //função verifica se é inteiro

const avaliacao1 = 9.871;
const avaliacao2 = 6.8771;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media.toFixed(2)); //função limita as casas decimais
console.log(media.toString(2)) //função trata o valor como binário
console.log(Number.isInteger(media))
console.log(typeof media) //função exibe o tipo do dado