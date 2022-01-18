import { ArrowUpward, ArrowDownward } from "@material-ui/icons";
import "../../styles/FeaturedInfo.css";

export default function FeaturedInfo({ info }) {
  const sales = info[11].Sales;
  const costs = (sales * 2) / 100;
  const revenue = (sales * 10) / 100 - costs;

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${Math.ceil(revenue)}</span>
          <span className="featuredMoneyRate">
            {Math.ceil(
              ((info[11].Sales * 10 -
                info[11].Sales * 2 -
                (info[10].Sales * 10 - info[10].Sales * 2)) /
                (info[10].Sales * 10 - info[10].Sales * 2)) *
                100
            )}
            % <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${sales}</span>
          <span className="featuredMoneyRate">
            {Math.ceil(
              ((info[11].Sales - info[10].Sales) / info[10].Sales) * 100
            )}
            %
            <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Costs</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${Math.floor(costs)}</span>
          <span className="featuredMoneyRate">
            {Math.floor(
              (((info[11].Sales * 2) / 100 - (info[10].Sales * 2) / 100) /
                ((info[10].Sales * 2) / 100)) *
                100
            )}
            % <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
