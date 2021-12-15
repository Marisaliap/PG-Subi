import React from "react";
import "../Sass/Styles/RatingStar.scss";
export default function RatingStar(Rating) {
  let rating = Rating.Rating;
  return (
    <div className="rating">
      <span>
        {rating >= 1 ? (
          <i style={{ color: "#f0c040" }} className="fa fa-star" /> // eslint-disable-line
        ) : rating >= 0.5 ? (
          <i style={{ color: "#f0c040" }} className="fa fa-star-half" /> // eslint-disable-line
        ) : (
          <i style={{ color: "#404040" }} className="fa fa-star" /> // eslint-disable-line
        )}
      </span>
      <span>
        {rating >= 2 ? (
          <i style={{ color: "#f0c040" }} className="fa fa-star" /> // eslint-disable-line
        ) : rating >= 1.5 ? (
          <i style={{ color: "#f0c040" }} className="fa fa-star-half" /> // eslint-disable-line
        ) : (
          <i style={{ color: "#404040" }} className="fa fa-star" /> // eslint-disable-line
        )}
      </span>
      <span>
        {rating >= 3 ? (
          <i style={{ color: "#f0c040" }} className="fa fa-star" /> // eslint-disable-line
        ) : rating >= 2.5 ? (
          <i style={{ color: "#f0c040" }} className="fa fa-star-half" /> // eslint-disable-line
        ) : (
          <i style={{ color: "#404040" }} className="fa fa-star" /> // eslint-disable-line
        )}
      </span>
      <span>
        {rating >= 4 ? (
          <i style={{ color: "#f0c040" }} className="fa fa-star" /> // eslint-disable-line
        ) : rating >= 3.5 ? (
          <i style={{ color: "#f0c040" }} className="fa fa-star-half" /> // eslint-disable-line
        ) : (
          <i style={{ color: "#404040" }} className="fa fa-star" /> // eslint-disable-line
        )}
      </span>
      <span>
        {rating >= 5 ? (
          <i style={{ color: "#f0c040" }} className="fa fa-star" /> // eslint-disable-line
        ) : rating >= 4.5 ? (
          <i style={{ color: "#f0c040" }} className="fa fa-star-half" /> // eslint-disable-line
        ) : (
          <i style={{ color: "#404040" }} className="fa fa-star" /> // eslint-disable-line
        )}
      </span>
    </div>
  );
}
