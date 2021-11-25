import { useDispatch, useSelector } from "react-redux"
import ReactMapboxGl, { Layer, Feature, Marker, GeoJSONLayer, MapContext } from 'react-mapbox-gl';
import { useEffect } from "react";
import { getRoute } from "../Actions";
const layout2 = {
    'line-color': '#100000',
    'line-width': '10px'
}

const MapboxDirections = require('@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions')

export default function Mapping() {
  const city = useSelector(state => state.suggestions1)
  const city2 = useSelector(state => state.suggestions2)
  console.log(city, 'SOY CITY')
  const dispatch = useDispatch()
  const {data} = useSelector(state => state.route)
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

  useEffect(() => city.length === 1 && city2.length === 1 ? dispatch(getRoute(city[0].coordinates[0], city[0].coordinates[1],city2[0].coordinates[0], city2[0].coordinates[1])): console.log('no se'), [])
    return <div>
        <Map
    style="mapbox://styles/mapbox/streets-v9"
    containerStyle={{
      height: '70vh',
      width: '70vw',
      zoom: 1
    }}
    center={ [city[0].coordinates[0],city[0].coordinates[1]]}
  >
 

    {city.length === 1 && <Marker coordinates={city[0].coordinates} style={{color:'red', anchor:'center'}}>
      <img src='https://www.agroavisos.net/wp-content/uploads/2017/04/map-marker-icon.png' style={{height:'30px'}}></img>
    </Marker>}
    {city2.length === 1 && <Marker coordinates={city2[0].coordinates} >
      <img src='https://www.agroavisos.net/wp-content/uploads/2017/04/map-marker-icon.png' style={{height:'30px'}}></img>
    </Marker>}
    <GeoJSONLayer
  data= {data}
  linePaint= {{
    'line-color': '#00FF03',
    'line-width': 4
  }}
  lineLayout={{
    'line-join': 'miter',
    'line-cap' : 'round'
  }}
  />
  </Map>


    </div>
}