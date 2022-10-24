import React from "react";
import NavigationBar from "../navigationBar";
import { MainContainer } from "./styled";

const Layout = ({ children }) => {
  return (
    <MainContainer>
      <NavigationBar />
      {children}
    </MainContainer>
  );
};

export default Layout;
