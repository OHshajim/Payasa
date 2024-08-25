import { Navigate } from "react-router-dom";

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

import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
AdminRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
export default AdminRoute;
