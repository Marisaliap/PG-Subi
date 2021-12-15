import "../../styles/WidgetLg.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getOrderDetails } from "../../actions";

export default function WidgetLg() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getOrderDetails()), [dispatch]);

  const registeredUser = useSelector((state) => state.usuariosRegistrados);
  const orders = useSelector((state) => state.orderDetails);
  let slicedOrders;

  if (orders.length < 5) {
    slicedOrders = orders.sort(function (a, b) {
      if (a.id < b.id) {
        return 1;
      }
      if (a.id > b.id) {
        return -1;
      }
      return 0;
    });
  } else {
    slicedOrders = orders
      .slice(orders.length - 4, orders.length)
      .sort(function (a, b) {
        if (a.id < b.id) {
          return 1;
        }
        if (a.id > b.id) {
          return -1;
        }
        return 0;
      });
  }

  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
          <tr className="widgetLgTr">
            <th className="widgetLgTh">Customer</th>
            <th className="widgetLgTh">Date</th>
            <th className="widgetLgTh">Amount</th>
            <th className="widgetLgTh">Status</th>
          </tr>
        </tbody>
        {slicedOrders.map((order) => {
          let date = order.createdAt.split("T");
          date = date[0].split("-").reverse().join("-");
          let user = registeredUser.find(
            (user) => user.email === order.userEmail
          );
          return (
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src={user && user.photo} alt="" className="widgetLgImg" />
                <span className="widgetLgName">
                  {user && user.name + " " + user.lastName}
                </span>
              </td>
              <td className="widgetLgDate">{date}</td>
              <td className="widgetLgAmount">{"$" + order.price}</td>
              <td className="widgetLgStatus">
                <Button
                  type={order.status === "created" ? "Approved" : "Pending"}
                />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
