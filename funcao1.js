// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

//Flexibilidade do Javascript
imprimirSoma(2, 3)
imprimirSoma(2)
imprimirSoma(2, 10, 4, 5, 6, 7)
imprimirSoma()

//Funcao com retorno
function soma(a, b = 0) { //conseguimos passar um valor padrão
    return a + b
}

//é necessário estar dentro de um console.log, pois é uma funcao
//com retorno
console.log(soma(2, 5)) 
console.log(soma(2))