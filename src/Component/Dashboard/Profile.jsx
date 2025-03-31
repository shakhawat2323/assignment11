import React, { useEffect, useState } from "react";
import Bannar from "../../../public/Deshbord/bannarimagsss.png";
import Naruto from "../../../public/Deshbord/naruto.png";
import Button from "@mui/material/Button";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseAuth from "../Hook/UseAuth";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import Gallary from "../Home/Gallary";
import { IoCameraReverseOutline } from "react-icons/io5";
import { Input } from "@/components/ui/input";
const Profile = () => {
  const { user } = UseAuth();

  const [artifact, setArtifact] = useState([]);

  useEffect(() => {
    mypostartifact();
  }, [user]);

  const mypostartifact = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_SOME_KEY}/arifacts/${user?.email}`
    );
    setArtifact(data.slice(0, 5));
  };
  console.log(artifact);
  return (
    <div className="">
      <div className="relative border-b pb-24 border-[rgba(0,0,0,0.1)]">
        <div className="bg-slate-500 overflow-hidden   w-full rounded-2xl mt-10 h-52">
          <img className="w-full " src={Bannar} alt="" />
        </div>
        <div className="absolute top-36 flex left-16  ">
          <img
            className="w-28 
           bg-red-600 rounded-2xl  "
            src={user?.photoURL}
            alt=""
          />
          <button className="mt-[100px] -ml-2">
            <IoCameraReverseOutline />
          </button>
          <div className="px-5 mt-14 flex items-center  ">
            <div>
              <p className="text-2xl font-bold ">{user?.displayName}</p>
              <p className="text-sm font-[400] ">MERN Stack Web Developer</p>
            </div>
          </div>
          <div>
            <button className="flex absolute w-[100px] bg-[#c0c0c0] px-2 text-sm  font-semibold  -right-[570px]  items-center rounded-3xl  top-1  ">
              uplode img
            </button>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div>
          <Tabs>
            <TabList className="flex items-center gap-16 px-6 py-3 bg-purple-400">
              <Tab className="text-[20px] cursor-pointer px-2">Post</Tab>
              {/* <Tab className="text-[20px] cursor-pointer  px-2">
                Edit Profile
              </Tab> */}
            </TabList>

            <TabPanel>
              <div>
                <div>
                  <p className="text-xl font-semibold mt-5">
                    {" "}
                    my post artifact {artifact.length}
                  </p>
                </div>
                <div>
                  <div className="w-11/12 mx-auto">
                    <div>
                      <div className="overflow-x-auto">
                        <table className="table">
                          {/* head */}
                          <thead>
                            <tr>
                              <th>Artifact Name</th>
                              <th>description</th>
                              <th>email</th>
                              <th>upgrade</th>
                              <th>delete</th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* row 1 */}
                            {artifact.map((artifact, index) => (
                              <tr key={index}>
                                <td>
                                  <div className="flex items-center gap-3">
                                    <div className="avatar">
                                      <div className="mask mask-squircle h-12 w-12">
                                        <img
                                          src={artifact.artifactimg}
                                          alt="Avatar Tailwind CSS Component"
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <div className="font-bold">
                                        {artifact.artifactname}
                                      </div>
                                      <div className="text-sm opacity-50">
                                        {artifact.name}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  {`presentlocation : ${artifact.presentlocation}`}
                                  <br />
                                  <span className=" ">
                                    {`description : ${artifact.historicalcontext} `}
                                  </span>
                                </td>
                                <td className="">{artifact.useremail}</td>
                                <td className="text-4xl">
                                  <Link to={`/mypostupdate/${artifact._id}`}>
                                    <FiEdit />
                                  </Link>
                                </td>
                                <th>
                                  <button
                                    onClick={() => Artiactdelete(artifact._id)}
                                    className="btn btn-ghost  text-4xl text-red-600"
                                  >
                                    <MdDelete />
                                  </button>
                                </th>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-end px-9">
                    <NavLink to="/allartifact" className="allartifacts    ">
                      All Artifacts
                    </NavLink>
                  </div>
                </div>
                <div>
                  <Gallary />
                </div>
              </div>
            </TabPanel>
            {/* <TabPanel>
              <div className="px-5 pb-96">
                <p className="text-xl font-bold mt-5 pb-10">
                  Personal Information
                </p>
                <div className="flex w-full items-center ">
                  <div className="w-[20%] flex flex-col gap-8">
                    <label className="text-xl font-semibold">Full Name :</label>
                    <label className="text-xl font-semibold">Age :</label>
                    <label className="text-xl font-semibold">Position:</label>
                    <label className="text-xl font-semibold">Address :</label>
                    <label className="text-xl font-semibold">Phone :</label>
                    <label className="text-xl font-semibold">Email :</label>
                  </div>
                  <div className="w-[80%] flex flex-col gap-6">
                    <Input
                      className="w-8/12 border-none bg-[#c0c0c0] rounded-2xl"
                      type="text"
                      name="name"
                      defaultValue={user?.displayName}
                    />
                    <Input
                      className="w-8/12 border-none bg-[#c0c0c0] rounded-2xl"
                      type="text"
                      name="age"
                      placeholder="Age"
                    />
                    <Input
                      className="w-8/12 border-none bg-[#c0c0c0] rounded-2xl"
                      type="text"
                      name="Position"
                      placeholder="Position"
                    />
                    <Input
                      className="w-8/12 border-none bg-[#c0c0c0] rounded-2xl"
                      type="text"
                      name="address"
                      placeholder="Address"
                    />
                    <Input
                      className="w-8/12 border-none bg-[#c0c0c0] rounded-2xl"
                      type="text"
                      name="phone"
                      placeholder="Phone"
                    />
                    <Input
                      className="w-8/12 border-none bg-[#c0c0c0] rounded-2xl"
                      type="text"
                      name="email"
                      defaultValue={user?.email}
                      redonly
                    />
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <h2>Any content 3</h2>
            </TabPanel> */}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Profile;
