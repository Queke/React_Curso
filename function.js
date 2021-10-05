// Funciones que se DECLARAN con la palabra reservada function

function Fn(){
    // { prop: 'propiedad' }
    this.prop = 'propiedad'
    
    // ignora totalmente lo que se asigne
}

Fn.prototype.lala = function FuncionDePrototipo(){}

const r = new Fn()
// console.log(r.__proto__)

// fat arrow function

console.log(this)

const farFn = () => { // NO EXISTE UN CONTEXTO DE 'THIS'
    // const obj = {}
    // obj.prop = 'propiedad'
    // return obj
    this.prop = 'lala'
}

const r1 = farFn()
console.log(this)
//console.log(r1)


const fatFn2 = () => 2 // No es necesario que se utilicen '{}' SOLO si es necesario no hacerlo
