import { createBrowserRouter } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Rootmain from "../Root/Rootmain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootmain></Rootmain>,
    children: [{
      path: "/",
      element: <Banner></Banner>,
    },]
  },
]);

export default router;
// https://visitbrasil.com/en/sportfishing/
