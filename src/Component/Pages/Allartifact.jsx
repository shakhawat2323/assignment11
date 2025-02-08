import axios from "axios";
import React, { useEffect, useState } from "react";
import Allartifactscards from "./Allartifactscards";
import { useLoaderData } from "react-router-dom";
import "./page.css";

const Allartifact = () => {
  const [artifacts, setArtifact] = useState([]);
  const [flter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [currentpage, setCurrentpage] = useState(0);
  const [itemsperpage, setitemsperpage] = useState(5);

  const { count } = useLoaderData();

  const numberofPages = Math.ceil(count / itemsperpage);
  const paes = [...Array(numberofPages).keys()];

  useEffect(() => {
    const allartifacts = async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_SOME_KEY
        }/allartifact?flter=${flter}&search=${search}&sort=${sort}`
      );

      setArtifact(data.reverse());
    };
    allartifacts();
  }, [flter, search, sort]);

  const Resetbutton = () => {
    setArtifact([]);
    setFilter("");
    setSearch("");
    setSort("");
  };
  const handalepagination = (e) => {
    const vul = parseInt(e.target.value);

    setitemsperpage(vul);
    setitemsperpage(0);
  };
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
              <input
                name="search"
                id="search"
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                value={search}
                placeholder="Entar Artifact Title"
              />
            </label>
          </div>
          <button className="btn btn-neutral join-item">search</button>
        </div>
        <div className="form-control">
          <select
            onChange={(e) => setSort(e.target.value)}
            name="artifacttype"
            id="artifacttype"
            className="select text-xl font-bold select-accent w-52 "
          >
            <option disabled selected>
              Sort by Like
            </option>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
        </div>
        <div>
          <button
            onClick={Resetbutton}
            className="text-2xl font-bold btn btn-primary"
          >
            Reset
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
        {artifacts.map((cards, index) => (
          <Allartifactscards key={index} cards={cards}></Allartifactscards>
        ))}
      </div>
      <div className="flex justify-center items-center gap-5">
        <div>
          {paes.map((pages) => (
            <button
              key={pages}
              onClick={() => setCurrentpage(pages)}
              className={`btn mt-5 ml-3 ${
                currentpage === pages && "background"
              }`}
            >
              {pages}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allartifact;
