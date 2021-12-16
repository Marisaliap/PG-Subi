import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/UserList.css";
import { DataGrid } from "@material-ui/data-grid";
// import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { getAllUserAdmin, getId, getUserAdmin } from "../../actions";

export default function UserList() {
  const { usuariosRegistrados } = useSelector((state) => state);
  var filtrados = usuariosRegistrados.map((e) => ({
    id: e.email,
    name: e.name,
    lastname: e.lastName,
    genre: e.genre,
    admin: e.isAdmin,
    photo: e.photo,
    banned: e.isBanned,
  }));

  const [data, setData] = useState(filtrados); // eslint-disable-line
  const dispatch = useDispatch();

  // ---------------------------------<useEffect>---------------------------------
  useEffect(() => {
    dispatch(getAllUserAdmin());
    return () => {
      dispatch(getAllUserAdmin());
    };
  }, [dispatch]);

  useEffect(
    (id) => {
      dispatch(getUserAdmin(id));
    },
    [dispatch]
  );

  // ___________________________________________________________________________________________

  // ---------------------------------<handles>---------------------------------

  const handleId = (id) => {
    dispatch(getId(id));
    dispatch(getUserAdmin(id));
  };
  // _______________________________________________________________________________

  // -------------------------------------------<material-ui>---------------------------------
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "user",
      headerName: "User Full Name",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.photo} alt="" />
            {params.row.name + " "}
            {params.row.lastname}
          </div>
        );
      },
    },
    { field: "genre", headerName: "Gender", width: 130 },
    {
      field: "admin",
      headerName: "Admin",
      width: 120,
    },
    {
      field: "banned",
      headerName: "Banned",
      width: 120,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 280,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/users/" + params.row.id}>
              <button
                className="userListEdit"
                onClick={() => handleId(params.row.id)}
              >
                Edit User
              </button>
            </Link>
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
}
