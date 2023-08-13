import React from "react";

function About() {
  return (
    <div className="max-w-md mx-auto bg-stone-100 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="./assets/edgarRomero.jpg"
            alt="profile"
          />
        </div>
        <div className="p-8">
          <h1 className="uppercase tracking-wide text-sm text-indigo-800 font-semibold">
            About Me
          </h1>
          <p className="mt-4 text-stone-600 font-semibold">
            I am a full stack web developer with a background in the arts. I
            have a passion for creating and learning new things. I am excited to
            continue to grow as a developer and to be a part of the future of
            technology.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
