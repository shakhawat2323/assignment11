import React from "react";
import Bannar from "./Bannar";
import Artifacthomecard from "./Artifacthomecard";
import Newsection from "./Newsection";
import Count from "./Count";
import Gallary from "./Gallary";
import Blog from "./Blog";

const Home = () => {
  return (
    <div>
      <Bannar></Bannar>
      <Artifacthomecard></Artifacthomecard>

      <Gallary></Gallary>
      <Blog />

      <Newsection></Newsection>

      <Count></Count>
    </div>
  );
};

export default Home;
