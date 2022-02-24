/*1. Leia o código abaixo:
    
    ```jsx
    const respostaDoUsuario = prompt("Digite o número que você quer testar")
    const numero = Number(respostaDoUsuario)
    
    if (numero % 2 === 0) {
      console.log("Passou no teste.")
    } else {
      console.log("Não passou no teste.")
    }
    ```
    
    a) Explique o que o código faz. Qual o teste que ele realiza? Verifica se o resto da divisão por 2 é 0. Se for zero passou no teste
    se não for, não passou no teste
    
    b) Para que tipos de números ele imprime no console "Passou no teste"? Números divisiveis por 2
    
    c) Para que tipos de números a mensagem é "Não passou no teste"? Números onde o resto da divisão não é zero
    
2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
    
    ```jsx
    let fruta = prompt("Escolha uma fruta")
    let preco
    switch (fruta) {
      case "Laranja":
        preco = 3.5
        break;
      case "Maçã":
        preco = 2.25
        break;
      case "Uva":
        preco = 0.30
        break;
      case "Pêra":
        preco = 5.5
        break; // BREAK PARA O ITEM c.
      default:
        preco = 5
        break;
    }
    console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
    ```
    
    a) Para que serve o código acima? Informar a fruta escolhida e o preço dela.
    
    b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? O preço da fruta maça é R$ 2.25
    
    c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
                Indefinido
3. Leia o código abaixo:
    
    ```jsx
    const numero = Number(prompt("Digite o primeiro número."))
    
    if(numero > 0) {
      console.log("Esse número passou no teste")
    	let mensagem = "Essa mensagem é secreta!!!"
    }
    
    console.log(mensagem)
    ```
    
    a) O que a primeira linha está fazendo? pegando um número do usuário
    
    b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
        Se 10 Esse número passou no teste Essa mensagem é secreta!!! . Se fosse -10 não imprime nada
    
    c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

        Só vai imprimir se a condição do número for maior que 0.
    
   */
   //Exercícios de escrita de código
   //1a

    let idade = Number(prompt("insira a sua idade"))

   function habilitacao(){

    if (idade >= 18){

        console.log("você pode dirigir")
    }else{
        console.log("você não pode dirigir")
    }

   }
    habilitacao()
//2
   let horario = prompt("insira M (matutino) ou V (Vespertino) ou N (Noturno)")

   function horarioEstudo(){

    if (horario === "M"){

        console.log("bom dia")
    }else if ( horario === "V"){
        console.log("boa tarde")
    }else{
        console.log("boa noite")
    }

   }
   horarioEstudo()

//3
let horario2 = prompt("insira M (matutino) ou V (Vespertino) ou N (Noturno)")
switch (horario2){
    case "M":
        console.log("bom dia")
        break;
    case "V":
        console.log("boa tarde")
        break;
    default:
        console.log("boa noite")
        break;
}

//4

let filmeGenero = prompt("Qual o genero do filme?")
let precoIngresso = Number(prompt("qual o preço do ingresso?"))

function consultarFilme(){
    if (filmeGenero === "fantasia" && precoIngresso < 15){
        console.log("bom filme")
    }else{
        console.log("escolha outro filme")
    }

}
consultarFilme()

//DESAFIOS
//1
let filmeGenero2 = prompt("Qual o genero do filme?")
let precoIngresso2 = Number(prompt("qual o preço do ingresso?"))

function consultarFilme2(){
    if (filmeGenero2 === "fantasia" && precoIngresso2 < 15){
        let lanche = prompt("qual lanche vai comprar?")
        console.log("bom filme", "aproveite o(a) seu(sua)", lanche )
    }else{
        console.log("escolha outro filme")
    }

}
consultarFilme2()
//2

let nome = prompt("Insira nome completo")
let tipoDejogo = prompt("Insira (IN) indica internacional; ou (DO) indica doméstico;")
let etapadojogo = prompt("Insira (SF) indica semi-final; (DT) indica decisão de terceiro lugar; ou (FI) indica final")
let categoria = Number (prompt("Insira a categoria 1,2,3 ou 4"))
let quantIngressos = Number (prompt("Quantos ingressos?"))
let valor
let valorTotal 
let tabelaValorSF = [1320, 880, 550, 220]
let tabelaValorDT = [660, 440, 330, 170]
let tabelaValorFI = [1980, 1320, 880, 330]
let converterMoeda = false


function calculo(){
    console.log("---Dados da Compra---")
    console.log("Nome:",nome)
    if (tipoDejogo === "IN"){
        converterMoeda = true
        console.log ("Tipo de jogo: Internacional")
    }else if(tipoDejogo === "DO"){
        console.log("Tipo de jogo: Nacional")
    }
    if (etapadojogo === "SF" && categoria === 1){
        valor = tabelaValorSF[0]
        console.log("Etapa jogo: Semi-Final")

    }else if(etapadojogo === "SF" && categoria === 2){
        valor = tabelaValorSF[1]
        console.log("Etapa jogo: Semi-Final")

    }else if(etapadojogo === "SF" && categoria === 3){
        valor = tabelaValorSF[2]
        console.log("Etapa jogo: Semi-Final")

    }else if(etapadojogo === "SF" && categoria === 4){
        valor = tabelaValorSF[3]
        console.log("Etapa jogo: Semi-Final")

    }else if(etapadojogo === "DT" && categoria === 1){
        valor = tabelaValorDT[0]
        console.log("Etapa jogo: Decisão Terceiro Lugar")
    }else if(etapadojogo === "DT" && categoria === 2){
        valor = tabelaValorDT[1]
        console.log("Etapa jogo: Decisão Terceiro Lugar")

    }else if(etapadojogo === "DT" && categoria === 3){
        valor = tabelaValorDT[2]
        console.log("Etapa jogo: Decisão Terceiro Lugar")
    
    }else if(etapadojogo === "DT" && categoria === 4){
        valor = tabelaValorDT[3]
        console.log("Etapa jogo: Decisão Terceiro Lugar")

    }else if(etapadojogo === "FI" && categoria === 1){
        valor = tabelaValorFI[0]
        console.log("Etapa jogo: Final")

    }else if(etapadojogo === "FI" && categoria === 2){
        valor = tabelaValorFI[1]
        console.log("Etapa jogo: Final")

    }else if(etapadojogo === "FI" && categoria === 3){
        valor = tabelaValorFI[2]
        console.log("Etapa jogo: Final")

    }else if(etapadojogo === "FI" && categoria === 4){
        valor = tabelaValorFI[3]
        console.log("Etapa jogo: Final")
    } 
    if (converterMoeda){
        valorTotal = Number(valor) * quantIngressos * 4.10
    }else{
    valorTotal = Number(valor) * quantIngressos
    }
    console.log("Categoria:", categoria)
    console.log("Quantidade de ingressos:", quantIngressos)
    console.log("---Valores---")
    console.log("Valor ingresso:",valor, "reais")
    console.log("Valor total:", valorTotal, "reais")
}
calculo()
