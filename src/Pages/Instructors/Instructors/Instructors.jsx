import React, { useEffect, useState } from "react";
import Flicking from "@egjs/react-flicking";
import AwesomeSlider from "react-awesome-slider";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import useInstructor from "../../../hooks/useInstructor";
import InstructorsCard from "../InstructorsCard";
import useUser from "../../../hooks/useUser";
import useAuth from "../../../hooks/useAuth";

const Instructors = () => {
  const [instructors] = useInstructor();
  const [current, setCurrent] = useState([]);
  const { user } = useAuth();
  const [dbUser] = useUser();
  useEffect(() => {
    const currentUser = dbUser.find((us) => us.email == user.email);
    setCurrent(currentUser);
  }, [dbUser]);
  console.log(dbUser);
  console.log(current);
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.pinimg.com/564x/a2/36/e4/a236e4abf372e2310decbc1e677c09c3.jpg"
            className="w-full h-96"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.pinimg.com/564x/34/00/4f/34004f7312fc4b097785517f417b3636.jpg"
            className="w-full h-96"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.pinimg.com/564x/c2/b5/b0/c2b5b0c7e642da9106f69f054a01790f.jpg"
            className="w-full h-96"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="https://i.pinimg.com/564x/77/67/13/7767132140072e47043cf4c83e8bae43.jpg"
            className="w-full h-96"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div>
        <div></div>
      </div>

      <div className="my-9">
        <h4 className="text-4xl font-bold text-center">Instructors</h4>
        <div className="divider"></div>
      </div>
      <div className="my-16 mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-12 ">
        {instructors.map((instructor) => (
          <InstructorsCard card={instructor}></InstructorsCard>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
