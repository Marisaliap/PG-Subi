import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { deleteUser, getAllUsers, getId, getUserAdmin,getUserDetail } from "../../actions";
import Paged from "../Components/PagedNOUSAR" 

export default function UserList() {
  const { usuariosRegistrados } = useSelector(state => state)
  var filtrados = usuariosRegistrados.map(e => 
    ({ 
      id: e.email,
    name : e.name,
    lastname: e.lastName,
    genre: e.genre,
    admin: e.isAdmin,
    photo: e.photo
   })
  )

 const [data, setData] = useState(filtrados); 
  const dispatch = useDispatch();

// ------------------<paged>------------------

const [currentPage, setCurrentPage] = useState(1)      //le paso el estado local con la primer página que se renderiza
const [ usersPerPage ] = useState (15)                   //cuántos personajes quiero por página
const indexOfLastUser = currentPage * usersPerPage       //cuando empieza será 8 
const indexOffirstUser = indexOfLastUser - usersPerPage   // 0
const currentUsers = filtrados.slice(indexOffirstUser, indexOfLastUser)     //slice toma una porción del arreglo dependiendo lo que le estoy pasando por parámetro

const pagedTotal = (pageNumber) => {                      
    setCurrentPage(pageNumber)                        //acá el paginado va a setear la pagina en el numero de pagina que se vaya clickeando
}                                                     //cuando setea la página los índices cambian y el slide se va modificando

// ------------------<pagedEnd>------------------

  useEffect(() => {
    dispatch(getAllUsers());
  }, [currentUsers]); 

  useEffect((id) => {
    dispatch(getUserAdmin(id));
    dispatch(getUserDetail(id));
  }, []); 


  const handleDelete = (id) => {
    dispatch(deleteUser(id))
    setData(currentUsers.filter((item) => item.id !== id))
  }
  
  const handleId = (id) => {
    dispatch(getId(id))
    dispatch(getUserAdmin(id)) 
    dispatch(getUserDetail(id))
  }

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
      field: "action",
      headerName: "Actions",
      width: 280,
      renderCell: (params) => {
        return (
          <>
             <Link to={"/admin/user/" + params.row.id}>
              <button className="userListEdit" onClick={() => handleId(params.row.id)}>Edit User</button>
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
    <div>
    <div className="userList">
      <DataGrid
        rows={currentUsers}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
    <div>
        <Paged
          usersPerPage= { usersPerPage }
          filtrados= { filtrados.length }                     //le paso allDogs.length porque necesito un valor numérico
          pagedTotal= { pagedTotal }
        />
      </div>
    </div>
    
  ); 
}