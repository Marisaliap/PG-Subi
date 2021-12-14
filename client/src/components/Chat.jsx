import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../Sass/Styles/Chat.scss";
import { getChatPropio, getChatOtro, postChat } from "../actions";

export default function Chat() {
  const dispatch = useDispatch();
  const chatsPropio = useSelector((state) => state.chatPropio);
  const chatsOtro = useSelector((state) => state.chatOtro);
  const userInfo = useSelector((state) => state.userpro);
  const miraArriba = window.location.href.split("/chat/")[1];
  const SOYELPUTOAMO = userInfo.email;
  let a = true;
  useEffect(() => {
    setInterval(() => {
      dispatch(getChatPropio(SOYELPUTOAMO));
      dispatch(getChatOtro(miraArriba));
    }, 3000);
  }, []); // eslint-disable-line
  const [mensaje, setMensaje] = useState("");

  setInterval(() => {
    a = !a;
  }, 8000);

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
    if (timeArray[0] <= 0 && minutes > 0) {
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
    dispatch(getChatOtro(miraArriba));
    dispatch(getChatPropio(userInfo.email));
  }

  return (
    <div className="Chat">
      <div className="losMensajesDeClarita">
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
                sent: {hours(chat.date)} ago
              </p>
            </div>
          ))}
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
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
