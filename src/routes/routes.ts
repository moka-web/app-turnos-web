import { createBrowserRouter } from "react-router";
import App from "../App";
import { CreateAppointment } from "../pages/CreateAppointment";



export const router = createBrowserRouter([  {
    path: "/",
    index :true,
    Component: App,
    
  },
  {
    path:"/agendar",
    Component : CreateAppointment
  }

])







