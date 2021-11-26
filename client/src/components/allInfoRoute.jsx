// import React from "react";
// import { useDispatch, useSelector } from 'react-redux';
// //import { useState, useEffect } from 'react';
// import { Link, NavLink } from "react-router-dom";
// import { CardRoute } from "./CardRoute";
// import { CardCar } from "./CardCar";
// import { CardUser } from "./CardUser";

// export default function allInfoRoute() {
  
//   const dispatch = useDispatch();
//   const user = useSelector((state) => state.user);
  
//   function handleClick(e) {
//     e.preventDefault();
//   }
  
  
  
//   return (
//     <div>
//       <button
//         onClick={(e) => {
//           handleClick(e);
//         }}
//       >
//         {" "}
//         Refresh Routes{" "}
//       </button>
//       <div>
//         <select>
//           <option value="asc">Ascendente</option>
//           <option value="desc">Descendente</option>
//         </select>
//         <select>
//           <option value="opcion1">Opción Uno</option>
//           <option value="opcion2">Opción Dos</option>
//           <option value="opcion3">Opción Tres</option>
//           <option value="opcion4">Opción Cuatro</option>
//         </select>
//       </div>

//       {user?.map((el) => {
//         return (
//           <div>
//             <Link>
//               <CardRoute
//                 origin={el.origin}
//                 destiny={el.destiny}
//                 date={el.date}
//                 hours={el.hours}
//                 place={el.place}
//               />
//             </Link>
//             <Link>
//               <CardUser
//                 photo={el.photo}
//                 name={el.name}
//                 lastName={el.lastName}
//                 genre={el.genre}
//                 age={el.age}
//                 calification={el.calification}
//               />
//             </Link>
//             <Link>
//               <CardCar
//                 patent={el.patent}
//                 brand={el.brand}
//                 model={el.model}
//                 color={el.color}
//               />
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
