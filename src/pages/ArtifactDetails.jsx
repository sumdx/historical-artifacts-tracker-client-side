import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";

const ArtifactDetails = () => {
  const { id } = useParams();
  const {user} = useContext(AuthContext);
  const [artifactData, artifactDataUpdate] =useState([]);
  const [likeData, likeDataUpdate] = useState([]);


  useEffect(() => {
    axios
      .get(`http://localhost:3000/artifacts/${id}`)
      .then((res) => {
        artifactDataUpdate(res.data);
        likeDataUpdate(res.data.userInfo.likedBy);
        console.log("Printed")
      })
      .catch((err) => {});
  }, []);

  const likeBtnHandle = () =>{
    let newLikeData = [];
    if(likeData.includes(user.email)){
        
        newLikeData = likeData.filter(email => email!== user.email);

    }else{
      
        newLikeData = [...likeData, user.email];
        Swal.fire({
            title: 'Added to Liked!',
            text: 'Artifact Added to liked list Successfully',
            icon: 'success',
            confirmButtonText: 'Okay'
        })
    }
    console.log(newLikeData)
    likeDataUpdate(newLikeData)

    axios.put(`http://localhost:3000/artifacts/${id}/like`, newLikeData)
    .then(res =>{
        
    })
  }

  return (
    <div>
      <div className="container mx-auto ">
        <div className="card lg:card-side bg-base-100 shadow-xl  justify-between ">
          <figure className="lg:w-3/4">
            <img
              src={artifactData.artifactImgUrl}
              alt="Movie"
              className=""
              
            />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">{artifactData.artifactName}</h2>
            <p className="badge badge-primary p-2">Type : {artifactData.type}</p>
            <p>Historical Context : {artifactData.historicalContext}</p>
            <p>Created At : {artifactData.createdAt}</p>
            <p>Discovered At : {artifactData.discoveredAt}</p>
            <p>Discovered By : {artifactData.discoveredBy}</p>
            <p>Present Location : {artifactData.presentLocation}</p>
            <div>
                {
                    <button  onClick={likeBtnHandle} className="flex items-center btn text-xl">{likeData.includes(user.email)?<BiSolidLike />: <BiLike />} {likeData.length}</button>
                }
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtifactDetails;