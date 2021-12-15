import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/UserList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { getOrderDetails, deleteOrder, getAllUsers } from "../../actions";

export default function Transactions() {
  const orders = useSelector((state) => state.orderDetails);
  const registeredUser = useSelector((state) => state.usuariosRegistrados);
  var filtrados = orders.map((e) => {
    let date = e.updatedAt.split("T");
    date = date[0].split("-").reverse().join("-");
    let user = registeredUser.find((user) => user.email === e.userEmail);
    return {
      id: e.id,
      user: e.userEmail,
      paymentId: e.payment_id,
      price: e.price,
      date: date,
      name: user && user.name + " " + user.lastName,
      photo: user && user.photo,
      status: e.status === "created" ? "Approved" : "Pending",
    };
  });

  const [data, setData] = useState(filtrados);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderDetails());
    dispatch(getAllUsers());
  }, [data]); // eslint-disable-line

  const handleDelete = (id) => {
    dispatch(deleteOrder(id));
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "name",
      headerName: "User",
      width: 250,
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
    { field: "paymentId", headerName: "Payment Id", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
    {
      field: "price",
      headerName: "Price",
      width: 150,
    },
    {
      field: "date",
      headerName: "Date",
      width: 150,
    },
    {
      field: "action",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        return (
          <>
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
      {/* eslint-disable-next-line */}
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={[8]}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  );
}
