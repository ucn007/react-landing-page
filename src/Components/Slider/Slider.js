import React from "react";
import BannerImage from "../../assets/img/01.png";
import Buttons from "../Buttons/Buttons";
import "./index.scss";

function Slider() {
  return (
    <div className="silder">
      <div className="container">
        <div className="d-flex w-100 align-center p-t-40">
          <div className="slider-text">
            <h1>
              Transform Your Business: Innovative Solutions Tailored Just for
              You!
            </h1>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content. Lorem ipsum may
              be used as a placeholder before the final copy is available
            </p>
            <div className="d-flex">
              <Buttons label="Get Started" className="primary-btn m-r-20" />
              <Buttons label="View Demo" className="secondary-btn" />
            </div>
          </div>
          <div className="slider-img">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
