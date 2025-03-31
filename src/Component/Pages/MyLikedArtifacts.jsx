// import React, { useEffect, useState } from "react";
// import UseAuth from "../Hook/UseAuth";
// import axios from "axios";
// import LickCounttable from "./LickCounttable";
// import { FcLike } from "react-icons/fc";

// const MyLikedArtifacts = () => {
//   const { user } = UseAuth();

//   const [artifact, SetArtifact] = useState([]);

//   useEffect(() => {
//     mypostartifact();
//   }, [user]);

//   const mypostartifact = async () => {
//     const { data } = await axios.get(
//       `${import.meta.env.VITE_SOME_KEY}/arifacts/${user?.email}`
//     );
//     SetArtifact(data);
//   };
//   console.log(artifact);
//   return (
//     <div className="w-11/12 mx-auto">
//       <h1 className="text-4xl font-bold text-center mt-5">this is my jobes</h1>
//       <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>Artifact Name</th>
//               <th>description</th>
//               <th>email</th>
//               <th className="flex items-center gap-2">
//                 Lick <FcLike></FcLike>
//               </th>
//             </tr>
//           </thead>
//           <tbody>
//             {artifact.map((Licke, index) => (
//               <LickCounttable Licke={Licke} key={index}></LickCounttable>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyLikedArtifacts;
import React, { useEffect, useState } from "react";
import UseAuth from "../Hook/UseAuth";
import axios from "axios";
import LickCounttable from "./LickCounttable";
import { FcLike } from "react-icons/fc";
import Pagination from "@mui/material/Pagination";

const MyLikedArtifacts = () => {
  const { user } = UseAuth();
  const [artifact, setArtifact] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // প্রতি পেজে ৫টি ডাটা দেখাবে

  useEffect(() => {
    if (user?.email) {
      fetchArtifacts();
    }
  }, [user]);

  const fetchArtifacts = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SOME_KEY}/arifacts/${user?.email}`
      );
      setArtifact(data);
    } catch (error) {
      console.error("Error fetching liked artifacts:", error);
    }
  };

  // **Pagination Logic**
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentArtifacts = artifact.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-4xl font-bold text-center mt-5">
        My Liked Artifacts ({artifact.length})
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Artifact Name</th>
              <th>Description</th>
              <th>Email</th>
              <th className="flex items-center gap-2">
                Likes <FcLike />
              </th>
            </tr>
          </thead>
          <tbody>
            {currentArtifacts.map((Licke, index) => (
              <LickCounttable Licke={Licke} key={index} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="mt-5 mb-5 flex items-center justify-center">
        <Pagination
          count={Math.ceil(artifact.length / itemsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </div>
    </div>
  );
};

export default MyLikedArtifacts;
