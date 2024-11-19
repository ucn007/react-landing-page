import { Link } from "@mui/material";
import React from "react";
import "./index.scss";
function Navbar() {
  return (
    <div className="header w-100 p-16">
      <div className="container w-100 ">
        <div className="d-flex align-center justify-space-between w-100">
          <div className="logo">Logo</div>
          <div className="d-flex align-center">
            <div className="nav-links d-flex">
              <Link href="/home">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/pricing">Prcing</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="hamburger">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
