import React from "react";
import useClasses from "../../hooks/useClasses";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllClasses = () => {
  const axiosSecure = useAxiosSecure();
  const [classes, refetch] = useClasses();
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
          .delete(`/classes/${id}?apikey=ee30bfd7-9b83-4b5a-ad34-ccf526010ac9`)
          .then((result) => {
            // console.log(result.data);
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Class has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };
  return (
    <div>
      <div>
        <div className="my-5">
          <h3 className="text-4xl text-center my-5 font-bold">Classes</h3>
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
                <th>Class</th>
                <th>Entry Fee</th>
                <th>Instructor</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {classes.map((cla, index) => (
                <tr>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={cla.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{cla.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="text-right">{cla.entry_fee}</td>
                  <td> {cla.instructor_name}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(cla._id)}
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
    </div>
  );
};

export default AllClasses;
