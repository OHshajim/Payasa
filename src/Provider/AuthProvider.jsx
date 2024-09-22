import { createContext, useEffect, useState } from "react";
import useAxios from "../CustomHooks/useAxios";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const axiosSecure = useAxios();
  const [loading, setLoad] = useState(true);
  const userDetails = async () => {
    const id = localStorage.getItem("userID");
    if (id) {
      axiosSecure.get(`/userDetails/${id}`)
        .then((data) => {
          setUser(data?.data);
          setLoad(false);
        });
    }
  };

  useEffect(() => {
    userDetails();
  }, []);
  // console.log(user);
  
  const info = { user, loading, setLoad ,setUser};

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
