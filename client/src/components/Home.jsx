import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../Sass/Styles/Home.scss";
import header from "../img/header.jpg";
import car_8 from "../img/car_8.jpg";
import SearchBarHome from "./SearchBarHome";

export default function Home() {
  return (
    <div className="Home">
      <div>
        <img className="fotoHeader" src={header} alt="header" />
      </div>
      <div>
        <SearchBarHome />
      </div>
      <div className="Article">
        <div></div>
        <div>
          <img src={car_8} alt="Home" className="FotoArticle" />
        </div>
        <article>
          <h3>Give me a ride</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            feugiat feugiat enim, non ullamcorper elit malesuada ut. Maecenas id
            tincidunt est, non finibus metus. Orci varius natoque penatibus et
            magnis dis parturient montes, nascetur ridiculus mus. Proin in nisl
            vel risus egestas posuere. Fusce semper, enim consequat elementum
            lobortis, dui orci porta mauris, auctor faucibus tellus erat at
            quam. Aliquam tempor sapien a sapien interdum, in venenatis magna
            tempus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. Integer id sollicitudin erat, at
            facilisis eros. Etiam et congue ex. Donec id metus arcu. Sed
            bibendum metus vel lorem ullamcorper, ut blandit massa eleifend.
          </p>
          <p>
            Cras varius neque imperdiet rhoncus malesuada. Sed tortor dolor,
            pretium eu scelerisque in, tristique vitae purus. Suspendisse mi
            risus, eleifend at lorem ac, tincidunt sagittis quam. Sed vulputate
            gravida urna ac convallis. Fusce mattis sem id ultrices dapibus.
            Etiam urna dolor, consequat vel nibh et, vehicula semper ex. Morbi
            in nibh nisi.
          </p>
          <p>
            Vivamus fermentum vitae nibh vitae malesuada. Praesent pellentesque
            sed neque a fringilla. Sed tellus purus, scelerisque dictum enim id,
            tempor dictum erat. Aenean molestie interdum aliquet. Interdum et
            malesuada fames ac ante ipsum primis in faucibus. Maecenas nec velit
            id urna suscipit ultricies non sit amet tortor. Praesent fermentum
            velit pellentesque venenatis varius.
          </p>
        </article>
      </div>
    </div>
  );
}
