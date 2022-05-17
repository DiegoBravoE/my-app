//import Buld from './components/Buld'
import ProductForms from './components/ProductForms'
import ProducList from './components/ProducList'
import Ejercicios from './components/Ejercicios';
import './App.css';

function App() {

const products=[{
  id:1,
  name:"jabon",
  category:"higiene",
  precio:2,
  isAvailable:false
},
  {
    id:2,
    name:"galaxy",
    category:"tecnology",
    precio:200,
    isAvailable:true
  }


]
const ejercicios=[
  {
    id:1,
    titulo:"Hacer el entregable",
    descripcion:"Hacer el trabaajo practico de react",
    completado:false
  }



]


  return (
    <div >
      
      <ProductForms/>
      <ProducList products={products}/>
      <Ejercicios  ejercicios={ejercicios}/>
    </div>
  );
}

export default App;

