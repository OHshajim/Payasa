import { CiLogout } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
   const logout = () => {
    window.localStorage.clear();
    navigate("/login");
  };
  return (
    <button
      onClick={logout}
      className="flex items-center btn btn-ghost text-rose-400 text-lg font-bold rounded-xl hover:bg-green-950"
    >
      <CiLogout className="text-2xl" />
      LogOut
    </button>
  );
};

export default LogOut;
