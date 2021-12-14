import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userPost } from "../actions/index";
import { useEffect } from "react";
import "../Sass/Styles/Post.scss";
import RatingStar from "./RatingStar.jsx";

export default function PostUserProfile(id) {
  const dispatch = useDispatch();
  const userpost = useSelector((state) => state.userPost);
  let ids = id.id;

  useEffect(() => {
    dispatch(userPost(ids));
  }, [dispatch, ids]);

  return (
    <div className="Post">
      <div>
        <div className="desContainer">
          {userpost.length > 0
            ? userpost.map((post, i) => (
                <div key={i} className="description">
                  <div className="infodate">
                    <h6>{post.date}</h6>
                    <h6>{post.author}</h6>
                    <RatingStar Rating={post.calification} />
                  </div>
                  <h5>{post.description}</h5>
                </div>
              ))
            : ""}
        </div>
      </div>
    </div>
  );
}
