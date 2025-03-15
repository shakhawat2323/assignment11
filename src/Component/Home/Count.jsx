import React from "react";
import CountUp from "react-countup";
import { FaQrcode } from "react-icons/fa";
// import { spaces } from "./../../../node_modules/colorjs.io/types/src/color.d";
import { FaUsers } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { SlTrophy } from "react-icons/sl";

const Count = () => {
  return (
    <>
      {/*  <div className=" flex flex-col justify-center lg:flex-row items-center  lg:justify-around gap-5 mt-5">
    //   <div className="bg-blue-400 w-52 h-32 mb-5 shadow-2xl rounded-2xl">
    //     <div className=" text-center my-10">
    //       <h1 className="text-3xl font-bold">User</h1>
    //       <div className="text-2xl font-bold">
    //         <CountUp start={1} end={30000} duration={10} />M
    //       </div>
    //     </div>
    //   </div>
    //   <div className="bg-[#ff69b48e] w-52 h-32 mb-5 shadow-2xl rounded-2xl">
    //     <div className="text-center text-3xl font-bold py-10">
    //       <p className="text-2xl font-bold ">Artifact</p>
    //       <CountUp start={500} end={100} duration={10} />K
    //     </div>
    //   </div>
    //   <div className="bg-[#FF99FF] w-52 h-32 shadow-2xl rounded-2xl ">
    //     <div className="text-3xl font-bold text-center py-10">
    //       <h1>Like Count</h1>
    //       <CountUp start={1} end={300} duration={10} />
    //     </div>
    //   </div>
     </div> */}

      <div className="bg-[#F5F5F5]  h-96 dark:bg-slate-500 mt-5">
        <div className="w-11/12 mx-auto flex items-center justify-between py-24 ">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div>
              <FaQrcode className="text-7xl font-bold" />
            </div>
            <div>
              <CountUp
                className="text-4xl font-bold"
                start={1}
                end={3000}
                duration={10}
              />
            </div>
            <div>
              <p className="text-xl font-bold">Historical Objects</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div>
              <FaUsers className="text-7xl font-bold" />
            </div>
            <div>
              <CountUp
                className="text-4xl font-bold"
                start={1}
                end={30000}
                duration={10}
              />
            </div>
            <div>
              <p className="text-xl font-bold">Daily Visitor</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div>
              <BsBank className="text-7xl font-bold" />
            </div>
            <div>
              <CountUp
                className="text-4xl font-bold"
                start={1}
                end={30}
                duration={10}
              />
            </div>
            <div>
              <p className="text-xl font-bold ">Venus Worldwide</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div>
              <SlTrophy className="text-7xl font-bold" />
            </div>
            <div>
              <CountUp
                className="text-4xl font-bold"
                start={1}
                end={20}
                duration={10}
              />
            </div>
            <div>
              <p className="text-xl font-bold">Winning Award</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Count;
