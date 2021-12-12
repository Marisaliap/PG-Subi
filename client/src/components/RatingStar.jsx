import React from "react";
import "../Sass/Styles/RatingStar.scss";
export default function RatingStar(Rating) {

  let rating = Rating.Rating;
  //let rating = 2.5;
  return (
    <div className="rating">
      <span>
        {/* <ion-icon
          name={
            rating >= 1
              ? "star"
              : rating >= 0.5
              ? "star-half-outline"
              : "star-outline"
          }
        /> */}
        {rating >=1
        ? <i Style="color:#f0c040" className="fa fa-star"/>
        : rating >= 0.5
        ? <i Style="color:#f0c040" className="fa fa-star-half"/>
        : <i Style="color:#404040" className="fa fa-star"/>}
      </span>
      <span>
        {/* <ion-icon
          name={
            rating >= 2
              ? "star"
              : rating >= 1.5
              ? "star-half-outline"
              : "star-outline"
          }
        /> */}
        {rating >=2
        ? <i Style="color:#f0c040" className="fa fa-star"/>
        : rating >= 1.5
        ? <i Style="color:#f0c040" className="fa fa-star-half"/>
        : <i Style="color:#404040" className="fa fa-star"/>}
      </span>
      <span>
        {/* <ion-icon
          name={
            rating >= 3
              ? "star"
              : rating >= 2.5
              ? "star-half-outline"
              : "star-outline"
          }
        /> */}
        {rating >=3
        ? <i Style="color:#f0c040" className="fa fa-star"/>
        : rating >= 2.5
        ? <i Style="color:#f0c040" className="fa fa-star-half"/>
        : <i Style="color:#404040" className="fa fa-star"/>}
      </span>
      <span>
        {/* <ion-icon
          name={
            rating >= 4
              ? "star"
              : rating >= 3.5
              ? "star-half-outline"
              : "star-outline"
          }
        /> */}
        {rating >=4
        ? <i Style="color:#f0c040" className="fa fa-star"/>
        : rating >= 3.5
        ? <i Style="color:#f0c040" className="fa fa-star-half"/>
        : <i Style="color:#404040" className="fa fa-star"/>}
      </span>
      <span>
        {/* <ion-icon
          name={
            rating >= 5
              ? "star"
              : rating >= 4.5
              ? "star-half-outline"
              : "star-outline"
          }
        /> */}
        {rating >=5
        ? <i Style="color:#f0c040" className="fa fa-star"/>
        : rating >= 4.5
        ? <i Style="color:#f0c040" className="fa fa-star-half"/>
        : <i Style="color:#404040" className="fa fa-star"/>}
      </span>
      {/* <span>{numReviews + " reviews"}</span> */}
    </div>
  );
}