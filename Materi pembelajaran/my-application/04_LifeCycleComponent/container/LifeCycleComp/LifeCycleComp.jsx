import React, { Component } from "react";
import "./LifeCycleComp.css";

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
    setTimeout(() => {
      this.setState({
        count: 2,
      });
    }, 4000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
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

  render() {
    console.log("render");
    return <button className="btn">Component Button{this.state.count}</button>;
  }
}

export default LifeCycleComp;
