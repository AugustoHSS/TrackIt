import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
	  font: inherit;
    box-sizing: border-box;
    font-family: 'Lexend Deca', sans-serif;
  }
  button {
    cursor: pointer;
  }
`;