import DataChart from "../../Components/AdminHome/DataChart";
import OverViewInfo from "../../Components/AdminHome/OverViewInfo";
import TransactionTable from "../../Components/AdminHome/TransactionTable";

const Overview = () => {
  return (
    <div>
      <div>
        <OverViewInfo/>
        <DataChart />
        <TransactionTable/>
      </div>
    </div>
  );
};

export default Overview;