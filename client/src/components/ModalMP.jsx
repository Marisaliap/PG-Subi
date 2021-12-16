import React, { useEffect, useRef, useState } from "react";
import ReactDom from "react-dom";
import "../Sass/Styles/ModalMP.scss";
import axios from "axios";
import "../Sass/Styles/allInfoRoute.scss";
import { FormattedMessage } from "react-intl";

export const Modal = ({ setShowModal, route, user }) => {
  // close the modal when clicking outside the modal.
  const [datos, setDatos] = useState("");

  useEffect(() => {
    axios
      .post("/mercadopago", {
        idRoute: route.id,
        title: "Viaje",
        price: route.price,
        idUser: user.email,
      })
      .then((info) => setDatos(info.data))
      .catch((err) => console.error(err));
  }, [route.price]); // eslint-disable-line

  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
      axios.delete("/order/" + datos.id);
    }
  };
  const handledClose = (e) => {
    e.preventDefault();
    axios.delete("/order/" + datos.id);
    setShowModal(false);
  };
  //render the modal JSX in the portal div.
  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div className="modal">
        <button onClick={handledClose} className="buttonBlue">
          Back
        </button>
        <a href={datos.init_point}>
          <button className="button">
            <FormattedMessage
              id="modalmp.button"
              defaultMessage="Join this trip!"
            />
          </button>
        </a>
      </div>
    </div>,
    document.getElementById("portal")
  );
};
