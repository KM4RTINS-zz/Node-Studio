alert("Introdução sobre [BOM]")

// [BOM] Browser Object Model
// https://www.w3schools.com/js/js_window_screen.asp

// Como navegar através do [BOM]

// Propriedades do Objeto screen
// O objeto de tela contém informações sobre a tela do visitante.

console.log(
    screen
)

console.log( //Objeto
    screen.orientation.type
)
//A orientation: propriedade de leitura somente da Screen interface, retorna a orientação atual da tela.

console.log(
    screen.availHeight
)

//Retorna a altura da tela. (excluindo a barra de tarefas do Windows)

console.log(
    screen.availWidth 
)
//Retorna a largura da tela. (excluindo a barra de tarefas do Windows)

console.log(
    screen.colorDepth 
)
//Retorna a profundidade de bits da paleta de cores para exibir imagens.

console.log(
    screen.pixelDepth
) 
//Retorna a resolução de cor (em bits por pixel) da tela.

console.log(
    screen.height 
)
//Retorna a altura total da tela.

console.log(
    screen.width 
)
//Retorna a largura total da tela.