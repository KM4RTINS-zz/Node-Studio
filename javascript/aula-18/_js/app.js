alert("Tipos de Variáveis")

// Variáveis
// escopo global e escopo local
// var (escopo global), let (dentro do bloco), const

var local = 1
// variáveis  são espaços ocupados na memória armazenando uma informação.
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Values,_variables,_and_literals

/* Declarações

Existem 3 tipos de declaraões

var: Declara uma variável, opcionalmente, inicializando-a com um valor.  

let: Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor. Pode receber mais de um valor.

const: Declara uma constante de escopo de bloco, apenas de leitura. Só recebe um valor fixo.

*/

// Escopos
// https://developer.mozilla.org/pt-BR/docs/Glossario/Escopo

var nome = "Igor" // escopo global.
console.log(nome)
// Usando uma condição para trocar o valor da variável.
if(true) {
    nome = "Ygu" // escopo local.
}

// Variáveis local só podem ser acessadas


// Usando uma condição para trocar o valor da variável.
if(true) {
    var animal = "Pato" // escopo local.
    console.log(animal)
    let animal2 = "Ganso" // escopo local
}

console.log(animal2) // is not defined

// Usando a variável var em alguns momentos ela acaba saindo do escopo local, por isso o uso dela acabou não sendo uma boa prática. Então usamos let para declarar um valor para alguma variável dentro de um escopo local.

