alert("Introdução ao creatElement")
// https://www.w3schools.com/jsref/met_document_createelement.asp


// CreatElement = Cria um elemento.
console.log(
    // criando uma div.
    document.createElement("div")
)

console.log(
    // criando um parágrafo.
    document.createElement("p")
)

// Passando um elemento criado para uma variável.
var imagem = document.createElement("img")

// Passando atributos para o elemento criado.
imagem.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
imagem.alt = "Logo JS"

console.log(
    // Exibindo a variável no console.
    imagem 
)

// Passando um elemento criado para uma variável.
var paragrafo = document.createElement("p")

// Passando um value (conteúdo) para meu elemento.
paragrafo.innerHTML = "Olá pessoal!"

console.log(
    // Exibindo as variáveis no console.
    paragrafo
)
