import React from "react";
import Bannar from "./Bannar";
import Artifacthomecard from "./Artifacthomecard";
import Newsection from "./Newsection";
import Count from "./Count";

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Artifacthomecard></Artifacthomecard>
      <Newsection></Newsection>
      <Count></Count>
    </div>
  );
};

export default Home;
