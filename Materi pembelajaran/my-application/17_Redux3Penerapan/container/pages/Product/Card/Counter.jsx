import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  // untuk menyamakan data count dan counter
  // ini tidak berfungsi karena state global
  // state = {
  //   order: 4,
  //   name: "Udin",
  // };
  /// untuk perubahan
  handleCounterChange = (newValue) => {
    this.props.onCounterChange(newValue);
  };

  // mengunakan arrow function
  handlePlus = () => {
    this.setState(
      {
        order: this.state.order + 1,
      },
      () => {
        this.handleCounterChange(this.state.order);
      }
      // ditangkap dikirim ke atas untuk perubahan
    );
  };

  handleMinus = () => {
    if (this.state.order > 0) {
      this.setState(
        {
          order: this.state.order - 1,
        },
        () => {
          this.handleCounterChange(this.state.order);
        }
      );
    }
  };
  render() {
    console.log(this.props);
    return (
      <div className="counter">
        <button className="minus" onClick={this.handleMinus}>
          -
        </button>
        <input type="text" value={this.props.order} />
        <button className="plus" onClick={this.handlePlus}>
          +
        </button>
      </div>
    );
  }
}

// state order  global yang terhunung ke index.js store
const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};
export default connect(mapStateToProps)(Counter);
