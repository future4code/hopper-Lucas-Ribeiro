import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


const Principal = styled.div`

display: flex;
align-items: center;
flex-direction: column;
padding-top: 20%;

`
const BotaoLogin = styled.button`
  display: flex;
  margin-top: 2%;
`

const BotaoLista = styled.button`
  display: flex;
  margin-top: 2%;

`

function HomePage() {



  return (
    <Principal>
      <BotaoLogin>Login:</BotaoLogin>

      <BotaoLista>Lista de viagens</BotaoLista>
    </Principal>
  );
}

export default HomePage;
