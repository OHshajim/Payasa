import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Loader from "../Shared/Loader";

const AgentRoute = ({ children }) => {
  const AccessKey = localStorage.getItem("access_key");
  const { user, loading } = useContext(AuthContext);

  if (!AccessKey) {
    window.localStorage.clear();
    return <Navigate to={"/login"} />;
  }
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader />
      </div>
    );
  }
  if (user?.status === "Agent") {
    return children;
  }

  window.localStorage.clear();
  return <Navigate to={"/login"} />;
};

export default AgentRoute;
