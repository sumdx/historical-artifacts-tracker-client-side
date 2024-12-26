import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import ArtifactDetails from "./ArtifactDetails";
import MyArtifactCard from "../components/MyArtifactCard";
import useAxiosSecure from "../providers/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const MyArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [myArtifact, updateMyArtifact] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/my-artifacts`,{
        params : {email : user.email},
    }).then((res) => {
      updateMyArtifact(res.data);
    });
  }, []);

  return (
    <div className="container mx-auto">
      <Helmet>
                          <title>My Artifacts - Your Contributions</title>
                  </Helmet>
      <div className="my-20 mx-auto text-center">
        <h1 className="text-4xl font-bold">Artifacts Added by You</h1>
        <h2 className="text-lg font-semibold mt-4" >Welcome to the Artifact Gallery!</h2>
        <p className="font-light mt-4 w-1/2 mx-auto">This page showcases all the incredible artifacts you’ve contributed to the gallery. Every artifact you’ve added helps expand our understanding of history and enriches the community’s knowledge. Thank you for sharing your discoveries and helping us build a more detailed, diverse collection!.</p>
      </div>
      <div className="grid grid-cols-3 gap-6 justify-center mb-20">
        {
          (myArtifact.length>0) ?
          (myArtifact?.map((data) => {
            return (
              <MyArtifactCard
                data={data}
                myArtifact={myArtifact}
                updateMyArtifact={updateMyArtifact}
              ></MyArtifactCard>
            );
          }))
           
          : 
          <h1 className="text-4xl text-center mx-auto col-span-3">No data  Found</h1>
        }
        
      </div>
    </div>
  );
};

export default MyArtifacts;
