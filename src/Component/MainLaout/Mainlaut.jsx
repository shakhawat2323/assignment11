import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Mainlaut = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-250px)] mt-[88px]">
        <Outlet></Outlet>
      </div>
      <div className="mt-5">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Mainlaut;
