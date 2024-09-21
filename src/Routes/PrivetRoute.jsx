import { Navigate } from "react-router-dom";

const PrivetRoute = ({children}) => {
  const AccessKey = localStorage.getItem("access_key");
  if(AccessKey){
    return children ;
  }
  else{
    return <Navigate to={"/login"} />
  }
};

export default PrivetRoute;

