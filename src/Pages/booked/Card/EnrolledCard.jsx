import React from "react";

const EnrolledCard = ({ card }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-72" src={card.image} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{card.name}</h2>
        <p>{card.description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View</button>
        </div>
      </div>
    </div>
  );
};

export default EnrolledCard;
