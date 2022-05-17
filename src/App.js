//import Buld from './components/Buld'
import ProductForms from './components/ProductForms'
import ProducList from './components/ProducList'
import Ejercicios from './components/Ejercicios';
import{useState} from 'react'
import './App.css';

function App() {

const initialProducs=[{
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
    descripcion:"Hacer el trabajo practico de react",
    isAvailable:false
  }



]
const [products,setProducts]=useState(initialProducs)

   const addProducts=(producItem)=>{
     setProducts([...products,producItem])

   }


const removeProduct=(name)=>{
  console.log(name);
}

   
  return (
    <div >
      
      <ProductForms   addProducts={addProducts}/>
      <ProducList products={products}  removeProduct={removeProduct}/>
      <Ejercicios  ejercicios={ejercicios}/>
    </div>
  );
}

export default App;

