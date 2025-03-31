import { createBrowserRouter } from "react-router-dom";
import Mainlaut from "../MainLaout/Mainlaut";
import Errore from "../Error/Errore";
import Home from "../Home/Home";
import Register from "../FIrbase/AuthProvider/Register";
import Login from "../FIrbase/AuthProvider/Login";
import Addartifact from "../Pages/Addartifact";
import Allartifact from "../Pages/Allartifact";
import Contactus from "../Pages/Contactus";
import Mypostartifact from "../Pages/Mypostartifact";
import Mypostupdate from "../Pages/Mypostupdate";
import Detelscardchild from "../Pages/Detelscardchild";
import Allartifactscarddeteles from "../Pages/Allartifactscarddeteles";
import MyLikedArtifacts from "../Pages/MyLikedArtifacts";
import PrivetRouter from "./../FIrbase/AuthProvider/PrivetRouter";
import Dashboard from "../Dashboard/Dashboard";
import Profile from "../Dashboard/Profile";

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
      {
        path: "/addartifact",
        element: (
          <PrivetRouter>
            <Addartifact></Addartifact>,
          </PrivetRouter>
        ),
      },
      {
        path: "/allartifact",
        element: <Allartifact></Allartifact>,
        loader: () => fetch(`https://assignement11.vercel.app/count`),
      },
      {
        path: "/mypostartifact",
        element: (
          <PrivetRouter>
            <Mypostartifact></Mypostartifact>
          </PrivetRouter>
        ),
      },
      {
        path: "/mypostupdate/:id",
        element: (
          <PrivetRouter>
            <Mypostupdate></Mypostupdate>,
          </PrivetRouter>
        ),
      },
      {
        path: "/detelescard/:id",
        element: (
          <PrivetRouter>
            <Detelscardchild></Detelscardchild>
          </PrivetRouter>
        ),
      },
      {
        path: "/allcartifactscarddeteles/:id",
        element: (
          <PrivetRouter>
            <Allartifactscarddeteles></Allartifactscarddeteles>
          </PrivetRouter>
        ),
      },
      {
        path: "/mylikedartifact",
        element: (
          <PrivetRouter>
            <MyLikedArtifacts></MyLikedArtifacts>
          </PrivetRouter>
        ),
      },
      {
        path: "/contactus",
        element: <Contactus></Contactus>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
export default router;
