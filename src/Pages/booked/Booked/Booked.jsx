import React from "react";
import useBook from "../../../hooks/useBook";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Booked = () => {
  const [book, refetch] = useBook();
  const nonApproved = book.filter((boook) => boook.pending !== false);
  const total = nonApproved.reduce(
    (sum, item) => sum + parseFloat(item.entry_fee.split("$")[1]),
    0
  );
  const axiosPublic = useAxiosPublic();
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
        axiosPublic.delete(`/book/${id}`).then((result) => {
          console.log(result.data);
          Swal.fire({
            title: "Deleted!",
            text: "Your booked class has been deleted.",
            icon: "success",
          });
          refetch();
        });
      }
    });
  };
  console.log(total);
  return (
    <div>
      <h3 className="text-center text-4xl my-3 font-bold">
        Your booked Classes{" "}
        <button className="btn btn-neutral btn-md">Pay</button>
      </h3>
      <h5 className="text-center my-3 text-2xl font-normal">
        Remaining payment amount: ${total}
      </h5>
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
              <th>Action</th>
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
                <th>
                  {!boook.pending ? (
                    <button
                      disabled={true}
                      className="btn btn-ghost btn-md bg-red-600 text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  ) : (
                    <button
                      onClick={() => handleDelete(boook._id)}
                      className="btn btn-ghost btn-md bg-red-600 text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booked;
