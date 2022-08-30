function tratarErroELancar(erro) {
    //throw new Error('...') //mostra uma menssagem de erro
    //throw 10
    //throw true
    //throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message, 
        date: new Date
    }
}

function imprimirNomeGritado(obj) {
    try {  //dentro do bloco try colocamos a funcao que pode dar
        //erro  
    console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {  //complementando o bloco try, usamos catch
        //para "capturar" esse erro e trata-lo de uma certa forma
        //nesse caso armazenamos o erro na variável "e" e vamos
        //usar uma funcao
        tratarErroELancar(e)
    } finally {
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)