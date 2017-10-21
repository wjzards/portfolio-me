import React from "react";
import {
  ProfileLayout,
  ProfileContent,
  Image,
  ImageBox,
  TextBox,
  Email
} from "./Profile.style";

class Profile extends React.Component {
  render() {
    return (
      <ProfileLayout>
        <ProfileContent>
          <ImageBox>
            <Image />
          </ImageBox>
          <TextBox>
            <h1>Hi <span>,</span></h1>
            <h1>I am</h1>
            <h2>Peerapong</h2>
            <h2>Hongchaipat.</h2>            
          </TextBox>
        </ProfileContent>
        <Email>
          <p>Email</p>
          <p>wjzardsopeerapong@gmail.com</p>
        </Email>
      </ProfileLayout>
    );
  }
}

export default Profile;
