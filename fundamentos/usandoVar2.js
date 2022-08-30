var numero = 1 
{
    var numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

/* ou seja, fuja do escopo global, pois a variavel é alterada
em todos os escopos */