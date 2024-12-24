import React from "react";
import { Link } from "react-router-dom";

const MyArtifactCard = ({ data }) => {
  
  
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
            <Link className="btn" onClick={updateHandle}>Update</Link>
            <Link className="btn bg-red-500 text-white" onClick={deleteHandle}>Delete</Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyArtifactCard;
