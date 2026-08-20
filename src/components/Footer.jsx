import React from "react";
import whatsappIcon from "../assets/WhatsApp_Logo_Alternative_1.png";
import linkedinIcon from "../assets/linkedin_174857.png";
import emailIcon from "../assets/Gmail_idrA5FDGTH_1.png";
import githubIcon from "../assets/GitHub_Symbol_1.png";

function Footer() {
  return (
    <div id="contact" className="footer-page">
      <p className="semi-bold-medium">Contact Me</p>
      <div className="contact-list">
        <div className="contact-item">
          <img className="whatsapp-icon" src={whatsappIcon} alt="WhatsApp" />
          <p className="medium-small">0812-1008-6987</p>
        </div>
        <div className="contact-item">
          <img
            className="contact-item-icon"
            src={linkedinIcon}
            alt="LinkedIn"
          />
          <a
            className="medium-small"
            href="https://www.linkedin.com/in/faqihuddin-al-ghiffary-4552aa248"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
      <br />
      <div className="contact-list">
        <div className="contact-item">
          <img className="contact-item-icon" src={emailIcon} alt="Email" />
          <p className="medium-small">f4qihuddin@gmail.com</p>
        </div>
        <div className="contact-item">
          <img className="contact-item-icon" src={githubIcon} alt="GitHub" />
          <a
            className="medium-small"
            href="https://github.com/f4qihuddin"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Profile
          </a>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Footer;
