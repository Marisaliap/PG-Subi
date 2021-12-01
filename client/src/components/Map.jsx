import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactMapboxGl, {
  Marker,
  GeoJSONLayer,
  ZoomControl,
} from 'react-mapbox-gl';
import { Link, useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { postRoute } from '../actions';
import {
  BsFillCalendarCheckFill,
  BsWatch,
  BsPinMap,
  BsPinMapFill,
  BsFillPersonFill,
} from 'react-icons/bs';
import { RiPinDistanceFill } from 'react-icons/ri';
import '../Sass/Styles/Map.scss';
import swal from 'sweetalert';


export default function Map() {
  const dispatch = useDispatch();
  const routeInfo = useSelector((state) => state.routePostInfo);
  const history = useHistory();
  const city = useSelector((state) => state.suggestions1);
  const city2 = useSelector((state) => state.suggestions2);
  const data = useSelector((state) => state.route);
  const { user, isAuthenticated } = useAuth0();
  console.log(data);

  function handleClick(e) {
    e.preventDefault();
    history.push('/route');
  }

  function handlePost(e) {
    e.preventDefault();
    dispatch(
      postRoute({
        idUser: user.email,
        origin: city[0].coordinates,
        originName: city[0].name,
        destiny: city2[0].coordinates,
        destinyName: city2[0].name,
        date: routeInfo.date.split('-').reverse().join('-'),
        hours: routeInfo.hours,
        place: routeInfo.pasajeros,
        restriction: '',
        km: data.coordinates.distance,
        points: data.coordinates.data.geometry.coordinates
      })
    );
    swal({
      title: "Good job!",
      text: "Created!",
      icon: "success",
      button: "Go to Trip!",
    });
    history.push('/route-list')
  }
  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiZmFic2FudGFuZHJlYSIsImEiOiJja3czbGFzNmw1MDVwMzJtb3F2ajBobzlqIn0.HtizxCUDY-hUg5ZxLPArDg',
  });

  return (
    <div className="Map">
      <Link to="/home">
        <button className="buttonBlue">Home</button>
      </Link>

      <Map
        style="mapbox://styles/mapbox/streets-v11"
        containerStyle={{
          height: '50vh',
          width: '50vw',
        }}
        className="mapbox"
        center={
          city && city.length === 1 ? city[0].coordinates : [-57.95, -34.93333]
        }
      >
        {city && city.length === 1 && (
          <Marker coordinates={city[0].coordinates} style={{ color: 'red' }}>
            <img
              src="https://www.agroavisos.net/wp-content/uploads/2017/04/map-marker-icon.png"
              style={{ height: '30px' }}
            ></img>
          </Marker>
        )}
        {city2 && city2.length === 1 && (
          <Marker coordinates={city2[0].coordinates}>
            <img
              src="https://www.agroavisos.net/wp-content/uploads/2017/04/map-marker-icon.png"
              style={{ height: '30px' }}
            ></img>
          </Marker>
        )}

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
      <br />

      <div className="infoContainer">
        <p>
          <BsPinMap /> {city[0].name}
        </p>
        <p>
          <BsPinMapFill /> {city2[0].name}
        </p>
        <p>
          <BsFillCalendarCheckFill /> {routeInfo.date.split('-').reverse().join('-')}
        </p>
        <p>
          <RiPinDistanceFill /> {data.coordinates && data.coordinates.distance}.
        </p>
        <p>
          <BsWatch /> {data.coordinates && data.coordinates.time}
        </p>
        <p>
          <BsFillPersonFill /> {routeInfo.pasajeros} Seats available.
        </p>
      </div>
      <div className="buttonContainer">
        <button className="buttonBlue" onClick={handleClick}>
          I want to change something!
        </button>
        <button className="button" onClick={handlePost}>
          Create Trip
        </button>
      </div>
    </div>
  );
}
