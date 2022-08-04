console.log(typeof console)
console.log(Math.ceil(6.1)) //usando a notação ponto para acessar
//a função log de console, e a função ceil de Math

const obj1 = {}
obj1.nome = 'Bola' //acessando o atributo nome de obj1 com ponto
//obj1['nome'] = 'Bola2' //essa notação gera o mesmo efeito
console.log(obj1.nome)

function Obj(nome) { 
    this.nome = nome //usando this para tornar visivel o atributo
    this.exec = function(){ //função
        console.log('Exec...')
    }
}
// usando a notação ponto criamos atributos e funções
// como mostrado acima

const obj2 = new Obj('Cadeira') //instanciando Obj
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
obj3.exec() //chamndo a função desse objeto