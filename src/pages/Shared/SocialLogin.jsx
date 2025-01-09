import { FcGoogle } from "react-icons/fc";
import useAuth from "../../provider/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../provider/useAxiosPublic";

const SocialLogin = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { googleLogin } = useAuth()
    const axiosPublic = useAxiosPublic()



    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }
                // console.log(result.user.email);
                axiosPublic.post("/users", userInfo)
                    .then(res => {
                        console.log("from axios public",res.data);
                        navigate(location?.state ? location?.state : "/")
                    })
                    .catch(err=>{
                        console.log("error from google login by saving user data", err.message);
                    })

            })
            .catch(err => {
                console.log("error from google login", err.message);
            })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className="btn w-full ">
                <FcGoogle className="text-3xl" />
                Login With Google
            </button>
        </div>
    );
};

export default SocialLogin;