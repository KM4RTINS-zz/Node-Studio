alert("Introdução sobre [DOM]")

// [DOM] Document Object Model
// https://www.w3schools.com/js/js_htmldom.asp

// Como navegar através do [DOM]
// Com o HTML DOM, o JavaScript pode acessar e alterar todos os elementos de um documento HTML.

// Propriedades do Objeto 

console.log(
    // getElementById = Pega um elemento pelo seu id.
    document.getElementById("fruta")
)

console.log(
    // innerHTML = Pega o conteúdo dentro do elemento.
    document.getElementById("fruta").innerHTML
)


console.log(
    // getElementsByClassName = Irá pegar todas as class declarada como "carro" e fazer uma coleção.
    document.getElementsByClassName("carro")
)

console.log(
    // Eu posso selecionar algum da coleção através do seu indice.
    document.getElementsByClassName("carro")[0]
)

console.log(
    // Se eu quiser o conteúdo do meu índice [1], posso adicionar um innerHTML para pegar seu conteúdo.
    document.getElementsByClassName("carro")[1].innerHTML
)

