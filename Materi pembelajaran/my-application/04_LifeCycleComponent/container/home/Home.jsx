import React, { Component } from "react";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
// import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
// import Product from "../Product/Product";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Lifecycle Component</h1>
        <hr />
        <LifeCycleComp />
      </div>
    );
  }
}

export default Home;
