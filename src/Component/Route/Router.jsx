import { createBrowserRouter } from "react-router-dom";
import Mainlaut from "../MainLaout/Mainlaut";
import Errore from "../Error/Errore";
import Home from "../Home/Home";
import Register from "../FIrbase/AuthProvider/Register";
import Login from "../FIrbase/AuthProvider/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlaut></Mainlaut>,
    errorElement: <Errore></Errore>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default router;
