alert("Introdução sobre [DOM]")

// [DOM] Document Object Model
// https://www.w3schools.com/js/js_htmldom.asp

// Como navegar através do [DOM]
// Com o HTML DOM, o JavaScript pode acessar e alterar todos os elementos de um documento HTML.

// Propriedades do Objeto 

console.log(
    // getElementsByTagName = Esse elemento retorna uma coleção de todos os elementos do documento com o nome da marca especificada.
    document.getElementsByTagName("div")
)

console.log(
    // Eu posso selecionar algum da coleção através do seu indice.
    document.getElementsByTagName("div")[0]
)

console.log(
    // Se eu quiser o conteúdo do meu índice [1], posso adicionar um innerHTML para pegar seu conteúdo.
    document.getElementsByTagName("div")[1].innerHTML
)

console.log(
    // querySelector = Esse elemento retorna apenas o primeiro elemento que corresponde aos seletores especificados.
    document.querySelector("div")
    // Com esse comendo eu posso selecionar qualquer elemento, class ou id do meu documento, sem retornar uma coleção de objetos. 
)

console.log(
    // Selecionando um elemento pelo nome da class.
    document.querySelector(".div2")
    // Para selecionar uma class basta acrescentar um . junto ao seu nome.
)

console.log(
    // Selecionando um elemento pelo nome do id.
    document.querySelector("#p2")
    // Para selecionar um id basta acrescentar um # junto ao seu nome.
)
