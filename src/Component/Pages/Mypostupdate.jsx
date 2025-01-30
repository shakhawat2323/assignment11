import { useNavigate, useParams } from "react-router-dom";
import UseAuth from "../Hook/UseAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Mypostupdate = () => {
  const { user } = UseAuth();
  const { id } = useParams();
  const naviget = useNavigate();

  const [artifacts, setArtifact] = useState([]);
  useEffect(() => {
    allartifacts();
  }, []);
  const allartifacts = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SOME_KEY}/artifact/${id}`
    );
    setArtifact(data);
  };
  console.log(artifacts);

  const submitdata = async (e) => {
    e.preventDefault();
    const useremail = user?.email;

    const form = e.target;
    const artifactname = form.artifactname.value;
    const artifactimg = form.artifactimg.value;
    const artifacttype = form.artifacttype.value;
    const createdat = form.createdat.value;
    const discoverd = form.discoverd.value;
    const discoveredby = form.discoveredby.value;
    const historicalcontext = form.historicalcontext.value;
    const name = form.name.value;
    const presentlocation = form.presentlocation.value;
    const userss = {
      artifactname,
      artifactimg,
      artifacttype,
      createdat,
      discoverd,
      discoveredby,
      historicalcontext,
      name,
      presentlocation,
      useremail,
      likeCount: 0,
    };
    console.log(userss);

    axios
      .put(`${import.meta.env.VITE_SOME_KEY}/artifact/${id}`, userss)
      .then((resul) => {
        console.log(resul.data);

        Swal.fire({
          title: "Successfuly Artifacts Update",
          icon: "success",
          draggable: true,
        });
        form.reset();
        naviget("/mypostartifact");
      });
  };

  return (
    <div className="w-11/12 mx-auto">
      <div>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <form
            onSubmit={submitdata}
            className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">Update Dish</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={user?.displayName}
                  readOnly
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="image"
                >
                  Image URL
                </label>
                <input
                  type="url"
                  placeholder="Image URL"
                  value={artifacts.artifactimg}
                  name="artifactimg"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="category"
              >
                Artifact Type
              </label>
              <select
                name="artifacttype"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Main Course">Tools</option>
                <option value="Main Course">Writings</option>
                <option value="Desserts">Documents</option>
                <option value="Beverages">Weapons</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="quantity"
                >
                  Created At
                </label>
                <input
                  name="createdat"
                  placeholder="Created At"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="price"
                >
                  Discovered By
                </label>
                <input
                  type="text"
                  name="discoveredby"
                  placeholder="Discovered By
"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="ownerName"
                >
                  Discovered At
                </label>
                <input
                  type="text"
                  name="discoverd"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Discovered At
"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="ownerEmail"
                >
                  Email
                </label>
                <input
                  type="email"
                  value={user?.email}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  readOnly
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="ownerName"
                >
                  Present Location
                </label>
                <input
                  type="text"
                  name="presentlocation"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Present Location
"
                />
              </div>
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="ownerEmail"
                >
                  Artifact Name
                </label>
                <input
                  type="text"
                  placeholder=" Artifact Name"
                  value={artifacts.artifactname}
                  name="artifactname"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="description"
              >
                Historical Context
              </label>
              <textarea
                name="historicalcontext"
                placeholder=" Historical Context"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Update Aartifact
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mypostupdate;
