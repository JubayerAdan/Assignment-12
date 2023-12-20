import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useBook from "../../hooks/useBook";

const ClassesCard = ({ card, instructor }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const bookings = useBook(true);
  const bookingsEmail = useBook(false);

  const bookedClassLength =
    50 - bookings[0].filter((book) => book.bookedClass == card._id).length;
  const bookedDisable =
    bookingsEmail[0].filter(
      (book) => book.bookedClass == card._id && book.email == user?.email
    ).length > 0;
  console.log(
    "email check",
    bookingsEmail[0].filter(
      (book) => book.bookedClass == card._id && book.email == user?.email
    )
  );
  const isnotLogged = () => {
    Swal.fire({
      title: "Please Log In To Enter",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Log In",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
  };
  return (
    <div className="card  md:w-72 w-60 bg-base-100 shadow-xl">
      <figure>
        <img
          src={card.image}
          className="w-full h-80 object-cover"
          alt="Shoes"
        />
        <div className="absolute top-1 right-2 p-1 rounded bg-[#0c1330]">
          <h3 className=" text-white">Seat: {bookedClassLength}/50</h3>
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{card.name}</h2>
        {instructor == true && (
          <p className="font-semibold">Instructor: {card.instructor_name}</p>
        )}
        <div className="card-actions justify-end">
          <button
            disabled={bookedDisable ? true : false}
            onClick={() =>
              user ? navigate(`/classes/${card._id}`) : isnotLogged()
            }
            className="btn btn-neutral"
          >
            {bookedDisable ? "Already booked" : "Book now"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassesCard;
