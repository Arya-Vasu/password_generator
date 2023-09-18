import React, {useState} from "react";
import "../styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [body, setBody] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Submitted!");

    emailjs.sendForm(
      "Service_id",
      "Template_id",
      e.target,
      "Public_key"
    );
  };
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
              <p>admin@vframe.com</p>
              <a href="mailto:admin@vframe.in">Get Mail</a>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faPhone} className="fa-icon phone-icon" />
            </div>
            <div className="card-content">
              <p>+91-XXX-XXX-XXXX</p>
              <a href="tel:9876543210">Contact Now</a>
            </div>
          </div>

          <div className="card">
            <div className="icon">
              <FontAwesomeIcon icon={faClock} className="fa-icon clock-icon" />
            </div>
            <div className="card-content">
              <p>Monday to Saturday – 10:00 AM to 06:00 PM</p>
              {/* <a href="tel:7007789794">Contact Now</a> */}
            </div>
          </div>
        </div>
        <div class="contact-form-container">
          <h2>Get in Touch!</h2>
          <p>Kindly fill out the form below and we will contact you soon.</p>
          <form onSubmit={sendEmail}>
            <label for="name"> Your Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              onChange={(event) => setName("event.target.value")}
            />
            <label for="phone"> Your Phone:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Phone"
              onChange={(event) => setPhone("event.target.value")}
            />
            <label for="email"> Your Email ID:</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              onChange={(event) => setEmail("event.target.value")}
            />
            <label for="body"> Your Message:</label>
            <textarea
              id="body"
              name="body"
              placeholder="Body"
              onChange={(event) => setBody("event.target.value")}
            />
            <button type="submit">Click to Send an Email</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
