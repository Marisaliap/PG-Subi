import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function Aboutus() {
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    history.push("/home");
  }
  return (
    <div>
      <Link to="/home">
        <button>Home</button>
      </Link>
      <div>
        <div>
          <h2>Nosotros</h2>

          <p>
            Subi que te Llevo empezó como un sueño en el año 2010 y fue creciendo paso
            a paso...
          </p>
          <p>
            El equipo voluntario que lo lleva adelantes está formado por
            diseñadores, comunicadores, ingenieros de diversas ramas y
            autodidactas varios. La primer versión de la plataforma la lanzamos
            en septiembre del 2013. Se siguió desarrollando ese mismo sistema
            hasta el año 2017, en el cual se hace un re-lanzamiento, con un
            sistema 100% nuevo. Actualmente el equipo se divide en tres áreas de
            trabajo: Sistemas, Comunicación y Búsqueda de Recursos. Las tres son
            fundamentales para que el proyecto avance.
          </p>

          <p>Te presentamos al equipo de Subi que te Llevo:</p>

          <div>
            <div>
              <ul>
                <li>
                  <img
                    src="https://avatars.githubusercontent.com/u/87451265?v=4"
                    width="100"
                    height="100"
                    alt="Foto 1"
                  />
                  <p>
                    <strong>Marisa Lia Pascal:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </li>
                <li>
                  <img
                    src="https://avatars.githubusercontent.com/u/85139209?v=4"
                    width="100"
                    height="100"
                    alt="Foto 2"
                  />
                  <p>
                    <strong>Lorenzo Blanda:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </li>
                <li>
                  <img
                    src="https://avatars.githubusercontent.com/u/85845504?v=4"
                    width="100"
                    height="100"
                    alt="Foto 3"
                  />
                  <p>
                    <strong>Ramiro Villamizar:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </li>
                <li>
                  <img
                    src="https://avatars.githubusercontent.com/u/81392379?v=4"
                    width="100"
                    height="100"
                    alt="Foto 4"
                  />
                  <p>
                    <strong>Juan Ignacio Moldes:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </li>
                <li>
                  <img
                    src="https://avatars.githubusercontent.com/u/88553996?v=4"
                    width="100"
                    height="100"
                    alt="Foto 5"
                  />
                  <p>
                    <strong>Fabrizio Santandrea:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    días.
                  </p>
                </li>
                <li>
                  <img
                    src="https://avatars.githubusercontent.com/u/70031154?v=4"
                    width="100"
                    height="100"
                    alt="Foto 6"
                  />
                  <p>
                    <strong>Mateo Filip:</strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </li>
                <li>
                  <img
                    src="https://avatars.githubusercontent.com/u/84090568?v=4"
                    width="100"
                    height="100"
                    alt="Foto 7"
                  />
                  <p>
                    <strong>Juan Pablo Benavente:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </li>
                <li>
                  <img
                    src="https://avatars.githubusercontent.com/u/11354887?v=4"
                    width="100"
                    height="100"
                    alt="Foto 8"
                  />
                  <p>
                    <strong>Nelson Albera:</strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </li>
                <li>
                  <img
                    src="https://avatars.githubusercontent.com/u/78397268?v=4"
                    width="100"
                    height="100"
                    alt="Foto TL"
                  />
                  <p>
                    <strong>Daniel Maers:</strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </li>
                <li>
                  <img
                    src="https://avatars.githubusercontent.com/u/66718960?v=4"
                    width="100"
                    height="100"
                    alt="Foto PO"
                  />
                  <p>
                    <strong>Bryan Camilo Pineda:</strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </li>
                <li>
                  <img
                    src="https://avatars.githubusercontent.com/u/58148471?v=4"
                    width="100"
                    height="100"
                    alt="Foto POF"
                  />
                  <p>
                    <strong>Diego Rodriguez:</strong> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
