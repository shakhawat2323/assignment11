import axios from "axios";
import React, { useEffect, useState } from "react";
import "./artifact.css";

import Allartifactmapcard from "./Allartifactmapcard";
import { NavLink } from "react-router-dom";
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
    </div>
  );
};

export default Artifacthomecard;
