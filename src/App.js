import logo from './logo.svg';
import Componente1 from'./components/Componente1.js';
import Hobbies from'./components/Hobbies.js';
import Pasatiempo from'./components/Pasatiempo.js';
import ComidaFav from'./components/ComidaFav.js';
import MiMstack from'./components/MiMstack.js';
import './App.css';

function App() {

  const user={
    nombre:"Diego Bravo",
    Edad:38,
    PeliculaFavorita:"Interestelar",
    Musica:"Rock"
  }
  return (
    
    <div className="contenedor">

      
     <Componente1/>
     <Hobbies/>
     <Pasatiempo/>
     <ComidaFav/>
     <MiMstack/>
    </div>
  );
}

export default App;
