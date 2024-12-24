import React from "react";
import { Link, useNavigate } from "react-router-dom";

const MyArtifactCard = ({ data }) => {
  
  const updateHandle = () =>{
    useNavigate()
  }
  const deleteHandle = () =>{

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
          <div className="card-actions justify-start mt-4">
            <div>
                
            </div>
            <div>
                
            </div>
            <Link className="btn" to={`/update/${data._id}`}>Update</Link>
            <Link className="btn bg-red-500 text-white" onClick={deleteHandle}>Delete</Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArtifactCard;
