import styled from "styled-components";
import { colors } from "../../lib/colors";

export const ListContainer = styled.div`  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 65%;
  height: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  border-radius: 10px;
  overflow: hidden;
  @media only screen and (max-width: 600px) {
    width: 85%;
  }
`;

export const DataContainer = styled.div`
  background-color: ${({ bgColor }) => bgColor ?? colors.softGrey};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: auto;  
  :hover{ 
    ${({ isItem }) => {
      if(isItem){
        // return `box-shadow: 10px 10px 5px ${colors.black};
        return `
          background-color: ${colors.black};
          cursor: pointer;
          color: ${colors.white};          
          `;
        }}     
      }
  }
`;

export const DataItem = styled.div`
  min-height: 3rem;
  width: ${({ width }) => width ?? "auto"};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor ?? "transparent"};
  font-size: 1.5vw;
  font-weight: ${({ font }) => font ?? "normal"};
  ${({ isTitle }) => {
    if(isTitle){
      return `
        font-weight: bold;
        background-color: ${colors.blue};
        color: ${colors.white};
      `;
    }  
  }}
  ${({ detailsView }) => {
    if(detailsView){
      return `
        border: 1px solid ${colors.black};
      `;
    }  
  }}
  text-align: center;
  @media only screen and (max-width: 600px) {
    font-size: small;
  }
`;
