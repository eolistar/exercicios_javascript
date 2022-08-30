{
    {
        {
            {
                var sera = 'Será???'
            }
        }
    }
}
console.log(sera)
/* ou seja, independente do escopo é possível acessar essa 
variavel, visível em escopo global*/

function teste() {
    var local = 123
}

teste()
//teste(console.log(local)) //erro
//ou seja, visivel apenas no escopo da function

/*com esses exemplos podemos ver que a declaração de variável
com var só tem dois escopos possíveis: global e de functions,
mas ambos os escopos apontam para o mesmo endereço de memória, 
dessa forma ao criarmos a mesma variável em diferentes escopos
podemos altera-la em nível global e function*/