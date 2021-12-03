import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRoute, getRoute, getRouteById } from "../actions/index.js";
import ReactMapboxGl, {
  Marker,
  GeoJSONLayer,
  ZoomControl,
} from 'react-mapbox-gl';
import { useHistory } from "react-router";
import {
  BsFillCalendarCheckFill,
  BsWatch,
  BsPinMap,
  BsPinMapFill,
  BsFillPersonFill,
} from 'react-icons/bs';
import { RiPinDistanceFill } from 'react-icons/ri';
import '../Sass/Styles/Map.scss';

export default  function AllInfoRoute({match}) {
  useEffect(() => dispatch(getRouteById(match.params.id)), []);
  const history = useHistory()
  const dispatch = useDispatch()
  const route = useSelector(state => state.routeById)
  const data = useSelector(state => state.route)
 route.origin && data.length === 0 && dispatch(getRoute(route.origin[0], route.origin[1], route.destiny[0], route.destiny[1]))
 console.log(data)
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiZmFic2FudGFuZHJlYSIsImEiOiJja3czbGFzNmw1MDVwMzJtb3F2ajBobzlqIn0.HtizxCUDY-hUg5ZxLPArDg',
  });
  
  function handleClick () {
    dispatch(deleteRoute())
    history.push('/route-list')
  }
  return <div className='Map'>
    {route.length > 0 && route.originName}
  hola
  <Map
       style="mapbox://styles/mapbox/streets-v11"
       containerStyle={{
         height: '50vh',
         width: '50vw',
       }}
       className="mapbox"
       center={route.origin}
  >
    
    
      {  data &&  <Marker coordinates={route.origin} style={{ color: 'red' }}>
            <img
              src="https://www.agroavisos.net/wp-content/uploads/2017/04/map-marker-icon.png"
              style={{ height: '30px' }}
            ></img>
          </Marker>}
      
        
        {data &&  <Marker coordinates={route.destiny}>
            <img
              src="https://www.agroavisos.net/wp-content/uploads/2017/04/map-marker-icon.png"
              style={{ height: '30px' }}
            ></img>
          </Marker>}
       
    <GeoJSONLayer
          data={data.coordinates && data.coordinates.data}
          linePaint={{
            'line-color': '#78c644',
            'line-width': 5,
          }}
          lineLayout={{
            'line-join': 'miter',
            'line-cap': 'round',
          }}
        />
        <ZoomControl />
  </Map>
  <div className="infoContainer">
        <p>
          <BsPinMap /> {route.originName}
        </p>
        <p>
          <BsPinMapFill /> {route.destinyName}
        </p>
        <p>
          <BsFillCalendarCheckFill /> {route.date}
        </p>
        <p>
          <RiPinDistanceFill /> {data.coordinates && data.coordinates.distance}.
        </p>
        <p>
          <BsWatch /> {data.coordinates && data.coordinates.time}
        </p>
        <p>
          <BsFillPersonFill /> {route.place} Seats available.
        </p>
      </div>
  <button className='buttonBlue' onClick={handleClick}>volver</button>
  </div>
}
