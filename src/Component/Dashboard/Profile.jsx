import React from "react";
import Bannar from "../../../public/Deshbord/bannarimagsss.png";
import Naruto from "../../../public/Deshbord/naruto.png";
import Button from "@mui/material/Button";

const Profile = () => {
  return (
    <div className="">
      <div className="relative">
        <div className="bg-slate-500 overflow-hidden   w-[900px] rounded-2xl mt-10 h-52">
          <img className="w-full " src={Bannar} alt="" />
        </div>
        <div className="absolute top-36 flex left-16  ">
          <img className="w-28 border bg-red-600  " src={Naruto} alt="" />
          <div className="px-5 mt-14 flex items-center  ">
            <div>
              <p className="text-2xl font-bold ">Shakhawat Islam</p>
              <p className="text-sm font-[400] ">MERN Stack Web Developer</p>
            </div>
          </div>
          <div>
            <button className="flex absolute w-[100px] bg-[#c0c0c0] px-2 text-sm  font-semibold -right-[450px]  items-center rounded-3xl  top-1  ">
              uplode img
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
