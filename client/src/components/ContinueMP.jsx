import { useEffect} from 'react'

export default function Continue({ trip, data }){

 useEffect(()=>{
  const script = document.createElement('script');
  const attr_data_preference = document.createAttribute('data-preference-id')
  attr_data_preference.value = data.id

  script.src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";
  script.setAttributeNode(attr_data_preference)


  document.getElementById('BtnMP').appendChild(script)

  
 },[])

  return(
    <div>
      <form id='BtnMP'>

      {trip.originName} - {trip.price}

      </form>
   </div>
  )
}
