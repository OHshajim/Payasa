import { useContext, useEffect, useState } from "react";
import Interface from "../../Components/AdminHome/Interface";
import Table from "../../Shared/Table";
import { AuthContext } from "../../Provider/AuthProvider";

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const [users, setUser] = useState(null);
  const [search, setSearch] = useState(null);
  const [query, setQuery] = useState(null);
  console.log(search, query);

  const AllUsers = async () => {
    await fetch(`${import.meta.env.VITE_URL}/allUsers?query=${query}&&search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  };

  useEffect(() => {
    AllUsers();
  }, [user, search, query]);

  return (
    <div className="my-10">
      <div>
        <Interface />
      </div>
      <div className="my-10">
        {" "}
        <Table users={users} setQuery={setQuery} setSearch={setSearch} />
      </div>
    </div>
  );
};

export default AdminDashboard;
