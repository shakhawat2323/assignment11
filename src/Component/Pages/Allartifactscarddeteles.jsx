import React, { useEffect, useState } from "react";
import UseAuth from "../Hook/UseAuth";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { FcLike } from "react-icons/fc";
import Swal from "sweetalert2";

const Allartifactscarddeteles = () => {
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

  const Likecounts = (e) => {
    e.preventDefault();

    try {
      axios
        .post(`${import.meta.env.VITE_SOME_KEY}/likecount`, {
          artifacts,
        })
        .then((resul) => {
          Swal.fire({
            title: "Successfuly Artifacts added",
            icon: "success",
            draggable: true,
          });

          // form.reset();
          naviget("/mylikedartifact");
        })
        .catch((error) => {
          Swal.fire({
            title: `${error?.response?.data}`,
            icon: "error",
          });
        });
    } catch (err) {
      console.log(err.response?.data);
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="card card-side bg-blue-50 shadow-2xl p-10 mt-10">
        <figure>
          <img className="w-96" src={artifactimg} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className=" text-3xl  font-bold">
            Artifact Name : {artifactname}
          </h2>
          <p className="text-xl  font-bold">Artifact Type : {artifacttype}</p>
          <p className="text-xl  font-bold">Created AT : {createdat}</p>
          <p className="text-xl  font-bold">Discoverd : {discoverd}</p>
          <p className="text-xl  font-bold">Discoverd By :{discoveredby}</p>
          <p className="text-xl  font-bold">
            Presnt Location : {presentlocation}
          </p>
          <p className="text-xl  font-bold">
            Historical Context : {historicalcontext}
          </p>

          <div className="  ">
            <form onSubmit={Likecounts}>
              <button className="text-5xl font-bold  ">
                <FcLike></FcLike>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allartifactscarddeteles;
