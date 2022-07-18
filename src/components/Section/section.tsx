import React, { forwardRef, Ref } from "react";
import Button from "../Button/button";
import Card from "../Card/card";
import "./section.scss";

type Product = {
  title: string;
  description: string;
  image: string;
};

interface Props {
  index: Number;
  title: string;
  text: string;
  image?: string;
  inverse?: boolean;
  buttonLabel?: string;
  scrollRef?: number;
  productsData?: Product[];
}

const Section = forwardRef(
  (
    {
      index,
      title,
      text,
      image,
      inverse,
      buttonLabel,
      scrollRef,
      productsData,
    }: Props,
    ref: Ref<HTMLDivElement>
  ) => {
    const scrollClick = (offsetTop: number) => {
      if (offsetTop)
        window.scrollTo({
          top: offsetTop,
          left: 0,
          behavior: "smooth",
        });
    };
    return (
      <div className="sectionContainer" ref={ref}>
        {image ? (
          <div
            className="contentWithImg"
            style={{
              flexDirection: inverse ? "row-reverse" : "row",
            }}
          >
            <div className="textContainer">
              <div className="title">{title}</div>
              <div className="text">{text}</div>
              {buttonLabel && (
                <Button
                  label={buttonLabel}
                  onClick={scrollRef ? () => scrollClick(scrollRef) : undefined}
                />
              )}
            </div>
            <img
              src={image}
              alt="section img"
              className={index === 0 ? "mainImage" : "image"}
            />
          </div>
        ) : (
          <div className="cardSection">
            <div className="title">{title}</div>
            <div className="text">{text}</div>
            {productsData ? (
              <div className="cardWrapper">
                {productsData.map((p) => (
                  <Card
                    key={p.title}
                    title={p.title}
                    description={p.description}
                    image={p.image}
                    path={`/product/${p.title}`}
                  />
                ))}
              </div>
            ) : null}
          </div>
        )}
      </div>
    );
  }
);

export default Section;
