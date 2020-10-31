alert("Introdução ao Node(nó) [DOM].")
// O DOM é usado pelo navergador para representar páginas web.
// .document = Ele é responsavel por dá acesso a toda arvore DOM ao navegador.

console.log(
    // O  document.documentElement = retorna o Elemento que é o elemento raiz do documento (por exemplo, o elemento <html> para documentos HTML).
    document.documentElement
)

console.log(
    // A propriedade lastChild = retorna o último nó filho do nó especificado, como um objeto Node.
    document.documentElement.lastChild
    // Ele vai retorna o body por que ele é o ultimo filho do HTML.
)

console.log(
    // A propriedade firstChild = retorna o primeiro nó filho do nó especificado, como um objeto Node.
    document.documentElement.firstChild
    // Ele vai retorna o head por que ele é o primeiro filho do HTML.
)

console.log(
    // A propriedade childNodes = retorna uma coleção de nós filhos de um nó, como um objeto NodeList.
    document.body.childNodes
    // Vai criar um NodeList com todos elementos filhos do nó(tag) selecionado.
)