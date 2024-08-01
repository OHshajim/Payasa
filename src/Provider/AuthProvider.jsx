import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoad] = useState(true);


  const info = { user, setUser, loading, setLoad};

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

import PropTypes from "prop-types";
AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default AuthProvider;
