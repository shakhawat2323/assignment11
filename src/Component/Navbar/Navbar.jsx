import { NavLink } from "react-router-dom";
import Logo from "/img/logo.png";
import DarkandLight from "../Dark and lignt/DarkandLight";
import UseAuth from "../Hook/UseAuth";
import { FaUserAlt } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const { user, Logout } = UseAuth();
  console.log(user);

  const logoutbtn = () => {
    Logout();
  };
  const navlink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/">All Artifact</NavLink>
      </li>
      <li>
        <NavLink to="/">Add Artifacts</NavLink>
      </li>
      <li>
        <NavLink to="/">Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar  bg-gray-200/30 py-3 w-11/12 mx-auto top-0  sticky z-20 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navlink}
          </ul>
        </div>
        <div className="flex items-center ">
          <img className="w-16 h-16" src={Logo} alt="" />
          <p className="text-3xl font-bold hidden lg:block">
            Sm
            <span className="text-[#d67000]">i</span>
            rok
          </p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-xl gap-3  px-1">{navlink}</ul>
      </div>
      <div className="navbar-end">
        <div>
          <div className="mr-5">
            <DarkandLight></DarkandLight>
          </div>
        </div>
        <div>
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {user?.email ? (
                    <img src={user.photoURL} alt="User Avatar" />
                  ) : (
                    <FaUserAlt />
                  )}
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                  <button onClick={logoutbtn}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="inline-flex gap-3">
              <NavLink to="/login" className="btn navbarlogin ">
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="btn hidden lg:block navbarregister items-center pt-2"
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
