import styled from "styled-components";
import { colors } from "../../lib/colors";

export const NavigationBarContainer = styled.nav`
  background-color: ${colors.black};
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const LogoEnterprise = styled.img`
  position: relative;
  height: 100%;
  width: auto;
`;

export const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 600px) {
    width: auto;
  }
`;

export const NavRow = styled.li`
  float: ${({ float }) => float ?? "left"};
  width: auto;
  @media only screen and (max-width: 600px) {
    min-width: 8%;
}
`;

export const NavItem = styled.a`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-weight: bold;
  :hover {
    background-color: ${colors.strongGrey};
    cursor: pointer;
  }
  @media only screen and (max-width: 600px) {
    min-width: 8%;
    font-size: .7rem;
  }
`;

export const UserIcon = styled.div`
  height: 50px;
  width: 50px;
  padding: 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 600px) {
    width: 5%;
  }
`;

export const ButtonImage = styled(LogoEnterprise)`
  height: 30px;
  width: 30px;
  :hover {
    cursor: pointer;
  }
`;

export const SecondaryMenu = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  width: 100%;
  z-index: 1;
  background-color: ${colors.strongGrey};
  width: 100px;
  :hover{
    background-color:${colors.blue};
    cursor: pointer;
  }
`;
