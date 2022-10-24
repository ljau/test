import styled from "styled-components";
import { colors } from "../../lib/colors";

export const LayoutLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: ${colors.pink};
  background: linear-gradient(90deg, ${colors.pink} 0%, ${colors.blue} 100%);
`;

export const FormContainer = styled.form`
  z-index: 2;
  background-color: white;
  height: 500px;
  width: 80%;
  border-radius: 10px;
  box-shadow: 0 0 5px 5px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  @media only screen and (min-width: 600px) {
    height: 400px;
    width: 300px;
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  outline: none;
  border: 1px solid ${colors.strongGrey};
  border-radius: 5px;
  font-size: 0.9rem;
  width: 162px;
`;

export const ButtonSubmit = styled.input`
  background-color: ${colors.blue};
  color: #fff;
  padding: 0.5rem;
  outline: none;
  border: none;
  width: 180px;
  border-radius: 5px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
  font-size: 1.2rem;
  cursor: pointer;
  :disabled {
    background: ${colors.strongGrey};
  }
`;

export const ErrorText = styled.p`
  color: red;
  text-align: start;
  width: 180px;
  margin: 8px 0;
  font-size: 0.8rem;
`;
