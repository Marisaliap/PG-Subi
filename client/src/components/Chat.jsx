import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Sass/Styles/Chat.scss";
import { Link } from "react-router-dom";
import { getChatPropio, getChatOtro, postChat } from "../actions";
import { FormattedMessage } from "react-intl";
import ReactScrollableFeed from "react-scrollable-feed";

export default function Chat() {
  const dispatch = useDispatch();
  const chatsPropio = useSelector((state) => state.chatPropio);
  const chatsOtro = useSelector((state) => state.chatOtro);
  const userInfo = useSelector((state) => state.userpro);
  const miraArriba = window.location.href.split("/chat/")[1];
  const SOYELPUTOAMO = userInfo.email;

  useEffect(() => {
      dispatch(getChatPropio(SOYELPUTOAMO,miraArriba));
      dispatch(getChatOtro(miraArriba,SOYELPUTOAMO));
  }, [dispatch]); // eslint-disable-line

  const [mensaje, setMensaje] = useState("");

  let allChats = chatsOtro.concat(chatsPropio);
  allChats = allChats.sort((a, b) => a.date - b.date);

  const dateahora = Date.now();
  const hours = (num) => {
    // TRANSFORMA EL TIEMPO DE MS a HRS-MIN
    const timeArray = ((dateahora - num) / 3600000).toString().split(".");
    const decimals = timeArray[1].slice(0, 2);
    const minutes = Math.floor((0 + "." + decimals) * 60);

    if (timeArray[0] > 0 && minutes > 0) {
      return parseInt(timeArray[0]) + " hrs " + parseInt(minutes) + " mins.";
    }
    if (timeArray[0] <= 0 && minutes >= 0) {
      return parseInt(minutes) + " mins";
    }

    return parseInt(timeArray[0]) + " hrs";
  };

  function handleChange(e) {
    e.preventDefault();
    setMensaje(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(
      postChat({
        author: userInfo.email,
        message: mensaje,
        email: window.location.href.split("/chat/")[1],
      })
    );
    setMensaje("");
    //dispatch(getChatPropio(SOYELPUTOAMO,miraArriba));
    //dispatch(getChatOtro(miraArriba,SOYELPUTOAMO));
  }

  return (
    <div className="Chat">
    <Link to="/home">
        <button className="buttonBlue"><FormattedMessage id= "about.button"/></button>
      </Link>
      <div className="losMensajesDeClarita">
        <ReactScrollableFeed>
          {allChats &&
            allChats.map((chat, i) => (
              <div className="teRevelas" key={i}>
                <p
                  className={
                    chat.author === userInfo.email
                      ? "paLaDerecha"
                      : "paLaIzquierda"
                  }
                  key={i + "m"}
                >
                  {chat.message}
                </p>
                <p
                  className={
                    chat.author === userInfo.email
                      ? "paLaDerechaHora"
                      : "paLaIzquierdaHora"
                  }
                  key={i + "d"}
                >
                  <FormattedMessage id="chat.sent" defaultMessage="sent:" />{" "}
                  {hours(chat.date)}{" "}
                  <FormattedMessage id="chat.ago" defaultMessage="ago" />
                </p>
              </div>
            ))}
        </ReactScrollableFeed>
      </div>
      <div className="clarita">
        <form
          className="FormClarita"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <textarea
            type="text"
            value={mensaje}
            className="elTextAreaDeClarita"
            name="mensaje"
            onChange={(e) => handleChange(e)}
          />
          <button className="button" type="submit">
            <FormattedMessage id="chat.send" defaultMessage="Send" />
          </button>
        </form>
      </div>
    </div>
  );
}
