import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Nav = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="navbar  py-4">
      <div className="flex-1 gap-2">
        <div className="w-[50px]">
          <img
            alt="User"
            src="https://i.ibb.co.com/Mc6FwVb/112186-OOJKAQ-59.jpg"
            className="rounded-full ring-4 ring-green-600"
          />
        </div>
        <div className="flex flex-col mx-2  items-start ">
          <h4 className="font-semibold text-base text-zinc-300">{user?.email}</h4>
          <p className="text-xs text-zinc-400 font-bold">
            0{user?.number} - {user?.status}
          </p>
        </div>
      </div>

      <div className="w-20">
        <img alt="Logo" src={"/Logo(1).png"} />
      </div>
    </div>
  );
};

export default Nav;
