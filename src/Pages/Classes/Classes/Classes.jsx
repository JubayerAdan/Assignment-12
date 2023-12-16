import React from "react";
import useClasses from "../../../hooks/useClasses";
import ClassesCard from "../ClassesCard";

const Classes = () => {
  const [classes] = useClasses();
  console.log(classes);
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://cervizzismartialarts.com/wp-content/uploads/sites/12/2016/11/home-banner.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Mystitsu Classes</h1>
            <p className="mb-5">
              We provide you most popular and the martial arts classes make you
              unique and stronger
            </p>
            <button className="btn btn-neutral">Get Started</button>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h4 className="text-4xl text-center">Classes</h4>
        <div className="divider"></div>
      </div>
      <div className="my-16 mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-12 ">
        {classes.map((classs) => (
          <ClassesCard
            card={classs}
            instructor={true}
            key={classs._id}
          ></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default Classes;
