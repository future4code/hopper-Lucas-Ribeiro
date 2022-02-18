//Exercício 1

// a resposta : 10 e 50

//b resposta: R: Não pararece mensagem no console.

//Exercício 2

//a resposta = a função vai colocar a palavra cenoura em letra minúscula
//b resposta = I

//Exercícios de escrita de código:
//1
//a
function informacoesUsuario(){

    let nome = "Sou Lucas"
    let idade = "Tenho 37 anos"
    let cidade = "Moro em Porto Alegre"
    let profi = "sou jornalista"

    console.log(`${nome},${idade},${cidade},${profi}`)
}
    informacoesUsuario()

//b


function infoUsuario(nome,idade,cidade,profissao){

    let infos = (`Eu so ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)  
    return infos

}
    console.log(infoUsuario("Lucas", "37", "Porto Alegre", "Jornalista"))

//2
//a
function somarNumeros(numero, outroNumero){

    console.log(numero + outroNumero)

}
    somarNumeros(2,5)
//b
function compararNumeros(numero, outroNumero){

    let compara = numero >= outroNumero
    return compara

}
    console.log(compararNumeros(8, 9))
//c
function consultapar(num){

    let par = num % 2
    return par
}
    console.log(consultapar(4))

//d
let texto = prompt("insira um texto")
function mensagem(inserir){


    inserir = inserir.toUpperCase()

    console.log(texto.length, inserir)

}
    mensagem(texto)
//3

let num1 = prompt("insira um número")
let num2 = prompt("insira outro número")

function operacoesBasicas(numeroUm,numeroDois){

    console.log("Números inseridos", numeroUm, numeroDois)
    console.log("Soma", Number(numeroUm) + Number(numeroDois))
    console.log("Diferença", numeroUm - numeroDois)
    console.log("Multiplicação", numeroUm * numeroDois)
    console.log("Divisão",numeroUm / numeroDois )

}
    operacoesBasicas(num1, num2)