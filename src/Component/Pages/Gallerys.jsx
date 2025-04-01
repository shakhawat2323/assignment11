import React, { useState } from "react";
import LightGallery from "lightgallery/react";

// Import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// Import plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

// Import images
import Img1 from "../../../public/Gallaryss/10001.jpg";
import Img2 from "../../../public/Gallaryss/10002.jpg";
import Img3 from "../../../public/Gallaryss/10003.jpg";
import Img4 from "../../../public/Gallaryss/10004.jpg";
import Img5 from "../../../public/Gallaryss/10005.jpg";
import Img6 from "../../../public/Gallaryss/10006.jpg";
import Img7 from "../../../public/Gallaryss/10007.jpg";
import Img8 from "../../../public/Gallaryss/10008.jpg";
import Img9 from "../../../public/Gallaryss/10009.jpg";
import Img10 from "../../../public/Gallaryss/10010.jpg";
import Img11 from "../../../public/Gallaryss/10011.jpg";
import Img12 from "../../../public/Gallaryss/10012.jpg";
import Img13 from "../../../public/Gallaryss/10013.jpg";
import Img14 from "../../../public/Gallaryss/10014.jpg";
import Img15 from "../../../public/Gallaryss/10015.jpg";
import Img16 from "../../../public/Gallaryss/10016.jpg";
import Img17 from "../../../public/Gallaryss/10017.jpg";
import Img18 from "../../../public/Gallaryss/10018.jpg";
import Img19 from "../../../public/Gallaryss/10019.jpg";
import Img20 from "../../../public/Gallaryss/10020.jpg";
import Img21 from "../../../public/Gallaryss/10021.jpg";
import Img22 from "../../../public/Gallaryss/10022.jpg";
import Img23 from "../../../public/Gallaryss/10023.jpg";
import Img24 from "../../../public/Gallaryss/10024.jpg";
import Img25 from "../../../public/Gallaryss/10025.jpg";
import Img26 from "../../../public/Gallaryss/10026.jpg";
import Img27 from "../../../public/Gallaryss/10027.jpg";
import Img28 from "../../../public/Gallaryss/10028.jpg";
import Img29 from "../../../public/Gallaryss/10029.jpg";
import Img30 from "../../../public/Gallaryss/10030.jpg";
import Img31 from "../../../public/Gallaryss/10031.jpg";
import Img32 from "../../../public/Gallaryss/10032.jpg";
import Img33 from "../../../public/Gallaryss/10033.jpg";
import Img34 from "../../../public/Gallaryss/10034.jpg";
import Img35 from "../../../public/Gallaryss/10035.jpg";

const images = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
  Img11,
  Img12,
  Img13,
  Img14,
  Img15,
  Img16,
  Img17,
  Img18,
  Img19,
  Img20,
  Img21,
  Img22,
  Img23,
  Img24,
  Img25,
  Img26,
  Img27,
  Img28,
  Img29,
  Img30,
  Img31,
  Img32,
  Img33,
  Img34,
  Img35,
];

const Gallerys = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8;

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-3xl font-bold text-center my-5">Gallery</h1>
      <LightGallery
        speed={500}
        elementClassNames="grid grid-cols-3 gap-5"
        plugins={[lgThumbnail, lgZoom]}
      >
        {currentImages.map((img, index) => (
          <a key={index} href={img}>
            <img
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              alt={`Gallery ${index + 1}`}
              src={img}
            />
          </a>
        ))}
      </LightGallery>

      {/* Pagination */}
      <div className="flex justify-center my-5 gap-3">
        <button
          className={`px-4 py-2 rounded-lg ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <button
          className={`px-4 py-2 rounded-lg ${
            indexOfLastImage >= images.length
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          onClick={() => paginate(currentPage + 1)}
          disabled={indexOfLastImage >= images.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Gallerys;
