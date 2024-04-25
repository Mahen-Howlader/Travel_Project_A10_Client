import { createBrowserRouter } from "react-router-dom";
import Rootmain from "../Root/Rootmain";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Rootmain></Rootmain>
    },
  ]);

export default  router;