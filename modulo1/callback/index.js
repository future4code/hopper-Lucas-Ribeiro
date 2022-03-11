//Exercícios de interpretação de código
//1
//a) O que vai ser impresso no console? Imprime os itens do objeto, o índice de cada um deles e o array inteiro com todos os objetos.

//2
//a) O que vai ser impresso no console? Imprime um array só com os nomes, sem apelidos.

//3
//a) O que vai ser impresso no console? O código filtrou para não imprimer a linha contendo "Chijo".

/*- **Exercícios de escrita de código**
    1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
    realize as operações pedidas nos itens abaixo utilizando as funções de array 
    **map** e **filter:**

    const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"}, */

//a) Crie um novo array que contenha apenas o nome dos doguinhos

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
]

const novoArray = pets.map((item, index, array) => {
        return item.nome
    })
    console.log(novoArray)

//b) Crie um novo array apenas com os cachorros salsicha

const novoArraySalch = pets.filter((item, index) => {
    return item.raca === "Salsicha"
    })
console.log(novoArraySalch)

/*c)Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!" */

const novoArrayPood = pets.filter((item, index) => {

    return item.raca === "Poodle"
    
    
})
console.log(novoArrayPood)

//2.Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]
//a) Crie um novo array que contenha apenas o nome de cada item

const itemNome = produtos.map((item, index) => {

    return console.log(item.nome)
})


//b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

const itemNomePreco = produtos.map((item, index) => {
    let desconto = (item.preco * 5 / 100)
    let precoVenda = item.preco - desconto
    return console.log("   ",item.nome,"- preço com desc", precoVenda)
})

//c)  Crie um novo array que contenha apenas os objetos da categoria Bebidas


const itemBebidas = produtos.filter((item, index) => {

    return item.categoria === "Bebidas"
    
})
console.log(itemBebidas)

//d)  Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const itensYpe = produtos.filter((item) => {

   return item.nome.includes("Ypê")
})
console.log(itensYpe)

//e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
//Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const itensYpeCompre = produtos.filter((item) => {

    if (item.nome.includes("Ypê")){
        console.log(`Compre ${item.nome} por ${item.preco}` )
    }
 })
