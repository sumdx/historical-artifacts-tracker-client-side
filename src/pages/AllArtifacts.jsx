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
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 container mx-auto">
        {artifactsData.map((data) => {
          return <AllArtifactCard data={data}></AllArtifactCard>;
        })}
      </div>
    </div>
  );
};

export default AllArtifacts;
