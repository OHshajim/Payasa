import DataChart from "../../Components/AdminHome/DataChart";
import OverViewInfo from "../../Components/AdminHome/OverViewInfo";
import SectionTitle from "../../Shared/SectionTitle";

const Overview = () => {
  return (
    <div className="p-5 lg:p-10">
      <SectionTitle heading={"Overview"} subHeading={"See users Activities"}/>
      <div>
        <OverViewInfo />
      </div>
      <DataChart/>
    </div>
  );
};

export default Overview;
