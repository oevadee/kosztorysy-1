import React from "react";
import "./styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__contact">
        <p className="footer__contact__phone">
          <span>Tel:</span> xxx-xxx-xxx
        </p>
        <p className="footer__contact__email">
          <span>Email:</span> test@test.pl
        </p>
      </div>
      <p className="footer__privacy">Polityka prywatności i RODO</p>
      <div className="footer__socials">
        <a href="https://www.facebook.com/">
          <img
            src="/icons/facebook.svg"
            alt="facebook"
            className="footer__socials__icon"
          />
        </a>
        <a href="https://intagram.com/">
          <img
            src="/icons/instagram.svg"
            alt="instagram"
            className="footer__socials__icon"
          />
        </a>
        <a href="https://twitter.com/">
          <img
            src="/icons/twitter.svg"
            alt="twitter"
            className="footer__socials__icon"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
