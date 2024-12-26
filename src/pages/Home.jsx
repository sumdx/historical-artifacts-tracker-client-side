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
                <h1 className="text-4xl shadow-xl text-white top-1/2">
                  Welcome to <br />Historical Artifact Tracker
                </h1>
              </div>
            </div>
            <div className="w-full h-[400px] ">
              <img className="w-full h-[500px] object-cover" src={cover2} />
              <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient opacity-60"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl text-center">
                <h1 className="shadow-xl shadow-black text-4xl text-white top-1/2">
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
                <h1 className=" shadow-xl shadow-black text-4xl text-white top-1/2">
                  Easy to Add, Easy to Track
                </h1>
              </div>
            </div>
            <div className="w-full h-[400px] ">
              <img className="w-full h-[500px] object-cover" src={cover4} />
              <div className="absolute top-0 left-0 w-full h-full bg-custom-gradient opacity-70"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl text-center">
                <h1 className="shadow-xl shadow-black text-4xl text-white top-1/2">
                  Artifact Tracker - All your Collection
                </h1>
              </div>
            </div>
          </Carousel>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="mt-12">
          <h1 className="border border-primary inline-block px-4 py-2 mb-4 rounded-full bg-primary bg-opacity-20">Popular</h1>
          <h1 className="text-4xl  mb-6 font-semibold">Featured Artifacts</h1>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {feturedData.map((data) => (
            <FeaturedDataCard data={data}></FeaturedDataCard>
          ))}
        </div>
        <div className="mx-auto text-center">
          <Link className="btn px-10 my-10 bg-blue-600 bg-opacity-20 border-blue-900 hover:bg-yellow-400" to={"/all-artifacts"}>
            See All
          </Link>
        </div>
      </div>
      <div>
         
      </div>

      <div className="container mx-auto flex my-12">
        <div className="w-1/2">
          <div>
            <h1 className="border border-primary inline-block px-4 py-2 mb-4 rounded-full bg-primary bg-opacity-20">Faq</h1>
            <h1 className="text-4xl font-semibold">Frequently Asked Question</h1>
          </div>
        </div>
        <div className="w-1/2 space-y-4">
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title text-xl font-medium">
            What is this website about?
            </div>
            <div className="collapse-content">
              <p>This website is a platform where users can explore, share, and learn about historical artifacts. Users can add artifacts to the collection, view details of existing artifacts, and interact with the community.</p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
            How can I add an artifact?
            </div>
            <div className="collapse-content">
              <p>To add an artifact, simply navigate to the "Add Artifact" section, fill out the form with details like the artifact's name, image URL, historical context, and other relevant information, then submit it. Make sure to provide accurate details for better community engagement!</p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
            Do I need to create an account to use the website?

            </div>
            <div className="collapse-content">
              <p>While you don’t need an account to view artifacts, you will need to sign up or log in to add artifacts, like artifacts, or participate in certain activities on the site.</p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
            Can I like an artifact?
            </div>
            <div className="collapse-content">
              <p>Yes! You can like artifacts that you find interesting. Simply click on the like button on the artifact details page to add it to your liked collection.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
