import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline, DvrSharp } from "@material-ui/icons";
import { allRoutes } from "../../actions";

export default function AllRoutesData() {
  const { getRoutes } = useSelector((state) => state);

  console.log(getRoutes, "soy routes del admin")

  var infoRoutes = getRoutes.map((route, i) => {
   return ({ 
    id : route.id,
    origin : route.originName,
    destiny : route.destinyName,
    infoRoute : route.infoRoute,
    date : route.date,
    hours : route.hours,
    place : route.place,
    key: i,
    /* key : i + 1, */
    price : route.price,
   })}
  )

 const [data, setData] = useState(infoRoutes); 
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allRoutes());
  }, [data]); 

  const columns = [
    { field: "id", headerName: "ID", width: 100 }, 
    { field: "originName", headerName: "Origin", width: 150 },
    { field: "destinyName", headerName: "Destiny", width: 150 },
    { field: "infoRoute", headerName: "info Route", width: 150 },
    { field: "date", headerName: "Date", width: 150 },
    { field: "hours", headerName: "Time", width: 150 },
    { field: "place", headerName: "Seats", width: 150 },
    { field: "price", headerName: "Price", width: 150},
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