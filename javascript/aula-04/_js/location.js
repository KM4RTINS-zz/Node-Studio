alert("Introdução sobre [BOM]")

// [BOM] Browser Object Model
// https://www.w3schools.com/js/js_window_location.asp

// Como navegar através do [BOM]

// Propriedades do Objeto location

console.log(
    location
)
// O objeto window.location pode ser usado para obter o endereço da página atual (URL) e para redirecionar o navegador para uma nova página.

console.log(
    location.href
)
// A propriedade window.location.href retorna a URL da página atual.

console.log(
    location.hostname
)
// A propriedade window.location.hostname retorna o nome do host da Internet (da página atual).

console.log(
    location.pathname
)
// A propriedade window.location.pathname retorna o nome do caminho da página atual.

console.log(
    location.protocol
)
// A propriedade window.location.protocol retorna o protocolo da web da página.

console.log(
    location.port
)
//A propriedade window.location.port retorna o número da porta do host da Internet (da página atual).
// (A maioria dos navegadores não exibe números de porta padrão (80 para http e 443 para https).)

function newDoc() {
    location.assign("https://www.w3schools.com/js/tryit.asp?filename=tryjs_loc_assign")
}
// O método window.location.assign() carrega um novo documento.





