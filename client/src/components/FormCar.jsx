import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { postCar } from '../actions';
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import swal from 'sweetalert';
import '../Sass/Styles/FormCar.scss';
import { FormattedMessage } from 'react-intl';

export default function FormCar() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();

  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    idUser: isAuthenticated ? user.email : '',
    patent: '',
    color: '',
    brand: '',
    model: '',
    cylinder: '',
  });


  function validate(input) {
    let errors = {};
    if (!input.patent) {
      errors.patent = 'Patent is required';
    } else if (!input.color) {
      errors.color = 'Color is required';
    } else if (!input.brand) {
      errors.brand = 'Brand is required';
    } else if (!input.model) {
      errors.model = 'Model is required';
    } else if (!input.cylinder) {
      errors.cylinder = 'Cylinder is required';
    }
    return errors;
  }

  function handleChange(e) {

    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      dispatch(postCar(input));
      setInput({
        patent: '',
        color: '',
        brand: '',
        model: '',
        cylinder: '',
      });
      swal({
        title: 'Good job!',
        text: 'Car created correctly',
        icon: 'success',
        button: 'Aww yiss!',
      });
      history.push('/route');
    } else {
      swal({
        title: 'Sorry',
        text: 'All mandatory fields must be filled to continue',
        icon: 'warning',
        button: 'Ok',
      });
    }
  }

  return (
    <div className="FormCar">
      <h1><FormattedMessage
							id="formCar.title"
							defaultMessage="Create your Car"/></h1>
      <form
        className="FormAUTO"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="cadaLineaAuto">
          <p className="label"><FormattedMessage
							id="formCar.patent"
							defaultMessage="Patent:"/></p>
          <input
            className="inputauto"
            type="text"
            name="patent"
            value={input.patent}
            onChange={(e) => handleChange(e)}
          />
          {errors.patent && <p className="errorcar">{errors.patent}</p>}
        </div>
        <div className="cadaLineaAuto">
          <p className="label">
          <FormattedMessage
							id="formCar.color"
							defaultMessage="Color:"/></p>
          <input
            className="inputauto"
            type="text"
            name="color"
            value={input.color}
            onChange={(e) => handleChange(e)}
          />
          {errors.color && <p className="errorcar">{errors.color}</p>}
        </div>
        <div className="cadaLineaAuto">
          <p className="label">
          <FormattedMessage
							id="formCar.brand"
							defaultMessage="Brand:"/></p>
          <input
            className="inputauto"
            type="text"
            name="brand"
            value={input.brand}
            onChange={(e) => handleChange(e)}
          />
          {errors.brand && <p className="errorcar">{errors.brand}</p>}
        </div>
        <div className="cadaLineaAuto">
          <p className="label">
          <FormattedMessage
							id="formCar.model"
							defaultMessage="Model:"/></p>
          <input
            className="inputauto"
            type="text"
            name="model"
            value={input.model}
            onChange={(e) => handleChange(e)}
          />
          {errors.model && <p className="errorcar">{errors.model}</p>}
        </div>
        <div className="cadaLineaAuto">
          <p className="label">
          <FormattedMessage
							id="formCar.cylinder"
							defaultMessage="Cylinder:"/></p>
          <input
            className="inputauto"
            type="text"
            name="cylinder"
            value={input.cylinder}
            onChange={(e) => handleChange(e)}
          />
          {errors.cylinder && <p className="errorcar">{errors.cylinder}</p>}
        </div>
        <button className="button" type="submit">
        <FormattedMessage
							id="formCar.add"
							defaultMessage=" Add Car"/>
        </button>
      </form>
    </div>
  );
}
