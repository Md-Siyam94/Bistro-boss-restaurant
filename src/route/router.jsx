import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import Menu from "../pages/Menu/Menu";

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
        
      ]
    },
  ]);


  export default router