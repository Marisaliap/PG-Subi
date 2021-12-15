import {
  BsFillTelephoneFill,
  BsGenderFemale,
  BsGenderMale,
  BsInstagram,
  BsFacebook,
  BsStarFill,
  BsMap,
  BsEnvelope,
} from "react-icons/bs";
import "../Sass/Styles/UserDetails.scss";

export default function CardFullUser({
  name,
  lastName,
  email,
  genre,
  photo,
  age,
  about,
  telephone,
  facebook,
  instagram,
  street,
  city,
  province,
  calification,
}) {
  function genderIcon(gender) {
    if (gender === "Male") {
      return <BsGenderMale className="maleGender" />;
    } else if (gender === "Female") {
      return <BsGenderFemale className="femaleGender" />;
    }
  }

  return (
    <div>
      <div className="UserDetails">
        <img src={photo} alt="User" style={{ width: "250px" }} />
        <h2>
          {name} {lastName} {genderIcon(genre)}
        </h2>
        <p className="age">{age} years old</p>
        <p className="about">{about}</p>
      </div>
      <hr />
      <div className="moreInfo">
        <h4>
          <BsStarFill className="icon" /> {calification} / 5
        </h4>
        <h4>
          <BsFillTelephoneFill className="icon" /> {telephone}
        </h4>
        <h4>
          <BsEnvelope className="icon" /> {email}
        </h4>
        <h4>
          <BsFacebook className="icon" /> {facebook}
        </h4>
        <h4>
          <BsInstagram className="icon" /> {instagram}
        </h4>
        <h4>
          <BsMap className="icon" /> {street}, {city},{province}
        </h4>
      </div>
    </div>
  );
}
