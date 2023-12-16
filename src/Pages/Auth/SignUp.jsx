import React, { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Logo from "../../assets/Sign.png";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SocialLogin from "./SocialLogin";

const SignUp = () => {
  const {
    createUser,
    updateUserProfile,
    SendVerificationEmail,
    logOut,
    user,
    loading,
  } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const onSubmit = (data) => {
    const { email, password, name, photo } = data;
    createUser(email, password).then((result) => {
      const user = result.user;
      console.log(user);
      updateUserProfile(name, photo).then(() => {
        const userInfo = {
          name: data.name,
          email: data.email,
          photo: data.photo,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            console.log("user added to the database");
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User created successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate("/");
          }
        });
      });

      logOut();
      SendVerificationEmail();
      navigate("/login");

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Sign up successful. Please check your email to verify",
        showConfirmButton: false,
        timer: 1500,
      });
    });
  };
  if (loading) {
    return null;
  }
  if (user) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <div>
      <div>
        <div className="relative flex flex-col justify-center h-screen my-24 ">
          <div className="w-full p-6 m-auto bg-white rounded-md lg:max-w-lg shadow-xl">
            <div className="flex justify-center">
              <img className="h-44 w-44 " src={Logo} alt="" />
            </div>
            <h1 className="text-3xl font-semibold text-center text-neutral">
              Sign Up
            </h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="label">
                  <span className="text-base label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full input input-bordered input-neutral"
                  {...register("name")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo Url"
                  className="w-full input input-bordered input-neutral"
                  {...register("photo")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full input input-bordered input-neutral"
                  {...register("email")}
                />
              </div>
              <div>
                <label className="label">
                  <span className="text-base label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password")}
                  placeholder="Enter Password"
                  className="w-full input input-bordered input-neutral"
                />
              </div>

              <span className=" block">
                Already have an account?{" "}
                <Link to={"/login"} className="text-primary font-medium">
                  Log In
                </Link>
              </span>
              <SocialLogin></SocialLogin>
              <div>
                <button className="btn btn-neutral">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
