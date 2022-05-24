import React from "react";
import axios from "axios";




class IntegracaoApi extends React.Component {

    onchangeInputNome = (event) => {
        this.setState({inputNome: event.target.value})

    }

    onchangeInputEmail = (event) => {
        this.setState({inputEmail: event.target.value})

    }

    state = {
        usuario: [],
        inputNome:"",
        inputEmail:""
    }
    
   

    pegarDados = () => {

        const body = {
            name: this.state.inputNome,
            email: this.state.inputEmail
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
            headers: {
        
                Authorization: "lucas-ribeiro-hopper"
            }
        })
        .then(()=>{

            this.setState({inputNome: ''})
            this.setState({inputEmail: ''})
            alert("Novo cliente inserido")

        })
        .catch((error)=>{

            alert("erro usuário não inserido")
            console.log(error.response.data)

        })

  


    }

    render(){

        const list = this.state.usuario.map((item)=>{

            return <h3>{item.name}</h3>

        } )

        
        return(
                
             <div>
                <input value = {this.state.inputNome} onChange = {this.onchangeInputNome} placeholder="nome"/>
                <input value = {this.state.inputEmail} onChange = {this.onchangeInputEmail} placeholder="email"/>
                <button onClick={this.pegarDados}>Criar Ususário</button>
                <button>Trocar tela</button>
                <div>
                    {list}
                </div>
            </div>
        )
    }
}

export default IntegracaoApi