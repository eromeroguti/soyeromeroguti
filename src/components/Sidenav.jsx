import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiFillProject,
  AiOutlineProject,
} from "react-icons/ai";
import { BsPersonBadgeFill } from "react-icons/bs";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <GiHamburgerMenu
        size={25}
        onClick={handleNav}
        className="absolute top-6 left-4 z-[99] md:hidden cursor-pointer"
      />
     {
        nav ? (
          <div className="fixed top-0  w-full h-screen bg-black/60 flex flex-col justify-center items-center cursor-pointer">
            <a href="#intro" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer"
            >
              <AiOutlineHome size={25} />
              <span className="pl-4">Home</span>
              </a>
              <a href="#projects" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer"
            >
              <AiFillProject size={25} />
              <span className="pl-4">Projects</span>
              </a>
              <a href="#resume" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer"
            >
              <BsPersonBadgeFill size={25} />
              <span className="pl-4">Resume</span>
              </a>
              <a href="#contact" className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer"
            >
              <AiOutlineMail size={25} />
              <span className="pl-4">Contact</span>

              </a>
              </div> 
        ) : (
          ''
        )
      }
      <div className="md:block hidden absolute top-[40%] z-10">
        <div className="flex flex-col">
          <a href="#intro" className="rounded-full shadow-lg bg-gray-500 shadow-gray-900 m-4 p-4 cursor-pointer ease-in-out delay-150 hover:-translate-y-1">
            <AiOutlineHome size={25} />
          </a>
          <a href="#projects" className="rounded-full shadow-lg bg-gray-500 shadow-gray-900 m-4 p-4 cursor-pointer ease-in-out delay-150 hover:-translate-y-1">
            <AiOutlineProject size={25} />
          </a>
          <a href="#resume" className="rounded-full shadow-lg bg-gray-500 shadow-gray-900 m-4 p-4 cursor-pointer ease-in-out delay-150 hover:-translate-y-1">
            <BsPersonBadgeFill size={25} />
          </a>
          <a href="#contact" className="rounded-full shadow-lg bg-gray-500 shadow-gray-900 m-4 p-4 cursor-pointer ease-in-out delay-150 hover:-translate-y-1">
            <AiOutlineMail size={25} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
