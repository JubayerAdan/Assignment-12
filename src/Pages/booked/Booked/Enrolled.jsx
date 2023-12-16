import React from "react";
import useBook from "../../../hooks/useBook";
import useClasses from "../../../hooks/useClasses";

const Enrolled = () => {
  const [booked] = useBook();
  const approved = booked.filter((boook) => boook.pending === false);
  const [classes] = useClasses();

  // Get an array of booked class IDs
  const bookedClassIds = approved.map((app) => app.bookedClass);

  // Filter classes that have IDs in the bookedClassIds array
  const approvedClasses = classes.filter((classe) =>
    bookedClassIds.includes(classe._id)
  );

  console.log(approvedClasses);
  console.log(approved);
  console.log(classes);
  console.log(booked);

  return (
    <div className="m-10 space-y-9">
      {approvedClasses.map((app) => (
        <div className="card lg:card-side bg-base-100 shadow-xl" key={app._id}>
          <figure>
            <img className="w-full h-full" src={app.image} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{app.name}</h2>
            <p className="w-1/2 whitespace-normal">{app.description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Enrolled;
