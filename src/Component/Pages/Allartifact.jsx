import axios from "axios";
import React, { useEffect, useState } from "react";
import Allartifactscards from "./Allartifactscards";

const Allartifact = () => {
  const [artifacts, setArtifact] = useState([]);
  const [flter, setFilter] = useState("");
  useEffect(() => {
    allartifacts().reve;
  }, []);
  const allartifacts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SOME_KEY}/allartifact?flter=${flter}`
    );
    setArtifact(data.reverse());
  };
  console.log(flter);
  return (
    <div className="w-11/12 mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-center">All Artifacts</h1>
      </div>
      <div className="w-10/12 mx-auto flex gap-5 mt-5 mb-5">
        <div className="form-control">
          <select
            onChange={(e) => setFilter(e.target.value)}
            name="artifacttype"
            className="select text-xl font-bold select-accent w-52 "
          >
            <option disabled selected>
              Artifact Type
            </option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
          </select>
        </div>
        <div className="join">
          <div>
            <label className="input validator join-item">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="Entar Artifact Title" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
          <button className="btn btn-neutral join-item">serch</button>
        </div>
        <div className="form-control">
          <select
            onChange={(e) => setFilter(e.target.value)}
            name="artifacttype"
            className="select text-xl font-bold select-accent w-52 "
          >
            <option disabled selected>
              Artifact Type
            </option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
          </select>
        </div>
        <div>
          <button className="text-2xl font-bold btn btn-primary">Reset</button>
        </div>
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
