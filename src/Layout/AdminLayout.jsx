import { Outlet } from "react-router-dom";
import AdminNav from "../Components/AdminHome/AdminNav";

const AdminLayout = () => {
  return (
    <div className="flex">
      <div>
        <AdminNav />
      </div>
      <div className="w-full">
        <div className="navbar bg-base-300 w-full px-5 pt-4 ">
          <div className="flex-1">
            <a className=" text-xl font-bold">Dashboard</a>
          </div>

          <img
            className="w-12 rounded-full"
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
