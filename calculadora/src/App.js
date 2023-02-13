import './App.css';
import Btn from './components/Btn';
import Screen from './components/Screen';
import BtnClear from './components/BtnClear';
import Logo from './components/Logo';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input){
      setInput(evaluate(input));
    } else {
      alert('Por favor ingrese valores para realizar los cálculos.');
    }
  };

  return (
    <div className="App">
      <div className='wix-logo-contenedor'>
        <Logo 
        imagen='image-1.png'
        clase='wix-logo'
        alt='Logo de wix'/>
      </div>
      <div className='contenedor-calculadora'>
        <Screen input={input} />
        <div className='fila'>
          <Btn manejarClic={agregarInput}>1</Btn>
          <Btn manejarClic={agregarInput}>2</Btn>
          <Btn manejarClic={agregarInput}>3</Btn>
          <Btn manejarClic={agregarInput}>+</Btn>
        </div>
        <div className='fila'>
          <Btn manejarClic={agregarInput}>4</Btn>
          <Btn manejarClic={agregarInput}>5</Btn>
          <Btn manejarClic={agregarInput}>6</Btn>
          <Btn manejarClic={agregarInput}>-</Btn>
        </div>
        <div className='fila'>
          <Btn manejarClic={agregarInput}>7</Btn>
          <Btn manejarClic={agregarInput}>8</Btn>
          <Btn manejarClic={agregarInput}>9</Btn>
          <Btn manejarClic={agregarInput}>*</Btn>
        </div>
        <div className='fila'>
          <Btn manejarClic={calcularResultado}>=</Btn>
          <Btn manejarClic={agregarInput}>0</Btn>
          <Btn manejarClic={agregarInput}>.</Btn>
          <Btn manejarClic={agregarInput}>/</Btn>
        </div>
        <div className='fila'>
          <BtnClear 
          button='Clear'
          manejarClear={() => setInput('')} /> 
        </div>
      </div>
      
    </div>
  );
}

export default App;
