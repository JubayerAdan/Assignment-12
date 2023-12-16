import React from "react";
import { useLoaderData } from "react-router-dom";
import useClasses from "../../../hooks/useClasses";
import ClassesCard from "../../Classes/ClassesCard";

const InstructorsDetails = () => {
  const instructor = useLoaderData();
  const [classes] = useClasses();
  const iclasses = classes.filter(
    (Class) => Class.instructor_name == instructor.name
  );
  console.log(iclasses);
  console.log(instructor);
  return (
    <div className="my-5">
      <div className="card lg:card-side max-h-[30em] bg-base-100 shadow-xl">
        <figure className="max-w-md">
          <img className="max-w-md" src={instructor.image} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-4xl font-bold">{instructor.name}</h2>
          <p className="font-semibold">
            Class taken: {instructor.classes_taken}
          </p>
          <p className="font-semibold -top-32">{instructor.description}</p>
        </div>
      </div>
      <h2 className="text-4xl font-bold text-center my-7">Classes</h2>
      <div className="divider"></div>
      <div className="my-16 mx-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 xl:gap-12 ">
        {iclasses.map((Class) => (
          <ClassesCard instructor={true} card={Class}></ClassesCard>
        ))}
      </div>
    </div>
  );
};

export default InstructorsDetails;
