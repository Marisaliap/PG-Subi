import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactMapboxGl, {
  Marker,
  GeoJSONLayer,
  ZoomControl,
  ScaleControl,
} from "react-mapbox-gl";
import { Link, useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { deleteRouteFromDb, postRoute } from "../actions";
import {
  BsFillCalendarCheckFill,
  BsWatch,
  BsPinMap,
  BsPinMapFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { RiPinDistanceFill } from "react-icons/ri";
import "../Sass/Styles/Map.scss";
import swal from "sweetalert2";
import { FormattedMessage } from "react-intl";

String.prototype.capitalizeFirstLetter = function () {
  if (this) {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }
};

export default function Map() {
  const dispatch = useDispatch();
  const routeInfo = useSelector((state) => state.routePostInfo);
  const history = useHistory();
  const city = useSelector((state) => state.suggestions1);
  const city2 = useSelector((state) => state.suggestions2);
  const data = useSelector((state) => state.route);
  const { user } = useAuth0();

  const middlePointLolo = [
    (city[0].coordinates[0] + city2[0].coordinates[0]) / 2,
    (city[0].coordinates[1] + city2[0].coordinates[1]) / 2,
  ];
  function handleClick(e) {
    e.preventDefault();
    history.push("/route");
  }

  function handlePost(e) {
    dispatch(
      postRoute({
        idUser: user.email,
        origin: city[0].coordinates,
        originName: city[0].name,
        destiny: city2[0].coordinates,
        destinyName: city2[0].name,
        date: routeInfo.date.split("-").reverse().join("-"),
        hours: routeInfo.hours,
        place: routeInfo.pasajeros,
        restriction: routeInfo.restrictions.join(", "),
        km: data.coordinates.distance,
        points: data.coordinates.data.geometry.coordinates,
        time: data.coordinates.time,
        center: middlePointLolo,
      })
    );
    new swal({
      title: "Good job!",
      text: "Created!",
      icon: "success",
      button: "Go to Trip!",
    });
    dispatch(deleteRouteFromDb("lala"));
    history.push("/route-list");
  }
  const Map = ReactMapboxGl({
    accessToken:
      "pk.eyJ1IjoiZmFic2FudGFuZHJlYSIsImEiOiJja3czbGFzNmw1MDVwMzJtb3F2ajBobzlqIn0.HtizxCUDY-hUg5ZxLPArDg",
  });

  return (
    <div className="Mapping">
      <Link to="/home">
        <button className="buttonBlue">
          <FormattedMessage id="map.home" defaultMessage="Home" />
        </button>
      </Link>

      <Map
        style={"mapbox://styles/mapbox/streets-v11"}
        containerStyle={{
          height: "50vh",
          width: "50vw",
        }}
        className="mapbox"
        center={middlePointLolo}
        zoom={
          data.coordinates && data.coordinates.distance
            ? [
                parseFloat(
                  Math.log10(
                    data.coordinates.distance.slice(
                      0,
                      data.coordinates.distance.indexOf(" ")
                    )
                  )
                ) *
                  -3.65 +
                  15,
              ]
            : [10]
        }
      >
        {city && city.length === 1 && (
          <Marker
            coordinates={city[0].coordinates}
            anchor="bottom"
            style={{ color: "red" }}
          >
            <img
              src="https://www.agroavisos.net/wp-content/uploads/2017/04/map-marker-icon.png"
              style={{ height: "30px" }}
              alt="marker"
            ></img>
          </Marker>
        )}
        {city2 && city2.length === 1 && (
          <Marker coordinates={city2[0].coordinates} anchor="bottom">
            <img
              src="https://www.agroavisos.net/wp-content/uploads/2017/04/map-marker-icon.png"
              style={{ height: "30px" }}
              alt="marker"
            ></img>
          </Marker>
        )}

        <GeoJSONLayer
          data={data.coordinates && data.coordinates.data}
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
        <ScaleControl />
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
          <BsFillCalendarCheckFill />{" "}
          {routeInfo.date.split("-").reverse().join("-")}
        </p>
        <p>
          <RiPinDistanceFill /> {data.coordinates && data.coordinates.distance}.
        </p>
        <p>
          <BsWatch /> {data.coordinates && data.coordinates.time}
        </p>
        <p>
          <BsFillPersonFill /> {routeInfo.pasajeros}{" "}
          <FormattedMessage id="map.seats" defaultMessage="Seats available" />
        </p>
        {routeInfo.restrictions.map((restriction) => {
          return (
            <p>
              {restriction
                .capitalizeFirstLetter()
                .replace(/([a-z0-9])([A-Z])/g, "$1 $2")}
            </p>
          );
        })}
      </div>
      <div className="buttonContainer">
        <button className="buttonBlue" onClick={handleClick}>
          <FormattedMessage
            id="map.button"
            defaultMessage="I want to change something!"
          />
        </button>
        <button className="button" onClick={handlePost}>
          <FormattedMessage id="map.button1" defaultMessage="Create Trip" />
        </button>
      </div>
    </div>
  );
}
