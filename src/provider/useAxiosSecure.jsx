import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";




const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    // const navigate = useNavigate()
    // const {logOutUser}= useAuth()

    // request interseptor to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem("access-token")

        config.headers.authorization = `Bearer ${token}`


        return config
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // Interseptors 401 and 403 status

    axiosSecure.interceptors.response.use(function (response) {
        return response
    }, async (error) => {
        const status = error.response.status;
        // console.log("status code from line 33",status);
        if (status === 401 || status === 403) {
            console.log("You have to logout now");
            // TODO: Log out user and navigate to login page

            // await logOutUser()
            // navigate("/login")

        }
        return Promise.reject(error);
    });
    return axiosSecure
};

export default useAxiosSecure;