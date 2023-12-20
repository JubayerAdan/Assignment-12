import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://mistitsu-server.vercel.app",
});

const useAxiosSecure = () => {
  return axiosSecure;
};

export default useAxiosSecure;
