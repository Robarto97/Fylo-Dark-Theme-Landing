import logo from "./images/logo.svg";
import location from "./images/icon-location.svg";
import phone from "./images/icon-phone.svg";
import email from "./images/icon-email.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="links">
        <div className="address">
          <div className="line">
            <img src={location} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque sint suscipit tenetur corrupti aliquid. Facere id
              labore quod odit!
            </p>
          </div>
          <div className="line">
            <img src={phone} alt="" />
            <p>+1-543-123-4567</p>
          </div>
          <div className="line">
            <img src={email} alt="" />
            <p>example@fylo.com</p>
          </div>
        </div>
        <ul>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Jobs</a>
          </li>
          <li>
            <a href="/">Press</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/">Contact Us</a>
          </li>
          <li>
            <a href="/">Terms</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
        </ul>
        <div className="icons">
          <FontAwesomeIcon className="icon" icon={faFacebookF} />
          <FontAwesomeIcon className="icon" icon={faTwitter} />
          <FontAwesomeIcon className="icon" icon={faInstagram} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
