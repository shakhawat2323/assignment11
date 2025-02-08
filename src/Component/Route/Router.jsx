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
        element: <Addartifact></Addartifact>,
      },
      {
        path: "/allartifact",
        element: <Allartifact></Allartifact>,
        loader: () => fetch(`http://localhost:5000/count`),
      },
      {
        path: "/mypostartifact",
        element: <Mypostartifact></Mypostartifact>,
      },
      {
        path: "/mypostupdate/:id",
        element: <Mypostupdate></Mypostupdate>,
      },
      {
        path: "/detelescard/:id",
        element: <Detelscardchild></Detelscardchild>,
      },
      {
        path: "/allcartifactscarddeteles/:id",
        element: <Allartifactscarddeteles></Allartifactscarddeteles>,
      },
      {
        path: "/mylikedartifact",
        element: <MyLikedArtifacts></MyLikedArtifacts>,
      },
      {
        path: "/contactus",
        element: <Contactus></Contactus>,
      },
    ],
  },
]);
export default router;
