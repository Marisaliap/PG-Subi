import React from "react";
import "../styles/Topbar.css";
import { NotificationsNone, Settings } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useAuth0 } from '@auth0/auth0-react';

export default function Topbar() {
  const { userpro } = useSelector(state => state);
  const { user} = useAuth0();
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Hola { userpro.name } </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={ user.photo||userpro.photo } alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}