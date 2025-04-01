import React from "react";
import Logo from "../../../public/img/logo.png";
import { NavLink, Outlet } from "react-router-dom";
import { Button } from "@mui/material";
import { CgProfile } from "react-icons/cg";
import { AiOutlineBulb } from "react-icons/ai";
import { SlLike } from "react-icons/sl";
import { MdOutlinePostAdd } from "react-icons/md";
import { MdAddchart } from "react-icons/md";
import { IoNewspaperOutline } from "react-icons/io5";
import { RiBloggerLine } from "react-icons/ri";
import UseAuth from "../Hook/UseAuth";

const Dashboard = () => {
  const { user } = UseAuth();
  return (
    <div className="flex  gap-3">
      <div className="col1 w-[20%] px-2 sticky top-0 z-50 border-r border-[rgba(0,0,0,0.1)] h-screen overflow-y-scroll">
        <div className="border-b border-[rgba(0,0,0,0.1)]">
          <img className="w-24 h-24 mt-5 mx-auto " src={Logo} alt="" />
          <h1 className="text-4xl font-bold text-center">Admin</h1>
          <h1 className="text-2xl font-bold text-center py-2 ">
            {user?.displayName}
          </h1>
        </div>
        <div>
          <ul>
            <li className="pb-2">
              <Button className="!w-full  !text-black">
                <NavLink
                  // to="/dashboard/profile"
                  className="  !text-xl lowercase flex items-center gap-3 !w-full !font-semibold  "
                >
                  <CgProfile />
                  Profile
                </NavLink>
              </Button>
            </li>
            <li className="pb-2">
              <Button className="!w-full !text-black">
                <NavLink
                  to="/dashboard/addartifact"
                  className="  !text-xl lowercase flex items-center gap-3 !w-full !font-semibold  "
                >
                  <AiOutlineBulb />
                  Add Artifacts
                </NavLink>
              </Button>
            </li>
            <li className="pb-2">
              <Button className="!w-full !text-black">
                <NavLink
                  to="/dashboard/mylikedartifact"
                  className="  !text-xl lowercase flex items-center gap-3 !w-full !font-semibold  "
                >
                  <SlLike />
                  My Liked Artifact
                </NavLink>
              </Button>
            </li>
            <li className="pb-2">
              <Button className="!w-full !text-black">
                <NavLink
                  to="/dashboard/mypostartifact"
                  className="  !text-xl lowercase flex items-center gap-3 !w-full !font-semibold  "
                >
                  <MdOutlinePostAdd />
                  My Post Artifact
                </NavLink>
              </Button>
            </li>

            <li className="pb-2">
              <Button className="!w-full !text-black">
                <NavLink
                  // to="/allartifact"
                  className="  !text-xl lowercase flex items-center gap-3 !w-full !font-semibold  "
                >
                  <IoNewspaperOutline />
                  Add News
                </NavLink>
              </Button>
            </li>
            <li className="pb-2">
              <Button className="!w-full !text-black">
                <NavLink
                  to="/dashboard/blog"
                  className="  !text-xl lowercase flex items-center gap-3 !w-full !font-semibold  "
                >
                  <RiBloggerLine />
                  Add Blog
                </NavLink>
              </Button>
            </li>
            <div className="divider"></div>
            <li className="pb-2">
              <Button className="!w-full !text-black">
                <NavLink
                  // to="/allartifact"
                  className="  !text-xl lowercase flex items-center gap-3 !w-full !font-semibold  "
                >
                  <CgProfile />
                  All Artifact
                </NavLink>
              </Button>
            </li>

            <li className="pb-2">
              <Button className="!w-full !text-black">
                <NavLink
                  // to="/allartifact"
                  className="  !text-xl lowercase flex items-center gap-3 !w-full !font-semibold  "
                >
                  <CgProfile />
                  Gallery
                </NavLink>
              </Button>
            </li>
            <li className="pb-2">
              <Button className="!w-full !text-black">
                <NavLink
                  // to="/allartifact"
                  className="  !text-xl lowercase flex items-center gap-3 !w-full !font-semibold  "
                >
                  <CgProfile />
                  Blog
                </NavLink>
              </Button>
            </li>
            <li className="pb-2">
              <Button className="!w-full !text-black">
                <NavLink
                  // to="/allartifact"
                  className="  !text-xl lowercase flex items-center gap-3 !w-full !font-semibold  "
                >
                  <CgProfile />
                  News
                </NavLink>
              </Button>
            </li>
            <li className="pb-2">
              <Button className="!w-full !text-black">
                <NavLink
                  // to="/allartifact"
                  className="  !text-xl lowercase flex items-center gap-3 !w-full !font-semibold  "
                >
                  <CgProfile />
                  Logout
                </NavLink>
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="col2 w-[80%] ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
