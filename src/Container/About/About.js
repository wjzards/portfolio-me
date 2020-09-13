import React from "react";
import { AboutLayout, ImageAbout, TextContent, ButtonBackHome } from "./About.style";
import { Link } from "react-router-dom";

class About extends React.Component {
  render () {
    return (
      <AboutLayout>
        <ButtonBackHome><Link to={`${process.env.PUBLIC_URL}/`}>Back</Link></ButtonBackHome>
        <ImageAbout/>
        <TextContent><p>-</p> </TextContent>
      </AboutLayout>
    );
  }
}

export default About;
