import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../providers/useAxiosSecure";

const ArtifactDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [artifactData, artifactDataUpdate] = useState([]);
  const [likeData, likeDataUpdate] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`https://b10a11-server-side-sumdx.vercel.app/artifacts/${id}`,{
        withCredentials :true,
      })
      .then((res) => {
        artifactDataUpdate(res.data);
        likeDataUpdate(res.data.userInfo.likedBy);
        
      })
      .catch((err) => {});
  }, []);

  const likeBtnHandle = () => {
    let newLikeData = [];
    if (likeData?.includes(user.email)) {
      newLikeData = likeData.filter((email) => email !== user.email);
    } else {
      newLikeData = [...likeData, user.email];
      Swal.fire({
        title: "Added to Liked!",
        text: "Artifact Added to liked Successfully",
        icon: "success",
        confirmButtonText: "Okay",
      });
    }

    likeDataUpdate(newLikeData);

    axios
      .put(`https://b10a11-server-side-sumdx.vercel.app/artifacts/${id}/like`, newLikeData)
      .then((res) => {})
      .catch((err) => {});
  };

  return (
    <div>
      <div className="container mx-auto ">
        <div className="mt-20 mb-12 mx-auto text-center">
          <h1 className="text-4xl font-bold">Details of {artifactData.artifactName} Artifact</h1>
        </div>
        <div className="card lg:card-side bg-base-100 shadow-xl  justify-between mb-20">
          <figure className=" lg:w-3/4">
            <img src={artifactData.artifactImgUrl} alt="Movie" className="h-full w-full object-cover" />
          </figure>
          <div className="card-body lg:w-3/4 ">
            <h2 className="card-title text-4xl mb-4">{artifactData.artifactName}</h2>
            <p className="badge badge-primary p-2">
              Type : {artifactData.type}
            </p>
            <p>Historical Context : {artifactData.historicalContext}</p>
            <p>Created At : {artifactData.createdAt}</p>
            <p>Discovered At : {artifactData.discoveredAt}</p>
            <p>Discovered By : {artifactData.discoveredBy}</p>
            <p>Present Location : {artifactData.presentLocation}</p>
            <div>
              {
                <button
                  onClick={likeBtnHandle}
                  className="flex items-center btn text-xl"
                >
                  {likeData.includes(user.email) ? <BiSolidLike /> : <BiLike />}{" "}
                  {likeData.length}
                </button>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;
