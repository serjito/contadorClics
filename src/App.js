import './App.css';
import Boton from './componentes/Boton';
import freeCodeCampLogo from './imaganes/freecodecamp-logo.png'
import './hojas-estilo/Boton.css'
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  const reiniciarContador = () => {
    setNumClics(0);
  };



  return (
    <div className="App">
      <div className='freecodecamp-logo-container'> 
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='logo de freeCodeCamp'  
          />
      </div>  
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}
        />
        <Boton
          texto='Reiniciar'
          esBotonClic={false}
          manejarClic={reiniciarContador}
        />
      </div>   
    </div>
  );
}

export default App;
