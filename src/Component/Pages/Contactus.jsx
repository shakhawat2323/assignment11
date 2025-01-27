import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa";

const Contactus = () => {
  return (
    <div>
      <h1 className="text-3xl mt-5 mb-5 font-bold text-center">
        Get In Touch With Us Now
      </h1>
      <div className=" flex w-11/12 gap-16 mx-auto">
        {/* get in touch with us now  */}

        <div className="grid grid-cols-1  lg:grid-cols-2 gap-2 row-span-3 ">
          <div className="">
            <div className="card bg-[#EFF6FF] w-72 h-64 shadow-2xl flex justify-center items-center">
              <div className="card-body">
                <div className="text-6xl font-bold flex justify-center items-center  text-blue-600">
                  <FaPhoneAlt />
                </div>
                <h2 className="text-3xl font-bold mt-2 mb-2 ">Phone Number </h2>
                <p className="text-xl font-bold text-center">+8801749888203</p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card bg-[#EFF6FF] w-72 h-64 shadow-2xl flex justify-center items-center">
              <div className="card-body">
                <div className="text-6xl font-bold flex justify-center items-center  text-blue-600">
                  <MdEmail />
                </div>
                <h2 className="text-3xl font-bold mt-2 mb-2 text-center ">
                  Email{" "}
                </h2>
                <p className="text-xl font-bold text-center">info@smirok.com</p>
                <p className="text-xl font-bold text-center">
                  support@smirok.com
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card bg-[#EFF6FF] w-72 h-64 shadow-2xl flex justify-center items-center">
              <div className="card-body">
                <div className="text-6xl font-bold flex justify-center items-center  text-blue-600">
                  <IoLocationSharp />
                </div>
                <h2 className="text-3xl font-bold mt-2 mb-2 text-center ">
                  Location
                </h2>
                <p className="text-xl font-bold text-center">
                  Level-4, 34, Awal Centre, Banani, Dhaka
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="card bg-[#EFF6FF] w-72 h-64 shadow-2xl flex justify-center items-center">
              <div className="card-body">
                <div className="text-6xl font-bold flex justify-center items-center  text-blue-600">
                  <FaClock />
                </div>
                <h2 className="text-3xl font-bold mt-2 mb-2 ">working Hours</h2>
                <p className="text-xl font-bold text-center">
                  Monday To Saturday 09:00 AM To 06:00PM
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="max-w-4xl mx-auto p-6 bg-[#EFF6FF] rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-700 mb-6 text-center">
              Contact Form
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* First Name */}
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="text-gray-600 font-medium"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="First Name"
                    required
                  />
                  <span className="absolute left-3 top-3 text-gray-400">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>

              {/* Last Name */}
              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-gray-600 font-medium">
                  Last Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Last Name"
                  />
                  <span className="absolute left-3 top-3 text-gray-400">
                    <i className="fas fa-user"></i>
                  </span>
                </div>
              </div>

              {/* Mobile No */}
              <div className="flex flex-col">
                <label htmlFor="mobileNo" className="text-gray-600 font-medium">
                  Mobile No <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    id="mobileNo"
                    className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Mobile No"
                    required
                  />
                  <span className="absolute left-3 top-3 text-gray-400">
                    <i className="fas fa-phone"></i>
                  </span>
                </div>
              </div>

              {/* Email ID */}
              <div className="flex flex-col">
                <label htmlFor="emailId" className="text-gray-600 font-medium">
                  Email ID <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="emailId"
                    className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Email ID"
                    required
                  />
                  <span className="absolute left-3 top-3 text-gray-400">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>

              {/* Message */}
              <div className="md:col-span-2 flex flex-col">
                <label htmlFor="message" className="text-gray-600 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Contactus;
