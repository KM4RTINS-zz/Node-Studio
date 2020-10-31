alert("Operadores lógicos, Comparação e Ternário")

let x = 5 // = (atribuição)

// Comparação 
console.log(
    x == 5,  // number (true)
    x == "5" // string (true)
)  // == (é igual independente do tipo?)

console.log(
    x === "5" // string (false)
)  // === (é igual e do mesmo tipo?)

console.log(
    x != "5", // string (false)
    x != 5,   // number (false)

    x != 4,   // number (true)
    x != "4"  // string (true)
)  // != (não é igual independente do tipo?)
 

console.log(
    x !== "5", // string (true)
    x !== 5,   // number (false)

    x !== 4,   // number (true)
    x !== "4"  // string (true)
)  // != (não é igual e de tipos diferentes?)

console.log(
    x < "5", // string (false) 
    x < 5,   // number (false)

    x < 6,   // number (true)
    x < "6"  // string (true)
)  // < (é menor que?)

console.log(
    x > "5", // string (false) 
    x > 5,   // number (false)

    x > 6,   // number (false)
    x > "6"  // string (false)
)  // > (é maior que?)

console.log(
    x <= "5", // string (true) 
    x <= 5,   // number (true)

    x <= 6,   // number (true)
    x <= "6"  // string (true)
)  // <= (é menor ou igual que?)

console.log(
    x >= "5", // string (true) 
    x >= 5,   // number (true)

    x >= 6,   // number (false)
    x >= "6"  // string (false)
)  // >= (é maior ou igual que?)


// Lógicos

// && (AND) = As duas condições tem que ser true para retornar (true)
// || (OR)  = Apenas uma das consições tem que ser true paara retornar (true)
// !  (NOT) = Nega uma condição. Se for (true) se torna (false). Se for (false) se torna (true).

// Para o aluno ser aprovado tem que ter a media >= 8 e a frequencia >= 80.
let media_1 = 5 
let prese_1 = 70

console.log(
    media_1 >= 8  //(true)
    && // A duas condições tem que ser verdadeiras. (true)
    prese_1 >= 80 //(false) 
) // false

console.log(
    media_1 >= 5  //(true)
    && // A duas condições tem que ser verdadeiras. (true)
    prese_1 >= 70 //(true)
) // true


let media_2 = 6 
let prese_2 = 70

console.log(
    media_2 >= 5  //(true)
    || // Apenas uma das consições tem que ser true paara retornar. (true)
    prese_2 >= 90 //(false)
) // true

console.log(
    media_2 >= 7 //(false)
    || // Apenas uma das consições tem que ser true paara retornar. (true)
    prese_2 >= 80 //(false)
) // false


let media_3 = 3  
let prese_3 = 50

console.log(
    !media_3 >= 4  //(false) pois estou negando o valor true.
    || // Apenas uma das consições tem que ser true para retornar. (true)
    !prese_3 >= 60 //(false) pois estou negando o valor true.
) // false


// Operador Ternário 
// O operador condicional (ternário) é o único operador JavaScript que possui três operandos. Este operador é frequentemente usado como um atalho para a instrução if.

let idade = 16 


let eleito_1 = (idade >= 16)  ? "pode votar!" : "não pode votar!" //(true)
let eleito_2 = (idade >= 18)  ? "pode votar!" : "não pode votar!" //(false)

// sintaxe
// condição ? expr1 : expr2
// condição se "verdadeiro" se não "false"

// parâmetros
// Uma expressão que é avaliada como true ou false.
// expr1(true), expr2(false)

console.log(eleito_1) // pode votar!
console.log(eleito_2) // não pode votar!


