import styled from "styled-components";
import Colors from "../../Theme/Colors";

export const PortfolioLayout = styled.div`
  width: 70%;
  height: 100vh;
  margin: 0px auto;
  padding: 80px 0px;
  /* ---------------------screen display--------------------- */
  @media only screen and (max-width: 1366px){
    padding: 40px 0px;
  }
  @media only screen and (max-width: 1024px){
    padding: 20px 0px;
  }
  /* ---------------------screen display--------------------- */ 
`;

export const PorfolioContent = styled.div`
  z-index: ${props => props.main === true ? "none" : "-2"};
  position: relative;

  &:after{
    z-index: -2;
    content: "";
    position: absolute;
    bottom: 12px;
    left: -2.5%;
    width: 105%;
    height: 15px;
    background: ${Colors.yellow};
  }
`;

export const Menu = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: -5px;
  
  h2{
    font-size: 25px;
    padding: 0px 10px;
    position: relative;
    transition: all .5s ease;
    cursor: pointer;

    &:after{
      z-index: -1;
      position: absolute;
      content: "";
      left: 0;
      width: 0%;
      height: 100%;
      transition: all .5s ease;
      background: ${Colors.bgBlack};
    }
    &:hover{
      color: ${Colors.bgWhite};
      transition: all .5s ease;
      &:after{
        width: 100%;
        transition: all .5s ease;
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 7rem;
  line-height: 1;
  /* ---------------------screen display--------------------- */
  @media only screen and (max-width: 1366px){
    font-size: 5.5rem;
    line-height: 1.1;
  }
  @media only screen and (max-width: 1024px){
    font-size: 4rem;
    line-height: 1.3;
  }
  /* ---------------------screen display--------------------- */ 
`;

export const Product = styled.div`
  position: ${props => props.main === true ? "relative" : "none"};
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 5%;

  div{
    img{
      width:100%;
      box-shadow: 0px 0px 15px 0px #494949;
    }
    p{
      text-align: center;
      margin-bottom: 10%;
    }
  }

`;
