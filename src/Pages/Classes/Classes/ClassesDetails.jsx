import React, { useState, useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useInstructor from "../../../hooks/useInstructor";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import useBook from "../../../hooks/useBook";

const ClassesDetails = () => {
  const card = useLoaderData();
  const [instructor] = useInstructor();
  const [id, setId] = useState(null); // Initialize id with null
  const { user } = useAuth();
  const pid = useParams();
  console.log(pid.id);
  const [book, refetch] = useBook(false);
  const bookedDisable =
    book.filter((book) => book.bookedClass == pid.id).length > 0;
  const bookNow = async () => {
    const newBookCard = {
      email: user.email,
      name: card.name,
      image: card.image,
      bookedClass: card._id,
      entry_fee: card.entry_fee,
    };
    const result = await axios
      .post("http://localhost:5000/book", newBookCard)
      .then((data) => {
        console.log(data.data);
        if (data.data.insertedId) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Booked Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });

    console.log(result);
  };
  useEffect(() => {
    const instructor_Card = instructor.find(
      (instructorc) => instructorc.name === card.instructor_name
    );

    if (instructor_Card) {
      const instructorId = instructor_Card._id;
      setId(instructorId);
      console.log(instructorId);
    } else {
      console.log("Instructor not found");
    }
  }, [card.instructor_name, instructor]); // Only re-run the effect if these dependencies change

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={card.image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{card.name}</h1>
            <p className="py-6 px-2">
              Instructor:{" "}
              <Link to={`/instructors/${id}`} className="font-bold">
                {card.instructor_name}
              </Link>
            </p>
            <p className="px-2">
              Entry fee: <span className="font-semibold">{card.entry_fee}</span>
            </p>
            <p className="px-2">{card.description}</p>

            <button
              disabled={bookedDisable ? true : false}
              onClick={() => bookNow()}
              className="btn btn-neutral my-2"
            >
              {bookedDisable ? "Already booked" : "Book now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesDetails;
