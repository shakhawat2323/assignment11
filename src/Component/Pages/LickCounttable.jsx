import React from "react";
import { FcLike } from "react-icons/fc";

import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const LickCounttable = ({ Licke }) => {
  console.log(Licke);
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
  } = Licke;
  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={artifactimg} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{artifactname}</div>
            <div className="text-sm opacity-50">{name}</div>
          </div>
        </div>
      </td>
      <td>
        {`presentlocation : ${presentlocation}`}
        <br />
        <span className=" ">{`description : ${historicalcontext} `}</span>
      </td>
      <td className="">{useremail}</td>
      <td className="text-2xl ml-10 ">
        <Link className="flex items-center gap-2">
          <FcLike></FcLike>
          {likeCount}
        </Link>
      </td>
      <th>
        <button className="btn btn-ghost  text-4xl text-red-600">
          <MdDelete />
        </button>
      </th>
    </tr>
  );
};

export default LickCounttable;
