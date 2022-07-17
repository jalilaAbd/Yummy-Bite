import React from "react";
import GoButton from "../GoButton/goButton";
import "./card.scss";

interface Props {
  title: String;
  description: String;
  image: string;
  path: string;
}

const Card = ({ title, description, image, path }: Props) => {
  return (
    <div className="cardContainer">
      <img src={image} alt="product img" className="cardImage" />
      <GoButton path={path} />
      <div className="descriptionWrapper">
        <div className="cardTitle">{title}</div>
        <div className="line" />
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default Card;
