import React, { useEffect, useState } from "react";
import UseAuth from "../Hook/UseAuth";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FcLike } from "react-icons/fc";

const Detelscardchild = () => {
  const { user } = UseAuth();
  const { id } = useParams();
  const naviget = useNavigate();

  const [artifacts, setArtifact] = useState([]);
  useEffect(() => {
    allartifacts();
  }, []);
  const allartifacts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SOME_KEY}/artifact/${id}`
    );
    setArtifact(data);
  };
  console.log(artifacts);
  const {
    artifactname,
    artifactimg,
    artifacttype,
    createdat,
    discoverd,
    discoveredby,
    historicalcontext,
    name,
    presentlocation,
    useremail,
    likeCount,
  } = artifacts;
  return (
    <div className="w-11/12 mx-auto">
      <div className="card card-side bg-blue-50 shadow-2xl p-10 mt-10">
        <figure>
          <img className="w-96" src={artifactimg} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className=" text-3xl text-center font-bold">
            Artifact Name : {artifactname}
          </h2>
          <p className="text-xl text-center font-bold">
            Artifact Type : {artifacttype}
          </p>
          <p className="text-xl text-center font-bold">
            Created AT : {createdat}
          </p>
          <p className="text-xl text-center font-bold">
            Discoverd : {discoverd}
          </p>
          <p className="text-xl text-center font-bold">
            Discoverd By :{discoveredby}
          </p>
          <p className="text-xl text-center font-bold">
            Presnt Location : {presentlocation}
          </p>
          <p className="text-xl text-center font-bold">
            Historical Context : {historicalcontext}
          </p>

          <div className=" block mx-auto ">
            <button className="text-5xl font-bold text-center ">
              <FcLike />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detelscardchild;
