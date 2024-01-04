import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const FourZeroThree = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname;
  const back = () => {
    navigate(from ? from : "/", { replace: true });
  };
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="p-8 shadow-md rounded-md">
        <div className="flex items-center justify-center mb-6">
          <FaExclamationTriangle className="text-4xl text-red-500 mr-3" />
          <h1 className="text-4xl font-bold text-red-500">403 Forbidden</h1>
        </div>
        <p className="text-gray-700 mb-4">
          Oops! It seems like you don't have permission to access this page.
        </p>
        <p className="text-gray-700 mb-8">
          If you believe this is a mistake, please contact the administrator.
        </p>

        <button
          onClick={back}
          disabled={from ? false : true}
          className="btn bg-[#4ebbff] hover:bg-[#4ebbff] text-white"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default FourZeroThree;
