import React, { useState } from "react";
import { images } from "../constants";
import { Icon } from "@iconify/react";
import { Button } from "../components";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-between font-jakarta ">
      <div className="flex border-r-2 border-gray">
        <img className="h-14" src={images.logo.src} alt="logo" />
      </div>
      <Icon
        onClick={() => setOpen(!open)}
        className="h-6 w-6 cursor-pointer text-white md:hidden "
        icon="typcn:th-menu-outline"
      />
      {/* Desktop Nav */}
      <div className="hidden justify-center text-sm text-white md:flex   ">
        <ul className="flex space-x-4">
          <a href="">Home</a>
          <a href="">About Me</a>
        </ul>
      </div>

      <div className="hidden h-max items-center justify-evenly space-x-8 md:flex  ">
        <img
          className="h-12 w-12 rounded-full "
          src={images.profile.src}
          alt=""
        />
        <Icon
          className="h-5 w-5 cursor-pointer text-white  "
          icon="akar-icons:bell"
        />

        <Button
          text="Contact Me"
          extra="bg-white !text-xs "
          icon="charm:phone"
        />
      </div>
      {/*  */}

      {/* Mobile Nav */}
      {open ? (
        <div className="absolute  top-0 left-0 right-0 z-10 flex h-screen w-full flex-col  justify-between bg-darkGray/40  px-6 py-14 backdrop-blur-[10px] md:hidden">
          <div className="flex justify-end">
            <Icon
              onClick={() => setOpen(!open)}
              className="h-6  w-6 cursor-pointer text-white "
              icon="mingcute:close-fill"
            />
          </div>

          <div className="flex justify-center text-center text-2xl text-white ">
            <ul className="flex flex-col space-y-4">
              <a href="">Home</a>
              <a href="">About Me</a>
            </ul>
          </div>

          <div className="mb-10 flex items-center justify-evenly">
            <img
              className="h-12 w-12 rounded-full"
              src={images.profile.src}
              alt=""
            />
            <Button text="Contact Me" extra="bg-white" icon="charm:phone" />
            <Icon className="h-6 w-6 text-white" icon="akar-icons:bell" />
          </div>
        </div>
      ) : null}
      {/*  */}
    </div>
  );
};

export default Navbar;
