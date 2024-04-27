import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Render/Render";
import Contexapi from "./ContexApi/Contexapi";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Contexapi>
      <RouterProvider router={router} />
    </Contexapi>
  </React.StrictMode>
);
