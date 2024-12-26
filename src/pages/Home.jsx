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
import gl1 from "./../assets/Images/gl1.jpg";
import gl2 from "./../assets/Images/gl2.jpg";
import gl3 from "./../assets/Images/gl3.jpg";
import gl4 from "./../assets/Images/gl4.jpg";
import gl5 from "./../assets/Images/gl5.jpg";
import gl6 from "./../assets/Images/gl6.jpg";
import gl7 from "./../assets/Images/gl7.jpg";

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
                  Welcome to <br />
                  Historical Artifact Tracker
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
      <div className="container flex mx-auto mt-12">
        
        <div className="w-1/2">
          <div class="grid grid-cols-6 gap-4 p-4">
            <div class="col-span-4 row-span-2">
              <img
                src={gl1}
                alt="Artifact 1"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div class="col-span-2 row-span-1">
              <img
                src={gl2}
                alt="Artifact 2"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div class="col-span-2 row-span-1">
              <img
                src={gl3}
                alt="Artifact 3"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>

            
          </div>
        </div>
        <div className="flex flex-col justify-between w-1/2">
          <div className="flex flex-col items-end">
            <h1 className="text-right border border-primary inline-block px-4 mr-6 py-2 mb-4 rounded-full bg-opacity-20">
            Unveiling History
            </h1>
            <h1 className="text-4xl text-right pr-6 mb-6 font-semibold">Discover the Essence of Artifacts</h1>
            <p className="text-right pr-6 pl-20">Welcome to a world where every artifact tells a story! Our platform is dedicated to preserving and showcasing the treasures of human history, offering you a chance to explore the past like never before. From ancient tools to cultural relics, each piece in our collection connects you to a bygone era, sparking curiosity and admiration.</p>
          </div>
          <div class="grid grid-cols-6 gap-4 p-4">
          <div class="col-span-3 row-span-2">
              <img
                src={gl4}
                alt="Artifact 4"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div class="col-span-3 row-span-1">
              <img
                src={gl5}
                alt="Artifact 5"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div class="col-span-3 row-span-2">
              <img
                src={gl6}
                alt="Artifact 6"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div class="col-span-3 row-span-1">
              <img
                src={gl7}
                alt="Artifact 7"
                class="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="mt-12">
          <h1 className="border border-primary inline-block px-4 py-2 mb-4 rounded-full bg-primary bg-opacity-20">
            Popular
          </h1>
          <h1 className="text-4xl  mb-6 font-semibold">Featured Artifacts</h1>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {feturedData.map((data) => (
            <FeaturedDataCard data={data}></FeaturedDataCard>
          ))}
        </div>
        <div className="mx-auto text-center">
          <Link
            className="btn px-10 my-10 bg-blue-600 bg-opacity-20 border-blue-900 hover:bg-yellow-400"
            to={"/all-artifacts"}
          >
            See All
          </Link>
        </div>
      </div>
      <div></div>

      <div className="container mx-auto flex my-12">
        <div className="w-1/2">
          <div>
            <h1 className="border border-primary inline-block px-4 py-2 mb-4 rounded-full bg-primary bg-opacity-20">
              Faq
            </h1>
            <h1 className="text-4xl font-semibold">
              Frequently Asked Question
            </h1>
          </div>
        </div>
        <div className="w-1/2 space-y-4">
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What is this website about?
            </div>
            <div className="collapse-content">
              <p>
                This website is a platform where users can explore, share, and
                learn about historical artifacts. Users can add artifacts to the
                collection, view details of existing artifacts, and interact
                with the community.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              How can I add an artifact?
            </div>
            <div className="collapse-content">
              <p>
                To add an artifact, simply navigate to the "Add Artifact"
                section, fill out the form with details like the artifact's
                name, image URL, historical context, and other relevant
                information, then submit it. Make sure to provide accurate
                details for better community engagement!
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Do I need to create an account to use the website?
            </div>
            <div className="collapse-content">
              <p>
                While you don’t need an account to view artifacts, you will need
                to sign up or log in to add artifacts, like artifacts, or
                participate in certain activities on the site.
              </p>
            </div>
          </div>
          <div className="collapse bg-base-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-medium">
              Can I like an artifact?
            </div>
            <div className="collapse-content">
              <p>
                Yes! You can like artifacts that you find interesting. Simply
                click on the like button on the artifact details page to add it
                to your liked collection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
