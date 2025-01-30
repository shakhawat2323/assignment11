import React from "react";
import { FcLike } from "react-icons/fc";
import { NavLink } from "react-router-dom";

const Allartifactscards = ({ cards }) => {
  const { artifactname, artifactimg, historicalcontext, likeCount, _id } =
    cards;
  return (
    <div>
      <div className="card   border-4  shadow-xl">
        <figure>
          <img
            className="p-3 rounded-3xl w-96 h-72"
            src={artifactimg}
            alt="Shoes"
          />
        </figure>
        <div className="card-body ">
          <h2 className="text-3xl font-bold">{artifactname}</h2>
          <p className="text-xl">{historicalcontext}</p>
          <div className="card-actions mt-3 justify-between">
            <div className="flex justify-center items-center gap-2">
              <div className="text-3xl font-bold">
                <FcLike />
              </div>
              <div className="text-xl font-bold"> {likeCount} </div>
            </div>
            <NavLink
              to={`/allcartifactscarddeteles/${_id}`}
              className="text-xl btns  font-bold"
            >
              View Details
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allartifactscards;
