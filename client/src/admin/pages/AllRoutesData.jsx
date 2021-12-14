import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import { allRoutes } from "../../actions";

export default function AllRoutesData() {
  const { getRoutes } = useSelector((state) => state);

  console.log(getRoutes, "soy routes del admin")

  var infoRoutes = getRoutes.map((route, i) => {
   return ({ 
    id : route.id,
    users : route.users[0].UserRoutes.userEmail,
    origin : route.originName,
    destiny : route.destinyName,
    date : route.date,
    hours : route.hours,
    place : route.place,
    restrictions : route.restriction,
    price : route.price,
    key: i,
    /* key : i + 1, */
   
   })}
  )

 const [data, setData] = useState(infoRoutes); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allRoutes());
  }, [data]); 

  const columns = [
    { field: "users", headerName: "Users", width: 180},
    { field: "origin", headerName: "Origin", width: 180 },
    { field: "destiny", headerName: "Destiny", width: 180 },
    { field: "date", headerName: "Date", width: 120 },
    { field: "hours", headerName: "Time", width: 120 },
    { field: "place", headerName: "Seats", width: 120 },
    { field: "price", headerName: "Price", width: 120},
    { field: "restrictions", headerName: "Preferences", width: 250},
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  ); 
}

