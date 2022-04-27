
import AboutMe from './components/AboutMe.js'
import Card from'./components/Card.js';

import './App.css';

function App() {

 
  return (
    
    <div className="contenedor">

      <AboutMe />
      <Card title="Hobbies"item1="peliculas"item2="Pool con amigos"item3="Musica"background="tomato"/>
      <Card title="En mi tiempo libre"item1="correr"item2="Futbol"item3="pesca"background="royalblue"/>
      <Card title="Comida Favorita"item1="Pizza"item2="Asado"item3="Milanesa"background="pink"/>
      <Card title="Mi Stack "item1="Html"item2="Css"item3="Javascript"background="yellowgreen"/>
    </div>
  );
}

export default App;
