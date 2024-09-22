import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import DashboardNav from "../Components/DashboardNav";

const DashBoard = () => {
    const { user, loading } = useContext(AuthContext);
  return (
    <div className="flex">
      <div className="max-w-xs w-full">
        <div className="w-full">
          <DashboardNav />
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
              alt="user"
              src="https://i.ibb.co.com/Mc6FwVb/112186-OOJKAQ-59.jpg"
            />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoard;
