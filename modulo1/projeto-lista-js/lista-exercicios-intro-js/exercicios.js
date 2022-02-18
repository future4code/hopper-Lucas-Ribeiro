// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
    let altura = prompt (Number ())
    let largura = prompt (Number())
    
    console.log(altura * largura)
}
// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Insira o ano atual"))
  let anoNascimento  = Number(prompt("Insira seu ano de nascimento"))
  console.log(anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura*altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt()
  let idade = prompt(Number)
  let email = prompt()

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}


// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  let cor1 = prompt()
  let cor2 = prompt()
  let cor3 = prompt()

  let array = [cor1, cor2, cor3]

  console.log(array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1 > string2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let posInic = array[0]
  let posFinal = array[array.length -1]
  array[0] = array[array.length-1]
  array[array.length-1] = posInic

  return array


}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = prompt(Number)
  let anoNascimento = prompt(Number)
  let anoEmissao = prompt(Number)
  let idadeUsr = anoAtual - anoNascimento
  let idadeRg = anoAtual - anoEmissao
  
  console.log((idadeUsr <= 20 && idadeRg >= 5) || (idadeUsr > 20 && idadeUsr <= 50 && idadeRg >=10) || (idadeUsr > 50 && idadeRg >= 15))
}
  

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  ano % 400 === 0 || ano % 4 === 0 && ano % 100 === 0 && ano % 400 === 1
  return ano


}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = prompt("Você tem mais de 18 anos?")
  let ensino = prompt("Você possui ensino médio completo?")
  let horario = prompt("Você possui disponibilidade exclusiva durante os horários do curso?")

  console.log((idade === "sim")&&(ensino === "sim") && (horario === "sim"))

}