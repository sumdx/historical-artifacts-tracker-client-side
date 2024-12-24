import axios from "axios";
import React, { useEffect, useState } from "react";

const AllArtifacts = () => {
  const [artifactsData, updateArtifactsData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/artifacts").then((res) => {
      console.log(res.data);
      updateArtifactsData(res.data);
    });
  }, []);

  return (
    <div>
      {artifactsData.map((data) => (
        <h1>{data.artifactName}</h1>
      ))}
    </div>
  );
};

export default AllArtifacts;
