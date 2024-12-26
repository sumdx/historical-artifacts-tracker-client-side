import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cover1 from "./../assets/Images/cover1.jpg";
import cover2 from "./../assets/Images/cover2.jpg";
import cover3 from "./../assets/Images/cover3.jpg";
import cover4 from "./../assets/Images/cover4.jpg";
import axios from "axios";
import FeaturedDataCard from "../components/FeaturedDataCard";
import { Link } from "react-router-dom";

const Home = () => {
  const [feturedData, feturedDataUpdate] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/featured-items").then((res) => {
      feturedDataUpdate(res.data);
    });
  }, []);
  return (
    <div>
      <div>
        <div className="w-full rounded-2xl overflow-hidden">
          <Carousel
            autoPlay={true}
            showThumbs={false}
            infiniteLoop={true}
            showStatus={false}
            interval={3000}
            swipeable={true}
          >
            <div className="w-full h-[400px] relative">
              <img className="w-full h-[500px] object-cover" src={cover1} />
              <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient opacity-50"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl text-center">
                <h1 className="text-4xl text-white top-1/2">
                  Welcome to Historical Artifact Tracker
                </h1>
              </div>
            </div>
            <div className="w-full h-[400px] ">
              <img className="w-full h-[500px] object-cover" src={cover2} />
              <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient opacity-60"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl text-center">
                <h1 className="text-4xl text-white top-1/2">
                  You will find the old
                  <br />
                  artifacts here
                </h1>
              </div>
            </div>
            <div className="w-full h-[400px] ">
              <img className="w-full h-[500px] object-cover" src={cover3} />
              <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient opacity-50"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl text-center">
                <h1 className="text-4xl text-white top-1/2">
                  Easy to Add, Easy to Track
                </h1>
              </div>
            </div>
            <div className="w-full h-[400px] ">
              <img className="w-full h-[500px] object-cover" src={cover4} />
              <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient opacity-70"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl text-center">
                <h1 className="text-4xl text-white top-1/2">
                  Artifact Tracker - All your Collection
                </h1>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
      
      <div className="container mx-auto">
      <div>
        <h1 className="text-4xl mt-12 mb-6 ">Featured Artifacts</h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        {feturedData.map((data) => (
          <FeaturedDataCard data={data}></FeaturedDataCard>
        ))}
      </div>
      <div className="mx-auto text-center">
        <Link className="btn px-10 my-10 btn-accent" to={"/all-artifacts"}>See All</Link>
      </div>
      </div>
    </div>
  );
};

export default Home;
