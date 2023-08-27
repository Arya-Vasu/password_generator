// ContactUs.js
import React from "react";
import "../styles.css";
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className="homepage bg-black">
      <div className="contact-us-container">
        <h1>Contact Us</h1>

        <div className="card-container">
          <div className="card">
            <div className="icon">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="fa-icon email-icon"
              />
            </div>
            <div className="card-content">
              <p>contact@sociopool.com</p>
              <a href="mailto:contact@sociopool.com">Get Mail</a>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} className="fa-icon phone-icon" />
            </div>
            <div className="card-content">
              <p>01144762374</p>
              <a href="tel:01144762374">Contact Now</a>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faClock} className="fa-icon clock-icon" />
            </div>
            <div className="card-content">
              <p>Monday to Saturday – 10:00 AM to 07:00 PM</p>
              <a href="tel:01144762374">Contact Now</a>
            </div>
          </div>
        </div>
        <div class="contact-form-container">
          <h2>Get in Touch!</h2>
          <p>Kindly fill out the form below and we will contact you soon.</p>
          {/* <form>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" id="name" name="name" required />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required />
    </div>
    <div class="form-group">
      <label for="phone">Phone</label>
      <input type="text" id="phone" name="phone" required />
    </div>
    <div class="form-group">
      <label for="company">Company/ Brand Name</label>
      <input type="text" id="company" name="company" />
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea id="message" name="message" rows="4" required></textarea>
    </div>
    <div class="form-group">
      <button type="submit">SEND</button>
    </div>
  </form> */}

          {/* google form part  */}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScBQfO45pYAXoOdZ-pre-7vRIabsX6HOUROfpYFHyHZgJ-hwQ/viewform?embedded=true"
            width="640"
            height="986"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            style={{ display: "block", margin: "0 auto" }} // Center-align the iframe
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
