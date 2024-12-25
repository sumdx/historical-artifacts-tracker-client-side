import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyArtifactCard = ({ data , myArtifact, updateMyArtifact}) => {
  
  const id = data._id;

  const updateHandle = () =>{
    useNavigate()
  }
  const deleteHandle = () =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axios.delete(`http://localhost:3000/artifacts/${id}`)
        .then(res =>{
          const newArtifact = myArtifact.filter(artifact =>{artifact._id !== id})
          updateMyArtifact(newArtifact);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        })
        .catch(err =>{
          
          const newArtifact = myArtifact.filter(artifact =>{artifact._id !== id})
          updateMyArtifact(newArtifact);
          
          Swal.fire({
            title: "Error!",
            text: "Error occured",
            icon: "error"
          });
        })
      }
    });
  }
  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-full">
        <figure>
          <img
            src={data.artifactImgUrl}
            alt="Shoes"
            className="object-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {data.artifactName}
            <div className="badge badge-primary">{data.type}</div>
          </h2>
          <p>{data.historicalContext}</p>
          <div className="card-actions mt-4">
  
            <Link className="btn" to={`/update/${data._id}`}>Update</Link>
            <Link className="btn bg-red-500 text-white" onClick={deleteHandle}>Delete</Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArtifactCard;
