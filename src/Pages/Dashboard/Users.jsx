import React from "react";
import useUser from "../../hooks/useUser";
import { FaTrashAlt, FaUserAlt, FaUserShield } from "react-icons/fa";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Users = () => {
  const [users, refetch] = useUser();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const handleChangeRole = (data) => {
    console.log(data);
    Swal.fire({
      title: `Wanna make ${data.name} ${
        data.admin == true ? "a user" : "a admin"
      }`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: `Make ${data.admin == true ? "User" : "Admin"}`,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(
            `/users/${data.email}?apikey=ee30bfd7-9b83-4b5a-ad34-ccf526010ac9`
          )
          .then((result) => {
            Swal.fire({
              title: `${data.name} is a ${
                data.admin == true ? "User now" : "Admin now"
              }`,
              icon: "success",
            });
            refetch();
          });
      }
    });
  };
  const handleDeleteUser = (id) => {
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
          .delete(`/users/${id}?apikey=ee30bfd7-9b83-4b5a-ad34-ccf526010ac9`)
          .then((result) => {
            console.log(result);
            Swal.fire({
              title: "Deleted!",
              text: "User has been deleted.",
              icon: "success",
            });
            refetch();
          });
      }
    });
  };
  console.log(users);
  return (
    <div>
      <div className="my-10">
        <h2 className="text-5xl font-bold text-center ">Users</h2>
        <div className="divider"></div>
      </div>
      <h4 className="text-3xl font-semibold">All Users</h4>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>User</th>
              <th>Role</th>
              <th>Email</th>
              <th>Change Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {users.map((userr, index) => (
              <tr>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={userr.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{userr.name}</div>
                    </div>
                  </div>
                </td>
                <td>{userr.admin == true ? "admin" : "user"}</td>
                <td>{userr.email}</td>
                <td>
                  <button
                    onClick={() => handleChangeRole(userr)}
                    className="btn btn-ghost btn-md text-xl text-white bg-yellow-600"
                  >
                    {userr.admin == false ? (
                      <FaUserAlt></FaUserAlt>
                    ) : (
                      <FaUserShield></FaUserShield>
                    )}
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(userr._id)}
                    className="btn btn-ghost btn-md text-xl text-white bg-red-600"
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

export default Users;
