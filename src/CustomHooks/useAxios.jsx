import axios from "axios";
import {useNavigate } from "react-router-dom";

const secureAxios = axios.create({ baseURL: "http://localhost:5000/" });

const useAxios = () => {
  const Navigate = ({ path }) => {
    const nav = useNavigate();
    nav(path)
  };

  secureAxios.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access_key");
      config.headers.authorization = `bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  secureAxios.interceptors.response.use(
    function (response) {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      console.log("error in interceptor", status, error);

      if (status === 401 || status === 403) {
        await window.localStorage.clear();
        Navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return secureAxios;
};

export default useAxios;
