import React from "react";
import styled from "styled-components";
import axios from "axios"

const BoxPrincipal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const BoxSuperior = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
width: 18%;
`
const Imagem = styled.img`

width: 18%;
height: 25%;

`
const BoxCurtir = styled.div`
  display: flex;
  flex-direction: row;

`
const BotaoCurtir = styled.button`
  background-color: green;
  color: white;


`
const BotaoNegar = styled.button`
  background-color: red;
  color: white;


`

function App() {
  return (
    <BoxPrincipal>
      <BoxSuperior>
          <h2>Astromatch</h2>
          <button>Matches</button>  
      </BoxSuperior>
      <Imagem>
          
      </Imagem>
      <BoxCurtir>
        <BotaoNegar>Não</BotaoNegar>
        <BotaoCurtir>Sim</BotaoCurtir>
      </BoxCurtir>
    </BoxPrincipal>
  );
}

export default App;
