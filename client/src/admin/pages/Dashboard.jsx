import Chart from "../../admin/Chart";
import FeaturedInfo from "../../admin/FeaturedInfo";
import "../../styles/Dashboard.css";
import { userData } from "../dummyData";
/* import Users from "../Users"; */
/* import Sidebar from "../bar"; 
import Topbar from "../Topbar";  */
/* import WidgetLg from "../../components/widgetLg/WidgetLg"; */

export default function Dashboard() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
       {/*  <Users/> */}
       {/*  <WidgetLg/> */}
      </div>
    </div>
  );
}

