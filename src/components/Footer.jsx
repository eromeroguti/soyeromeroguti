import React from "react";

function Footer() {
  return (
      <div className="py-5 text-center">
        {/* Social media links */}
        <p className="text-md mt-2 opacity-70">
          &copy; {new Date().getFullYear()} Edgar 
          I. Romero. All rights reserved.
        </p>
      </div>

  );
}

export default Footer;
