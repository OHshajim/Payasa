import Interface from "../../Components/AdminHome/Interface";
import Table from "../../Shared/Table";

const AdminDashboard = () => {
  return (
    <div className="my-10">
      <div>
        <Interface />
      </div>
      <div className="my-10">
        <Table />
      </div>
    </div>
  );
};

export default AdminDashboard;
