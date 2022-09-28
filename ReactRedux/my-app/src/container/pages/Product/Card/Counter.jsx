import React, { Component } from "react";
import { connect } from "react-redux";
import ActionType from "../../../../redux/reducer/globalActionType";

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

  /// mengunakan arrow function
  /// mengunakan dispatch bawah
  // handlePlus = () => {
  //   this.setState(
  //     {
  //       order: this.state.order + 1,
  //     },
  //     () => {
  //       this.handleCounterChange(this.state.order);
  //     }
  //     // ditangkap dikirim ke atas untuk perubahan
  //   );
  // };

  // handleMinus = () => {
  //   if (this.state.order > 0) {
  //     this.setState(
  //       {
  //         order: this.state.order - 1,
  //       },
  //       () => {
  //         this.handleCounterChange(this.state.order);
  //       }
  //     );
  //   }
  // };
  render() {
    console.log(this.props);
    return (
      <div className="counter">
        <button className="minus" onClick={this.props.handleMinus}>
          -
        </button>
        <input type="text" value={this.props.order} />
        <button className="plus" onClick={this.props.handlePlus}>
          +
        </button>
      </div>
    );
  }
}

/// 3. dispatching
// state order  global yang terhunung ke index.js store{getState()}
const mapStateToProps = (state) => {
  return {
    order: state.totalOrder,
  };
};

// untuk mengirimkan data
/// dipatchnya
const mapDispatchToProps = (dispatch) => {
  return {
    handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
    handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
  };
};

/// 4. Subcrabtion
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
