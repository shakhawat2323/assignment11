import React, { useEffect, useState } from "react";
import UseAuth from "../Hook/UseAuth";
import axios from "axios";
import LickCounttable from "./LickCounttable";
import { FcLike } from "react-icons/fc";

const MyLikedArtifacts = () => {
  const { user } = UseAuth();

  const [artifact, SetArtifact] = useState([]);

  useEffect(() => {
    mypostartifact();
  }, [user]);

  const mypostartifact = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SOME_KEY}/likecount/${user?.email}`
    );
    SetArtifact(data);
  };
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-4xl font-bold text-center mt-5">this is my jobes</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Artifact Name</th>
              <th>description</th>
              <th>email</th>
              <th className="flex items-center gap-2">
                Lick <FcLike></FcLike>
              </th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {artifact.map((Licke, index) => (
              <LickCounttable
                Licke={Licke.artifacts}
                key={index}
              ></LickCounttable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyLikedArtifacts;
