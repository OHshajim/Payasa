import axios from "axios";

const secureAxios = axios.create({
    baseURL: 'http://localhost:5000/'
})

const useAxios = () => {
    return secureAxios;
};

export default useAxios;