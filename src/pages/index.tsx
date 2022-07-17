import React from "react";
import { ContextProvider } from "../Contexts/ContextProvider";
import RootContainer from "../rootcontainer";
import "./index.scss";

const IndexPage = () => (
  <ContextProvider>
    <RootContainer />
  </ContextProvider>
);

export default IndexPage;
