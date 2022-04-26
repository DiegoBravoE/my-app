import logo from './logo.svg';
import './App.css';

function App() {

  const user={
      nombre:"Diego Bravo",
      Edad:38,
      PeliculaFavorita:"n/a",
      Musica:"Rock"
  }
  return (
    <div className="App">
     <ul>
       <li><b> NOMBRE: </b>{user.nombre} </li>
       <li><b> EDAD:</b>{user.Edad} Años</li>
       <li><b>PELICULA FAVORITA:</b>{user.PeliculaFavorita} </li>
       <li><b>MUSICA FAVORITA:</b>{user.Musica} </li>
     </ul>
      
    </div>
  );
}

export default App;
