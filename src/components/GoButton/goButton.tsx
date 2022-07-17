import React, { useState } from "react";
import { Link } from "gatsby";
import ArrowImg from "../../images/arrow.svg";
import ArrowImg1 from "../../images/arrow1.svg";
import "./goButton.scss";

interface props {
  goBack?: Boolean;
  path?: string;
}

const GoButton = ({ goBack, path }: props) => {
  const [isArrowHover, setArrowHover] = useState(false);
  return (
    <Link to={path ? path : "/"} className="link">
      <div
        className="btnWrapper"
        onMouseEnter={() => setArrowHover(true)}
        onMouseLeave={() => setArrowHover(false)}
        style={{
          bottom: goBack ? "40px" : "",
          left: goBack ? "50px" : "",
          top: goBack ? "unset" : "",
        }}
      >
        <img
          src={isArrowHover ? ArrowImg1 : ArrowImg}
          alt="arrow"
          style={{ transform: goBack ? "rotate(180deg)" : "" }}
        />
      </div>
    </Link>
  );
};

export default GoButton;
