const imprimirResultado = function(nota) {
    switch(Math.floor(nota)) {
        case 10: /*o case 9 é executado para case 10 tb*/
        case 9:
            console.log('Quadro de Honra')
            break /*temos que usar break para que após a
            execução desse case ele saia do switch*/
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:
            console.log('Nota inválida')    
    }
}

imprimirResultado(10)
imprimirResultado(7.5)
imprimirResultado(4.9)
imprimirResultado(0)
imprimirResultado(-1)
imprimirResultado(11)
/* switch não aceita intervalo por vírgula como abaixo

swtich()
    case 1, 2, 3 */
    