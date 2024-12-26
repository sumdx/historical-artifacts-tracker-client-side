import React from "react";
import { Link } from "react-router-dom";

const AllArtifactCard = ({ data }) => {
  return (
    <div>
      <div className="h-full">
        <div className=" h-full card bg-base-100 shadow-xl">
          <figure className="h-64">
            <img
              src={data.artifactImgUrl}
              className="object-cover h-full w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="font-bold card-title">
              {data.artifactName}
            </h2>
            <p className="font-medium">{data.historicalContext}</p>
            <p className="">Type : {data.type}</p>
            <div className="card-actions justify-start">
              <Link to={`/artifacts/${data._id}`} className="btn btn-accent">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllArtifactCard;
