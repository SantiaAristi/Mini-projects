import './App.css';
import Boton from './components/Btn';
import Counter from './components/Counter';
import logo from './images/image-1.png';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }


  return (
    <div className="App">
      <div className='netflix-logo-contenedor'>
        <img 
        className='netflix-logo'
        src={logo}
        alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-principal'>
        <Counter numClics={numClics} />
        <Boton 
          texto='Clic'
          esBotonDeClic={true} 
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
