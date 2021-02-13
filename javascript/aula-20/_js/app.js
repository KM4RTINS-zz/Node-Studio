alert("Objetos em JavaScript")

// Um Objeto é uma coleção de propriedades, e uma propriedade é uma associação ente um nome (ou chave) e um valor. Um valor de propriedade pode ser uma função, que é então considerada um método do Objeto.

let pessoa = { // Chaves indica um Objeto em Js
    nome: "Igor", // Propriedade: valor
    idade: 21,
    feliz: true,
    pets: [ // Um Objeto pode ter um Array.
        "Cachorro",
        "Gato"
    ],
    carros: { //Objeto com vários Objetos.
        camaro: { 
            cor: "Amarelo",
            motor: "1.3 turbo",
            ano: "2008"
        },
        uno: {
            cor: "Vermelho",
            motor: "1.8",
            ano: "2019"
        }
    },
    andar: function(km){ // Funções dentro de Objetos
        alert(pessoa.nome+" você andou "+km+"km! ")
    }
}
// Objeto pode ter valores diferente: string, number, boolean...

// Atribuindo novos valores ao Objeto.
pessoa.nome = "José" // Rescrevendo o nome.

// Acessando o valor de uma propriedade específica. 
console.log(pessoa.nome)

// Acessando algum item dentro do Array. 
console.log(pessoa.pets[1]) // cachorro
// Usando o índice para acessar o item dentro do Array.

// Atribuindo novos valores ao Objeto.
pessoa.pets[0] = "Peixe" // Rescrevendo um item dentro do Array.
console.log(pessoa.pets[0])

// Acessando valores dentro de Objetos. 
console.log(pessoa.carros.camaro.cor)
console.log(pessoa.carros.uno.motor)

// Acessando o metodo do Objeto Pessoa
pessoa.andar(20)
