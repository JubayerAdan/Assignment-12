import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaHouseUser,
  FaBuffer,
  FaBook,
  FaHome,
  FaLaptopHouse,
  FaUsers,
} from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import useIsAdmin from "../hooks/useIsAdmin";
const Dashboard = () => {
  const isAdmin = useIsAdmin();
  console.log(isAdmin);
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden left-20"
          >
            Dashboard
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>

          {isAdmin === true ? (
            <ul
              id="navlinks"
              className="menu p-4 w-80 min-h-full bg-[#050513] space-y-3 text-white "
            >
              <h4 className="text-3xl font-bold my-2 mx-3">Mystitsu</h4>
              <li className="text-white font-semibold text-[15px]">
                <NavLink to="/dashboard/adminhome">
                  <FaLaptopHouse className="text-lg"></FaLaptopHouse>
                  Admin Home
                </NavLink>
              </li>
              <li className="text-white font-semibold text-[15px]">
                <NavLink to="/dashboard/users">
                  <FaUsers className="text-lg"></FaUsers> Users
                </NavLink>
              </li>
              <li className="text-white font-semibold text-[15px]">
                <NavLink to="/dashboard/adminBooking">
                  <FaBook className="text-lg"></FaBook> Bookings
                </NavLink>
              </li>
              <li className="text-white font-semibold text-[15px]">
                <NavLink to="/dashboard/allinstrustor">
                  {" "}
                  <GiTeacher className="text-lg"></GiTeacher> All Instructor
                </NavLink>
              </li>
              <li className="text-white font-semibold text-[15px]">
                <NavLink to="/dashboard/addinstructor">
                  {" "}
                  <GiTeacher className="text-lg"></GiTeacher> Add Instructor
                </NavLink>
              </li>
              <li className="text-white font-semibold text-[15px]">
                <NavLink to="/dashboard/allclasses">
                  {" "}
                  <FaBook className="text-lg"></FaBook> All Class
                </NavLink>
              </li>
              <li className="text-white font-semibold text-[15px]">
                <NavLink to="/dashboard/addclass">
                  {" "}
                  <FaBook className="text-lg"></FaBook> Add Class
                </NavLink>
              </li>
              <div className="divide-red-500 divider"></div>
              <li className="text-white font-semibold text-[15px]">
                <NavLink to="/">
                  {" "}
                  <FaHome className="text-lg"></FaHome> Home
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul
              id="navlinks"
              className="menu p-4 w-80 min-h-full bg-[#050513] space-y-3 text-white "
            >
              <h4 className="text-3xl font-bold my-2 mx-3">Mystitsu</h4>
              <li className="text-white font-semibold text-[15px]">
                <NavLink to="/dashboard/home">
                  <FaHouseUser className="text-lg"></FaHouseUser>
                  User Home
                </NavLink>
              </li>
              <li className="text-white font-semibold text-[15px]">
                <NavLink to="/dashboard/classes">
                  <FaBuffer className="text-lg"></FaBuffer> Enrolled Class
                </NavLink>
              </li>
              <li className="text-white font-semibold text-[15px]">
                <NavLink to="/dashboard/booked">
                  {" "}
                  <FaBook className="text-lg"></FaBook> Booked Class
                </NavLink>
              </li>
              <div className="divide-red-500 divider"></div>
              <li className="text-white font-semibold text-[15px]">
                <NavLink to="/">
                  {" "}
                  <FaHome className="text-lg"></FaHome> Home
                </NavLink>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
