import { NavLink } from "react-router-dom";
import Logo from "/img/logo.png";
import DarkandLight from "../Dark and lignt/DarkandLight";
import UseAuth from "../Hook/UseAuth";
import { FaUserAlt } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const { user, Logout } = UseAuth();

  const logoutbtn = () => {
    Logout();
  };
  const navlink = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allartifact">All Artifact</NavLink>
      </li>
      <li>
        <NavLink to="/addartifact">Add Artifact</NavLink>
      </li>
      <li>
        <NavLink to="/contactus">Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <div className=" w-full bg-purple-400   top-0  fixed z-50  ">
      <div className="navbar  py-3">
        <div className="navbar-start ">
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
          <NavLink to="/" className="flex items-center ">
            <img className="w-16 h-16" src={Logo} alt="" />
            <p className="text-3xl font-bold hidden lg:block">
              Sm
              <span className="text-[#d67000]">i</span>
              rok
            </p>
          </NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-xl gap-3  px-1">
            {navlink}
          </ul>
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
                      <img src={user?.photoURL} alt="photos" />
                    ) : (
                      <FaUserAlt />
                    )}
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm  dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-60 p-2 shadow"
                >
                  <li>
                    <NavLink
                      to="/mypostartifact"
                      className=" text-xl block mx-auto font-bold"
                    >
                      My Post Artifact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/mylikedartifact"
                      className=" text-xl block mx-auto font-bold"
                    >
                      My Liked Artifact
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className=" text-xl block mx-auto font-bold"
                      to="/login"
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <button
                      className=" text-xl block mx-auto font-bold"
                      onClick={logoutbtn}
                    >
                      Logout
                    </button>
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
    </div>
  );
};

export default Navbar;
