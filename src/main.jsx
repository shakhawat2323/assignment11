import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Component/Route/Router.jsx";
import Authporvider from "./Component/FIrbase/AuthProvider/Authporvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authporvider>
      <RouterProvider router={router}></RouterProvider>
    </Authporvider>
  </StrictMode>
);
