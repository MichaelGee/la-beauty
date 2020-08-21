import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Organizations from "../components/Organizations";
import Service from "../components/Service";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Organizations />
      <Service />
    </div>
  );
};

export default HomePage;
