// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Allartifactscards from "./Allartifactscards";
// import { useLoaderData } from "react-router-dom";
// import "./page.css";

// const Allartifact = () => {
//   const [artifacts, setArtifact] = useState([]);
//   const [flter, setFilter] = useState("");
//   const [search, setSearch] = useState("");
//   const [sort, setSort] = useState("");
//   const [currentpage, setCurrentpage] = useState(0);
//   const [itemsperpage, setitemsperpage] = useState(5);

//   const { count } = useLoaderData();

//   const numberofPages = Math.ceil(count / itemsperpage);
//   const paes = [...Array(numberofPages).keys()];

//   useEffect(() => {
//     const allartifacts = async () => {
//       const { data } = await axios.get(
//         `${
//           import.meta.env.VITE_SOME_KEY
//         }/allartifact?flter=${flter}&search=${search}&sort=${sort}`
//       );

//       setArtifact(data.reverse());
//     };
//     allartifacts();
//   }, [flter, search, sort]);

//   const Resetbutton = () => {
//     setArtifact([]);
//     setFilter("");
//     setSearch("");
//     setSort("");
//   };
//   // const handalepagination = (e) => {
//   //   const vul = parseInt(e.target.value);

//   //   setitemsperpage(vul);
//   //   setitemsperpage(0);
//   // };
//   return (
//     <div className="w-11/12 mx-auto">
//       <div>
//         <h1 className="text-3xl font-bold text-center">All Artifacts</h1>
//       </div>
//       <div className="w-10/12 mx-auto flex gap-5 mt-5 mb-5">
//         <div className="form-control">
//           <select
//             onChange={(e) => setFilter(e.target.value)}
//             name="artifacttype"
//             className="select text-xl font-bold select-accent w-52 "
//           >
//             <option disabled selected>
//               Artifact Type
//             </option>
//             <option value="Weapons">Weapons</option>
//             <option value="Documents">Documents</option>
//             <option value="Writings">Writings</option>
//           </select>
//         </div>
//         <div className="join">
//           <div>
//             <label className="input validator join-item">
//               <input
//                 name="search"
//                 id="search"
//                 onChange={(e) => setSearch(e.target.value)}
//                 type="text"
//                 value={search}
//                 placeholder="Entar Artifact Title"
//               />
//             </label>
//           </div>
//           <button className="btn btn-neutral join-item">search</button>
//         </div>
//         <div className="form-control">
//           <select
//             onChange={(e) => setSort(e.target.value)}
//             name="artifacttype"
//             id="artifacttype"
//             className="select text-xl font-bold select-accent w-52 "
//           >
//             <option disabled selected>
//               Sort by Like
//             </option>
//             <option value="Ascending">Ascending</option>
//             <option value="Descending">Descending</option>
//           </select>
//         </div>
//         <div>
//           <button
//             onClick={Resetbutton}
//             className="text-2xl font-bold btn btn-primary"
//           >
//             Reset
//           </button>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
//         {artifacts.map((cards, index) => (
//           <Allartifactscards key={index} cards={cards}></Allartifactscards>
//         ))}
//       </div>
//       <div className="flex justify-center items-center gap-5">
//         <div>
//           {paes.map((pages) => (
//             <button
//               key={pages}
//               onClick={() => setCurrentpage(pages)}
//               className={`btn mt-5 ml-3 ${
//                 currentpage === pages && "background"
//               }`}
//             >
//               {pages}
//             </button>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Allartifact;
import axios from "axios";
import React, { useEffect, useState } from "react";
import Allartifactscards from "./Allartifactscards";
import { useLoaderData } from "react-router-dom";
import "./page.css";

const Allartifact = () => {
  const [artifacts, setArtifact] = useState([]);
  const [filter, setFilter] = useState(""); // Fix spelling
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [currentpage, setCurrentpage] = useState(0);
  const [itemsperpage, setItemsperpage] = useState(5);

  const { count = 0 } = useLoaderData(); // Ensure count is not undefined

  const numberofPages = count > 0 ? Math.ceil(count / itemsperpage) : 1;
  const pagesArray = numberofPages > 1 ? [...Array(numberofPages).keys()] : [];

  useEffect(() => {
    const fetchArtifacts = async () => {
      try {
        const { data } = await axios.get(
          `${
            import.meta.env.VITE_SOME_KEY
          }/allartifact?filter=${filter}&search=${search}&sort=${sort}&page=${currentpage}&limit=${itemsperpage}`
        );
        console.log("Fetched Data:", data);
        setArtifact(data.reverse());
      } catch (error) {
        console.error("Error fetching artifacts:", error);
      }
    };
    fetchArtifacts();
  }, [filter, search, sort, currentpage, itemsperpage]);

  const Resetbutton = () => {
    setArtifact([]);
    setFilter("");
    setSearch("");
    setSort("");
    setCurrentpage(0);
  };

  return (
    <div className="w-11/12 mx-auto">
      <div>
        <h1 className="text-3xl font-bold text-center">All Artifacts</h1>
      </div>
      <div className="w-10/12 mx-auto flex gap-5 mt-5 mb-5">
        <div className="form-control">
          <select
            onChange={(e) => setFilter(e.target.value)}
            className="select text-xl font-bold select-accent w-52"
          >
            <option disabled selected>
              Artifact Type
            </option>
            <option value="Weapons">Weapons</option>
            <option value="Documents">Documents</option>
            <option value="Writings">Writings</option>
          </select>
        </div>
        <div className="join">
          <div>
            <label className="input validator join-item">
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                value={search}
                placeholder="Enter Artifact Title"
              />
            </label>
          </div>
          <button className="btn btn-neutral join-item">Search</button>
        </div>
        <div className="form-control">
          <select
            onChange={(e) => setSort(e.target.value)}
            className="select text-xl font-bold select-accent w-52"
          >
            <option disabled selected>
              Sort by Like
            </option>
            <option value="Ascending">Ascending</option>
            <option value="Descending">Descending</option>
          </select>
        </div>
        <div>
          <button
            onClick={Resetbutton}
            className="text-2xl font-bold btn btn-primary"
          >
            Reset
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
        {artifacts?.map((cards, index) => (
          <Allartifactscards key={index} cards={cards}></Allartifactscards>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center items-center gap-3 mt-5">
        <button
          className={`btn ${currentpage === 0 ? "btn-disabled" : ""}`}
          onClick={() => setCurrentpage((prev) => Math.max(prev - 1, 0))}
        >
          Previous
        </button>

        {pagesArray?.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentpage(page)}
            className={`btn ${currentpage === page ? "btn-active" : ""}`}
          >
            {page + 1}
          </button>
        ))}

        <button
          className={`btn ${
            currentpage === numberofPages - 1 ? "btn-disabled" : ""
          }`}
          onClick={() =>
            setCurrentpage((prev) =>
              prev < numberofPages - 1 ? prev + 1 : prev
            )
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Allartifact;
