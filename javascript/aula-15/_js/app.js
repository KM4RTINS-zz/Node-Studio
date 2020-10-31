alert("Intro ao children, insertBefore")
// O DOM é usado pelo navergador para representar páginas web.
// .document = Ele é responsavel por dá acesso a toda arvore DOM ao navegador.

var lista = document.getElementsByTagName("ul")[0]

// A propriedade children = retorna uma coleção de elementos filhos de um elemento, como um objeto HTMLCollection.
var itens = lista.children
// A diferença entre esta propriedade e childNodes é que childNodes contém todos os nós, incluindo nós de texto e nós de comentário, enquanto os filhos contêm apenas nós de elemento.

var novoItem = document.createElement("li")
novoItem.textContent = "Água"
// A propriedade textContent define ou retorna o conteúdo de texto do nó especificado e todos os seus descendentes.

console.log(novoItem)

// O método insertBefore() = insere um nó como filho, antes de um filho existente, que você especifica.
lista.insertBefore(novoItem, itens[0])