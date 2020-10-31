alert("Tipos de dados")

// Tipos de dados

// String 
// Qualquer valor entre aspas simples ou duplas.
var nome = "Igor" 

// Number
// Independente de ser Inteiro, Real, Float...
var idade = 21

// Boolean 
// verdadeiro(true) ou falso(false)
var solteiro = true

// Array 
// Retorna um Object, por que o Array é um tipo especial de Objeto.
var frutas = [
    "goiba", // String
    "maça",  // String
    "limão"  // String
]

// Object
var carro = new Object()
carro.fabricacao = "2025" //String
carro.cor = "Azul" // String

// Função
var soma = function(a,b){
    return (a+b)
}


// typeof = Usado para revelar o tipo de uma variável
console.log(typeof(nome))
console.log(typeof(idade))
console.log(typeof(solteiro))
console.log(typeof(frutas))
console.log(typeof(frutas[0]))
console.log(typeof(carro))
console.log(typeof(carro.fabricacao))
console.log(typeof(soma))
console.log(soma(1,1))


