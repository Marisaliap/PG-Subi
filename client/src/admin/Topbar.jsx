import React from "react";
import "../styles/Topbar.css";
import { NotificationsNone, Settings } from "@material-ui/icons";
import { useSelector } from "react-redux";

export default function Topbar() {
  const { user } = useSelector(state => state);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Hola { user.name } </span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src={ user.photo } alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}