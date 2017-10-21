import React from "react";
import { 
  NavbarLayout, 
  Logo, 
  Menu, 
  Icon, 
  Follow,
  IconFollow,
  OnShow
} from "./Navbar.style";
import logo from "../../Assets/images/logo.png";
import logotwo from "../../Assets/images/logotwo.png";
import { ThemeProvider } from "styled-components";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  constructor(){
    super();

    this.state = {
      menu: false
    }
  }

  onMenu = () => {
    if(this.state.menu === false){
      this.setState({
        menu: true
      })
    }else{
      this.setState({
        menu: false
      })
    }
    this.props.handleShow(this.state.menu)
  }

  render () {
    const { menu } = this.state
    const isLogo = this.props.main === true ? logo : logotwo ;
    const theme = {
      menu: menu
    }
    return (
      <NavbarLayout>
        <Logo src={isLogo} />
        <ThemeProvider theme={theme}>
          <Menu>
            <h2>Menu</h2>
            <Icon onClick={this.onMenu.bind(this)}>
              <span></span>
              <span></span>
              <span></span>
            </Icon>
          </Menu>
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          { menu &&  
            <OnShow>
              <div>
                <h1>Menu</h1>
                <Link to={`${process.env.PUBLIC_URL}/`} >Home</Link>
                <Link to={`${process.env.PUBLIC_URL}/about`} >About Me</Link>            
              </div>
          </OnShow>}
        </ThemeProvider>
        <ThemeProvider theme={theme}>
          <Follow>
            <IconFollow>
              <a href="https://www.facebook.com/wjzadsteams" rel='noopener noreferrer' target="_blank"><i className="fa fa-facebook"></i></a>
              <a href="https://github.com/wjzards" rel='noopener noreferrer' target="_blank"><i className="fa fa-github"></i></a>
              <a href="https://www.instagram.com/peerapong_hongchaipat/" rel='noopener noreferrer' target="_blank"><i className="fa fa-instagram"></i></a>
              <a href="https://www.behance.net/wjzardsopefb21" rel='noopener noreferrer' target="_blank"><i className="fa fa-behance"></i></a>
              <h2>Follow me</h2>
            </IconFollow>
          </Follow>
        </ThemeProvider>
      </NavbarLayout>
    )
  }
}

export default Navbar;
