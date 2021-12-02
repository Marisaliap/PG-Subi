import './App.css'
import { useEffect, useState } from 'react'
import Comprar from './components/Comprar.jsx'
import axios from 'axios'

function App() {
  const [datos, setDatos] = useState("")

  useEffect(()=>{
    axios
    .get("http://localhost:3001/mercadopago")
    .then((dato)=>{
      setDatos(dato.data)
    })
    .catch(err => console.error(err))
  },[])


  const productos = [
    {title: "Producto 1", quantity: 5, price: 10.52},
    {title: "Producto 2", quantity: 15, price: 100.52},
    {title: "Producto 3", quantity: 6, price: 200}
  ]
  return (
    <div className="App">
      { !datos
        ? <p>Aguarde un momento....</p>
        : <Comprar productos={productos} data={datos}/>
      }
    </div>
  );
}

export default App;




//-------------------------------------------------------------------------------------

import { useEffect} from 'react'

export default function Comprar({ productos, data }){

 useEffect(()=>{
  const script = document.createElement('script');
  const attr_data_preference = document.createAttribute('data-preference-id')
  attr_data_preference.value = data.id

  script.src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
  script.setAttributeNode(attr_data_preference)


  document.getElementById('BtnMP').appendChild(script)

  return () =>{ document.getElementById('BtnMP').removeChild(script) }
 },[])

  return(
    <div>
      <form id='BtnMP'>

      <h4>Viaje</h4>


      <li key={i}>{producto.title} - {producto.price} - {producto.quantity}</li>



    </form>
   </div>
  )
}
