import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import LikedArtifactCard from "../components/LikedArtifactCard";
import { Helmet } from "react-helmet-async";

const LikedArtifacts = () => {
  const { user } = useContext(AuthContext);
  const [likedArtifact, updateLikedArtifact] = useState([]);
  useEffect(() => {
    axios
      .get("https://b10a11-server-side-sumdx.vercel.app/liked-artifacts", {
        params: { email: user.email },
        withCredentials: true,
      })
      .then((res) => {
        updateLikedArtifact(res.data);
      });
  }, []);

  return (
    <div className="container mx-auto mb-20">
      <Helmet>
                                <title>Liked Artifacts - Your Favorites</title>
                        </Helmet>
      <div className="my-20 mx-auto text-center">
        <h1 className="text-4xl font-bold">Your Favourite List</h1>
        <h2 className="text-lg font-semibold mt-4">
        Your Favorite Pieces of History
        </h2>
        <p className="font-light mt-4 w-1/2 mx-auto">
        Welcome to your personal collection of liked artifacts! Here, you can view all the artifacts you've shown interest in. Whether you’re fascinated by ancient tools, captivated by historical documents, or intrigued by cultural relics, this is the space where your favorite pieces come together.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {likedArtifact.length > 0 ? (
          likedArtifact.map((data) => {
            return <LikedArtifactCard data={data}></LikedArtifactCard>;
          })
        ) : (
          <h1>No Liked Artifact Found</h1>
        )}
      </div>
    </div>
  );
};

export default LikedArtifacts;
