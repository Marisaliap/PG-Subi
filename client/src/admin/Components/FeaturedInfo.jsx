import { ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo({ info }) {
  const sales = info[0].Sales;
  const costs = (sales * 2) / 100;
  const revenue = (sales * 10) / 100 - costs;

  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${revenue}</span>
          <span className="featuredMoneyRate">
            100% <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${sales}</span>
          <span className="featuredMoneyRate">
            100% <ArrowUpward className="featuredIcon positive" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Costs</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">${costs}</span>
          <span className="featuredMoneyRate">
            100% <ArrowUpward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
}
