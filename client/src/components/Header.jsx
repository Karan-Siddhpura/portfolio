import React from "react";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";

function Header() {
  return (
    <div className="header" id="home">
      <div>
        <Navbar />
      </div>
      <div className="header-cover">
        <div className="header-cover-left">
          <div>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Hi this is Karan Siddhpura").start();
              }}
            />
          </div>

          <p>
            Passionate Web Developer keen on Web Development, Full Stack
            Development, and Frontend Development.
          </p>
          <a
            download
            href="./asset/Karan_Siddhpura_Resume.pdf"
            className="button header-button"
          >
            Download Resume
          </a>
        </div>
        <div className="header-cover-right">
          <img src="./asset/profile.jpeg" alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default Header;
