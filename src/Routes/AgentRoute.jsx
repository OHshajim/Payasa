import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import PropTypes from "prop-types";

const AgentRoute = ({ children }) => {
  const AccessKey = localStorage.getItem("access_key");
  const { user } = useContext(AuthContext);
  if (!AccessKey) {
    return <Navigate to={"/login"} />;
  }
  if (user?.status === "Agent") {
    return children;
  }
  return <Navigate to={"/login"} />;
};

AgentRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
export default AgentRoute;
