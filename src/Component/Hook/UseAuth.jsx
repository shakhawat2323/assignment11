import { useContext } from "react";
import { AuthContext } from "../FIrbase/AuthProvider/Authporvider";

const UseAuth = () => {
  const Authcontexts = useContext(AuthContext);
  return Authcontexts;
};
export default UseAuth;
