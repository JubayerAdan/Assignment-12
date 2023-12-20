import React from "react";
import Logo from "../../assets/Sign.png";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import SocialLogin from "./SocialLogin";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const { signIn, loading, SendVerificationEmail, logOut, user } = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signIn(email, password).then((result) => {
      const user = result.user;
      navigate(from, { replace: true });
      if (!user?.emailVerified) {
        logOut();
        Swal.fire({
          title: "Your account is not verified",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Send Verification Email",
        }).then((result) => {
          if (result.isConfirmed) {
            SendVerificationEmail().then(() => {
              Swal.fire({
                title: "Verification email sent",
                text: "Please check your gmail",
                icon: "success",
              });
            });
          }
        });
      }
      if (user?.emailVerified) {
        navigate(from, { replace: true });
        console.log(user);
      }
    });
  };

  return (
    <div>
      <div className="relative flex flex-col justify-center h-screen overflow-hidden ">
        <div className="w-full p-6 m-auto bg-white rounded-md lg:max-w-lg shadow-xl">
          <div className="flex justify-center">
            <img className="h-44 w-44 " src={Logo} alt="" />
          </div>
          <h1 className="text-3xl font-semibold text-center text-neutral">
            Log In
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            <a
              href="#"
              className="text-xs text-gray-600 hover:underline hover:text-blue-600"
            >
              Forget Password?
            </a>
            <span className=" block">
              Don't have an account?{" "}
              <Link to={"/signup"} className="text-primary font-medium">
                Sign Up
              </Link>
            </span>
            <div>
              <button className="btn btn-neutral">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
