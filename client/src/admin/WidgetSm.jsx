import "../styles/WidgetSm.css";
import { Visibility } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
export default function WidgetSm() {
  
  const registeredUser = useSelector(state => state.usuariosRegistrados)
  let slicedUsers;
  console.log(registeredUser, 'soy dash')
 
  if (registeredUser.length < 5) {
    slicedUsers = registeredUser
  } else slicedUsers = registeredUser.slice(registeredUser.length - 5, registeredUser.length)

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">

        {slicedUsers.length > 0 && slicedUsers.map(user => {
           return ( <li className="widgetSmListItem">
             <img
               src={user.photo}
               alt=""
               className="widgetSmImg"
             />
             <div className="widgetSmUser">
               <span className="widgetSmUsername">{user.name + ' ' + user.lastName} </span>

             </div>
             {<NavLink to={`/admin/users/${user.email}`}><button className="widgetSmButton">
               <Visibility className="widgetSmIcon" />
               Display
             </button></NavLink>}
           </li>)

        })}
      </ul>
    </div>
  );
}