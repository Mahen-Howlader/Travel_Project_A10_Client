import { createBrowserRouter } from "react-router-dom";
import Rootmain from "../Root/Rootmain";
import Home from "../Components/Home.jsx/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootmain></Rootmain>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
    ],
  },
]);

export default router;
// https://visitbrasil.com/en/sportfishing/
