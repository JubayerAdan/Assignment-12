import React, { useEffect } from "react";
import Aos from "aos";
const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="space-y-20 mb-10">
      <div className="flex justify-start mb-10">
        <div
          data-aos="zoom-in"
          className="w-72 flex justify-center mx-72 h-96 bg-[url('https://i.pinimg.com/564x/e6/9a/06/e69a061146a523c786d1e8d03bd46536.jpg')]"
        >
          <div className="mt-10">
            <h5 className="text-3xl text-center font-bold text-gray-300">
              What we have?
            </h5>
            <p className="mt-5 text-stone-500 font-semibold">
              We have <span className="text-stone-300">20</span> Teachers and
              <span className="text-stone-300">30+</span> classes
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end ms-20">
        <div
          data-aos="zoom-in-left"
          className="flex justify-center w-72 h-96 mx-96 bg-[url('https://i.pinimg.com/564x/ef/ff/36/efff36fc5fe63bf8fa7bd110f9305ade.jpg')]"
        >
          <div className="mt-5">
            <h5 className="text-3xl text-center font-bold text-gray-300">
              What you will get?
            </h5>
            <p className="mt-5 text-stone-400 font-semibold">
              Our teacher will train you to get stronger. We have many
              experienced teacher
            </p>
          </div>
        </div>
      </div>
      <div className="flex mx-72">
        <div
          data-aos="zoom-in-right"
          className="w-72 h-96 bg-[url('https://i.pinimg.com/564x/93/68/ed/9368ed90d29c8b964d9169a7636e3cd2.jpg')]"
        >
          <div className="mt-5">
            <h5 className="text-3xl text-center font-bold text-white">
              Start your Martial art journey
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
