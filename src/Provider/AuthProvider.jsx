import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoad] = useState(true);
  const userDetails = async () => {
    const id = localStorage.getItem("userID");
    if (id) {
      fetch(`${import.meta.env.VITE_URL}/userDetails/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setUser(data);
          console.log(data);
          setLoad(false);
        });
    }
  };

  useEffect(() => {
    userDetails();
  }, [loading]);
  const info = { user, loading, setLoad };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

import PropTypes from "prop-types";
AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default AuthProvider;
