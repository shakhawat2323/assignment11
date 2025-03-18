import axios from "axios";
import React, { useEffect, useState } from "react";
import "./artifact.css";

import Allartifactmapcard from "./Allartifactmapcard";
import { NavLink } from "react-router-dom";
import Tigar from "../../../public/home/tiger.png";
const Artifacthomecard = () => {
  const [artifacts, setArtifact] = useState([]);
  useEffect(() => {
    allartifacts().reve;
  }, []);
  const allartifacts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SOME_KEY}/artifact`
    );
    setArtifact(data.reverse().slice(0, 6));
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5 ">
        {artifacts.map((cards, index) => (
          <Allartifactmapcard cards={cards} key={index}></Allartifactmapcard>
        ))}
      </div>

      <div className="flex justify-center">
        <NavLink
          to="/allartifact"
          className="allartifacts  text-2xl font-bold  "
        >
          All Artifacts
        </NavLink>
      </div>
      <div className="mt-20 pb-52">
        <div className="flex items-center gap-20 h-96">
          <div className="flex-col w-[50%] ">
            <div>
              <img src={Tigar} alt="" />
            </div>
          </div>
          <div className="flex-col w-[50%] ">
            <div className="text-center flex flex-col items-center">
              <p className="text-xl font-[500] text-[#E2B13C]">
                HISTORY OF OUR MUSEUM
              </p>
              <p className="text-3xl font-[900] py-3">HISTORY OF OUR MUSEUM</p>

              <img src="/public/home/degine.png" alt="" />

              <p className="">
                Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco
                Laboris Nisi Ut Aliquip Ex Ea Commodo Consequat. Duis Aute Irure
                Dolor In Reprehenderit In Voluptate Velit Esse Cillum Dolore Eu
                Fugiat Nulla Pariatur.Duis Aute Irure Dolor In Reprehenderit In
                Voluptate Vel Eu Fugiat Nulla Pariatur.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#E2B13C] py-[18px] rounded-md w-full h-40 mt-[25px]">
          <div className="border h-32   border-white w-11/12 mx-auto">
            <div className="grid grid-cols-3 py-8 justify-center items-center">
              <div className="flex flex-col items-center border-r ">
                <p className="text-xl font-semibold">Museum Open</p>
                <p className="text-2xl font-bold text-white">
                  We are Open all day
                </p>
              </div>
              <div className="flex flex-col items-center border-r">
                <p className="text-xl font-semibold">Events Mangement</p>
                <p className="text-2xl font-bold text-white">
                  We are Open all day
                </p>
              </div>
              <div className="flex flex-col items-center  ">
                <p className="text-xl font-semibold">Exhibition Open</p>
                <p className="text-2xl font-bold text-white">
                  We are Open all day
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artifacthomecard;
