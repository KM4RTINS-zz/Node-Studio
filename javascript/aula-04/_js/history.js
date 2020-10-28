alert("Introdução sobre [BOM]")

// [BOM] Browser Object Model
// https://www.w3schools.com/js/js_window_history.asp

// Como navegar através do [BOM]

// Propriedades do Objeto history
// Para proteger a privacidade dos usuários, existem limitações de como o JavaScript pode acessar este objeto.

console.log(
    history
)
// O objeto window.history contém o histórico do navegador.

function voltar() {
    history.back()
}
// O método history.back() carrega o URL anterior na lista de histórico. (Isso é o mesmo que clicar no botão Voltar do navegador.)

function avancar() {
    history.forward() 
}
// O método history.forward() carrega o próximo URL na lista de histórico. (Isso é o mesmo que clicar no botão Avançar no navegador.)


