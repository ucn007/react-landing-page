import React from "react";
import "./index.scss";
import contactLocation from "../../assets/img/contact/location-pin.png";
import contactPhone from "../../assets/img/contact/telephone.png";
import contactMail from "../../assets/img/contact/email.png";
import Buttons from "../Buttons/Buttons";
function Contact() {
  return (
    <div className="contact-block">
      <h2 className="section-heading">Get In Touch With Us</h2>
      <div className="container w-100">
        <div className="d-flex align-flex-start w-100">
          <div className="address-block">
            <div className="address tile">
              <div className="address d-flex align-center">
                <div className="img-block p-4 m-r-8 d-flex align-center justify-center">
                  <img src={contactLocation} alt="" />
                </div>

                <p> 621 Valley Ave,Solana Beach,California,680002</p>
              </div>
              <div className="address d-flex align-center">
                <div className="img-block p-4 m-r-8 d-flex align-center justify-center">
                  {" "}
                  <img src={contactPhone} alt="" />
                </div>

                <a href="tel:+919605890634">+91 9605 890 634</a>
              </div>
              <div className="address d-flex align-center">
                <div className="img-block p-4 m-r-8 d-flex align-center justify-center">
                  {" "}
                  <img src={contactMail} alt="" />
                </div>

                <a href="mailto:ullaschandran98@gmail.com">
                  ullaschandran98@gmail.com
                </a>
              </div>
            </div>
            <div className="map tile">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.69533206748!2d-117.26361841260734!3d32.988723205017266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dc0929282fdfa3%3A0x614ed98bda5e891!2s621%20Valley%20Ave%2C%20Solana%20Beach%2C%20CA%2092075%2C%20USA!5e1!3m2!1sen!2sin!4v1731220084072!5m2!1sen!2sin"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="contact-form">
            <div className="form-container">
              <h3>Connect With Us</h3>
              <form>
                <div className="form-input">
                  <label htmlFor="">Name</label>
                  <input type="text" />
                </div>
                <div className="form-input">
                  <label htmlFor="">Phone number</label>
                  <input type="tel" />
                </div>
                <div className="form-input">
                  <label htmlFor="">Email</label>
                  <input type="mail" />
                </div>
                <div className="form-input">
                  <label htmlFor="">Message</label>
                  <textarea />
                </div>
                <div className="form-button">
                  <Buttons label="Send" className="primary-btn m-t-12" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
