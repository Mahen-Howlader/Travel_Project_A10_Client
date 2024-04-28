import { createBrowserRouter } from "react-router-dom";
import Rootmain from "../Root/Rootmain";
import Home from "../Components/Home.jsx/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Addtouristsspot from "../Components/AddtouristsSpot/Addtouristsspot";
import { useState } from "react";
import UseAuthHook from "../ContexApi/UseAuthHook";
import TouristSpotsCard from "../Components/TouristSpots.jsx/TouristSpotsCard";
import Touristsspots from "../Components/TouristsSpots/Touristsspots";
import Alltouristsspots from "../Components/AllTouristsspots/Alltouristsspots";
import AlltouristsspotsDetails from "../Components/AlltouristsspotsDetails/AlltouristsspotsDetails";
import Mylist from "../Components/MyList/Mylist";


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
      {
        path: "/addtouristsspot",
        element: <Addtouristsspot></Addtouristsspot>
      },
      {
        path: "/alltouristsspot",
        element: <Alltouristsspots></Alltouristsspots>,
      },
      {
        path: "/alltouristsspot/:id",
        element: <AlltouristsspotsDetails></AlltouristsspotsDetails>,
      },
      {
        path: "/mylist",
        element: <Mylist></Mylist>
      },
    ],
  },
]);

export default router;
// https://visitbrasil.com/en/sportfishing/
