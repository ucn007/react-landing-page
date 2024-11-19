/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import Slider from "../../Components/Slider/Slider";
import sliderImg from "../../assets/img/clock.png";
import sliderImg2 from "../../assets/img/cyber-security.png";
import sliderImg3 from "../../assets/img/chatbot.png";
import aboutImg from "../../assets/img/widget-1.png";
import videoElem from "../../assets/img/11945977-uhd_4096_2160_30fps.mp4";
import Services from "../../Components/Services/Services";
import "./index.scss";
import Card from "../../Components/Card/Card";
import Contact from "../../Components/Contact/Contact";
import Pricing from "../../Components/Pricing/Pricing";

function Home() {
  return (
    <div>
      <Slider />
      <div className="features">
        <div className="container w-100">
          <div className="d-flex align-center w-100 card-container">
            <Card
              image={sliderImg}
              title="24 X 7 Customer Support"
              description="In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used"
            />
            <Card
              image={sliderImg2}
              title="Secured System"
              description="Protecting your data is essential in an increasingly digital world. Strong security."
            />
            <Card
              image={sliderImg3}
              title="AI Support"
              description="Artificial Intelligence is transforming industries by automating tasks and enhancing decision-making."
            />
          </div>
        </div>
      </div>
      <div className="about">
        <div className="container w-100">
          <h2 className="section-heading">
            Empowering Your Business with Tailored Solutions <br /> for Every
            Challenge
          </h2>

          <div className="about-container">
            <div className="about-content">
              <p>
                At [Your Company Name], we understand that every business is
                unique, and so are its challenges. That’s why we offer
                customized solutions designed to address your specific needs,
                drive growth, and enhance operational efficiency.
              </p>
              <p>
                {" "}
                Whether you're looking to streamline processes, improve customer
                experience, or scale your operations, our expert team is here to
                provide innovative strategies and tools that align with your
                goals. We combine industry expertise with cutting-edge
                technology to deliver results that empower your business to stay
                ahead in a competitive marketplace. With our personalized
                approach, you can focus on what matters most—growing your
                business—while we take care of the solutions that make it all
                possible.
              </p>
              <p>
                Let us help you unlock new opportunities and tackle your
                toughest challenges with confidence.
              </p>
            </div>
            <div className="about-img">
              <img src={aboutImg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Services />
      <div className="video-bg-sec d-flex align-center">
        <div className="video-content">
          <video autoPlay loop controls={false}>
            <source src={videoElem} type="video/mp4" />
          </video>
        </div>
        <div className="container">
          <h2 className="section-heading">
            Empowering Your Business with Tailored Solutions for Every Challenge
          </h2>
          <p>
            {" "}
            Whether you're looking to streamline processes, improve customer
            experience, or scale your operations, our expert team is here to
            provide innovative strategies and tools that align with your goals.
            We combine industry expertise with cutting-edge technology to
            deliver results that empower your business to stay ahead in a
            competitive marketplace. With our personalized approach, you can
            focus on what matters most—growing your business—while we take care
            of the solutions that make it all possible.
          </p>
        </div>
      </div>
      <Pricing />
      <Contact />
    </div>
  );
}

export default Home;
