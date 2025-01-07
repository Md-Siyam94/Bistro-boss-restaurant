import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
// import ClipLoader from "react-spinners/ClipLoader";
import { HashLoader } from "react-spinners";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div className="min-h-[calc(100vh-299px)] grid justify-center items-center "> <HashLoader
        // color={color}
        loading={loading}
        // cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>
    }
    if(user){
        return children
    }
    return (
        <Navigate state={location?.pathname} to={"/login"}></Navigate>
    );
};

export default PrivetRoute;