import { useDispatch, useSelector } from "react-redux";
import {
  deleteRoute,
  getRoute,
  getSuggestions,
  getSuggestions2,
  matchedCity,
} from "../actions";
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

    dispatch(getSuggestions(inputs.input1));
    dispatch(getSuggestions2(inputs.input2));
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
          name="input1"
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
          name="input2"
          style={{ width: "800px" }}
        />
        <datalist id="cities2">
          {cities2.map((city) => (
            <option>{city.name}</option>
          ))}
        </datalist>
        <Link to="/map">
          <button>Entrar</button>
        </Link>
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
}
