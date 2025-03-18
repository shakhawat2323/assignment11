import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import Blog1 from "../../../public/img/Logo1.jpg";
import Blog2 from "../../../public/img/logo2.jpg";
import Blog3 from "../../../public/img/Logo3.jpg";
import Blog4 from "../../../public/img/Logo4.jpg";
import Blog5 from "../../../public/img/Logo5.jpg";
import Blog6 from "../../../public/img/Logo6.jpg";
import Blog7 from "../../../public/img/Logo7.jpg";
const Blog = () => {
  return (
    <div className="w-11/12 mx-auto">
      <p className="text-4xl font-bold text-center mt-3 mb-3">Our Blog</p>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" h-[470px] bg-[#d3d3d3] rounded-lg shadow-lg overflow-hidden">
            <figure>
              <img
                src={Blog1}
                className="w-full px-3 py-3 rounded-3xl  h-[250px] object-cover hover:scale-105 transition-transform"
                alt="Shoes"
              />
            </figure>
            <div className=" ">
              <h2 className="card-title px-3">
                Ancient EgyptianWeaponry MiddleAgesIllustration
              </h2>
              <p className="px-3 py-3">
                An illustration depicting ancient Egyptian weaponry with a
                Middle Ages artistic style. Features soldiers wielding bows,
                spears, and khopesh swords, adorned in traditional armor,
                against a backdrop of pyramids and desert warfare.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-[470px] bg-[#d3d3d3] rounded-lg shadow-lg overflow-hidden">
            <figure>
              <img
                src={Blog2}
                className="w-full px-3 py-3 rounded-3xl  h-[250px] object-cover hover:scale-105 transition-transform"
                alt="Shoes"
              />
            </figure>
            <div className=" ">
              <h2 className="card-title px-3">
                Terracotta vase with indigenous pattern
              </h2>
              <p className="px-3 py-3">
                A handcrafted terracotta vase adorned with intricate indigenous
                patterns, reflecting traditional artistry. The earthy tones and
                detailed engravings highlight cultural heritage, making it a
                timeless piece of craftsmanship and historical significance.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-[470px] bg-[#d3d3d3] rounded-lg shadow-lg overflow-hidden">
            <figure>
              <img
                src={Blog3}
                className="w-full px-3 py-3 rounded-3xl  h-[250px] object-cover hover:scale-105 transition-transform"
                alt="Shoes"
              />
            </figure>
            <div className=" ">
              <h2 className="card-title px-3 ">
                View of ancient pottery vessels and earthenware
              </h2>
              <p className="px-3 py-3">
                A collection of ancient pottery vessels and earthenware,
                showcasing intricate craftsmanship and historical significance.
                These artifacts reflect traditional techniques, cultural
                heritage.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-[470px] bg-[#d3d3d3] rounded-lg shadow-lg overflow-hidden">
            <figure>
              <img
                src={Blog4}
                className="w-full px-3 py-3 rounded-3xl  h-[250px] object-cover hover:scale-105 transition-transform"
                alt="Shoes"
              />
            </figure>
            <div className=" ">
              <h2 className="card-title px-3">Aztec Ceramic Figurine Vase</h2>
              <p className="px-3 py-3">
                The Aztec ceramic figurine vase features detailed craftsmanship,
                depicting deities, warriors, and symbolic elements. Its vibrant
                colors and intricate designs reflect the culture's deep
                spirituality, artistry, and historical significance.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-[470px] bg-[#d3d3d3] rounded-lg shadow-lg overflow-hidden">
            <figure>
              <img
                src={Blog5}
                className="w-full px-3 py-3 rounded-3xl  h-[250px] object-cover hover:scale-105 transition-transform"
                alt="Shoes"
              />
            </figure>
            <div className="">
              <h2 className="card-title px-3">
                Ancient pottery vessel with retro design
              </h2>
              <p className="px-3 py-3">
                This ancient pottery vessel features a retro design with
                geometric patterns and earthy tones. Its timeless aesthetic
                blends traditional craftsmanship with vintage charm, reflecting
                the rich cultural heritage and artistic expression of the past.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" h-[470px] bg-[#d3d3d3] rounded-lg shadow-lg overflow-hidden">
            <figure>
              <img
                src={Blog6}
                className="w-full px-3 py-3 rounded-3xl  h-[250px] object-cover hover:scale-105 transition-transform"
                alt="Shoes"
              />
            </figure>
            <div className="">
              <h2 className="card-title px-3">Nicosia Cyprus</h2>
              <p className="px-3 py-3">
                Nicosia, the capital of Cyprus, is a historic city blending
                ancient and modern elements. Known for its rich culture,
                stunning architecture, and divided landscape, it offers a unique
                Mediterranean experience.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Blog;
