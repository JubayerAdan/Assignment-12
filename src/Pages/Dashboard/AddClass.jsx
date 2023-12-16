import React from "react";
import { useForm, Controller } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import useInstructor from "../../hooks/useInstructor";
import axios from "axios";
const AddClass = () => {
  const { control, handleSubmit, register } = useForm();
  const axiosSecure = useAxiosSecure();
  const [instructor] = useInstructor();
  const Image_Hosting_Url = `https://api.imgbb.com/1/upload?key=08082965e0847fe0ac4345494c51d78f`;
  const onSubmit = (data) => {
    const formData = new FormData();
    const { name, image, description, instructor_name, entry_fee } = data;
    formData.append("image", image[0]);

    axios.post(Image_Hosting_Url, formData).then((res) => {
      console.log(res);
      if (res.data.success) {
        const imageUrl = res.data.data.display_url;
        const newData = {
          name,
          image: imageUrl,
          description,
          instructor_name,
          entry_fee: "$" + entry_fee,
        };
        axiosSecure
          .post("/classes", newData)
          .then((res) => {
            console.log(res.data);
            Swal.fire({
              position: "center",
              icon: "success",
              title: "New Class Created Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          })
          .catch((err) => console.log(err));
      }
    });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="className"
            className="block text-sm font-medium text-gray-700"
          >
            Class Name
          </label>
          <input
            type="text"
            id="className"
            {...register("name", { required: "Class Name is required" })}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <div className="space-x-5 flex w-full">
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
              htmlFor="instructorName"
              className="block text-sm font-medium text-gray-700"
            >
              Instructor Name
            </label>
            <select
              id="instructorName"
              {...register("instructor_name", {
                required: "Instructor Name is required",
              })}
              className="mt-1 p-2 border rounded-md w-full"
            >
              <option defaultValue={true} disabled={true} value="Instructor">
                Instructor
              </option>
              {instructor.map((inst) => (
                <option key={inst._id} value={inst.name}>
                  {inst.name}
                </option>
              ))}
              {/* Add more options as needed */}
            </select>
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

        <div className="mb-4">
          <label
            htmlFor="entryFee"
            className="block text-sm font-medium text-gray-700"
          >
            Entry Fee
          </label>
          <input
            type="number"
            id="entryFee"
            {...register("entry_fee", { required: "Entry Fee is required" })}
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>

        <button type="submit" className="btn btn-neutral">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddClass;
