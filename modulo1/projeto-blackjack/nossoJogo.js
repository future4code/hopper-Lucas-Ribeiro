/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
  

    function boasVindas(){
       console.log("Boas vindas ao jogo Blackjack!")
    }
    boasVindas()
   
    function novaRodada(){
       let confirmarRodada = confirm ("Quer iniciar uma nova rodada?")

      if (confirmarRodada){
         let cartaUser1 = comprarCarta()
         let cartaUser2 = comprarCarta()
         let carta1Pc = comprarCarta()
         let carta2Pc = comprarCarta()
         let pontos = cartaUser1.valor + cartaUser2.valor
         let pontosPc = carta1Pc.valor + carta2Pc.valor

         console.log(`Usuário - cartas:${cartaUser1.texto}${cartaUser2.texto}- pontuação ${pontos}`)
         console.log(`Computador - cartas:${carta1Pc.texto}${carta2Pc.texto}- pontuação ${pontosPc}`)
         if (pontos === pontosPc){
            console.log("empate!")
         }else if(pontos > pontosPc){
            console.log("O Usuário ganhou!")
         }else if(pontos < pontosPc){
            console.log("O Computador ganhou!")}
         
      }else{
         console.log("O jogo acabou")

      }

    }
   novaRodada()
   
   