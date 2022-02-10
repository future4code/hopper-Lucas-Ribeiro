//Questão 1 - imprime (10) e depois (10 5)
//Questão 2 - imprime (10 10 10)
//Questão 3 - horasTrabalhadas, salarioDiario

let nome
let idade

console.log(typeof nome, idade)
// será impresso indefinida por que a variável ainda não foi declarada

nome = prompt("Qual é seu nome?")
console.log(typeof nome)
idade = prompt("Qual sua idade?")
console.log(typeof idade)
// foi impresso as duas variáveis como string.

console.log("Olá!", nome,",", "Você tem", idade, "anos")

let pergunta1 = "você mora fora do Brasil?"
let pergunta2 = "você estuda na Labenu?"
let pergunta3 = "você é brasileiro?"

let resposta1 = "não"
let resposta2 = "sim"
let resposta3 = "sim"

console.log(pergunta1, resposta1)
console.log(pergunta2, resposta2)
console.log(pergunta3, resposta3)

let a = 10
let b = 25
let c

c = a
a = b
b = c

console.log("o novo valor de a é:",a,"o novo valor de b é:",b)

//Desafio


let primeiroNumero =  prompt("insira um número")
let segundoNumero = prompt("insira outro número")
let x = Number(primeiroNumero) + Number(segundoNumero)
let y = Number(primeiroNumero) * Number(segundoNumero)

console.log("o valor de x é:",x, "o valor de y é:",y)
