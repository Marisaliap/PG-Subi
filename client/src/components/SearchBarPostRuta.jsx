import { useDispatch, useSelector } from "react-redux";
import {
  deleteRoute,
  getRoute,
  getSuggestions,
  getSuggestions2,
  matchedCity,
} from "../actions";
import Map from './Map.jsx';
import { Link } from "react-router-dom";
const inputs = {};
export default function SearchBar() {
  const cities = useSelector((state) => state.suggestions1);
  const cities2 = useSelector((state) => state.suggestions2);
  const matchCity = useSelector((state) => state.matched);
  const dispatch = useDispatch();
  console.log(cities, cities2);
  function handleChange(e) {
    inputs[e.target.name] = e.target.value;

    dispatch(getSuggestions(inputs.Origin));
    dispatch(getSuggestions2(inputs.Destination));
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(deleteRoute());
  }
  return (
    <div>
      <form>
        <input
          type="text"
          list="cities"
          onChange={handleChange}
          name="Origin"
          placeholder="Origin"
          style={{ width: "800px" }}
        />
        <datalist id="cities">
          {cities.map((city) => (
            <option>{city.name}</option>
          ))}
        </datalist>
        <br />
        <input
          type="text"
          list="cities2"
          onChange={handleChange}
          name="Destination"
          placeholder="Destination"
          style={{ width: "800px" }}
        />
        <datalist id="cities2">
          {cities2.map((city) => (
            <option>{city.name}</option>
          ))}
        </datalist>
        <div>
        <Map/>
        <Link to="/map">
          <button>Entrar</button>
        </Link>
        <button onClick={handleSubmit}>submit</button>
        </div>
      </form>
    </div>
  );
}
