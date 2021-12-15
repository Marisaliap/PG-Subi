import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import { allRoutes } from "../../actions";

export default function AllRoutesData() {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(allRoutes());
    }, 150);
  }, [dispatch]); // eslint-disable-line
  const { getRoutes } = useSelector((state) => state);
  let infoRoutes =
    getRoutes && getRoutes.length > 0
      ? getRoutes.map((route, i) => {
          return {
            id: route.id,
            users: route.manejante,
            origin: route.originName,
            destiny: route.destinyName,
            date: route.date,
            hours: route.hours,
            place: route.place,
            restrictions: route.restriction,
            price: route.price,
            key: i,
          };
        })
      : [];

  const columns = [
    { field: "users", headerName: "Users", width: 180 },
    { field: "origin", headerName: "Origin", width: 180 },
    { field: "destiny", headerName: "Destiny", width: 180 },
    { field: "date", headerName: "Date", width: 120 },
    { field: "hours", headerName: "Time", width: 120 },
    { field: "place", headerName: "Seats", width: 120 },
    { field: "price", headerName: "Price", width: 120 },
    { field: "restrictions", headerName: "Preferences", width: 250 },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={infoRoutes}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
}
