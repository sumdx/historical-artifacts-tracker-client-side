import React from "react";
import AboutImg from "./../assets/Images/about.jpg";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About - Historical Atrifacts Tracker</title>
      </Helmet>
      <div className="my-20 mx-auto text-center">
        <h1 className="text-4xl font-bold">
          All about Historical Artifacts Tracker
        </h1>
        <p className="font-light mt-4 w-1/2 mx-auto">
          All artifacts is a collection of a ancient artifacts. You can add your collection here and also like the artifacts you love. You will get the details information about the artifacts in the artifacts details page.
        </p>
      </div>

      <div className="flex container mx-auto mb-20">
        <div className="h-1/2 lg:w-1/2 ">
          <img className="w-full h-full object-cover rounded-3xl" src={AboutImg} alt="" />
        </div>
        <div className="flex justify-center items-center text-center mx-auto">
          <div className="">
            <ul className="timeline timeline-vertical">
              <li>
                <div className="timeline-start timeline-box">
                  User Can Add Artifact
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-end timeline-box">
                  Add Like to others artifact
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-start timeline-box">
                  Update your own artifact
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-end timeline-box">
                  Delete your own artifact
                </div>
                <hr />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
