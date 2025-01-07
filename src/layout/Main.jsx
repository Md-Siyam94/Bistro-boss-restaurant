import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";



const Main = () => {
    const location = useLocation()
    const isLogin = location.pathname.includes("login") || location.pathname.includes("signup")
    return (

        <div className="max-w-screen-2xl mx-auto">
            <header >
                {
                    isLogin || <Navbar></Navbar>
                }
            </header>
            <main className="min-h-[calc(100vh-299px)]">
                <Outlet></Outlet>
            </main>
            <footer>
                {
                    isLogin || <Footer></Footer>
                }
            </footer>
        </div>
    );
};

export default Main;