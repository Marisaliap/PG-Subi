import React from "react";
import { Link, useHistory } from "react-router-dom";
import "../Sass/Styles/Recommendations.scss";

export default function Recommendations() {
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    history.push("/home");
  }
  return (
    <div className="Recommendations">
      <Link to="/home">
        <button className="buttonBlue">Home</button>
      </Link>
      <article>
        <div></div>
        <div>
          <h2> Recommendations - Gimme a Ride® </h2>

          <p>
            Sharing a trip is a great experience but we must take into account
            some considerations in order to avoid drawbacks.
          </p>

          <h3> Origin and destination </h3>
          <p>
            When creating a trip that has an origin and destination with precise
            directions, you never have to load addresses of your house or
            similar. Always use a City or a street junction.
          </p>

          {/* <h3> Communication between users </h3>
<p>
  Depending on how you have entered the platform, you will receive
  notifications via email or notifications via social network when
  there are requests, acceptances or rejections for Gimme a Ride®,
  when modified or cancel a trip, when they send you messages, etc.
</p> */}

          <h3> Gimme a Ride® with strangers </h3>
          <p>
            Before Gimme a Ride® with users you don't have references we
            recommend that you take a few minutes to review the profile of Give
            me a ride® of that person and their profile in different social
            networks. We also suggest talking to them before you travel. It is
            important to always share with someone you trust.
          </p>
          {/* 
          <h3> Pre-trip agreements </h3>
          <p>
            Arrange in advance with the driver the route of the trip, if you are
            going to share the costs associated with it, and how much you will
            have to contribute each. Remember that the driver cannot profit from
            the trip, see {""}
            <strong>
              "Auto Insurance and the importance of calculating the cost of the
              trip"
            </strong>{" "}
            {""}
            (below)
          </p>
          <p>
            We recommend that payment be made directly to the driver at finish
            the trip and without intermediaries.
          </p> */}

          <h3> Before getting into a car or someone getting into your car </h3>
          <ul>
            <li>
              <i> </i> Check the DNI to verify if the identity of the people
              correspond with the one who told you.
            </li>
            <li>
              <i> </i> At the time of the meeting, check that the car model and
              plate match the data provided by the driver.
            </li>
            <li>
              <i> </i> Ask the driver to show you his driving license, the
              vehicle's green card and the {""}
              <strong> vehicle insurance </strong> updated to date. The car must
              also have mandatory technical inspection done.
            </li>
            <li>
              <i> </i> Visually verify that the car you are traveling in is in
              good condition.
            </li>
            <li>
              <i> </i> Check that there is a seat belt for each passenger
            </li>
            <li>
              <i> </i> Remember that you are not obliged to get into any car or
              get anyone in your car. If the people you agreed to trip generate
              distrust at the time of the meeting, if you consider any attitude
              as suspicious, or if the documentation or the status of the car is
              not in condition, you can express it in the best terms and not
              make the trip. If you think that your mistrust or suspicion is
              based on prejudice, you can express that an unforeseen event arose
              or that you do not feel well physically to travel. You can also
              get out of the car if at any moment, if it seems to you that the
              driver is driving recklessly or that it doesn't make you feel
              comfortable. When you get in the car, you are responsible for
              exercising your own security. After the date of the trip you can
              leave a negative rating. {""}
            </li>
          </ul>

          {/* <h3>
            Auto Insurance and the importance of calculating the cost of the
            trip {""}
          </h3>
          <p>
            In case of agreeing to share expenses, the total cost of the trip
            will be will be calculated as the sum of the {""}
            <strong> cost of fuel + tolls </strong>. Driver may request a
            maximum contribution to each passenger of the total cost of the trip
            divided by the number of occupants of the vehicle at the time of the
            trip (driver and passengers). This must be respected since
            otherwise, an illegal activity would be committed.
          </p> */}

          <p>
            We emphasize that the driver should not obtain economic profit in
            travel from him. For more information, check the {""}
            <a href="http://localhost:3000/terms-and-conditions">
              Gimme a Ride® General Terms and Conditions.
            </a>
          </p>
        </div>
      </article>
    </div>
  );
}

