alert("Introdução sobre innerHTML")

// innerHTML
// https://www.w3schools.com/jsref/prop_html_innerhtml.asp

// A propriedade innerHTML define ou retorna o conteúdo HTML (HTML interno) de um elemento.

console.log(
    //Exibe o elemento.
    document.getElementById("p1")
)

console.log(
    //Exibe o conteúdo.
    document.getElementById("p1").innerHTML
)

// Trocando o value (conteúdo) do elemento. 
document.getElementById("p1").innerHTML = "Trocando o conteúdo do parágrafo."

// Passando o elemento p2 para uma variável.
var paragrafo = document.getElementById("p2")

console.log( 
    // Exibindo o value do p2 no console.
    document.getElementById("p2").innerHTML
)

// Trocando o value (conteúdo) da variável.
paragrafo.innerHTML = "Trocando o conteúdo do parágrafo 2"