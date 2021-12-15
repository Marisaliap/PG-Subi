import React from "react";
import { Link } from "react-router-dom";
import "../Sass/Styles/Aboutus.scss";
import {
  SiSequelize,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";
import { FormattedMessage } from "react-intl";

export default function Aboutus() {
  return (
    <div>
      <Link to="/home">
        <button className="buttonBlue">
          <FormattedMessage id="about.button" />
        </button>
      </Link>
      <div className="aboutus">
        <div>
          <h2>
            <FormattedMessage id="about.title" />
          </h2>
          <div className="text">
            <div></div>
            <div>
              <p>
                <FormattedMessage id="about.subtitle" />
              </p>
              <p>
                <FormattedMessage id="about.p-part1" />
                <SiHtml5 className="icon" /> | Html5,{" "}
                <SiCss3 className="icon" /> | Css3,{" "}
                <SiNodedotjs className="icon" /> | Node.js,{" "}
                <SiReact className="icon" /> | React,{" "}
                <SiRedux className="icon" /> | Redux,{" "}
                <SiExpress className="icon" /> | Express,{" "}
                <SiPostgresql className="icon" /> | PostgreSQL,{" "}
                <SiSequelize className="icon" /> | Sequelize.
                <FormattedMessage id="about.p-part2" />
              </p>
              <p>
                <FormattedMessage id="about.subtitle2" />
              </p>
            </div>
            <div></div>
          </div>
          <div>
            <div>
              <ul>
                <li>
                  <div></div>
                  <pre>
                    <img
                      src="https://avatars.githubusercontent.com/u/87451265?v=4"
                      width="150"
                      height="150"
                      alt="Foto 1"
                    />
                  </pre>
                  <p className="p">
                    <strong>Marisa Lia Pascal:</strong>{" "}
                    <FormattedMessage id="about.marisa" />
                  </p>
                </li>
                <br></br>
                <li>
                  <div></div>
                  <pre>
                    <img
                      src="https://avatars.githubusercontent.com/u/85139209?v=4"
                      width="150"
                      height="150"
                      alt="Foto 2"
                    />
                  </pre>
                  <p className="p">
                    <strong>Lorenzo Blanda:</strong>
                    <FormattedMessage id="about.lolo" />
                  </p>
                </li>
                <br></br>
                <li>
                  <div></div>
                  <pre>
                    <img
                      src="https://avatars.githubusercontent.com/u/85845504?v=4"
                      width="150"
                      height="150"
                      alt="Foto 3"
                    />
                  </pre>
                  <p className="p">
                    <strong>Ramiro Villamizar:</strong>
                    <FormattedMessage id="about.rami" />
                  </p>
                </li>
                <br></br>
                <li>
                  <div></div>
                  <pre>
                    <img
                      src="https://avatars.githubusercontent.com/u/81392379?v=4"
                      width="150"
                      height="150"
                      alt="Foto 4"
                    />
                  </pre>
                  <p className="p">
                    <strong>Juan Ignacio Moldes:</strong>
                    <FormattedMessage id="about.juan" />
                  </p>
                </li>
                <br></br>
                <li>
                  <div></div>
                  <pre>
                    <img
                      src="https://avatars.githubusercontent.com/u/88553996?v=4"
                      width="150"
                      height="150"
                      alt="Foto 5"
                    />
                  </pre>
                  <p className="p">
                    <strong>Fabrizio Santandrea:</strong>
                    <FormattedMessage id="about.fabri" />
                  </p>
                </li>
                <br></br>
                <li>
                  <div></div>
                  <pre>
                    <img
                      src="https://avatars.githubusercontent.com/u/70031154?v=4"
                      width="150"
                      height="150"
                      alt="Foto 6"
                    />
                  </pre>
                  <p className="p">
                    <strong>Mateo Filip:</strong>
                    <FormattedMessage id="about.mateo" />
                  </p>
                </li>
                <br></br>
                <li>
                  <div></div>
                  <pre>
                    <img
                      src="https://avatars.githubusercontent.com/u/84090568?v=4"
                      width="150"
                      height="150"
                      alt="Foto 7"
                    />
                  </pre>
                  <p className="p">
                    <strong>Juan Pablo Benavente:</strong>
                    <FormattedMessage id="about.jotape" />
                  </p>
                </li>
                <br></br>
                <li>
                  <div></div>
                  <pre>
                    <img
                      src="https://avatars.githubusercontent.com/u/11354887?v=4"
                      width="150"
                      height="150"
                      alt="Foto 8"
                    />
                  </pre>
                  <p className="p">
                    <strong>Nelson Albera:</strong>
                    <FormattedMessage id="about.nelson" />
                  </p>
                </li>
                <br></br>
                <li>
                  <div></div>
                  <pre>
                    <img
                      src="https://avatars.githubusercontent.com/u/78397268?v=4"
                      width="150"
                      height="150"
                      alt="Foto TL"
                    />
                  </pre>
                  <p className="p">
                    <strong>Daniel Maers:</strong>
                    <FormattedMessage id="about.daniel" />
                  </p>
                </li>
                <br></br>
                <li>
                  <div></div>
                  <pre>
                    <img
                      src="https://avatars.githubusercontent.com/u/66718960?v=4"
                      width="150"
                      height="150"
                      alt="Foto PO"
                    />
                  </pre>
                  <p className="p">
                    <strong>Bryan Camilo Pineda:</strong>
                    <FormattedMessage id="about.camilo" />
                  </p>
                </li>
                {/* <li>
                  <div></div>
                  <pre>
                    <img
                      src="https://avatars.githubusercontent.com/u/18233937?v=4"
                      width="150"
                      height="150"
                      alt="Foto POF"
                    />
                  </pre>
                  <p>
                    <strong>Diego Rodriguez:</strong> Soy full stack developer,
                    me encanta aprender nuevas tecnologías y metodologías de
                    trabajo. Las tecnologías que manejo son React.js, Next.js,
                    Redux, Sass, Express, Passport, GraphQL, Node, Deno. Dentro
                    del ecosistema Microsoft: .net, c#, typescript, SQL server,
                    Windows Server entre otras. Experiencia en tecnologías AWS
                    S3 y SES, Google cloud / Firebase. Además de manejar
                    herramientas de diseño como Adobe Illustrator y Corel Draw.
                  </p>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
