import { createBrowserRouter } from "react-router";
import App from "../App";

import { AdminHome } from "../pages/AdminHome";



export const router = createBrowserRouter([  {
    path: "/",
    index :true,
    Component: App,
    
  },
  {
    path:"/admin",
    Component : AdminHome
  }

])







