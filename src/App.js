//import Buld from './components/Buld'
import ProductForms from './components/ProductForms'
import ProducList from './components/ProducList'
import Ejercicios from './components/Ejercicios';
import FormEjercicio from './components/FormEjercicio'
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
const initialEjercicio=[
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


const removeProduct=id=>{
  const productsFiltered = products.filter(product=>product.id !== id )
  setProducts(productsFiltered)
}

const[productSelected,setProductSelected]=useState(null)

const selectProduct=product=>{
setProductSelected(product)
}

/////////////////7////////////////////////////////////////
const [ejercicios,setEjercicios]=useState(initialEjercicio)
 const addEjercicio = (newItem) =>{
   setEjercicios([...ejercicios,newItem])

 }
 const removeItem=id=>{
 const itemFilter= ejercicios.filter(ejercicio=>ejercicio.id!==id)
  setEjercicios(itemFilter)
 }
const[itemselected,setItemSelected]=useState(null)

const selectItem= ejercicio =>{
  setItemSelected(ejercicio)

}
  return (
    <div >
      
      <ProductForms   addProducts={addProducts} productSelected={productSelected} />
      <ProducList products={products}
        removeProduct={removeProduct} 
        selectProduct={selectProduct}/>
      <FormEjercicio addEjercicio={addEjercicio} selectItem={selectItem}/>
      <Ejercicios  ejercicios={ejercicios} removeItem={removeItem} selectItem={selectItem}/>
    </div>
  );
}

export default App;

