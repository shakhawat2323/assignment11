import UseAuth from "@/Component/Hook/UseAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loding from "./Loding";

const PrivetRouter = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center py-96  ">
        <Loding></Loding>
      </div>
    );
  }

  if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }

  return children;
};

export default PrivetRouter;
