import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userPost } from "../actions/index";
import { useEffect } from "react";
import "../Sass/Styles/PostUserProfile.scss";
import RatingStar from "./RatingStar.jsx";

export default function PostUserProfile(id) {
  const dispatch = useDispatch();
  const userpost = useSelector((state) => state.userPost);
  let ids = id.id;

  useEffect(() => {
    dispatch(userPost(ids));
  }, [dispatch, ids]);

  return (
    <div className="Postuser">
      <div>
        <div className="desContaineruser">
          {userpost.length > 0
            ? userpost.map((post, i) => (
                <div key={i} className="descriptionuser">
                  <div className="infodateuser">
                    <h6>{post.date}</h6>
                    <h6>{post.author}</h6>
                    <RatingStar  Rating={post.calification} />
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
