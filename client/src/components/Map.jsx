import React from "react";
import { useDispatch, useSelector } from "react-redux"
import ReactMapboxGl, { Marker, GeoJSONLayer, ZoomControl} from 'react-mapbox-gl';
import { Link, useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { postRoute } from "../actions";


export default function Map() {
  const dispatch = useDispatch()
  const routeInfo = useSelector(state => state.routePostInfo)
  const history = useHistory()
  const city = useSelector(state => state.suggestions1)
  const city2 = useSelector(state => state.suggestions2)
  const data = useSelector(state => state.route)
  const { user, isAuthenticated } = useAuth0();
  console.log(data)


function handleClick (e) {
  e.preventDefault()
  history.push('/route')
}

function handlePost (e) {
  e.preventDefault()
  dispatch(postRoute(
    {
      idUser: user.email,
      origin: city[0].coordinates,
      originName: city[0].name,
      destiny: city2[0].coordinates,
      destinyName: city2[0].name,
      price: routeInfo.price,
      date: routeInfo.date,
      hours: routeInfo.hours,
      place: routeInfo.pasajeros,
      restriction: ''
    }

  ))
  
}
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiZmFic2FudGFuZHJlYSIsImEiOiJja3czbGFzNmw1MDVwMzJtb3F2ajBobzlqIn0.HtizxCUDY-hUg5ZxLPArDg'
  });

    return <div style={{display:'flex'}}>
    <Link to="/home">
        <button>Home</button>
      </Link>

        <Map
    style="mapbox://styles/mapbox/streets-v11"
    containerStyle={{
      height:'50vh',
      width: '50vw'
    }}
    center={(city && city.length === 1) ? city[0].coordinates : [-57.95,-34.93333]}
  >

    { (city && city.length === 1 )&& <Marker coordinates={city[0].coordinates} style={{color:'red'}}>
      <img src='https://www.agroavisos.net/wp-content/uploads/2017/04/map-marker-icon.png' style={{height:'30px'}}></img>
    </Marker>}
    {(city2 && city2.length === 1) && <Marker coordinates={city2[0].coordinates} >
      <img src='https://www.agroavisos.net/wp-content/uploads/2017/04/map-marker-icon.png' style={{height:'30px'}}></img>
    </Marker>}


     <GeoJSONLayer
      data= {data.coordinates && data.coordinates.data}
      linePaint= {{
        'line-color': '#78c644',
        'line-width': 5
      }}
      lineLayout={{
        'line-join': 'miter',
        'line-cap' : 'round'
      }}
      />
     <ZoomControl />
  </Map>
 <br/>

  <div style={{border:'3px solid #78c644', borderRadius:'5px'}}>
  <div>
    <h2>Origin:{city[0].name}</h2>
  </div>
  <div>
    <h2>Destiny: {city2[0].name}</h2>
  </div>
  <div>
    <h2>Distance: {data.coordinates  && data.coordinates.distance}</h2>
  </div>
  <div>
    <h2>Time: {data.coordinates && data.coordinates.time}</h2>
  </div>
  <div>
    <h3>Passengers: {routeInfo.pasajeros}</h3>
  </div>
  <div>
    <h2>Date: {routeInfo.date}</h2>
  </div>
  <div>
    <button onClick={handlePost}>Crear Ruta</button>
  </div>
  <div>
  <button onClick={handleClick}>Quiero hacer un cambio</button>
  </div>
  </div>
  
 
      </div>

    
}