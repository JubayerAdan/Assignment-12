import React, { useState } from "react";
import { Link } from "react-router-dom";

const InstructorsCard = ({ card }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div>
      <div className="card w-72 bg-base-100 shadow-xl">
        <figure>
          <img className="h-80 w-full" src={card.image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{card.name}</h2>
          <p className="w-full">
            {expanded == false
              ? card.description.slice(0, 70)
              : card.description}{" "}
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-primary"
            >
              {expanded == false ? "See more..." : "See less"}
            </button>
          </p>
          <div className="card-actions justify-end">
            <Link to={`/instructors/${card._id}`}>
              <button className="btn btn-neutral">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsCard;
