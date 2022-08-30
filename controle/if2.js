function teste1(num) {
    if(num > 7) 
        console.log(num)
        console.log('Final')
}

//teste1(6)
//teste1(8) 
/* com o teste acima podemos ver que o bloco if de apenas uma linha
não necessita da colocação de chaves para sua correta execução*/
// Ademais é uma boa prática sempre usar as chaves

function teste2(num) { 
    if(num > 7); { //cuidado
        console.log(num)
    }
}

teste2(6)
teste1(8)
/* podemos ver acima que o ponto e vírgula anulou o bloco if
criando um bloco vazio, portanto, não use ponto e vírgula
nas estruturas de controle*/