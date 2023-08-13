import React from "react";
import Title from "./Title";

function Contact() {
  return (
    <div className="flex flex-col mb-10 mx-auto">
      <div className="flex justify-cneter items-center">
        <form
          action="https://getform.io/f/c578dd16-efbb-41e2-92d8-09b2c3eb0d44"
          method="POST"
          className="flex flex-col w-full md:w-7/12 mx-auto"
        >
          <Title>Contact</Title>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="my-2 p-2 border-black bg-transparent border-2 rounded-md
            focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="my-2 p-2 bg-transparent border-black border-2 rounded-md
            focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="10"
            className="p-2 mb-4 bg-transparent
             border-2 rounded-md border-black
             focus:outline-none"
          />
          <button
            type="submit"
            className="text-center inline-block
             px-8 py-3 w-max text-base front-medium
             rounded-md text-white font-bold bg-gradient-to-r
             from-green-700 to-blue-700 drop-shadow-2xl shadow-2xl"
          >
            Link up!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
