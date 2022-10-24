import styled from "styled-components";
import { colors } from "../../lib/colors";

export const DataContainer = styled.div`
  background-color: ${colors.strongGrey};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  height: auto;
`;

export const DataItem = styled.div`
  height: 3rem;
  width: ${({ width }) => width ?? "auto"};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor ?? colors.softGrey};
  font-size: 120%;
  font-weight: ${({ font }) => font ?? "bold"};
  text-align: center;
  margin: ${({ margin }) => margin ?? ".8%"};
  :hover{ 
    ${({ isTitle }) => {
      if(isTitle){
        return `box-shadow: 0px 0px 10px 5px ${colors.black};
        cursor: pointer;`;
      }}     
    }
  }
  @media only screen and (max-width: 600px) {
    font-size: 80%;
  }
`;
