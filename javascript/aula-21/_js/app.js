alert("Operadores Aritméticos")

// Aritméticos

let x = 10
let y = 5

// Adição
let adiRes = x + y
console.log(adiRes)

// Subtração
let subRes = x - y
console.log(subRes)

// Multiplicação
let mulRes = x * y
console.log(mulRes)

// Divisão 
let divRes = x / y
console.log(divRes)

// Exponenciação
let expRes = x ** y
console.log(expRes)

// Resto da divisão
let resDivRes = x % y
console.log(resDivRes)

// Precedências
let n1 = 7 
let n2 = 6
let n3 = 9

// Média da notas
let mediaErr = n1+n2+n3/3
console.log(mediaErr)
// Por não definir a precedência o resultado vai está errado.

let mediaOk = (n1+n2+n3)/3
console.log(mediaOk)
// Pelos conchetes é possível definir a ordem de precedência do cálculo.