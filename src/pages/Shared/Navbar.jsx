import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    const routerOptions = <>
        <li><Link to={"/"} >HOME</Link></li>
        <li><Link to={"fd"}  >CONTACT US</Link></li>
        <li><Link to={"dfd"} >DASHBOARD</Link></li>
        <li><Link to={"/our-menu"} >OUR MENU</Link></li>
        <li><Link to={"/order/salad"} >OUR SHOP</Link></li>
    </>

    return (
        <div className="navbar fixed z-50 bg-opacity-30 max-w-screen-2xl mx-auto bg-black text-white px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       {routerOptions}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">BISTRO BOSS <br />Restaurant</a>
            </div>

            <div className="navbar-end gap-2">
                <div className="navbar-center hidden lg:flex font-semibold">
                    <ul className="menu menu-horizontal px-1 "
                    >
                        {routerOptions}
                    </ul>
                </div>
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;