import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useInstructor from "../../hooks/useInstructor";
import axios from "axios";

const AddInstructor = () => {
  const { handleSubmit, register, setValue } = useForm();
  const axiosSecure = useAxiosSecure();
  const [instructors] = useInstructor();
  const Image_Hosting_Url = `https://api.imgbb.com/1/upload?key=08082965e0847fe0ac4345494c51d78f`;

  //   useEffect(() => {
  //     // Set default value for the Instructor Name
  //     if (instructors.length > 0) {
  //       setValue("instructor_name", instructors[0].name);
  //     }
  //   }, [instructors, setValue]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("image", data.image[0]);

      const imageResponse = await axios.post(Image_Hosting_Url, formData);
      if (imageResponse.data.success) {
        const imageUrl = imageResponse.data.data.display_url;

        const newData = {
          name: data.instructor_name,
          email: data.email,
          image: imageUrl,
          classes_taken: data.class_taken,
          description: data.description,
        };

        axiosSecure
          .post("/instructors", newData)
          .then((res) => {
            console.log(res.data);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "New Instructor Added Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((err) => console.log(err));
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="instructorName"
            className="block text-sm font-medium text-gray-700"
          >
            Instructor Name
          </label>

          <input
            {...register("instructor_name", {
              required: "instructor name is required",
            })}
            type="text"
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div className="flex space-x-5">
          <div className="mb-4 w-1/2">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <input
              type="file"
              id="image"
              {...register("image", { required: "Image is required" })}
              className="file-input file-input-bordered w-full"
            />
          </div>

          <div className="mb-4 w-1/2">
            <label
              htmlFor="classTaken"
              className="block text-sm font-medium text-gray-700"
            >
              Class Taken
            </label>
            <input
              type="number"
              id="classTaken"
              {...register("class_taken", {
                required: "Class Taken is required",
              })}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
            className="mt-1 p-2 border rounded-md w-full"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-neutral">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddInstructor;
