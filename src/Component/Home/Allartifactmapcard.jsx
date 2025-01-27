import { FcLike } from "react-icons/fc";
import "./Artifact.css";
const Allartifactmapcard = ({ cards }) => {
  const { artifactName, artifactImage, historicalContext, likeCount } = cards;
  return (
    <div>
      <div className="card   border-4  shadow-xl">
        <figure>
          <img
            className="p-3 rounded-3xl w-96 h-72"
            src={artifactImage}
            alt="Shoes"
          />
        </figure>
        <div className="card-body ">
          <h2 className="text-3xl font-bold">{artifactName}</h2>
          <p className="text-xl">{historicalContext}</p>
          <div className="card-actions mt-3 justify-between">
            <div className="flex justify-center items-center gap-2">
              <div className="text-3xl font-bold">
                <FcLike />
              </div>
              <div className="text-xl font-bold"> {likeCount} </div>
            </div>
            <button className="text-xl btns  font-bold">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allartifactmapcard;
