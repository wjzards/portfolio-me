import React from "react";
import {
  PortfolioLayout,
  PorfolioContent,
  Title,
  Menu,
  Product
} from "./Portfolio.style";

class Portfolio extends React.Component{
  constructor(){
    super()

    this.state = {
      design: false,
      developer: true,
      data: [
        {
          title: "Web design national geographic",
          category: "design",
          image: "design/design1.png"
        },
        {
          title: "The plutonian",
          category: "design",
          image: "design/design2.png"
        },
        {
          title: "Design nike",
          category: "design",
          image: "design/design3.png"
        },
        {
          title: "Design nike",
          category: "design",
          image: "design/design4.png"
        },
        {
          title: "Design nike",
          category: "design",
          image: "design/design5.png"
        },
        {
          title: "MEAN Stack authentication",
          category: "developer",
          image: "developer/developer2.png",
          url: "https://aqueous-chamber-28816.herokuapp.com/"
        },
        {
          title: "React firebase authentication & realtime database",
          category: "developer",
          image: "developer/developer1.png",
          url: "https://github.com/wjzards/notes_firebase"
        },
      ]
    }
  }

  onDesign = () => {
    if(this.state.developer === true){
      this.setState({
        design: true,
        developer: false
      })
    }
  }

  onDeveloper = () => {
    if(this.state.design === true){
      this.setState({
        design: false,
        developer: true
      })
    }
  }
  
  render() {
    const { main } = this.props
    const design = this.state.data.filter(data => data.category === "design")
    const developer = this.state.data.filter(data => data.category === "developer")
    return(
      <PortfolioLayout>
          <PorfolioContent main={main}>
            <Title>Portfolio</Title>
            <Menu>  
              <h2 onClick={this.onDeveloper.bind(this)}>Web Developer</h2>
              <h2 onClick={this.onDesign.bind(this)}>Design</h2>
            </Menu>          
          </PorfolioContent>
         {this.state.design && <Product main={main}>
            {
              design.map((data, i) => {
                return (
                  <div key={i}>
                    <img src={require('../../Assets/images/'+ data.image)} alt=""/>
                    <p>{data.title}</p>
                  </div>
                );
              })
            }
          </Product>}
          {this.state.developer && <Product main={main}>
          {
            developer.map((data, i) => {
              return (
                <div key={i}>
                <a rel='noopener noreferrer' target="_blank" href={data.url}><img src={require('../../Assets/images/'+ data.image)} alt=""/></a>
                  <p>{data.title}</p>
                </div>
              );
            })
          }
        </Product>}
      </PortfolioLayout>
    );
  }
}

export default Portfolio;
