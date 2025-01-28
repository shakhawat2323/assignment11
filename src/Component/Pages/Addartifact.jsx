import axios from "axios";
import UseAuth from "../Hook/UseAuth";
import "./page.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Addartifact = () => {
  const { user } = UseAuth();
  const naviget = useNavigate();

  const submitdata = async (e) => {
    e.preventDefault();
    const useremail = user?.email;
    // const formData = new FormData(e.target);
    // const initialData = Object.fromEntries(formData.entries());
    // const users = initialData;
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

    axios
      .post(`${import.meta.env.VITE_SOME_KEY}/artifact`, userss)
      .then((resul) => {
        console.log(resul.data);

        Swal.fire({
          title: "Successfuly Artifacts added",
          icon: "success",
          draggable: true,
        });
        form.reset();
        naviget("/mypostartifact");
      });

    // fetch(`http://localhost:5000/artifact`, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(userss),
    // })
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
  };

  const data = new Date();

  return (
    <div>
      <div className="hero bg-[url('/img/bglogo.jpg')] min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100  w-[400px] shrink-0 shadow-2xl">
            <h1 className="text-3xl text-center font-bold mt-3">
              ADD to new Artifact
            </h1>
            <form onSubmit={submitdata} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Artifact Name</span>
                </label>
                <input
                  type="text"
                  name="artifactname"
                  placeholder="Artifact Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Artifact Image URL </span>
                </label>
                <input
                  type="url"
                  name="artifactimg"
                  placeholder="Artifact Image URL "
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Artifact Type</span>
                </label>
                <select
                  name="artifacttype"
                  className="select select-accent w-full max-w-xs"
                >
                  <option disabled selected>
                    Artifact Type
                  </option>
                  <option>Weapons</option>
                  <option>Documents</option>
                  <option>Writings</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Historical Context </span>
                </label>
                <input
                  type="text"
                  name="historicalcontext"
                  placeholder="Historical Context "
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Created At</span>
                </label>
                <input
                  type="text"
                  name="createdat"
                  placeholder="Created At"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Discovered At</span>
                </label>
                <input
                  type="text"
                  name="discoverd"
                  placeholder="Discovered At"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Discovered By</span>
                </label>
                <input
                  type="text"
                  name="discoveredby"
                  placeholder="Discovered By"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full name"
                  value={user?.displayName}
                  readOnly
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Present Location</span>
                </label>
                <input
                  type="text"
                  name="presentlocation"
                  placeholder="Present Location"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn addbtn mx-auto block ">
                  Add Artifacts{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addartifact;
