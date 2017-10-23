import styled from "styled-components";
import Colors from "../../Theme/Colors";

export const AboutLayout = styled.div`
  padding: 90px 150px;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;
  position: relative;

  &:after {
    z-index: -2;
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    width: 0;
    height: 0;
    border-bottom: 100vh solid ${Colors.bgBlack};
    border-right: 50vw solid transparent;
    border-left: 100px solid ${Colors.bgBlack};
  }
  /* ---------------------screen display--------------------- */
  @media only screen and (max-width: 768px){
    padding: 80px 80px;
  }
  @media only screen and (max-width: 425px){
    padding: 60px 40px;
    grid-template-columns: 1fr;
    &:after {
      width: 100%;
      height: 40%;
      background: ${Colors.bgBlack};
      border: none;
    }
  }
  @media only screen and (max-width: 320px){
    padding: 60px 20px;
  }
  /* ---------------------screen display--------------------- */
`;

export const ImageAbout = styled.div`
  background-image: url(${require("../../Assets/images/about.jpg")});
  background-size: cover;
  background-position: center;
  width:100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after {
    position: relative;
    display: flex;
    justify-content: center;
    padding-top:30px;
    font-size: 3rem;
    color: rgba(51, 49, 50, .7);
    width: 80%;
    height: 80%;
    content: "About Me";
    border:4px solid rgba(51, 49, 50, .7);
  }
  /* ---------------------screen display--------------------- */
  @media only screen and (max-width: 425px){
    height: 250px;
    &:after {
      padding-top:20px;
      font-size: 2rem;
      width: 80%;
      height: 70%;
      border:3px solid rgba(51, 49, 50, .7);
    }
  }
  /* ---------------------screen display--------------------- */
`;

export const TextContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    text-indent: 50px;
  }
  /* ---------------------screen display--------------------- */
  @media only screen and (max-width: 768px){
   font-size: 14px;
  }
  @media only screen and (max-width: 425px){
    margin-top:20px;
    font-size: 14px;
   }
  /* ---------------------screen display--------------------- */
`;

export const ButtonBackHome = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  a{
    padding: 20px 20px;
    font-size: 25px;
    transition: all .5s ease;
    cursor: pointer;
  }
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
    transition: all .5s ease;
    a{
      color: ${Colors.bgWhite};
    }
    &:after{
      width: 100%;
      transition: all .5s ease;
    }
  }
  /* ---------------------screen display--------------------- */
    @media only screen and (max-width: 768px){
      top: 30px;
      right: 30px;
      a{
        font-size: 18px;
      }
    }
    @media only screen and (max-width: 425px){
      top: 20px;
      right: 20px;
      a{
        color:${Colors.bgWhite};
        padding: 20px 15px;
        font-size: 20px;
      }
      &:after{
        z-index: -1;
        position: absolute;
        content: "";
        left: 0;
        width: 0%;
        height: 100%;
        transition: all .5s ease;
        background: ${Colors.bgWhite};
      }
      &:hover{
        transition: all .5s ease;
        a{
          color: ${Colors.bgBlack};
        }
        &:after{
          width: 100%;
          transition: all .5s ease;
        }
      }
    }
  /* ---------------------screen display--------------------- */
`;
