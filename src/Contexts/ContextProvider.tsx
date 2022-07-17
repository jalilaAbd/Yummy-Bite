import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  FunctionComponent,
} from "react";

const ContextState = createContext({ width: 0, showScroll: false });

export const ContextProvider: FunctionComponent = ({ children }) => {
  const isBrowser = typeof window !== "undefined";
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    const handleShowScroll = () => {
      if (window.pageYOffset > 200) setShowScroll(true);
      else setShowScroll(false);
    };
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleShowScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleShowScroll);
    };
  });
  return (
    <ContextState.Provider
      value={{
        width,
        showScroll,
      }}
    >
      {children}
    </ContextState.Provider>
  );
};

export const useStateContext = () => useContext(ContextState);
