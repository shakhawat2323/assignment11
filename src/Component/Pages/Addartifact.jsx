import axios from "axios";
import UseAuth from "../Hook/UseAuth";
import "./page.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const Addartifact = () => {
  const { user } = UseAuth();
  const naviget = useNavigate();

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
      .post(`${import.meta.env.VITE_SOME_KEY}/artifact`, userss)
      .then((resul) => {
        Swal.fire({
          title: "Successfuly Artifacts added",
          icon: "success",
          draggable: true,
        });
        form.reset();
        naviget("/dashboard/mypostartifact");
      });
  };

  return (
    <div>
      {/* <div className="hero  min-h-screen">
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
      </div> */}
      <div className="bg-purple-500 h-24">
        <p className="text-2xl text-center py-7 text-white">
          {" "}
          Add to new Artifact
        </p>
        <form action="" onSubmit={submitdata}>
          <div className="mt-24 px-20 flex items-center gap-5">
            <TextField
              className="w-full"
              id="outlined-basic"
              label="Artifact Name"
              name="artifactname"
              variant="outlined"
            />
            <TextField
              className="w-full"
              id="outlined-basic"
              name="artifactimg"
              label="Artifact Image URL"
              variant="outlined"
            />
          </div>

          <div>
            <div className="mt-5 px-20 ">
              <label className="label">
                <span className="label-text">Artifact Type</span>
              </label>
              <select
                name="artifacttype"
                className="select select-accent w-full h-10 "
              >
                <option disabled selected>
                  Artifact Type
                </option>
                <option>Weapons</option>
                <option>Documents</option>
                <option>Writings</option>
              </select>
            </div>
          </div>
          <div className="mt-10 px-20 flex items-center gap-5">
            <TextField
              className="w-full"
              id="outlined-basic"
              name="historicalcontext"
              label="Historical Context"
              variant="outlined"
            />
            <TextField
              className="w-full"
              id="outlined-basic"
              name="createdat"
              label="Created At"
              variant="outlined"
            />
          </div>
          <div className="mt-10 px-20 flex items-center gap-5">
            <TextField
              className="w-full"
              id="outlined-basic"
              name="discoverd"
              label="Discovered At"
              variant="outlined"
            />
            <TextField
              className="w-full"
              id="outlined-basic"
              name="discoveredby"
              label="Discovered By"
              variant="outlined"
            />
          </div>
          <div className="mt-10 px-20 flex items-center gap-5">
            <TextField
              className="w-full"
              id="outlined-basic"
              name="name"
              value={user?.displayName}
              variant="outlined"
            />
            <TextField
              className="w-full"
              id="outlined-basic"
              name="presentlocation"
              label="Present Location"
              variant="outlined"
            />
          </div>
          <div className="text-center">
            <Button type="submit" className="allartifacts !mt-5 ">
              Add Artifacts
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addartifact;
