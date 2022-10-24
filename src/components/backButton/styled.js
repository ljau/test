import styled from "styled-components";
import { colors } from "../../lib/colors";

export const BackButtonStyle = styled.button`
  height: 3rem;
  width: 6rem;
  border-radius: 10px;
  background-color: ${colors.black};
  border: none;
  align-self: flex-start;
  float: left;
  margin: 1%;
  :hover{
    background-color: ${colors.mediumGrey};
  }
  @media only screen and (max-width: 600px) {
    height: 2.5rem;
    width: 4rem;
    margin-bottom: 10%;
  }
`;
