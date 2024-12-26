import React, { useContext } from "react";
import AddArt from "./../assets/Images/addArt.jpg";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import useAxiosSecure from "../providers/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const AddArtifacts = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const addArtifactHandle = (e) => {
    e.preventDefault();
    const initialData = Object.fromEntries(new FormData(e.target).entries());
    const likedBy = [];
    const userInfo = 
        {
            userEmail : user.email,
            userName : user.displayName,
            likedBy
        }
    const finalData = {...initialData, userInfo};
    

    axiosSecure.post('https://b10a11-server-side-sumdx.vercel.app/artifact', finalData,{
      params : {email : user.email},
      withCredentials :true,
    })
    .then(res =>{
        Swal.fire({
            title: 'Success!',
            text: 'Artifact Information Added Successfully',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
          e.target.reset();
    })
    .catch(err =>{
        Swal.fire({
            title: 'Error!',
            text: 'Something Wrong',
            icon: 'error',
            confirmButtonText: 'Okay'
          })
    })

  };

  return (
    <div className="w-full relative bg-slate-50">
      <Helmet>
                    <title>Add Artifact</title>
            </Helmet>
      <div className="md:absolute md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 rounded-lg bg-white  mx-auto container">
        <h1 className="font-bold text-4xl text-center mt-4">
          Add Your Collection
        </h1>
        <div className="mx-auto mt-10 flex justify-center">
          <form onSubmit={addArtifactHandle} className=" " action="">
            <div className="flex sm:flex-col md:flex-row gap-6">
              <label className="form-control w-full max-w-xs">
                <input
                  type="text"
                  name="artifactName"
                  placeholder="Artifact Name"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className=" form-control w-full max-w-xs">
                <input
                  type="text"
                  name="artifactImgUrl"
                  placeholder="Artifact Photo URL"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="w-full mt-6">
              <select
              required
              defaultValue="Type of Artifact"
                name="type"
                className="select select-bordered w-full "
              >
                <option value="" disabled>
                  Type of Artifact
                </option>
                <option>Tools</option>
                <option>Weapons</option>
                <option>Documents</option>
                <option>Writings</option>
              </select>
            </div>
            <div>
              <textarea
              name="historicalContext"
                className="textarea textarea-bordered w-full mt-6"
                placeholder="Historical Context"
              ></textarea>
            </div>
            {/* Created and dicover date */}
            <div className="flex sm:flex-col md:flex-row gap-6  mt-6">
              <label className="form-control w-full max-w-xs">
                <input
                  name="createdAt"
                  type="text"
                  placeholder="Created At  (e.g. 100 BC)"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className=" form-control w-full max-w-xs">
                <input
                  type="text"
                  name="discoveredAt"
                  placeholder="Discovered At (e.g. 120 BC)"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            {/* Created and dicover date */}
            <div className="flex sm:flex-col md:flex-row gap-6 mt-6">
              <label className="form-control w-full max-w-xs">
                <input
                  name="discoveredBy"
                  type="text"
                  placeholder="Discovered By"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className=" form-control w-full max-w-xs">
                <input
                name="presentLocation"
                  type="text"
                  placeholder="Present Location"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            {/* Name */}
            <div className="mt-6">
              <label className=" form-control w-full">
                <input
                  disabled
                  type="text"
                  value={user.displayName}
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            {/* Email */}
            <div className="mt-6">
              <label className=" form-control w-full">
                <input
                  disabled
                  type="email"
                  value={user.email}
                  className="input input-bordered w-full "
                />
              </label>
            </div>
            <div className="text-center mt-6 mb-6">
              <button type="submit" className="btn">
                Add Artifact
              </button>
            </div>
          </form>
        </div>
      </div>
      <img src={AddArt} className="hidden md:block w-full h-full object-cover" alt="" />
    </div>
  );
};

export default AddArtifacts;
// Artifact Name
// Artifact Image (valid URL)
// Artifact Type (dropdown: Tools, Weapons, Documents, Writings, etc.)
// Historical Context
// Created At (string, e.g., "100 BC")
// Discovered At (string, e.g., "1799")
// Discovered By
// Present Location
// Artifact adder name and email (Logged-in user email  & name ) (read-only)
// Add Artifact button
