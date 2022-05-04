import './App.css';
import React from 'react';

export function App() {
  return (
    <div className="App">
      <div className='bloco-user'>
        <input type="text" className = "usuario" placeholder='usuário'/>
        <input type="text" className = "mensagem" placeholder='escreva sua mensagem'/>
        <button> Enviar </button>
      </div>


    </div>
  );
}



export default App;
