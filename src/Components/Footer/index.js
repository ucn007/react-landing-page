import React from "react";
import "./index.scss";
import { Link } from "@mui/material";
import faceBook from "../../assets/img/social/facebook-app-symbol.png";
import instaGram from "../../assets/img/social/instagram.png";
import linkDin from "../../assets/img/social/linkedin.png";
function Footer() {
  return (
    <div className="footer-block">
      <div className="container w-100 ">
        <div className="w-100 d-flex main-footer">
          <div className="logo-des ">
            <h1>LOGO</h1>
            <p>
              {" "}
              Empowering Your Business with Tailored Solutions for Every
              Challenge
            </p>
          </div>
          <div className="quick-links">
            <h3>Quick Links</h3>
            <div className="menu">
              <Link href="/home">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/pricing">Prcing</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div className="quick-links">
            <h3>Services</h3>
            <div className="service">
              <Link href="/home">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/pricing">Prcing</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
          <div className="quick-links">
            <h3>Social</h3>
            <div className="social">
              <Link href="/home">
                <img src={faceBook} alt="" />
              </Link>
              <Link href="/about">
                <img src={instaGram} alt="" />
              </Link>
              <Link href="/pricing">
                <img src={linkDin} alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p>&copy; All Rights Reserved to UCN1997</p>
      </div>
    </div>
  );
}

export default Footer;
