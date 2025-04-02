import Button from "@mui/material/Button";
import React, { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import UseAuth from "../Hook/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { Pagination } from "@mui/material";

const Blogcard = ({ item, fetchBlogs }) => {
  const { user } = UseAuth();
  const { image, title, description, email, _id } = item;

  const handleDelete = async (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axios
          .delete(`${import.meta.env.VITE_SOME_KEY}/${id}`)
          .then((result) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            fetchBlogs();
            console.log(result.data);
          });
      }
    });
  };

  return (
    <div className="mt-5">
      <div className="h-[470px] bg-[#d3d3d3] relative  rounded-lg shadow-lg overflow-hidden">
        <figure>
          <img
            src={image || "default-image.jpg"}
            className="w-full px-3 py-3 rounded-3xl h-[250px] object-cover hover:scale-105 transition-transform"
            alt={item.title}
          />
        </figure>
        <div>
          <h2 className="card-title px-3">{title}</h2>
          <p className="px-3 py-3">{description}</p>
        </div>
        {user?.email === email ? (
          <>
            {" "}
            <div className="flex items-center justify-end absolute top-0">
              <button onClick={() => handleDelete(_id)} className=" w-24 ">
                <MdDelete className="text-red-500 " />
              </button>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Blogcard;
