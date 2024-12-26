import axios from "axios";
import React, { useEffect, useState } from "react";
import AllArtifactCard from "../components/AllArtifactCard";

const AllArtifacts = () => {
  const [artifactsData, updateArtifactsData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/artifacts").then((res) => {
      updateArtifactsData(res.data);
    });
  }, []);

  return (
    <div>
      <div className="my-20 mx-auto text-center">
        <h1 className="text-4xl font-bold">Explore Historical Artifacts</h1>
        <h2 className="text-lg font-semibold mt-4" >Welcome to the Artifact Gallery!</h2>
        <p className="font-light mt-4 w-1/2 mx-auto">Step into the past and explore a diverse collection of historical artifacts from around the world. This page showcases artifacts that tell fascinating stories of different eras, cultures, and civilizations. From ancient tools to priceless documents, each artifact in this collection has a unique history and significance.</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto mb-20">
        {artifactsData.map((data) => {
          return <AllArtifactCard data={data}></AllArtifactCard>;
        })}
      </div>
    </div>
  );
};

export default AllArtifacts;
