import React, { useContext } from "react";
import video from "../../../../public/video/loginimg.mp4";
import UseAuth from "../../Hook/UseAuth";
import Swal from "sweetalert2";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const { Loginuser, Loginwithgoogle } = UseAuth();
  const naviget = useNavigate();
  const loginuser = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ email, password });
    Loginuser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire({
          title: "Login Successfully",
          icon: "success",
          draggable: true,
        });
        naviget("/");
      })
      .catch((err) => console.log(err.message));
  };

  const loginwithgoogle = () => {
    Loginwithgoogle()
      .then((result) => {
        Swal.fire({
          title: "Google login Successfully",
          icon: "success",
          draggable: true,
        });
        console.log(result);
        naviget("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="relative w-full h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="card w-[400px] bg-[#ffffff52] bg-opacity-90 shadow-lg rounded-lg">
          <h1 className="text-4xl text-center mt-3 font-bold">Login</h1>
          <form onSubmit={loginuser} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-xl font-bold ">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  href="#"
                  className="label-text-alt link link-hover text-xl font-bold"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn login mx-auto">Login</button>
            </div>
          </form>
          <div className="text-center mb-5 text-xl font-bold ">
            <div>
              <button
                onClick={loginwithgoogle}
                className="btn bg-white mb-5 text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </div>
            Don't have an account?{" "}
            <NavLink to="/register" className="text-blue-700">
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
