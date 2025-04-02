import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Blog = () => {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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

    fetchBlogs();
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <p className="text-4xl font-bold text-center mt-3 mb-3">Our Blog</p>

      {loading ? (
        <p className="text-center text-xl font-semibold">Loading Blogs...</p>
      ) : (
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          modules={[Pagination]}
          className="mySwiper"
        >
          {blog.map((item) => (
            <SwiperSlide key={item._id}>
              <div className="h-[470px] bg-[#d3d3d3] rounded-lg shadow-lg overflow-hidden">
                <figure>
                  <img
                    src={item.image || "default-image.jpg"}
                    className="w-full px-3 py-3 rounded-3xl h-[250px] object-cover hover:scale-105 transition-transform"
                    alt={item.title}
                  />
                </figure>
                <div>
                  <h2 className="card-title px-3">{item.title}</h2>
                  <p className="px-3 py-3">
                    {item.description.slice(0, 100)}...
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div className="mt-5 mb-5 text-center">
        <NavLink to="/blogs" className="allartifacts text-xl font-semibold">
          All Blog
        </NavLink>
      </div>
    </div>
  );
};

export default Blog;
