import React from 'react';
import './App.css';

export class NovoComponente extends React.Component {
  render (){
  return (
    <div className = "App">

      <input placeholder='Qual o seu nome?'/>
      <input placeholder='Qual a sua idade?'/>
      <input placeholder='Qual o seu email?'/>


    </div>

  )
  }
}

export default NovoComponente;
