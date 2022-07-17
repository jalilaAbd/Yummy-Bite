import React from "react";
import Arrow from "../../images/arrow_top.svg";
import "./topButton.scss";

const topButton = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="topButton" onClick={() => scrollTop()}>
      <img src={Arrow} alt="arrow" />
      <span className="topLabel">Top</span>
    </div>
  );
};

export default topButton;
