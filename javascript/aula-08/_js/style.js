alert("Introdução sobre Style Object")

// Style Object [DOM]
// https://www.w3schools.com/jsref/dom_obj_style.asp

// O objeto Style representa uma declaração de estilo individual.

// Mudando a cor do parágrafo 1.
document.getElementById("p1").style.color = "red"
// Após acrescentar o Objeto style, usamos a propriedade color para alterar a cor da fonte.

var paragrafo = document.getElementById("p2")
console.log(paragrafo)

// Mundando a cor de fundo do parágrafo 2 usando a variável.
paragrafo.style.backgroundColor = "#666"

// Mudando altura do paragrafo 2.
paragrafo.style.height = "100px"


// Adicionando atributos pela variável.
var imagem = document.getElementById("imagem")
console.log(imagem) // Exibindo os atributos no console.

// adicionando a propriedade src e passando o local da imagem.
imagem.src = "https://besthqwallpapers.com/Uploads/3-3-2020/123592/thumb2-javascript-fiery-logo-programming-language-orange-stone-background-creative-javascript-logo.jpg"

imagem.alt = "Logo do JavaScript"

// Definindo largura (height) e altura (width) da imagem.
imagem.height = "400" //altura  (não precisa passar o px)
imagem.width = "400"  //largura (não precisa passar o px)