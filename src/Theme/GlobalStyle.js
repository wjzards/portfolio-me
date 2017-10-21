import styled, { injectGlobal } from "styled-components";
import Colors from "./Colors";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700');
  body{
      color: ${Colors.bgBlack};
      background: ${Colors.bgWhite};
      font-family: 'Roboto', sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  div {
    box-sizing: border-box;
  }

  a, a:hover, a:active{
    color: ${Colors.bgBlack};
    cursor: pointer;
    text-decoration: none;
  }
`;

export const Container = styled.div`
  z-index: -1;
`;
