alert("Introdução sobre [DOM]")

// [DOM] Document Object Model
// https://www.w3schools.com/js/js_htmldom.asp

// Como navegar através do [DOM]
// Com o HTML DOM, o JavaScript pode acessar e alterar todos os elementos de um documento HTML.

// Propriedades do Objeto 

console.log(
    // querySelectorAll = Esse elemento retorna para todos os elementos no documento que correspondem a um seletor.
    document.querySelectorAll(".times")
)

// Pegue todos os times brasileiros
console.log(
    // Selecionando o grupo de times para poder pegá-los.
    document.getElementById("futebol-brasileiro").querySelectorAll(".times")
)

// Pegue todos os times europeus
console.log(
    // Selecionando o grupo de times para poder pegá-los.
    document.getElementById("futebol-europeu").querySelectorAll(".times")
)

// Pegue o time Flamengo 
console.log(
    // Use o .innerHTML para pegar o value (conteúdo) do índice.
    document.getElementById("futebol-brasileiro").querySelectorAll(".times")[0].innerHTML
)

// Pegue o time Juventos
console.log(
    // Use o .innerHTML para pegar o value (conteúdo) do índice.
    document.getElementById("futebol-europeu").querySelectorAll(".times")[2].innerHTML
)