alert("Intro ao getAttribute, setAttribute, removeAttribute")
// O DOM é usado pelo navergador para representar páginas web.
// .document = Ele é responsavel por dá acesso a toda arvore DOM ao navegador.

// O método getAttribute() = retorna o valor do atributo com o nome especificado de um elemento.
document.getElementById("btn-get").addEventListener("click", function(){
    var value = document.getElementById("title").getAttribute("class")
    document.getElementById("class").innerHTML = value
})


// O método addEventListener() = anexa um manipulador de eventos ao elemento especificado.
document.getElementById("btn-set").addEventListener("click", function(){
    document.getElementById("title").setAttribute("class", "red")
    // O método setAttribute() = adiciona o atributo especificado a um elemento e fornece o valor especificado.
})


// O método removeAttribute() = remove o atributo especificado de um elemento.
document.getElementById("btn-remove").addEventListener("click", function(){
    document.getElementById("title").removeAttribute("class")
})