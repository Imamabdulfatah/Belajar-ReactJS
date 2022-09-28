import React, { Component } from "react";
import "./LifeCycleComp.css";

/// https://reactjs.org/docs/state-and-lifecycle.html

class LifeCycleComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };
    console.log("constructor");
  }

  // component life cycle
  // cek semua dengan console.log di constructor juga dan lainya
  // getDerivedStateFromProps  diberi return null;

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
    // setTimeout untuk menjeda selama 4 detik
    // setTimeout(() => {
    //   this.setState({
    //     count: 2,
    //   });
    // }, 5000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    /// membuat grup console untuk melihat cara kerjanya
    console.group("shouldComponentUpdate");
    // console.log("prevProps", this.props);
    console.log("nextProps", nextProps);
    console.log("this state", this.state);
    console.groupEnd();

    // jijka klik 4 kali maka berhenti
    if (nextState.count >= 4) {
      return false;
    }
    // return true jika ingin diupdate jika return false tidak diupdate
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  changeCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    console.log("render");
    return (
      <button className="btn" onClick={this.changeCount}>
        Component Button{this.state.count}
      </button>
    );
  }
}

export default LifeCycleComp;
