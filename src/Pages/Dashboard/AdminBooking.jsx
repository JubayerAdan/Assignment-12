import React from "react";
import useBook from "../../hooks/useBook";
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AdminBooking = () => {
  const [book, refetch] = useBook(true);
  const axiosSecure = useAxiosSecure();
  const handleApprove = (id) => {
    Swal.fire({
      title: "Wanna Approve This?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Approve",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/book/${id}?apikey=ee30bfd7-9b83-4b5a-ad34-ccf526010ac9`)
          .then((res) => {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Booking has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/book/${id}`).then((result) => {
          console.log(result.data);
          Swal.fire({
            title: "Approved!",
            text: "Booking has been approved",
            icon: "success",
          });
          refetch();
        });
      }
    });
  };
  return (
    <div>
      <div>
        <h3 className="text-center text-4xl my-3 font-bold">
          All Booked Classes
        </h3>

        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label className="text-center">#</label>
                </th>
                <th>Classes</th>
                <th>Entry Fee</th>
                <th>Pending</th>
                <th>Email</th>
                <th>Approve</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {book.map((boook, index) => (
                <tr key={boook._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={boook.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{boook.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">{boook.entry_fee}</td>
                  <td>{boook.pending ? "pending" : "approved"}</td>
                  <td>{boook.email}</td>
                  <th>
                    {boook.pending == true ? (
                      <button
                        onClick={() => handleApprove(boook._id)}
                        className="btn btn-ghost btn-md text-xl bg-green-600 text-white"
                      >
                        <FaCheckCircle></FaCheckCircle>
                      </button>
                    ) : (
                      <button
                        disabled={true}
                        className="btn btn-ghost btn-md text-xl bg-green-600 text-white"
                      >
                        <FaCheckCircle></FaCheckCircle>
                      </button>
                    )}
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(boook._id)}
                      className="btn btn-ghost btn-md text-xl bg-red-600 text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminBooking;
