import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

function Intro() {
  return (
    <div id="intro">
      <img
        className="w-full h-screen object-cover object-left shadow-2xl blur-sm border-4"
        src="./assets/eromero2.jpg"
        alt=""
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-2xl font-semibold rounded-md">Hello, I'm Edgar Romero</h1>
          <h2 className="font-semibold"> 
            I'm a 
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Creative",
                2000,
                "Tech Fanatic",
                2000,
                "Father",
                2000,
              ]}
              wrapper="div"
              speed={true}
              style={{ fontSize: "1.5em", paddingLeft: '5px', fontWeight: 'bold' }}
              repeat={Infinity}
            />
          </h2>
          <div className="p-11 m-11">
            <div className="flex flex-row gap-5 mx-auto justify-end items-end">
              <a href="https://www.instagram.com/eromeroguti/" target="_blank" rel="instagram">
            <FaInstagram className="cursor-pointer" size={25} />
            </a>
            <a href="https://www.linkedin.com/in/edgar-romero-9694ba187/" target="_blank" rel="linkedin">
            <FaLinkedin className="cursor-pointer" size={25} />
            </a>
            <a href="https://github.com/eromeroguti" target="_blank" rel="gitgub">
            <FaGithub className="cursor-pointer" size={25} />
            </a>
            <a href="https://twitter.com/EdgarIvanRomer6" target="_blank" rel="twitter">
            <FaTwitter className="cursor-pointer" size={25} />
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
