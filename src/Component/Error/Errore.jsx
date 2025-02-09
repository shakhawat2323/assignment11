import Lottie from "lottie-react";
import Error from "./../../../public/json/Error.json";
import { NavLink } from "react-router-dom";

const Errore = () => {
  return (
    <div>
      <div className="w-96  block mx-auto mt-52">
        <Lottie animationData={Error}></Lottie>
      </div>
      <div className="text-center">
        <NavLink to="/" className="btn btn-primary">
          Home
        </NavLink>
      </div>
    </div>
  );
};

export default Errore;
