import { useContext, useEffect, useState } from "react";
import Interface from "../../Components/AdminHome/Interface";
import Table from "../../Shared/Table";
import { AuthContext } from "../../Provider/AuthProvider";

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const [users, setUser] = useState(null);

  const AllUsers = async () => {
    await fetch(`${import.meta.env.VITE_URL}/allUsers`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  };

  useEffect(() => {
    AllUsers();
  }, [user]);

  return (
    <div className="my-10">
      <div>
        <Interface />
      </div>
      <div className="my-10"> <Table  users={users}/></div>
    </div>
  );
};

export default AdminDashboard;
