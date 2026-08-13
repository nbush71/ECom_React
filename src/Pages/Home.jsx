import React from "react";
import Landing from "../Components/Landing.jsx";
import Highlights from "../Components/Highlights.jsx";
import Features from "../Components/Featured.jsx";
import CheapestBooks from "../Components/CheapestBooks.jsx";
import Explore from "../Components/Explore.jsx";

const Home = () => {
  return (
    <>
      <Landing />
      <main>
        <Highlights />
        <Features />
        <CheapestBooks />
        <Explore />
      </main>
    </>
  );
};

export default Home;
