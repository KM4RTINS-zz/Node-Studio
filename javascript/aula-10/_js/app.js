alert("Introdução ao appendChild e removeChild")
// https://www.w3schools.com/jsref/met_node_appendchild.asp
// https://www.w3schools.com/jsref/met_node_removechild.asp


// Cria um novo elemento de parágrafo e adiciona-o ao final do documento.

// Passando um elemento criado para uma variável.
var p = document.createElement("p")

// Passando um value (conteúdo) para meu elemento.
p.innerHTML = "Olá pessoal!"

var img = document.createElement("img")

// Passando atributos para o elemento criado.
img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"

// Exibindo a variável no console.
console.log(p)
console.log(img)


// Passando um elemento criado para o final do documento.
document.getElementById("conteudo").appendChild(p)
document.getElementById("conteudo").appendChild(img)
// appendChild() = O anexa um nó como o último filho de um nó.

// Removendo um elemento do meu documento.
document.getElementById("conteudo").removeChild(p)
document.getElementById("conteudo").removeChild(img)
// removeChild() = O método remove um nó filho especificado do elemento especificado.

/* 
Node
O node ou nó é justamente esse elemento que estou falando, é um nó no modelo. É um elo desses dados todos interligados. 
Uma tag é um nó, mas dentro desse nó existem outros nós, existem os atributos só para citar um exemplo. Dentro dos atributos existem outros nós.
E assim vai. Um nó só pode ser terminador quando ele tiver uma informação muito simples. Enquanto precisar de uma estrutura, uma coleção de dados para guardar o nó o DOM vai depender de outros nós.
*/

