import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Home from "../Pages/Home/Home/Home.jsx";
import InstructorsDetails from "../Pages/Instructors/InstructorsDetails/InstructorsDetails.jsx";
import Instructors from "../Pages/Instructors/Instructors/Instructors.jsx";
import Classes from "../Pages/Classes/Classes/Classes.jsx";
import Login from "../Pages/Auth/Login.jsx";
import SignUp from "../Pages/Auth/SignUp.jsx";
import ClassesDetails from "../Pages/Classes/Classes/ClassesDetails.jsx";
import PrivateRoute from "./PrivateRoutes.jsx";
import Dashboard from "../Layout/Dashboard.jsx";
import Booked from "../Pages/booked/Booked/Booked.jsx";
import Enrolled from "../Pages/booked/Booked/Enrolled.jsx";
import Users from "../Pages/Dashboard/Users.jsx";
import AdminBooking from "../Pages/Dashboard/AdminBooking.jsx";
import AllInstructor from "../Pages/Dashboard/AllInstructor.jsx";
import AllClasses from "../Pages/Dashboard/AllClasses.jsx";
import AddClass from "../Pages/Dashboard/AddClass.jsx";
import AddInstructor from "../Pages/Dashboard/AddInstructor.jsx";
import AdminRoutes from "./AdminRoutes.jsx";
import AdminHome from "../Pages/Dashboard/AdminHome.jsx";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors/:id",
        element: <InstructorsDetails></InstructorsDetails>,
        loader: ({ params }) =>
          fetch(`https://mistitsu-server.vercel.app/instructors/${params.id}`),
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
        loader: () => fetch(`https://mistitsu-server.vercel.app/instructors`),
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/classes/:id",
        element: (
          <PrivateRoute>
            <ClassesDetails></ClassesDetails>
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          fetch(`https://mistitsu-server.vercel.app/classes/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "booked",
        element: <Booked></Booked>,
      },
      {
        path: "classes",
        element: <Enrolled></Enrolled>,
      },
      {
        path: "users",
        element: (
          <AdminRoutes>
            <Users></Users>
          </AdminRoutes>
        ),
      },
      {
        path: "adminbooking",
        element: (
          <AdminRoutes>
            <AdminBooking></AdminBooking>
          </AdminRoutes>
        ),
      },
      {
        path: "allinstrustor",
        element: (
          <AdminRoutes>
            <AllInstructor></AllInstructor>
          </AdminRoutes>
        ),
      },
      {
        path: "allclasses",
        element: (
          <AdminRoutes>
            <AllClasses></AllClasses>
          </AdminRoutes>
        ),
      },
      {
        path: "addclass",
        element: (
          <AdminRoutes>
            <AddClass></AddClass>
          </AdminRoutes>
        ),
      },
      {
        path: "addinstructor",
        element: (
          <AdminRoutes>
            <AddInstructor></AddInstructor>
          </AdminRoutes>
        ),
      },
      {
        path: "adminhome",
        element: (
          <AdminRoutes>
            <AdminHome></AdminHome>
          </AdminRoutes>
        ),
      },
    ],
  },
]);
