import { GrBookmark, GrCalendar, GrCart, GrHome, GrMail, GrMenu, GrShop, } from "react-icons/gr";
import { BiMessageAdd } from "react-icons/bi";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    // TODO: get isAdmin value to the database

    const isAdmin = true;
    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-yellow-700 bg-opacity-60">
                <ul className="menu">
                    <li>
                        <NavLink to={"/dashboard/user-home"}>
                            <GrHome></GrHome>
                            User Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/reservation"}>
                            <GrCalendar></GrCalendar>
                            Reservation</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/cart"}>
                            <GrCart></GrCart>
                            My Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/add-review"}>
                            <BiMessageAdd />
                            Add Review</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/dashboard/my-booking"}>
                            <GrBookmark />
                            My Booking</NavLink>
                    </li>
                    <div className="divider"></div>
                    <li>
                        <NavLink to={"/"}>
                            <GrHome></GrHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/our-menu"}>
                            <GrMenu></GrMenu>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/order/salad"}>
                            <GrShop></GrShop>
                            Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}>
                            <GrMail></GrMail>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className="flex-1 px-14">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Dashboard;