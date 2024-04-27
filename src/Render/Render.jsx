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
        loader: async () => {
          const response1 = await fetch("http://localhost:5000/touristsspots");
          // const response2 = await fetch("http://localhost:5000/anotherendpoint");
          // You can handle the responses here as needed
          const data1 = await response1.json();
          // const data2 = await response2.json();
          return [data1];
        }
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/addtouristsspot",
        element: <Register></Register>
      },
    ],
  },
]);

export default router;
// https://visitbrasil.com/en/sportfishing/
