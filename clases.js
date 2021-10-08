const Rectangulo = class R { // esto es una expreción de clases

}
class Rectangulo2{ // esto es una declaración de clase <==== esta clase no posee Hoisting

}
const r = new Rectangulo();

function Cuadrado() {} //  <==== esto funciona igual que 'var'
// Hoisting: esto ocurre cuando se toman variables definidas con VAR y funciones definidas con FUNCTION
// estas se llevan al comienzo del archivo.



console.log(Cuadrado,Rectangulo2)

class Chancho {
    propiedad = 'mi propiedad'
    #hambre 
    static estatoco = 42
    constructor ( estado = 'feliz', hambre = false){
    this.estado = estado    
    this.#hambre = hambre
    }
    hablar(){ 
        console.log(`soy un chancho ${this.estado} ${this.#hambre ? 'con mucha hambre' : 'satisfecho'}`)
    }

    static comer(){
        console.log( this.estatoco,'estoy comiendo')
    }
}


Chancho.comer()

const feliz = new Chancho('triste') // no se puede llamar a una clase con un constructor sin la palabra "new"
const triste = new Chancho('feliz')
feliz.hablar()


