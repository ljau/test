import styled from "styled-components";
import { colors } from "../../lib/colors";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(90deg, ${colors.strongGrey} 0%, ${colors.white} 100%);
`;
