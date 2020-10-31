alert("Tipos de Array")

// O objeto Array do JavaScript é um objeto global usado na construção de 'arrays': objetos de alto nível semelhantes a listas.

// É uma estrutura de dados que armazena uma coleção de elementos.

var meuArrey = [ // Para criar Array usamos conchetes.
    "notebook",  // Elemento-no-índice[0]
    "mouse",     // Elemento-no-índice[1]
    1500,        // Elemento-no-índice[2]
    true,        // Elemento-no-índice[3]
   
    {  // Objeto-no-índice[4]
        memoria: "16gb",
        marca: "Intel"
    }, // Para criar Objetos usamos chaves.
    
    [  // Array-no-índice[5]
        "netebook", 
        {
            memoria: "8gb",
            marca: "AMD"
        } 
    ]  // Para criar um Array dentro de um Array.
]

// Um Array pode receber vários valores e de tipos de dados diferentes.
console.log(meuArrey) 

// Tamando do Array.
console.log(meuArrey.length) // Quantidade de itens = 5

// Retornar um item especifico do Array.
console.log(meuArrey[0]) 
console.log(meuArrey[4]) 

// Retornar um valor de dentro do Objeto.
console.log(meuArrey[4].memoria) 

// Retonar um item de um Array que está dentro de outro Array.
console.log(
    meuArrey[5][0], // Retornando um item de dentro de dois Array.
    meuArrey[5][1].memoria  // Retornando um valor de um Objeto que está dentro dos dois Array.
) 


