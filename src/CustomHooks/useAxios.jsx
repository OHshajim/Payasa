import axios from "axios";

const secureAxios = axios.create({
    baseURL: 'https://lifecamp-server.vercel.app/'
})

const useAxios = () => {
    return secureAxios;
};

export default useAxios;