// import React, { useEffect, useState } from "react";
// import UseAuth from "../Hook/UseAuth";
// import axios from "axios";
// import { FiEdit } from "react-icons/fi";
// import { MdDelete } from "react-icons/md";
// import Swal from "sweetalert2";
// import { Link, NavLink } from "react-router-dom";
// import Pagination from "@mui/material/Pagination";
// const Mypostartifact = () => {
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

//   const Artiactdelete = async (id) => {
//     try {
//       const { data } = await axios.delete(
//         `${import.meta.env.VITE_SOME_KEY}/arifact/${id}`
//       );

//       if (data.deletedCount !== 0) {
//         Swal.fire({
//           title: "Are you sure?",
//           text: "You won't be able to revert this!",
//           icon: "warning",
//           showCancelButton: true,
//           confirmButtonColor: "#3085d6",
//           cancelButtonColor: "#d33",
//           confirmButtonText: "Yes, delete it!",
//         }).then((result) => {
//           if (result.isConfirmed) {
//             Swal.fire({
//               title: "Deleted!",
//               text: "Your file has been deleted.",
//               icon: "success",
//             });
//             mypostartifact();
//           }
//         });
//       } else {
//         Swal.fire({
//           title: `something is wrong`,
//           icon: "error",
//           draggable: true,
//         });
//       }
//     } catch (error) {
//       Swal.fire({
//         title: `${error.message}`,
//         icon: "error",
//         draggable: true,
//       });
//     }
//   };

//   return (
//     <div className="w-11/12 mx-auto">
//       <h1 className="text-center text-2xl mt-5 font-bold">
//         my post artifact {artifact.length}
//       </h1>
//       <div>
//         <div className="overflow-x-auto">
//           <table className="table">
//             {/* head */}
//             <thead>
//               <tr>
//                 <th>Artifact Name</th>
//                 <th>description</th>
//                 <th>email</th>
//                 <th>upgrade</th>
//                 <th>delete</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* row 1 */}
//               {artifact.map((artifact, index) => (
//                 <tr key={index}>
//                   <td>
//                     <div className="flex items-center gap-3">
//                       <div className="avatar">
//                         <div className="mask mask-squircle h-12 w-12">
//                           <img
//                             src={artifact.artifactimg}
//                             alt="Avatar Tailwind CSS Component"
//                           />
//                         </div>
//                       </div>
//                       <div>
//                         <div className="font-bold">{artifact.artifactname}</div>
//                         <div className="text-sm opacity-50">
//                           {artifact.name}
//                         </div>
//                       </div>
//                     </div>
//                   </td>
//                   <td>
//                     {`presentlocation : ${artifact.presentlocation}`}
//                     <br />
//                     <span className=" ">
//                       {`description : ${artifact.historicalcontext} `}
//                     </span>
//                   </td>
//                   <td className="">{artifact.useremail}</td>
//                   <td className="text-4xl">
//                     <Link to={`/mypostupdate/${artifact._id}`}>
//                       <FiEdit />
//                     </Link>
//                   </td>
//                   <th>
//                     <button
//                       onClick={() => Artiactdelete(artifact._id)}
//                       className="btn btn-ghost  text-4xl text-red-600"
//                     >
//                       <MdDelete />
//                     </button>
//                   </th>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <div className="mt-5 mb-5 flex items-center justify-center">
//         <Pagination className="!text-center" count={10} color="primary" />
//       </div>
//     </div>
//   );
// };

// export default Mypostartifact;
import React, { useEffect, useState } from "react";
import UseAuth from "../Hook/UseAuth";
import axios from "axios";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

const Mypostartifact = () => {
  const { user } = UseAuth();
  const [artifact, setArtifact] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // প্রতি পেজে কতগুলো আইটেম দেখাবে

  useEffect(() => {
    if (user?.email) {
      fetchArtifacts();
    }
  }, [user]);

  const fetchArtifacts = async () => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_SOME_KEY}/arifacts/${user.email}`
      );
      setArtifact(data);
    } catch (error) {
      console.error("Error fetching artifacts:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_SOME_KEY}/arifact/${id}`
      );

      if (data.deletedCount !== 0) {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            fetchArtifacts();
          }
        });
      } else {
        Swal.fire("Something went wrong!", "", "error");
      }
    } catch (error) {
      Swal.fire("Error!", error.message, "error");
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
      <h1 className="text-center text-2xl mt-5 font-bold">
        My Post Artifacts ({artifact.length})
      </h1>

      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Artifact Name</th>
              <th>Description</th>
              <th>Email</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {currentArtifacts.map((item, index) => (
              <tr key={index}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={item.artifactimg} alt="Artifact" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.artifactname}</div>
                      <div className="text-sm opacity-50">{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {`Present Location: ${item.presentlocation}`}
                  <br />
                  <span>{`Description: ${item.historicalcontext}`}</span>
                </td>
                <td>{item.useremail}</td>
                <td className="text-2xl">
                  <Link to={`/mypostupdate/${item._id}`}>
                    <FiEdit />
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost text-2xl text-red-600"
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Section */}
      <div className="mt-5 mb-5 text-center flex justify-center ">
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

export default Mypostartifact;
