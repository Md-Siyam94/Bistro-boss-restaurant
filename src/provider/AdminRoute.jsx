import { HashLoader } from "react-spinners";
import useAuth from "./useAuth";
import { Children } from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "./useAdmin";


const AdminRoute = ({children}) => {
    const {user, loading}= useAuth()
    const location = useLocation()
    const [isAdmin, isAdminLoading] = useAdmin()
   

    if(loading || isAdminLoading ){
        return <div className="min-h-[calc(100vh-299px)] grid justify-center items-center "> <HashLoader
        // color={color}
        loading={loading}
        // cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      /></div>
    }

    if(user && isAdmin){
        return children
    }

    return <Navigate state={location?.pathname} to={'/'}></Navigate>
};

export default AdminRoute;