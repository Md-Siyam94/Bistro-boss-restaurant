import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";

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
          element: <Order></Order>
        }
        
      ]
    },
  ]);


  export default router