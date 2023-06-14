import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-link">
          <Link to="https://www.instagram.com/k.a.r.a.n.____/" target="_blank">
            <img src="./asset/instagram.png" />
          </Link>
          <Link
            to="https://www.facebook.com/karan.siddhpura.16/"
            target="_blank"
          >
            <img src="./asset/facebook.png" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/karan-siddhpura-7a514620a"
            target="_blank"
          >
            <img src="./asset/linkedin.png" />
          </Link>
        </div>
        <div className="copyright">
          <p>Contact - siddhpura306@gmail.com | 8879840046</p>
          <p>© {year} Karan Siddhpura</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
