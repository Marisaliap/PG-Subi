import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Message() {
  const userInfo = useSelector((state) => state.userpro);

  return (
    <div style={{ height: 300, width: "100%" }}>
      <div className="centralo">
        <h1 className="tituloUserProfile">Chats</h1>
      </div>
      {userInfo && userInfo.chats && userInfo.chats.length > 0 && (
        <>
          {userInfo.chats
            .reduce(
              (acc, currentValue) =>
                acc.includes(currentValue.author)
                  ? acc
                  : [...acc, currentValue.author],
              []
            )
            .map((author) => (
              <>
                <br />
                <Link to={`/chat/${author}`}>{author}</Link>
              </>
            ))}
        </>
      )}
    </div>
  );
}
