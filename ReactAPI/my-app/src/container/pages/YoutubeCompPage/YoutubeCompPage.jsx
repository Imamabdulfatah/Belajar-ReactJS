import React, { Component, Fragment } from "react";
import YoutubeComp from "../../../component/YoutubeComp/YoutubeComp";

class YoutubeCompPage extends Component {
  render() {
    return (
      <Fragment>
        <p>Youtube component</p>
        <hr />
        <YoutubeComp time="7.12" title="Tutotrial React JS - Bagian 1" desc="200x ditonton. 2hari yang lalu" />
        <YoutubeComp time="8.02" title="Tutotrial React JS - Bagian 2" desc="20x ditonton. 2hari yang lalu" />
        <YoutubeComp time="5.04" title="Tutotrial React JS - Bagian 3" desc="2.500x ditonton. 2hari yang lalu" />
        <YoutubeComp time="6.45" title="Tutotrial React JS - Bagian 4" desc="2.800x ditonton. 2hari yang lalu" />
        <YoutubeComp time="7.98" title="Tutotrial React JS - Bagian 5" desc="2.400x ditonton. 2hari yang lalu" />
      </Fragment>
    );
  }
}

export default YoutubeCompPage;
