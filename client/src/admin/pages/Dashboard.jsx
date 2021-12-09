import Chart from "../../admin/Chart";
import FeaturedInfo from "../../admin/FeaturedInfo";
import "../../styles/Dashboard.css";
import { userData } from "../dummyData";
import WidgetSm from "../WidgetSm"; 
import WidgetLg from "../WidgetLg";

export default function Dashboard() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
      <div className="homeWidgets">
       <WidgetSm/>
       <WidgetLg/>
      </div>
    </div>
  );
}

