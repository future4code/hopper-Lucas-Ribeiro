import React from "react";
import styled from "styled-components";
import axios from "axios";

const Principal = styled.div`

display: flex;
align-items: center;
flex-direction: column;
padding-top: 20%;


`
const BotaoLista = styled.button`
  display: flex;
  margin-top: 2%;



`


function App() {
  return (
    <Principal>
      <button>Login:</button>

      <BotaoLista>Lista de viagens</BotaoLista>
    </Principal>
  );
}

export default App;
