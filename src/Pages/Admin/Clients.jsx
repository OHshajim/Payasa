import AllClientsTable from "../../Components/AdminHome/AllClientsTable";
import SectionTitle from "../../Shared/SectionTitle";

const Clients = () => {
  return (
    <div className="lg:p-10 p-5">
      <SectionTitle heading={"Clients Details and Updates"} subHeading={"All Clients"} />
      <AllClientsTable />
    </div>
  );
};

export default Clients;
