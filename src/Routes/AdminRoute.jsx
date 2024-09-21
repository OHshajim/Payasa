import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AdminRoute = ({ children }) => {
  const AccessKey = localStorage.getItem("access_key");
  const { user } = useContext(AuthContext);
  if (!AccessKey) {
    return <Navigate to={"/login"} />;
  }
  if (user?.status === "Admin") {
    return children;
  }
  return <Navigate to={"/login"} />;
};

export default AdminRoute;
