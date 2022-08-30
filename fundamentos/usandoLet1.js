var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

/* ou seja, quando usamos let podemos criar variáveis com mesmo
nome e altera-las em diferentes escopos sem que mudem em um 
escopo global */

/* podemos dizer variáveis let tem escopo global, de função e 
de bloco. Enquanto var não tem escopo de bloco */