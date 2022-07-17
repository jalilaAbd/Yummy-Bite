import React from "react";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import "./layout.scss";

interface Props {
  children: React.ReactChild | React.ReactChild[];
  itemList: Item[];
}

const Layout = ({ children, itemList }: Props) => {
  return (
    <div className="containerLayout">
      <Header itemList={itemList} />
      <>{children}</>
      <Footer />
    </div>
  );
};

export default Layout;
