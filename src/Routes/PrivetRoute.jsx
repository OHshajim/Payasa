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

import PropTypes from 'prop-types';
PrivetRoute.propTypes = {
    children: PropTypes.element.isRequired,
};

export default PrivetRoute;

