
import React from 'React';
import IntegracaoApi from './components/integracaoApi.js';
import telaLista from './components/telaLista.js';


    
export default class App extends React.Component() {

  state = {
    paginaAtual: "cadastro"

  };

  trocarPagina =()=>{
    if(this.state.paginaAtual === "cadastro"){
      this.setState({paginaAtual: "listaUsuario"})
    }else{
      this.setState({paginaAtual: "cadastro"})

    }
  }

  render(){
    return(
      <div>
        <button onClick={this.trocarPagina}>Trocar de tela</button>
        {this.state.paginaAtual === "cadastro" ? <IntegracaoApi /> : <telaLista />}
      </div>
    )
  }
}