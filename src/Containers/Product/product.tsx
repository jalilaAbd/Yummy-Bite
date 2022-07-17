import React from "react";
import SEO from "../../configs/seo";
import { useStateContext } from "../../Contexts/ContextProvider";
import GoButton from "../../components/GoButton/goButton";
import TopButton from "../../components/TopButton/topButton";
import { ProductData } from "../../data";
import "./product.scss";

type props = {
  type: "main" | "flavor";
  image: string;
};

const ContouredImage = ({ type, image }: props) => {
  return (
    <>
      <SEO title="Product" />
      {type === "main" ? (
        <div className="contourWrapper">
          <div className="contourCercleYellow" />
          <div className="mainContourCercle" />
          <img src={image} alt="img" className="contourImage" />
        </div>
      ) : (
        <div
          className="contourWrapper"
          style={{ width: "245px", height: "230px" }}
        >
          <div className="contourCercle" />
          <div
            className="contourCercle"
            style={{ opacity: "0.5", left: "15px" }}
          />
          <img
            src={image}
            alt="img"
            className="contourImage"
            style={{ width: "215px", height: "215px" }}
          />
        </div>
      )}
    </>
  );
};

const product = ({ name }: any) => {
  const { showScroll } = useStateContext();
  const data = ProductData.filter((p) => p.title === name)[0];
  return (
    <div className="productWrapper">
      <div className="titleWrapper">
        <div className="yellowRectangle" />
        <div className="productTitle">{data.title}</div>
        <ContouredImage image={data.image} type="main" />
      </div>
      <div className="infoWrapper">
        <div className="infoTitle">Ingredients</div>
        <ul>
          {data.ingredients.map((ingd) => (
            <li>
              <div className="detailTitle">{ingd}</div>
            </li>
          ))}
        </ul>
        <div className="infoTitle">Available flavors</div>
        <div className="flavorsWrapper">
          {data.flavors.map((flavor) => (
            <div className="flavorItem">
              <div className="detailTitle">{flavor.name}</div>
              <ContouredImage image={flavor.image} type="flavor" />
            </div>
          ))}
        </div>
      </div>
      <GoButton goBack />
      {showScroll && <TopButton />}
    </div>
  );
};

export default product;
