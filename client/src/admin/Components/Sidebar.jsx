import "../../styles/Sidebar.css";

import {
  LineStyle,
  PermIdentity,
  AttachMoney,
  PersonAdd,
  MailOutline,
  DynamicFeed,
  Commute,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/admin/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Dashboard
              </li>
            </Link>

            <Link to="/admin/transactions" className="link">
              <li className="sidebarListItem">
                <AttachMoney className="sidebarIcon" />
                Sales
              </li>
            </Link>

            <Link to="/admin/routes" className="link">
              <li className="sidebarListItem">
                <Commute className="sidebarIcon" />
                Routes Info
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Link to="/admin/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                All Users
              </li>
            </Link>

            <Link to="/admin/newUser" className="link">
              <li className="sidebarListItem">
                <PersonAdd className="sidebarIcon" />
                Create New User
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              <a
                href="https://mail.google.com/mail/u/?authuser=grupo10.soyhenry@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mail
              </a>
            </li>

            <Link to="/admin/feedback" className="link">
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Feedback
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
