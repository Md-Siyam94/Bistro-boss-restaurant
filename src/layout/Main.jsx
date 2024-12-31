import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";


const Main = () => {
    return (
        
        <div  className="max-w-screen-2xl mx-auto">
            <header >
                    <Navbar></Navbar>
            </header>
            <main className="min-h-[calc(100vh-299px)]">
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Main;