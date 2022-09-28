import React, { Component } from "react";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Youtube Component</h1>
        <hr />
        <YoutubeComp time="7.12" title="Tutorial React JS - Bagian 1" desc="200k ditonton. 28 hari yang lalu" />
        <YoutubeComp time="8.52" title="Tutorial React JS - Bagian 2" desc="20M ditonton. 5 hari yang lalu" />
        <YoutubeComp time="12.12" title="Tutorial React JS - Bagian 3" desc="20k ditonton. 3jam yang lalu" />
        <YoutubeComp time="6.10" title="Tutorial React JS - Bagian 4" desc="25k ditonton. 20 hari yang lalu" />
        <YoutubeComp />
      </div>
    );
  }
}

export default Home;
