//Exercícios de interpretação de código

//1 O que o código abaixo está fazendo? Qual o resultado impresso no console?
/*let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)*/

//O Código faz um contador de 0 a 5 e soma essa quantidade dando resultado 10.

//2 Leia o código abaixo:
/*const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}*/
//a) Vai imprimir todos os números maiores que 18 que estão dentro do array.
//b) Sim, poderia ser usado
//for (let numero of lista){
    //numero = lista.length
          //console.log(numero)
    //}

//3 
/*const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}*/
//Resultado 
//*
//**
//***
//****

//Exercícios de escrita de código
//1
let quantBichos = prompt("Quantos bichos de estimação você tem?")

if (quantBichos <= 0) {
    console.log("Que pena! Você pode adotar um pet!")
        
}else{
  let array = []
  for(let i = 0; i < quantBichos; i++ ){
  let nomesPets = prompt("digite o nome do pet")
  array.push(nomesPets)}
  console.log(array)
}
//2

let arrayOriginal = [100,200,30,40,51]

function imprimir(){
  console.log(arrayOriginal)
}

imprimir()

function dividir(){
  let novoArray = []
  for ( let i = 0; i < arrayOriginal.length; i++){
    novoArray.push(arrayOriginal[i]/10)
  }console.log(novoArray)
}
dividir()

function numPares(){
  let novoArray = []
  for(let i = 0; i < arrayOriginal.length; i++){
    if (arrayOriginal[i] % 2 === 0){
    novoArray.push(arrayOriginal[i])}

  }console.log(novoArray)
}
numPares()

function elementos(){
  let novoArray = []
  for (let i = 0; i < arrayOriginal.length; i++) {
    novoArray.push("O elemento do índex",i,"é:",arrayOriginal[i])
  }console.log(novoArray)
 
}
elementos()

function maiorMenor(){
  let maior = 0
  let menor = 300
  for(let num of arrayOriginal){
    if(num > maior){
      maior = num
    }
    if(num < menor){
      menor = num

    }
    
    
}console.log ("O número maior é", maior, "O menor número é", menor)
}
maiorMenor()