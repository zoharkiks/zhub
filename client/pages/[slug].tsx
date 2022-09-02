import { Icon } from "@iconify/react";
import React from "react";
import { Navbar } from "../components";
import { images } from "../constants";

import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  EmailShareButton,
  EmailIcon,
} from "react-share";

const Details = () => {
  return (
    <div className="  bg-black px-6  py-10 font-jakarta md:px-24 ">
      <div className="full-bleed mt-10 flex bg-blue py-8 px-20 text-center text-white ">
        <div className=" grid-cols-1 md:grid-cols-2 grid w-full place-items-center space-y-10">
          <div className="flex flex-col items-center justify-center space-y-4 w-[75%] ">
            <h3 className="rounded-full bg-gray px-3 text-lg font-medium">
              Technology
            </h3>
            <h1 className="text-3xl lg:text-[2.5rem] font-bold  leading-[3rem]">Why Robots will Kill Us l Kill Usl Kill Usl Kill Us</h1>
          </div>

          <div className="flex flex-col md:h-full  items-center md:space-y-8 space-y-3">
            <div className="flex w-max items-center justify-between space-x-3 rounded-full bg-white px-2 py-1 drop-shadow-2xl">
              <img
                className="h-10 w-10 rounded-full  "
                src={images.profile.src}
                alt="profile"
              />
              <span className="text-sm font-medium text-gray">
                Zohar Williams
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <Icon className="h-6 w-6" icon="akar-icons:calendar" />
              <span className="w-max text-sm ">01 Aug 2022</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center  text-white">
        <div className="flex justify-center h-[18rem] w-full">
  <img className=" rounded-xl object-contain" src={images.test.src}  alt="" />
  </div>
        <p className=" mt-6 text-justify leading-7 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          voluptatem mollitia laborum minima officia nam sunt delectus vitae,
          sapiente inventore iure repellat, quas nisi tempore omnis officiis
          aliquid eos totam. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Blanditiis voluptatem mollitia laborum minima officia nam sunt
          delectus vitae, sapiente inventore iure repellat, quas nisi tempore
          omnis officiis aliquid eos totam. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Blanditiis voluptatem mollitia laborum
          minima officia nam sunt delectus vitae, sapiente inventore iure
          repellat, quas nisi tempore omnis officiis aliquid eos totam. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          voluptatem mollitia laborum minima officia nam sunt delectus vitae,
          sapiente inventore iure repellat, quas nisi tempore omnis officiis
          aliquid eos totam.
        </p>

        <div className="mt-10 flex space-x-3">
          <EmailShareButton url={`https://localhost:1337alllArticles/$}`}>
            <EmailIcon size={32} round={true} />
          </EmailShareButton>

          <TwitterShareButton url={`https://localhost:1337alllArticles/$}`}>
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>

          <FacebookShareButton url={`https://localhost:1337alllArticles/$}`}>
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>

          <WhatsappShareButton url={`https://localhost:1337alllArticles/$}`}>
            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
        </div>
        {/* <h2 className="mt-10 text-xl font-bold">Related Articles</h2> */}
        
      </div>
    </div>
  );
};

export default Details;
