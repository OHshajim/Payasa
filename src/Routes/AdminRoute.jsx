import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Shared/Loader";

const AdminRoute = ({ children }) => {
  const AccessKey = localStorage.getItem("access_key");
  const { user ,loading} = useContext(AuthContext);
  if (!AccessKey) {
    window.localStorage.clear();
    return <Navigate to={"/login"} />;
  }
  if (loading ) {
    return <div className="flex justify-center items-center h-screen"><Loader /></div>;
}
  if ( user?.status === "Admin") {
    return children;
  }
  window.localStorage.clear();
  return <Navigate to={"/login"} />;
};

export default AdminRoute;
