import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoImage, userImage } from "../../lib/images";
import {
  ButtonImage,
  LogoEnterprise,
  NavigationBarContainer,
  NavItem,
  NavList,
  NavRow,
  SecondaryMenu,
  UserIcon,
} from "./styled";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [openUser, setOpenUser] = useState(false);

  const handleLogOut = () => {
    navigate("/login");
    sessionStorage.clear();
  };

  return (
    <NavigationBarContainer>
      <LogoEnterprise src={logoImage} />
      <NavList>
        <NavRow>
          <NavItem onClick={() => navigate("/")}>Home</NavItem>
        </NavRow>
        <NavRow>
          <NavItem onClick={() => navigate("/contact")}>Contact</NavItem>
        </NavRow>
        <NavRow>
          <NavItem onClick={() => navigate("/about")}>About</NavItem>
        </NavRow>
        <UserIcon
          onMouseEnter={() => setOpenUser(!openUser)}
          onMouseLeave={() => setOpenUser(!openUser)}
        >
          <ButtonImage src={userImage} />
          {openUser && (
            <SecondaryMenu>
              <NavItem onClick={handleLogOut}>Log out</NavItem>
            </SecondaryMenu>
          )}
        </UserIcon>
      </NavList>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
/*
<NavItem onClick={handleLogOut}>Log out</NavItem>
    */
