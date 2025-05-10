import { createBrowserRouter } from "react-router";
import MainLayout from "../Homelayout/MainLayout";
import Home from "../page/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        index: true,
        element:<Home/>
      }
    ]
  },
]);