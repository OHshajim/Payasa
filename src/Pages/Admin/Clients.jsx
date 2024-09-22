import AllClientsTable from "../../Components/AdminHome/AllClientsTable";
import SectionTitle from "../../Shared/SectionTitle";

const Clients = () => {
  return (
    <div>
      <SectionTitle heading={"Clients Details and Updates"} subHeading={"All Clients"} />
      <AllClientsTable />
    </div>
  );
};

export default Clients;
