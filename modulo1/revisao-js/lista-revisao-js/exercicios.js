// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   let resultado = array.length
   return resultado
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let resultado = array.reverse()
    return resultado
  
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    function comparaNumeros(a, b){
        return a - b
    }
    array.sort(function(a, b) {
        return a - b;})
        return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let novoarray = []
  for (let index = 0; index < array.length; index++) {
      if(array[index] % 2 === 0){
          novoarray.push(array[index])
      }
      
  }
  return novoarray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novoarray = []
    let numeroPar

    for (let index = 0; index < array.length; index++) {
        if(array[index] % 2 === 0){
            numeroPar = Math.pow(array[index],2)
            novoarray.push(numeroPar)
           
        }
    }
 return novoarray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = -Infinity
  for(let i = 0;i < array.length; i ++ ){
      if(array[i]>maiorNumero){
          maiorNumero = array[i]
      }
     
  }
  return maiorNumero
} 

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let numeroMenor 
    let numeroMaior
    let divisivel
    let numDiferenca
    if(num1>num2){
        numeroMaior = num1
        numeroMenor = num2
    }else{
        numeroMaior = num2
        numeroMenor = num1
    }if(numeroMaior % numeroMenor === 0){
        divisivel = true
    }else{
        divisivel = false
    }
    numDiferenca = numeroMaior - numeroMenor

    const objeto = {
        maiorNumero: numeroMaior,
        maiorDivisivelPorMenor: divisivel,
        diferenca: numDiferenca
    }
return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for(let i = 0; numerosPares.length < n; i ++){
        if(i % 2 === 0){
        numerosPares.push(i)
    }
    }
  
return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if(ladoA === ladoB && ladoA === ladoC){
        return "Equilátero"
    }else if(ladoA === ladoB || ladoA === ladoC || ladoB === ladoC){
        return "Isósceles"
    }else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        return "Escaleno"

    }

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let novoArray = []
    let maior = Math.max(...array)
    let menor = Math.min(...array)
    let segundoMaior
    let segundoMenor

    array.splice(array.indexOf(maior))
    segundoMaior = Math.max(...array)
    novoArray.push(segundoMaior)

    for(let i = 0; i > menor; i ++){
        if(i < maior){
            segundoMenor = i
            }
    }novoArray.push(segundoMenor)
   

    return novoArray
    

}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {

    let chamada = (`Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`)
   return chamada
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

    const copiaPessoa = {...pessoa,
    nome: "ANÔNIMO",

    }

    return copiaPessoa
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let autorizadas = pessoas.filter((entra) => {
    if(entra.altura >= 1.5 && entra.idade > 14 && entra.idade < 60){
        return entra.altura, entra.idade
    } 
})
return autorizadas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let naoAutorizadas = pessoas.filter((naoentra) => {
        if(naoentra.altura < 1.5 || naoentra.idade <= 14 || naoentra.idade > 60){
            return naoentra.altura, naoentra.idade
        } 
    })
    return naoAutorizadas
    
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
       
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}