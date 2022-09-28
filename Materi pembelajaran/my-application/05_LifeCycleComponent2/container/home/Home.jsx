import React, { Component } from "react";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";

class Home extends Component {
  state = {
    showComponent: true,
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     showComponent: false,
    //   });
    // }, 10000);
  }
  render() {
    return (
      <div>
        <h1>Life CycleComp</h1>
        <hr />
        {this.state.showComponent ? <LifeCycleComp /> : null}
      </div>
    );
  }
}

export default Home;
