import axios from "axios";
import React, { useEffect, useState } from "react";
import Blogcard from "./Blogcard";
import { Pagination } from "@mui/material";

const Blogs = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/blog");
      setBlog(res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {blog.map((item) => (
          <Blogcard key={item._id} item={item} fetchBlogs={fetchBlogs} />
        ))}
      </div>
      <div>
        <div className="flex items-center justify-center mt-5 mb-5">
          <Pagination count={10} color="primary" />
        </div>
      </div>
    </>
  );
};

export default Blogs;
