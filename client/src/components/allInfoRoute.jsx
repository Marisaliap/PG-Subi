import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteRoute, getRouteById } from "../actions/index.js";
import ReactMapboxGl, {
  Marker,
  GeoJSONLayer,
  ZoomControl,
} from "react-mapbox-gl";
import { useHistory } from "react-router";
import {
  BsFillCalendarCheckFill,
  BsWatch,
  BsPinMap,
  BsPinMapFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { RiPinDistanceFill } from "react-icons/ri";
import "../Sass/Styles/allInfoRoute.scss";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Modal } from "./ModalMP.jsx";
import RatingStar from "./RatingStar.jsx";
import { FormattedMessage } from 'react-intl';

export default function AllInfoRoute({ match }) {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  useEffect(() => {
    dispatch(getRouteById(match.params.id));
  }, [dispatch, match.params.id]);

  const user = useSelector((state) => state.userpro);
  const route = useSelector((state) => state.routeById);
  const history = useHistory();

  const data = useSelector((state) => state.route);

  const coordinates = {
    geometry: {
      coordinates: route.points,
      type: "LineString",
    },
    type: "Feature",
  };

  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiZmFic2FudGFuZHJlYSIsImEiOiJja3czbGFzNmw1MDVwMzJtb3F2ajBobzlqIn0.HtizxCUDY-hUg5ZxLPArDg",
  });

  function handleClick() {
    dispatch(deleteRoute());
    history.push("/route-list");
  }


  let restricciones =route.restriction && route.restriction.split(", ");


  return (
    <div className="Map">
      {route.length > 0 && route.originName}
      <div className="Containerallroute">
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
            <RiPinDistanceFill /> {route.km}.
          </p>
          <p>
            <BsWatch /> {route.time}
          </p>
          {route.place === 0 ? (
            <p>
              <BsFillPersonFill /> <FormattedMessage id="allinforoute.placefull" defaultMessage="Trip Full" />
            </p>
          ) : (
            <p>
              <BsFillPersonFill /> {route.place} <FormattedMessage id="allinforoute.place" defaultMessage="Seats available."/>
            </p>
          )}
        </div>
        <div className="restrictionContainer">
          {restricciones&&restricciones.map((restriction) => {
            return (
              <p>
                {restriction
                  .capitalizeFirstLetter()
                  .replace(/([a-z0-9])([A-Z])/g, "$1 $2")}
              </p>
            );
          })}
        </div>
        {route.users && (
          <Link to={`/user/${route.users[0].email}`} className="userContainerallroute">
            <div className="userContainerallroute">
              <img src={route.users.length > 0 && route.users[0].photo} />
              <h5>{route.users.length > 0 && route.users[0].name}</h5>

              <div>
              <RatingStar
                Rating={route.users[0].calification}
              />
              </div>
            </div>
          </Link>
        )}
      </div>

      <Map
        style="mapbox://styles/mapbox/streets-v11"
        containerStyle={{
          height: "50vh",
          width: "50vw",
        }}
        className="mapbox"
        // center={route.origin}
        // fitBounds={route.origin && [route.origin, route.destiny]}
        // center={route.origin}
        center={route.center}
        zoom={
          route.km
            ? [
                parseFloat(
                  Math.log10(route.km.slice(0, route.km.indexOf(" ")))
                ) *
                  -3.65 +
                  15,
              ]
            : [10]
        }
      >
        {data && (
          <Marker
            coordinates={route.origin}
            anchor="bottom"
            style={{ color: "red" }}
          >
            <img
              src="https://www.agroavisos.net/wp-content/uploads/2017/04/map-marker-icon.png"
              style={{ height: "30px" }}
              alt=""
            ></img>
          </Marker>
        )}

        {data && (
          <Marker coordinates={route.destiny} anchor="bottom">
            <img
              src="https://www.agroavisos.net/wp-content/uploads/2017/04/map-marker-icon.png"
              style={{ height: "30px" }}
              alt=""
            ></img>
          </Marker>
        )}

        <GeoJSONLayer
          data={route.points && coordinates}
          linePaint={{
            "line-color": "#2CB67D",
            "line-width": 5,
          }}
          lineLayout={{
            "line-join": "miter",
            "line-cap": "round",
          }}
        />
        <ZoomControl />
      </Map>


      <div>
        {route.place === 0 || !route.users || user.email === route.users[0].email  ? (
          <button className="buttonDisabled"><FormattedMessage id="allinforoute.jointhistrip" defaultMessage="Join this trip!" /></button>
        ) : (
          <button onClick={openModal} className="button">
          <FormattedMessage id="allinforoute.jointhistrip" defaultMessage="Join this trip!" />
          </button>
        )}
        {showModal ? (
          <Modal setShowModal={setShowModal} route={route} user={user} />
        ) : null}


        <button className="buttonBlue" onClick={handleClick}>
        <FormattedMessage id="allinforoute.goback" defaultMessage="Go Back" />
        </button>
      </div>
    </div>
  );
}
