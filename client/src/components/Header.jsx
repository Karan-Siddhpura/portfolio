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
            Passionate Wed developer wanting to kickstart career in Web
            Development | Full Stack Development | Frontend Development.
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
          <img src="./asset/profile1.png" alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default Header;
