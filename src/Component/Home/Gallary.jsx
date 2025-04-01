import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Img1 from "../../../public/home/img1.jpg";
import Img2 from "../../../public/home/img2.png";
import Img3 from "../../../public/home/img3.jpg";
import Img4 from "../../../public/home/img4.jpg";
import Img5 from "../../../public/home/img5.jpg";
import Img6 from "../../../public/home/img6.jpg";
import { NavLink } from "react-router-dom";
// import Img7 from "../../../public/home/img7.jpg";

const Gallary = () => {
  return (
    <div>
      <div className="w-full">
        <p className="text-4xl font-bold text-center  pb-3">Gallary</p>
        <LightGallery
          speed={500}
          elementClassNames=" grid grid-cols-3 gap-5"
          plugins={[lgThumbnail, lgZoom]}
        >
          <a href={Img1}>
            <img className="min-w-96 min-h-96" alt="img1" src={Img1} />
          </a>
          <a href={Img2}>
            <img className="min-w-96 min-h-96" alt="img1" src={Img2} />
          </a>
          <a href={Img3}>
            <img className="min-w-96 min-h-96" alt="img1" src={Img3} />
          </a>
          <a href={Img4}>
            <img className="min-w-96 min-h-96" alt="img1" src={Img4} />
          </a>
          <a href={Img5}>
            <img className="min-w-96 min-h-96" alt="img1" src={Img5} />
          </a>
          <a href="./public/home/img6.jpg">
            <img className="min-w-96 min-h-96" alt="img1" src={Img6} />
          </a>
          {/* <a href="/public/home/img7.jpg">
            <img className="min-w-96 min-h-96" alt="img1" src={Img7} />
          </a> */}
        </LightGallery>
      </div>
      <div>
        <div className="flex justify-center px-9">
          <NavLink to="/gallary" className="allartifacts    ">
            All Gallery
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Gallary;
