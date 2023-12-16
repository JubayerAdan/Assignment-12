import React from "react";
import Carousel from "../Carousel/Carousel";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <PopularInstructor></PopularInstructor>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
