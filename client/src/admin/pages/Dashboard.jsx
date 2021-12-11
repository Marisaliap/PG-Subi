import Chart from "../../admin/Chart";
import FeaturedInfo from "../../admin/FeaturedInfo";
import "../../styles/Dashboard.css";
import { userData } from "../dummyData";
import WidgetSm from "../WidgetSm"; 
import WidgetLg from "../WidgetLg";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getOrderDetails } from "../../actions";

export default function Dashboard() {
 
  const dispatch = useDispatch()

  useEffect(() => dispatch(getOrderDetails()), [dispatch])

  const orders = useSelector(state => state.orderDetails)

  const newOrders =orders && orders.forEach(order => {
    let date = order.createdAt.split('T')
    date = date[0]
    let dateSplit = date.split('-')
    order.month = dateSplit[1]
  })
  const info = userData(orders)
  return (
    <div className="home">
      <FeaturedInfo info={info} />
      <Chart info={info} title="User Analytics" grid dataKey="Sales"/>
      <div className="homeWidgets">
       <WidgetSm />
       <WidgetLg/>
      </div>
    </div>
  );
}

