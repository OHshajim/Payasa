import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivetRoute = ({children}) => {
  const AccessKey = localStorage.getItem("access_key");
  if(AccessKey){
    return children ;
  }
  else{
    return <Navigate to={"/login"} />
  }
};

PrivetRoute.propTypes = {
    children: PropTypes.element.isRequired,
};

export default PrivetRoute;

