import axios from "axios";
import React, { useEffect, useState } from "react";
import AllArtifactCard from "../components/AllArtifactCard";
import useAxiosSecure from "../providers/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const AllArtifacts = () => {
  const [artifactsData, updateArtifactsData] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [sorted, setSorted] = useState(false);

  useEffect(() => {
    axiosSecure.get("/artifacts",{
      withCredentials : true,
    }).then((res) => {
      updateArtifactsData(res.data);
    });
  }, []);


  const searchHandle = (e) => {
    const search = e.target.value.toLowerCase();
    

  if (search === "") {
  
    axiosSecure.get("/artifacts", {
      withCredentials: true,
    }).then((res) => {
      updateArtifactsData(res.data);
    });
  } else {
    
    axiosSecure.get("/artifacts", {
      withCredentials: true,
    }).then((res) => {
      const filteredData = res.data.filter((artifact) =>
        artifact.artifactName.toLowerCase().includes(search)
      );
      updateArtifactsData(filteredData);
    });
  }
  };

  const handleSort = () =>{
    if(sorted){
      const sortedData = [...artifactsData].sort((a,b) =>b.artifactName.localeCompare(a.artifactName))
      updateArtifactsData(sortedData);
      setSorted(!sorted)
    }else{
      const sortedData = [...artifactsData].sort((a,b) =>a.artifactName.localeCompare(b.artifactName))
      updateArtifactsData(sortedData);
      setSorted(!sorted)
    }
    
    
    
  }

  return (
    <div>
      <Helmet>
                    <title>All Artifacts - A Journey Through History</title>
            </Helmet>
      <div className="my-20 mx-auto text-center">
        <h1 className="text-4xl font-bold">Explore Historical Artifacts</h1>
        <h2 className="text-lg font-semibold mt-4" >Welcome to the Artifact Gallery!</h2>
        <p className="font-light mt-4 w-1/2 mx-auto">Step into the past and explore a diverse collection of historical artifacts from around the world. This page showcases artifacts that tell fascinating stories of different eras, cultures, and civilizations. From ancient tools to priceless documents, each artifact in this collection has a unique history and significance.</p>
      </div>
      <div>
      <div className="container mx-auto w-1/2 mb-12 flex justify-center gap-6">
        <label className="input input-bordered flex items-center gap-2">
          <input
            name="search"
            onChange={searchHandle} 
            type="text"
            className="grow"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <div>
          {

          }
           <h1 className="btn" onClick={handleSort}>Sort by Name</h1>
        </div>
      </div>
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
