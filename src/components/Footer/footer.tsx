import React from "react";
import Copyright from "../../images/copyright.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footerContainer">
      <img src={Copyright} alt="copyright" className="copyrightIcon" />
      <span className="copyrightText">
        2022 Yummy Bite. All rights reserved
      </span>
    </div>
  );
};

export default Footer;
