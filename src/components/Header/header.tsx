import React, { useState } from "react";
import Logo from "../../images/yummyb-logo.svg";
import Menu from "../../images/menu.svg";
import { useStateContext } from "../../Contexts/ContextProvider";
import "./header.scss";

interface Props {
  itemList: Item[];
}

const Header = ({ itemList }: Props) => {
  const { width } = useStateContext();
  const [restreintMenu, setRestreintMenu] = useState(false);
  const scrollClick = (offsetTop: number | undefined) => {
    if (offsetTop) {
      window.scrollTo({
        top: offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  const handleMenu = () => {
    setRestreintMenu(!restreintMenu);
  };

  return (
    <div className="headerContainer">
      <div className="menuContainer">
        <img src={Logo} alt="yummyBite logo" className="logo" />
        {width > 768 ? (
          <div className="menu">
            {itemList.map((i) => (
              <div
                key={i.label}
                className="item"
                onClick={() => scrollClick(i.offsetTop)}
              >
                {i.label}
              </div>
            ))}
          </div>
        ) : (
          <>
            <img src={Menu} className="menuIcon" onClick={() => handleMenu()} />
            {restreintMenu && (
              <div className="restreintMenu">
                {itemList.map((i) => (
                  <div
                    className="item"
                    onClick={() => {
                      scrollClick(i.offsetTop), handleMenu();
                    }}
                  >
                    {i.label}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
