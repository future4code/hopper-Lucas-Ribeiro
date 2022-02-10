/*Exercício 1 
a. false
b. false
c. true
d. boolean
*/

/*Exercício 2 

Vai apenas juntar os dois valores que o usuário colocou sem fazer a soma
em forma de cálculo. Para calcular tem que acrescentar o const soma = Number(primeiroNumero)+
Number(segundoNumero)*/

//Exercícios de escrita de código:
//1.

let idade = Number(prompt("qual a sua idade?"))
let idadeAmizade = Number(prompt("qual a idade do seu melhor amigo(a)?"))
console.log("sua idade é maior do que a do seu melhor amigo(a)?", idade>idadeAmizade)
console.log("a diferença de idade é:", idade - idadeAmizade)

//2.

const numero = Number(prompt("insira um número par"))
console.log(numero % 2)
// o resultado sempre é 0. Se inserir número ímpar o resultado sempre é 1.

//3.

let anoUsuario = Number(prompt("Qual a sua idade?"))

let mesAtual = 2
let diadoAno = 41
let horaPorano = 8760
let horaAtual = 13
let hora = (24 * diadoAno) - horaAtual
let mesesVividos = (anoUsuario * 12) + mesAtual
let diasVividos = (anoUsuario * 365) + diadoAno
let horasVividas = (anoUsuario * horaPorano) + hora

console.log("Você tem", mesesVividos, "meses")
console.log("Você tem", diasVividos, "dias")
console.log("Você tem", horasVividas, "horas")

//4.
let primeiroNum = Number(prompt("insira um número"))
let segundoNum = Number(prompt("insira outro número"))
console.log("o primeiro número é maior que o segundo?", primeiroNum > segundoNum )
console.log("o primeiro número é igual ao segundo?", primeiroNum === segundoNum)
console.log("o primeiro número é divisivel pelo segundo?", primeiroNum % segundoNum === 0)
console.log("o segundo número é divisível pelo primeiro", segundoNum % primeiroNum === 0)

