import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { deleteUser, getAllUsers, getId, getUserAdmin, getUserDetail } from "../../actions";

export default function UserList() {
  const { usuariosRegistrados } = useSelector(state => state)
  var filtrados = usuariosRegistrados.map(e =>
  ({
    id: e.email,
    name: e.name,
    lastname: e.lastName,
    genre: e.genre,
    admin: e.isAdmin,
    photo: e.photo
  })
  )

  const [data, setData] = useState(filtrados);
  const dispatch = useDispatch();


  // ---------------------------------<useEffect>---------------------------------
  useEffect((id) => {
    dispatch(getAllUsers());
    // dispatch(getUserDetail(id));
  }, [dispatch]);



  useEffect((id) => {
    dispatch(getUserAdmin(id));
    // dispatch(getUserDetail(id));
    }, [dispatch]);

  // ___________________________________________________________________________________________


  // ---------------------------------<handles>---------------------------------
  const handleDelete = (id) => {
    dispatch(deleteUser(id))
    setData(data.filter((item) => item.id !== id))
  }

  const handleId = (id) => {
    dispatch(getId(id))
    dispatch(getUserAdmin(id))
  }
  // _______________________________________________________________________________

  // -------------------------------------------<material-ui>---------------------------------
  const columns = [
    { field: "id", headerName: "ID", width: 200 },
    {
      field: "user",
      headerName: "User",
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
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/admin/users/" + params.row.id}>
              <button className="userListEdit" onClick={() => handleId(params.row.id)}>Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
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
        checkboxSelection
      />
    </div>
  );
}