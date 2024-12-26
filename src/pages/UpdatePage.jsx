import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import AddArt from "./../assets/Images/addArt.jpg"
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import useAxiosSecure from '../providers/useAxiosSecure';

const UpdatePage = () => {
    const { user } = useContext(AuthContext);
    const {id} = useParams();
    const [artifactData,artifactDataUpdate] = useState([]);
    const navigate = useNavigate();
    const axiosSecure = useAxiosSecure();
    
    useEffect(()=>{
        axios
      .get(`http://localhost:3000/artifacts/${id}`)
      .then((res) => {
        artifactDataUpdate(res.data);
       
      })
      .catch((err) => {});
    },[])

  const addArtifactHandle = (e) => {
    e.preventDefault();
    const initialData = Object.fromEntries(new FormData(e.target).entries());
  
    axiosSecure.put(`http://localhost:3000/artifacts/${id}`, initialData,{
      withCredentials :true
    })
    .then(res =>{
      
        Swal.fire({
            title: 'Success!',
            text: 'Artifact Information Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
        
        //  e.target.reset();
    })
    .catch(err =>{
        Swal.fire({
            title: 'Error!',
            text: 'Something Wrong',
            icon: 'error',
            confirmButtonText: 'Okay'
          })
    })
    navigate('/my-artifacts');

  };

    return (
         <div className="w-full relative bg-slate-50">
              <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white absolute mx-auto container">
                <h1 className="font-bold text-4xl text-center mt-4">
                  Update Your Artifact Data
                </h1>
                <div className="mx-auto mt-10 flex justify-center">
                  <form onSubmit={addArtifactHandle} className=" " action="">
                    <div className="flex gap-6">
                      <label className="form-control w-full max-w-xs">
                        <input
                        defaultValue={artifactData.artifactName}
                          type="text"
                          name="artifactName"
                          placeholder="Artifact Name"
                          className="input input-bordered w-full max-w-xs"
                        />
                      </label>
                      <label className=" form-control w-full max-w-xs">
                        <input
                        defaultValue={artifactData.artifactImgUrl}
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
                      defaultValue={artifactData.type}
                        name="type"
                        className="select select-bordered w-full "
                      >
                        <option value="" disabled>
                          Type of Artifact
                        </option>
                        <option value={"Tools"}>Tools</option>
                        <option value={"Weapons"}>Weapons</option>
                        <option value={"Documents"}>Documents</option>
                        <option value={"Writings"}>Writings</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                      name="historicalContext"
                      defaultValue={artifactData.historicalContext}
                        className="textarea textarea-bordered w-full mt-6"
                        placeholder="Historical Context"
                      ></textarea>
                    </div>
                    {/* Created and dicover date */}
                    <div className="flex gap-6 mt-6 ">
                      <label className="form-control w-full max-w-xs">
                        <input
                        defaultValue={artifactData.createdAt}
                          name="createdAt"
                          type="text"
                          placeholder="Created At  (e.g. 100 BC)"
                          className="input input-bordered w-full max-w-xs"
                        />
                      </label>
                      <label className=" form-control w-full max-w-xs">
                        <input
                        defaultValue={artifactData.discoveredAt}
                          type="text"
                          name="discoveredAt"
                          placeholder="Discovered At (e.g. 120 BC)"
                          className="input input-bordered w-full max-w-xs"
                        />
                      </label>
                    </div>
                    {/* Created and dicover date */}
                    <div className="flex gap-6 mt-6 ">
                      <label className="form-control w-full max-w-xs">
                        <input
                        defaultValue={artifactData.discoveredBy}
                          name="discoveredBy"
                          type="text"
                          placeholder="Discovered By"
                          className="input input-bordered w-full max-w-xs"
                        />
                      </label>
                      <label className=" form-control w-full max-w-xs">
                        <input
                        defaultValue={artifactData.presentLocation}
                        name="presentLocation"
                          type="text"
                          placeholder="Present Location"
                          className="input input-bordered w-full max-w-xs"
                        />
                      </label>
                    </div>
                    
                    <div className="text-center mt-6 mb-6">
                      <button type="submit" className="btn">
                        Update Artifact
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <img src={AddArt} className="w-full h-full object-cover" alt="" />
            </div>
    );
};

export default UpdatePage;