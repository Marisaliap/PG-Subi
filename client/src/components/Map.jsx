import React from "react";
import { useDispatch, useSelector } from "react-redux"
import ReactMapboxGl, { Layer, Feature, Marker, GeoJSONLayer, MapContext, ZoomControl, ScaleControl, RotationControl } from 'react-mapbox-gl';
import { useEffect } from "react";
import { getRoute } from "../actions";
import { Link, useHistory } from "react-router-dom";


const layout2 = {
    'line-color': '#100000',
    'line-width': '10px'
}


export default function Map() {
  const history = useHistory();
  const city = useSelector(state => state.suggestions1)
  const city2 = useSelector(state => state.suggestions2)
  console.log(city, city2, 'SOY CITY')
  const dispatch = useDispatch()
  const data = useSelector(state => state.route)
  console.log(data, 'SOY ROUTE')
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiZmFic2FudGFuZHJlYSIsImEiOiJja3czbGFzNmw1MDVwMzJtb3F2ajBobzlqIn0.HtizxCUDY-hUg5ZxLPArDg'
  });

  function handleClick () {
    return {
      zoom: 5
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    history.push("/home");
  }
  // useEffect(() => city.length === 1 && city2.length === 1 ? dispatch(getRoute(city[0].coordinates[0], city[0].coordinates[1],city2[0].coordinates[0], city2[0].coordinates[1])): console.log('no se'), [])
  
    return <div>
    <Link to="/home">
        <button>Home</button>
      </Link>
        <Map
    style="mapbox://styles/mapbox/streets-v9"
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

    {/* <Layer type='line' layout={lineLayout} paint={linePaint}>
      <Feature></Feature>
      </Layer> */}
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
<br />
          <button onClick={e => e.preventDefault()} >Crear Ruta</button>
      </div>

    
}