import React from "react";
import { AboutLayout, ImageAbout, TextContent, ButtonBackHome } from "./About.style";
import { Link } from "react-router-dom";

class About extends React.Component {
  render () {
    return (
      <AboutLayout>
        <ButtonBackHome><Link to={`${process.env.PUBLIC_URL}/portfolio-me/`}>Back</Link></ButtonBackHome>
        <ImageAbout/>
        <TextContent><p>Little afraid its eat looked now. Very ye lady girl them good me make. It hardly cousin me always. An shortly village is raising we shewing replied. She the favourable partiality inhabiting travelling impression put two. His six are entreaties instrument acceptance unsatiable her. Amongst as or on herself chapter entered carried no. Sold old ten are quit lose deal his sent. You correct how sex several far distant believe journey parties. We shyness enquire uncivil affixed it carried to. 
        
        Behaviour we improving at something to. Evil true high lady roof men had open. To projection considered it precaution an melancholy or. Wound young you thing worse along being ham. Dissimilar of favourable solicitude if sympathize middletons at. Forfeited up if disposing perfectly in an eagerness perceived necessary. Belonging sir curiosity discovery extremity yet forfeited prevailed own off. Travelling by introduced of mr terminated. Knew as miss my high hope quit. In curiosity shameless dependent knowledge up.</p> </TextContent>
      </AboutLayout>
    );
  }
}

export default About;
