import React, { useContext } from "react";
import AddArt from "./../assets/Images/addArt.jpg";
import { AuthContext } from "../providers/AuthProvider";

const AddArtifacts = () => {

    const {user} = useContext(AuthContext);

    const addArtifactHandle = (e) =>{
        e.preventDefault();
        
        console.log(e.target.type.value)
    }


  return (
    <div className="w-full relative bg-slate-50">
      <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white absolute mx-auto container">
        <h1 className="font-bold text-4xl text-center mt-4">
          Add Your Collection
        </h1>
        <div className="mx-auto mt-10 flex justify-center">
          <form onSubmit={addArtifactHandle} className=" " action="">
            <div className="flex gap-6">
              <label className="form-control w-full max-w-xs">
                <input
                  type="text"
                  name="artifact-name"
                  placeholder="Artifact Name"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className=" form-control w-full max-w-xs">
                <input
                  type="text"
                  name="artifact-imgUrl"
                  placeholder="Artifact Photo URL"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="w-full mt-6">
              <select name="type" className="select select-bordered w-full ">
                <option disabled selected>
                  Type of Artifact
                </option>
                <option>Tools</option>
                <option>Weapons</option>
                <option>Documents</option>
                <option>Writings</option>
              </select>
            </div>
            <div>
            <textarea className="textarea textarea-bordered w-full mt-6" placeholder="Historical Context"></textarea>
            </div>
            {/* Created and dicover date */}
            <div className="flex gap-6 mt-6 ">
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
                  placeholder="Discovered At (e.g. 120 BC)"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            {/* Created and dicover date */}
            <div className="flex gap-6 mt-6 ">
              <label className="form-control w-full max-w-xs">
                <input
                    name="createdAt"
                  type="text"
                  placeholder="Discovered By"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className=" form-control w-full max-w-xs">
                <input
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
                  type="email"
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
                <button type='submit' className="btn">
                    Add Artifact
                </button>
            </div>
          </form>
        </div>
      </div>
      <img src={AddArt} className="w-full h-full object-cover" alt="" />
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
