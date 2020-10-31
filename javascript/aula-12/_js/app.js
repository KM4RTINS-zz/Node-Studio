alert("Intro ao nodeName, nodeType, nodeValue")
// O DOM é usado pelo navergador para representar páginas web.
// .document = Ele é responsavel por dá acesso a toda arvore DOM ao navegador.

console.log(
    // A propriedade childNodes = retorna uma coleção de nós filhos de um nó, como um objeto NodeList.
    document.body.childNodes
    // Vai criar um NodeList com todos elementos filhos do nó selecionado. 
)

var lista =  document.body.childNodes
console.log(lista.length) // 8 nós

// Acessando um nó do meu documento através do índice.
console.log(lista[3])

// Acessando o conteúdo do nó usando a propriedade innerHTML.
console.log(lista[3].innerHTML)

// A propriedade nodeName = retorna o nome do nó especificado.
console.log(lista[1].nodeName)


console.log(
    // A propriedade nodeType = retorna o tipo de nó, como um número, do nó especificado.
    lista[5].nodeType 
    // Se o nó for um nó de elemento, a propriedade nodeType retornará 1.
)

console.log(    
    // lista[].nodeType 
    // Se o nó for um nó de atributo, a propriedade nodeType retornará 2.
)

console.log(
    lista[0].nodeType    
    // Se o nó for um nó de texto, a propriedade nodeType retornará 3.
)

console.log(
    lista[1].nodeType
    // Se o nó for um nó de comentário, a propriedade nodeType retornará 8.
)


// A propriedade nodeValue = define ou retorna o valor do nó especificado.
console.log(
    // navegando entre os elementos filhos para mostrar o value(conteúdo) especifico. 
    lista[5].childNodes[3].childNodes[0].nodeValue
)

