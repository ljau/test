import styled from "styled-components";
import { colors } from "../../lib/colors";

export const DescriptionBox = styled.div`
  text-align: justify;
  display: flex;
  height: 100%;
  width: 60%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10vh;
  border-radius: 2%;
  padding: 5%;
  background: linear-gradient(90deg, ${colors.softGrey} 0%, ${colors.strongGrey} 100%);
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
