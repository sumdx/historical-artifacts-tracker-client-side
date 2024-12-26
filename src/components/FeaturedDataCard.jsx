import React from "react";
import { BiSolidLike } from "react-icons/bi";
import { Link } from "react-router-dom";

const FeaturedDataCard = ({ data }) => {
  return (
    <div className="rounded-xl">
      <div className="h-full card bg-base-100 w-96 shadow-xl">
        <figure className="h-64 w-full px-10 pt-10">
          <img
            src={data.artifactImgUrl}
            alt="pictures"
            className="h-full w-full rounded-xl object-cover"
          />
        </figure>
        <div className="card-body items-start text-left">
          <h2 className="card-title">{data.artifactName}</h2>
          <p>{data.historicalContext}</p>
          <div className="flex gap-4 items-center card-actions mt-4">
            <div className=" btn flex items-center gap-2 text-2xl">
                <BiSolidLike> </BiSolidLike> 
                <p>{data.userInfo.likedBy.length}</p>
            </div>
            <Link className="btn btn-primary" to={`/artifacts/${data._id}`}>View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDataCard;
