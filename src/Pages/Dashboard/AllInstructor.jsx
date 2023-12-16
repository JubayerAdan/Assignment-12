import React from "react";
import useInstructor from "../../hooks/useInstructor";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllInstructor = () => {
  const [instructor, refetch] = useInstructor();
  const axiosSecure = useAxiosSecure();
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
        axiosSecure
          .delete(
            `/instructors/${id}?apikey=ee30bfd7-9b83-4b5a-ad34-ccf526010ac9`
          )
          .then((result) => {
            refetch();
            // console.log(result.data);
            Swal.fire({
              title: "Deleted!",
              text: "Instructor has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };
  return (
    <div>
      <div className="my-5">
        <h3 className="text-4xl text-center my-5 font-bold">Instructors</h3>
        <div className="divider"></div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Instructor</th>
              <th>Class Taken</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {instructor.map((inst, index) => (
              <tr>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={inst.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{inst.name}</div>
                    </div>
                  </div>
                </td>
                <td className="text-right">{inst.classes_taken}</td>
                <td>{inst.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(inst._id)}
                    className="btn btn-ghost btn-md bg-red-600 text-xl text-white"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllInstructor;
