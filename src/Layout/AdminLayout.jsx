import { Outlet } from "react-router-dom";
import AdminNav from "../Components/AdminHome/AdminNav";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AdminLayout = () => {
  const { user, loading } = useContext(AuthContext);
  return (
    <div className="flex">
      <div  className="max-w-xs w-full hidden lg:block">
        <div className="w-full">
          <AdminNav />
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="navbar bg-base-300 w-full px-5 pt-4 ">
          <div className="flex-1">
            <a className=" text-xl font-bold">Dashboard</a>
          </div>

          <div>
            {loading || (
              <div className="font-semibold">
                <h3 className="text-base">{user.email}</h3>
                <p className="text-right font-semibold text-sm">
                  {user.number}
                </p>
              </div>
            )}
            <img
              className="w-12 rounded-full ml-2"
              alt="Tailwind CSS Navbar component"
              src="https://i.ibb.co.com/6gR6rQ6/Shajim.png"
            />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
