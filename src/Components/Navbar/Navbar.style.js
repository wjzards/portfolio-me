import styled from "styled-components";
import Colors from "../../Theme/Colors";

export const NavbarLayout = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
`;

export const Logo = styled.img`
  position: absolute;
  top: 50px;
  left: 50px;
  width: 70px;
  height: 50px;
  /* ---------------------screen display--------------------- */
  @media only screen and (max-width: 1366px){
    width: 60px;
    height: 40px;
  }
  @media only screen and (max-width: 1024px){
    top: 30px;
    left: 30px;
    width: 50px;
    height: 30px;
  }
  /* ---------------------screen display--------------------- */ 
`;

export const Menu = styled.div`
  z-index: 4;
  position: absolute;
  top: 35px;
  right: 50px; 
  display: flex;
  align-items: center;

  h2{
    color: ${props => props.theme.menu === true ? Colors.bgWhite : Colors.bgBlack};
    font-size: 20px;
    padding-right: 20px;
  }
  /* ---------------------screen display--------------------- */ 
  @media only screen and (max-width: 1024px){
    top: 15px;
    right: 30px; 
    h2{
      font-size: 18px;
      padding-right: 20px;
    }
  }
  /* ---------------------screen display--------------------- */ 
`;

export const Icon = styled.div`
  width: 40px;
  cursor: pointer;
  position: relative; 
  
  span{
    display: block;
    width: 100%;
    height: 5px;
    margin-bottom: 7px;
    background: ${props => props.theme.menu === true ? Colors.bgWhite : Colors.bgBlack};
    transform: translate(0px, 0px) rotate(0deg);
    transition:all 0.3s ease;
    &:nth-child(1){
      transform: ${props => props.theme.menu === true ? "translate(0px, 12px) rotate(-45deg)" : "none"};
    }
    &:nth-child(2){
      transition:all 0.2s ease;
      opacity: ${props => props.theme.menu === true ? "0" : "1"};
      transform: ${props => props.theme.menu === true ? "translate(50px, 0px)" : "none"};
    }
    &:nth-child(3){
      transform: ${props => props.theme.menu === true ? "translate(0px, -12px) rotate(45deg)" : "none"};
      margin-bottom: 0px;
    } 
  }

  &:link{
    background: red;
  }
  /* ---------------------screen display--------------------- */
  @media only screen and (max-width: 1366px){
    width: 35px;
    span{
      width: 100%;
      height: 4px;
      margin-bottom: 6px;
      &:nth-child(1){
        transform: ${props => props.theme.menu === true ? "translate(0px, 10px) rotate(-45deg)" : "none"};
      }
      &:nth-child(3){
        transform: ${props => props.theme.menu === true ? "translate(0px, -10px) rotate(45deg)" : "none"};
      } 
    }
  }
  @media only screen and (max-width: 1024px){
    width: 30px;
    span{
      width: 100%;
      height: 3px;
      margin-bottom: 4px;
      &:nth-child(1){
        transform: ${props => props.theme.menu === true ? "translate(0px, 7px) rotate(-45deg)" : "none"};
      }
      &:nth-child(3){
        transform: ${props => props.theme.menu === true ? "translate(0px, -7px) rotate(45deg)" : "none"};
      } 
    }
  }
  /* ---------------------screen display--------------------- */ 
`;

export const OnShow = styled.div`
  z-index: 3;
  position: absolute;
  top:0;
  display: flex;
  justify-content: center;
  align-items: center;
  transition:all .3s ease;
  text-align: center;
  width: 100%;
  height: 100%;
  background: ${Colors.bgBlack};
  color: ${Colors.bgWhite};

  div{
    margin-top: -50px;
    h1{
      font-size: 4rem;
      padding-bottom: 10px;
      position: relative;

      &:after{
        z-index: -1;
        content: "";
        position: absolute;
        bottom: 0;
        left: -2.5%;
        width: 105%;
        height: 5px;
        background: ${Colors.yellow};
      }
    }
    a{
      color: ${Colors.bgWhite};
      display: block;
      text-decoration: none;
      margin: 20px 0px;
      font-size: 2rem;
      position: relative;
      transition: all .5s ease;

      &:after{
        z-index: -1;
        position: absolute;
        content: "";
        left: 0;
        width: 0%;
        height: 100%;
        transition: all .5s ease;
        background: ${Colors.yellow};
      }
      &:hover{
        color: ${Colors.bgBlack};
        transition: all .5s ease;
        &:after{
          width: 100%;
          transition: all .5s ease;
        }
      }
    }
  }
  /* ---------------------screen display--------------------- */
  @media only screen and (max-width: 1366px){
    div{
      
    }
  }
  @media only screen and (max-width: 1024px){

  }
  /* ---------------------screen display--------------------- */ 
`;

export const Follow = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  width: 40px;
  /* ---------------------screen display--------------------- */
  @media only screen and (max-width: 1024px){
    bottom: 30px;
    right: 30px;
  }
  /* ---------------------screen display--------------------- */
`;

export const IconFollow = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  a{
    z-index: ${props => props.theme.menu === true ? "1" : "4"};
    font-size: 30px;
    text-align: center;
    padding: 10px 0px;

    &:nth-child(4){
      margin-bottom: 80px;
    }
  }

  h2{
    transform: translate(-40px, -30px) rotate(-90deg);
    text-align: center;
    width: 120px;
    &:after{
      z-index: -1;
      content: "";
      width: 110%;
      height: 10px;
      position: absolute;
      bottom: 0px;
      left: -5%;
      background: ${Colors.yellow};
    }
  }
  /* ---------------------screen display--------------------- */
  @media only screen and (max-width: 1366px){
    a{
      font-size: 25px;
      &:nth-child(4){
        margin-bottom: 80px;
      }
    }
  
    h2{
      text-align: center;
      width: 120px;
    }
  }
  @media only screen and (max-width: 1024px){
    a{
      font-size: 20px;
      &:nth-child(4){
        margin-bottom: 70px;
      }
    }
  
    h2{
      transform: translate(-30px, -30px) rotate(-90deg);
      font-size: 18px;
      text-align: center;
      width: 100px;
    }
  }
  /* ---------------------screen display--------------------- */ 
`;
