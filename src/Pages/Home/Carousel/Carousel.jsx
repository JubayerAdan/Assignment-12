import Aos from "aos";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import { Parallax } from "react-parallax";
const Carousel = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={
          "https://t3.ftcdn.net/jpg/02/02/08/36/360_F_202083692_23nbdjnpeld94PqEKf42xv8IqB5HTx4M.jpg"
        }
        bgImageAlt="the menu"
        strength={-200}
      >
        <div className="hero  text-slate-300 min-h-screen">
          <div className="hero-content flex-col lg:flex-row w-full ">
            <div className="w-1/2 -left-10 flex flex-col justify-between">
              <div data-aos="fade-right" className=" w-40 h-40 bg-black">
                <img
                  src="https://i.pinimg.com/564x/f2/f6/06/f2f6068a98713a30a0b6b10656c51ea8.jpg"
                  alt=""
                />
              </div>
              <div
                data-aos="fade-left"
                className=" md:ms-32 sm:ms-28 lg:ms-48 w-48  bg-black"
              >
                <img
                  className="h-56"
                  src="https://i.pinimg.com/564x/73/f3/36/73f3364165bc3efb344052d6e003d7ce.jpg"
                  alt=""
                />
              </div>
              <div data-aos="fade-down" className="mb-10 w-40 h-40 bg-black">
                <img
                  src="https://i.pinimg.com/564x/04/ec/24/04ec24f5a3090d2357700296273ae7ac.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="w-1/2">
              <h1 className="text-5xl font-bold">Start Your Mastery Journey</h1>
              <p className="py-6">
                Embark on a transformative journey of self-discovery and martial
                arts mastery at Mistitsu. Join us to develop strength,
                discipline, and skill. Your path to excellence begins here.
              </p>
              <button className="btn btn-accent">Get Started</button>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Carousel;
