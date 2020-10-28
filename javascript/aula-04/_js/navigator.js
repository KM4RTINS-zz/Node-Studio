alert("Introdução sobre [BOM]")

// [BOM] Browser Object Model
// https://www.w3schools.com/js/js_window_navigator.asp

// Como navegar através do [BOM]

// Propriedades do Objeto navigator

console.log(
    navigator
)
// O window.navigator objeto contém informações sobre o navegador do visitante.

console.log(
    navigator.cookieEnabled
)
// A propriedade cookieEnabled retorna verdadeiro se os cookies estiverem habilitados, caso contrário, falso.

console.log(
    navigator.appName
)
// A propriedade appName é a que retorna o nome do aplicativo do navegador. ("Netscape" é o nome usado para os navegadores: IE11, Chrome, Firefox e Safari.)

console.log(
    navigator.appCodeName
)
// A propriedade appCodeName retorna o nome do código do aplicativo do navegador. ("Mozilla" é o nome do código para os navegadores: Chrome, Firefox, IE, Safari e Opera.)

console.log(
    navigator.product
)
// A propriedade product retorna o nome do produto do mecanismo do navegador. (Não confie nisso. A maioria dos navegadores retorna "Gecko" como nome do produto !!)

console.log(
    navigator.appVersion
)
// A propriedade appVersion retorna informações sobre a versão do navegador.

console.log(
    navigator.userAgent
)
// A propriedade userAgent retorna o cabeçalho do agente do usuário enviado pelo navegador ao servidor.

// OBS: As informações do objeto do navegador podem frequentemente ser enganosas e não devem ser usadas para detectar versões do navegador.

console.log(
    navigator.platform
)
// A propriedade platform retorna a plataforma do navegador (sistema operacional).

console.log(
    navigator.language
)
// A languagepropriedade retorna o idioma do navegador.

console.log(
    navigator.onLine
)
// A propriedade onLine retorna true se o navegador estiver online.

console.log(
    navigator.javaEnabled()
)
// O método javaEnabled() retorna verdadeiro se o Java estiver ativado.