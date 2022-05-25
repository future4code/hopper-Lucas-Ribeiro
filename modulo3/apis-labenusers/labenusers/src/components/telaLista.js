import React from "react";
import axios from "axios";
import styled from "styled-components";



class telaLista extends React.Component {

    state = {
        listaUsuario: [],
        paginaAtual: "listaUsuario",
        name: ""
      };


    formarLista = () => {

        const body = {
            name: this.state.inputNome
        }

        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            
        headers:{

            Authorization: "lucas-ribeiro-hopper"

        }
    } )
    }

    render(){




        return(

            <div></div>
        )
    }
}

export default telaLista