import styled from "styled-components";
import Colors from "../../Theme/Colors";

export const ProfileLayout = styled.div`
  z-index: -1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  
  &:after{
    z-index: -2;
    content: "";
    width: 35%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    background: ${Colors.bgBlack};
  }
`;

export const Email = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50px;
  color: ${Colors.bgWhite};
  padding-left: 30px;

  &:before{
    content: "";
    position: absolute;
    left: 0;
    width: 5px;
    height: 100%;
    background: ${Colors.yellow};
  }
  p{
    line-height: 0.3;
    &:nth-child(1){
      font-size: 23px;
    }
    &:nth-child(2){
      font-size: 20px;
      color: ${Colors.subText};
    }
  }

  /* ---------------------screen display--------------------- */
  @media only screen and (max-width: 1366px){
    p{
      &:nth-child(1){
        font-size: 18px;
      }
      &:nth-child(2){
        font-size: 15px;
      }
    }
  }
  @media only screen and (max-width: 1024px){
    bottom: 30px;
    left: 30px;
  }
  /* ---------------------screen display--------------------- */ 
`;

export const ProfileContent = styled.div`
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
`;

export const ImageBox = styled.div`
  &:after{
    content: "";
    position: absolute;
    width: 200px; 
    height: 275px;
    border:15px solid rgba(255, 255, 0, 0.8);
    top: 10px;
    left: 270px;
    transform: rotate(22deg); 
  }

  /* ---------------------screen display--------------------- */
  @media only screen and (max-width: 1366px){
    &:after{
      width: 170px; 
      height: 245px;
      top: 5px;
      left: 240px;
    }
  }
  @media only screen and (max-width: 1024px){
    &:after{
      width: 125px; 
      height: 185px;
      top: -0px;
      left: 150px;
      border:13px solid rgba(255, 255, 0, 0.8);
    }
  }
  /* ---------------------screen display--------------------- */ 
`;

export const Image = styled.div`
  background-image: url(${require("../../Assets/images/profile.jpg")});
  background-size: cover;
  background-position-x: -150px;
  width: 420px;
  height: 500px;
  box-shadow: 0px 0px 80px 0px #212121;

  /* ---------------------screen display--------------------- */  
  @media only screen and (max-width: 1366px){
    width: 370px;
    height: 450px;
  }

  @media only screen and (max-width: 1024px){
    width: 250px;
    height: 350px;
  }
  /* ---------------------screen display--------------------- */ 
`;

export const TextBox = styled.div`
  z-index: 2;
  padding-left: 50px;

  h1{
    font-size: 8rem;
    line-height: 0.5;
    span{
      color: ${Colors.yellow};
      margin-left: -30px;
    }
    &:nth-child(2){
      line-height: 0;
    }
  }

  h2{
    font-size: 4rem;
    line-height: 0.4;
    position: relative;
    &:nth-child(3){
      &:after{
        width: 90%;
      }
    }
    &:after{
      z-index: -1;
      content: "";
      width: 110%;
      height: 10px;
      position: absolute;
      bottom: -15px;
      left: -5%;
      background: ${Colors.yellow};
    }
  }

  /* ---------------------screen display--------------------- */
  @media only screen and (max-width: 1366px){
    padding-left: 30px;
    h1{
      font-size: 7rem;
      span{
        margin-left: -10px;
      }
    }
    h2{
      font-size: 3.8rem;
    }
  }

  @media only screen and (max-width: 1024px){
    padding-left: 5px;
    h1{
      font-size: 5rem;
    }
    h2{
      font-size: 3rem;
    }
  }
  /* ---------------------screen display--------------------- */ 
`;
