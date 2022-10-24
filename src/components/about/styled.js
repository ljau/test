import styled from "styled-components";
import { colors } from "../../lib/colors";

export const DescriptionBox = styled.div`
  text-align: justify;
  display: flex;
  height: 100%;
  width: 70%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 10vh;
`;

export const DescriptionTitle = styled.p`
  color: ${colors.black};
  font-weight: bold;
  font-size: 250%;  

  @media only screen and (max-width: 600px) {
    min-width: 8%;
    font-size: 1.5rem;
  }
`;

export const DescriptionData = styled.p`
  color: ${colors.black};
  font-weight: bold;
  font-size: 200%;  

  @media only screen and (max-width: 600px) {
    min-width: 8%;
    font-size: 1.2rem;
  }
`;
