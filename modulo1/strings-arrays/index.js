/* Exercício 1.
a) imprime indefinido pois não há um valor para o array
b) imprime null.
c) imprime 11 que é a quantidade de itens do array.
d) imprime o que está posição zero do array. 3
e) imprime um array com a inclusão do 19 na posição 1
f) imprime o valor que está posição 6 do array. 9

Exercício 2.

Resposta: "SUBI NUM ÔNIBUS EM MIRROCOS 27"
*/

//Exercício de escrita de código

//1
let nome = prompt("qual seu nome?")
let email = prompt("qual seu email?")

console.log("O email",email,"foi cadastrado com sucesso! Seja bem-vindo(a)!",nome)

//2
let comidasPreferidas = ["pizza","lasanha","churrasco","peixe","feijoada"]
//a
console.log(comidasPreferidas)
//b
console.log("Estas são minhas comidas preferias", "\n", comidasPreferidas[0], "\n", comidasPreferidas[1], "\n",
comidasPreferidas[2], "\n", comidasPreferidas[3], "\n", comidasPreferidas[4])
//c
let comidaUsuario = prompt("Qual sua comida preferida?")

console.log(comidasPreferidas[1] = comidaUsuario)

3//
let listaDetarefas = []
let tarefa1 = listaDetarefas.push(prompt("tarefa 1"))
let tarefa2 = listaDetarefas.push(prompt("tarefa2"))
let tarefa3 = listaDetarefas.push(prompt("tarefa3"))

console.log(listaDetarefas)

let indice = prompt("Qual a tarefa já realizou? 0, 1 ou 2?")
listaDetarefas.splice(indice,1)
console.log(listaDetarefas)
