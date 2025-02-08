import React from "react";
import CountUp from "react-countup";

const Count = () => {
  return (
    <div className=" flex flex-col justify-center lg:flex-row items-center  lg:justify-around gap-5 mt-5">
      <div className="bg-blue-400 w-52 h-32 mb-5 shadow-2xl rounded-2xl">
        <div className=" text-center my-10">
          <h1 className="text-3xl font-bold">User</h1>
          <div className="text-2xl font-bold">
            <CountUp start={1} end={30000} duration={10} />M
          </div>
        </div>
      </div>
      <div className="bg-[#ff69b48e] w-52 h-32 mb-5 shadow-2xl rounded-2xl">
        <div className="text-center text-3xl font-bold py-10">
          <p className="text-2xl font-bold ">Artifact</p>
          <CountUp start={500} end={100} duration={10} />K
        </div>
      </div>
      <div className="bg-[#FF99FF] w-52 h-32 shadow-2xl rounded-2xl ">
        <div className="text-3xl font-bold text-center py-10">
          <h1>Like Count</h1>
          <CountUp start={1} end={300} duration={10} />
        </div>
      </div>
    </div>
  );
};

export default Count;
