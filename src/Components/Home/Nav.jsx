import { useContext } from "react";
import { IoIosNotifications } from "react-icons/io";
import { AuthContext } from "../../Provider/AuthProvider";

const Nav = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar  py-4">
      <div className="flex-1">
        <div className="w-[45px]">
          <img
            alt="User"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            className="rounded-full ring-2"
          />
        </div>
        <div className="flex flex-col mx-2  items-start">
          <h4 className="font-semibold text-base ">{user?.email}</h4>
          <p className="text-xs text-zinc-500 font-semibold">
            {user.number} - {user.status}
          </p>
        </div>
      </div>

      {/* If want to add some contents */}

      <div>
        <button className="btn btn-ghost text-xl rounded-full">
          <IoIosNotifications />
        </button>
      </div>
      <div className="w-12">
        <img alt="User" src="/Logo(1).png" />
      </div>
    </div>
  );
};

export default Nav;
