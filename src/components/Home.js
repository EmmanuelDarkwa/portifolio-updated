import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#08192f]">
      {/*Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-300 ">Hi, my name is</p>
        <h1 className="text-4xl sm:text7xl font-bold text-[#ccd6f6]">
          Emmanuel Darkwa Ampadu
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Full-Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I am a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently i'm focussed on
          building responsive full-stack web and mobile applications
        </p>
        <div>
          <button className=" border-2 group px-6 py-3 my-2 text-gray-400 bg-[#08192f] hover:text-black hover:bg-white flex items-center">
            <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3" />
            </span>
            View Work 
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
