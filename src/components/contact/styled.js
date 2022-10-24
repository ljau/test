import styled from "styled-components";
import { colors } from "../../lib/colors";

export const ListContainer = styled.div`
  text-align: justify;
  display: flex;
  height: 100%;
  width: auto;
  padding: 5%;
  margin-top: 10vh;
  justify-content: center;
  border-radius: 5%;
  background: linear-gradient(90deg, ${colors.softGrey} 0%, ${colors.strongGrey} 100%);

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
    font-size: 5vw;
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
    color: ${colors.white};
    cursor: pointer;
  }
`;
