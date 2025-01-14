import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivetRoute from "../provider/PrivetRoute";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/User/Cart/Cart";
import Users from "../pages/Dashboard/Admin/AllUsers/Users";
import AddItems from "../pages/Dashboard/Admin/Add Items/AddItems";
import AdminRoute from "../provider/AdminRoute";
import ManageItem from "../pages/Dashboard/Admin/Manage Item/ManageItem";
import UpdateItem from "../pages/Dashboard/Admin/Update Item/UpdateItem";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: "/our-menu",
          element: <Menu></Menu>
        },
        {
          path: "/order/:category",
          element:  <Order></Order>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>
        }
        
      ]
    },
    {
      path: "/dashboard",
      element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
      children: [
        // normal user routes
        {
          path: "/dashboard/cart",
          element: <Cart></Cart>
        },

        // Admin routes
        {
          path: "/dashboard/add-items",
          element: <AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path: "/dashboard/manage-items",
          element: <AdminRoute><ManageItem></ManageItem></AdminRoute>
        },
        {
          path: "/dashboard/update-item/:id",
          element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>
        },
        {
          path: "/dashboard/users",
          element: <AdminRoute><Users></Users></AdminRoute>
        }
      ]
    }
  ]);


  export default router