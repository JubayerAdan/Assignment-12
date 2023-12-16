import React from "react";
import useClasses from "../../../hooks/useClasses";
import useInstructor from "../../../hooks/useInstructor";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";
// import "react-parallax-tilt/dist/ScaleNoTilt.demozap.scss";

const PopularInstructor = () => {
  const [Instructors] = useInstructor(3);

  return (
    <div>
      <h2 className="text-4xl text-center my-5 font-semibold">
        Popular Instructors
      </h2>
      <div className="divider"></div>
      <div className="my-16 mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-12 ">
        {Instructors.map((card, index) => (
          <div key={index}>
            <Tilt tiltEnable={false} scale={1.1} transitionSpeed={2500}>
              <div className="scale-no-tilt">
                <div className="card  md:w-72 w-60 bg-base-100 shadow-xl">
                  <figure>
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-80 object-cover"
                    />
                  </figure>
                  <div className="card-body p-4">
                    <h2 className="card-title text-lg font-semibold mb-2">
                      {card.name}
                    </h2>
                    <p className="text-sm text-gray-600">
                      Class Taken: {card.classes_taken}
                    </p>
                    <div className="card-actions flex justify-end mt-3">
                      <Link to={`/instructors/${card._id}`}>
                        <button className="btn btn-neutral">Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
