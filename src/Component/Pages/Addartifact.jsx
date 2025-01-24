import React from "react";

const Addartifact = () => {
  const submitdata = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
  };
  return (
    <div className="w-11/12 mx-auto">
      {/* <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset onSubmit={submitdata} className="fieldset">
                <label className="fieldset-label">Email</label>
                <input
                  name="name"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  name="email"
                  className="input"
                  placeholder="Password"
                />

                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div> */}
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100  w-[400px] shrink-0 shadow-2xl">
            <h1 className="text-3xl text-center font-bold mt-3">
              ADD to new Artifact
            </h1>
            <form className="card-body">
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
                <select className="select select-accent w-full max-w-xs">
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
                  placeholder="Discovered By"
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
                  placeholder="Present Location"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-primary text-center">
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
