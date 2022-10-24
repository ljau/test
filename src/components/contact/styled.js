import styled from "styled-components";
import { colors } from "../../lib/colors";

export const ListContainer = styled.div`
  text-align: justify;
  display: flex;
  height: 100%;
  width: 100%;
  padding-top: 10vh;
  justify-content: center;
`;

export const CustomList = styled.dl`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 40vh;
  width: 100%;
`;

export const ListItem = styled.dt`
  color: ${colors.black};
  font-weight: bold;
  font-size: 200%;  

  @media only screen and (max-width: 600px) {
    min-width: 8%;
    font-size: 1.2rem;
  }
`;

export const ListItemData = styled.dd`
  color: ${colors.black};
  font-size: 150%;
  font-weight: bold;
`;

export const ListLink = styled.a`
  color: ${colors.black};
  :hover {
    background-color: ${colors.strongGrey};
    color: ${colors.blue};
    cursor: pointer;
  }
`;
