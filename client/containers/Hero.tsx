import React from "react";
import { images } from "../constants";
import { Icon } from "@iconify/react";
const Hero = () => {
  return (
    <div className=" flex-col font-jakarta text-white  px-6 space-y-10 lg:px-16 border-t border-gray ">

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mt-10 md:mt-16 ">
         <h1 className="text-3xl font-bold  md:text-[2.25rem] lg:text-[3rem]">Discover New Articles Here</h1>

      <div className="flex space-x-4 mt-6">
        <div className="flex items-center rounded-full bg-darkGray p-3">
          <Icon className="h-6 w-6 cursor-pointer text-blue" icon="logos:linkedin-icon" />
        </div>
        <div className="flex items-center rounded-full bg-darkGray p-3">
          <Icon className="h-6 w-6 cursor-pointer" icon="jam:instagram" color="red" />
        </div>
      </div>
     
      </div>

      <p className="font-medium text-gray leading-8  md:text-lg lg:w-1/2 lg:leading-10 lg:text-xl !mb-10 " >
        All The Articles and Content Of The Site Have Been{" "} {" "}
        <span className="text-white">Updated Today </span> And You Can Find Your{" "}
        <span className="text-white">Articles And Contents </span> Quickly And
        Without Any Problems.
      </p>

      <form className="relative flex flex-col md:flex-row md:items-center   " action="">
        <input
          className=" w-max md:w-[35%] rounded-full justify-center  border-none bg-darkGray p-3 pl-10 text-sm placeholder:text-sm "
          type="text"
          placeholder="Search..."
        />
        <Icon className="absolute left-4 top-4 md:top-5" icon="carbon:search" />
        <div className="flex items-start text-gray font-medium mt-5 md:ml-12">
          <span className="hover:bg-blue hover:text-white transition-all md:px-10 px-4 py-2 cursor-pointer rounded-full">All</span>
          <span className="hover:bg-blue hover:text-white transition-all md:px-10 px-4 py-2 cursor-pointer rounded-full">Sports</span>
          <span className="hover:bg-blue hover:text-white transition-all md:px-10 px-4 py-2 cursor-pointer rounded-full">Tech</span>
          <span className="hover:bg-blue hover:text-white transition-all md:px-10 px-4 py-2 cursor-pointer rounded-full">Music</span>
        </div>
      </form>
    </div>
  );
};

export default Hero;
