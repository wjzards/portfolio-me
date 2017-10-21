import React from "react";
import Profile from "./Container/Profile/Profile";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Container/Portfolio/Portfolio";
import Waypoint from "react-waypoint";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      main: true,
      onShow: true
    }
  }

  onEnter = ({ previousPosition }) => {
    if(previousPosition === Waypoint.below){
      this.setState({
        main: false
      })
    }
  }

  onLeave = ({ currentPosition  }) => {
    if(currentPosition  === 'below'){
      this.setState({
        main: true
      })
    }
  }

  handleShow = (data) => {
    this.setState({
      onShow: data
    })
  }



  render() {
    return (
      <div>
        <Navbar main={this.state.main} handleShow={this.handleShow.bind(this)}/>
        <Profile />
        <Waypoint bottomOffset={700} onLeave={this.onLeave.bind(this)} onEnter={this.onEnter.bind(this)}>
        </Waypoint>
        <Portfolio main={this.state.onShow} />
      </div>
    );
  }
}

export default App;
