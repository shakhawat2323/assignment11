import axios from "axios";
import React, { useEffect, useState } from "react";
import Allartifactscards from "./Allartifactscards";

const Allartifact = () => {
  const [artifacts, setArtifact] = useState([]);
  useEffect(() => {
    allartifacts().reve;
  }, []);
  const allartifacts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SOME_KEY}/artifact`
    );
    setArtifact(data.reverse());
  };
  console.log(artifacts);
  return (
    <div className="w-11/12 mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-center">All Artifacts</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
        {artifacts.map((cards, index) => (
          <Allartifactscards key={index} cards={cards}></Allartifactscards>
        ))}
      </div>
    </div>
  );
};

export default Allartifact;
