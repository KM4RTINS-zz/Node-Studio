alert("Intro ao replaceChild()")
// O DOM é usado pelo navergador para representar páginas web.
// .document = Ele é responsavel por dá acesso a toda arvore DOM ao navegador.

// O método replaceChild() = substitui um nó filho por um novo nó.
// Funciona de forma parecida com insertBefore, mas ele substitui um filho por outro.

var lista = document.getElementsByTagName("ul")[0]
var itens = lista.children 

var novaTag = document.createElement("li")
novaTag.innerHTML = "Chá"

lista.replaceChild(novaTag, itens[0])

console.log(lista)