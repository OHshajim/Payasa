const LogOut = () => {
  window.localStorage.removeItem("access_key");
  window.localStorage.removeItem("userID");
};

export default LogOut;
