import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMejorasYReclamos } from "../../actions";
import Chart from "../Components/Chart";
import FeaturedInfo from "../Components/FeaturedInfo";
import "../../styles/Dashboard.css";
import { userData } from "../Components/salesData";
import WidgetSm from "../Components/WidgetSm";
import WidgetLg from "../Components/WidgetLg";
import { getOrderDetails } from "../../actions";

export default function Dashboard() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMejorasYReclamos());
  }, [dispatch]);

  useEffect(() => dispatch(getOrderDetails()), [dispatch]);

  const orders = useSelector((state) => state.orderDetails);
  //eslint-disable-next-line
  const newOrders =
    orders &&
    orders.forEach((order) => {
      let date = order.createdAt.split("T");
      date = date[0];
      let dateSplit = date.split("-");
      order.month = dateSplit[1];
    });
  const info = userData(orders);

  return (
    <div className="home">
      <FeaturedInfo info={info} />
      <Chart info={info} title="Sales Analytics" grid dataKey="Sales" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