{
  /* <h2>Recomendaciones a la hora de Gimme a Ride®</h2>

          <p>
            Compartir es una gran experiencia pero debemos tener en cuenta
            algunas consideraciones para poder Gimme a Ride® sin
            inconvenientes.
          </p>

          <h3>Origen y destino</h3>
          <p>
            Al crear un viaje que tenga origen y destino con direcciones
            precisas, nunca tenés que cargar direcciones de tu casa o similar.
            Siempre usar una Ciudad o un cruce de calles.
          </p>

          <h3>Comunicación entre usuarios</h3>
          <p>
            Según como hayas ingresado a la plataforma, recibirás notificaciones
            vía correo o notificaciones vía red social cuando hayan solicitudes,
            aceptaciones o rechazos para Gimme a Ride®, cuando se modifique o
            cancele un viaje, cuando te envíen mensajes, etc.{" "}
          </p>

          <h3>Carpooleando con desconocidos</h3>
          <p>
            Previo a Gimme a Ride® con usuarios de los que no tengas
            referencias (o sea, que no sean “amigos” o “amigos de tus amigos”),
            te recomendamos que te tomes unos minutos para revisar el perfil de
            Gimme a Ride® de esa persona y su perfil en distintas redes
            sociales. De esa forma podrás contar con información acerca de la
            persona. También sugerimos conversar antes de viajar. Siempre es
            importante compartir con alguien que te genere confianza.
          </p>

          <h3>Acuerdos previos al viaje</h3>
          <p>
            Acordá previamente con el conductor el recorrido del viaje, si van a
            compartir los costos asociados al mismo, y cuánto deberá contribuir
            cada uno. Recordá que el conductor no puede lucrar con el viaje, ver{" "}
            <strong>
              “Seguro Automotor y la importancia de calcular el costo del viaje”
            </strong>{" "}
            (más abajo)
          </p>
          <p>
            Recomendamos que el pago se realice directamente al conductor al
            finalizar el viaje y sin intermediarios.
          </p>

          <h3>Antes de subirte a un auto o subir alguien a tu auto</h3>
          <ul>
            <li>
              <i></i>Chequeá los DNI para verificar si la identidad de las
              personas se corresponde con la que te habían dicho.
            </li>
            <li>
              <i></i>En el momento del encuentro, chequeá que el modelo de auto
              y patente coincidan con el dato suministrado por el conductor.
            </li>
            <li>
              <i></i>Pedile al conductor que te muestre su carnet de conducir,
              la cédula verde del vehículo y el{" "}
              <strong>seguro del vehículo</strong> actualizado a la fecha. El
              auto también debe tener la inspección técnica obligatoria hecha.
            </li>
            <li>
              <i></i>Verificá visualmente que el auto en el que vas a viajar
              esté en buenas condiciones.
            </li>
            <li>
              <i></i>Verificá que haya un cinturón de seguridad para cada
              pasajero
            </li>
            <li>
              <i></i>Recordá que no estás obligado a subirte a ningún auto ni a
              subir a nadie a tu auto. Si las personas con las que acordaste el
              viaje te generan desconfianza en el momento del encuentro, si
              considerás alguna actitud como sospechosa, o si la documentación o
              el estado del auto no están en condiciones, podés manifestarlo en
              los mejores términos y no realizar el viaje. Si te parece que tu
              desconfianza o sospecha se basa en un prejuicio, podés manifestar
              que te surgió un imprevisto o que no te sentís bien físicamente
              como para viajar. También podés bajarte del auto si en algún
              momento te parece que el conductor maneja de forma imprudente o
              que no te hace sentir cómodo. Al momento de subirte al auto y
              durante el viaje, vos sos responsable de ejercer tu propia
              seguridad. Luego de pasada la fecha del viaje podés dejar una
              calificación negativa.{" "}
            </li>
          </ul>

          <h3>
            Seguro Automotor y la importancia de calcular el costo del viaje{" "}
          </h3>
          <p>
            En caso de acordar compartir gastos, el costo total del viaje se
            calculará como la suma del{" "}
            <strong>costo del combustible + los peajes</strong>. El conductor
            podrá pedir una contribución máxima a cada pasajero del costo total
            del viaje dividido la cantidad de ocupantes del vehículo al momento
            del viaje (conductor y pasajeros). Esto debe ser respetado pues de
            no ser así se estaría cometiendo una actividad ilegal. */
}
{
  /* </p>

          <p>
            Remarcamos que el conductor no debe obtener ganancia económica en
            sus viajes. Para más información, revisá los{" "}
            <a href="https://http://localhost:3000//tyc">
              Términos y Condiciones Generales de Gimme a Ride®.
            </a>
          </p> */
}
{
  /* </div> */
}
