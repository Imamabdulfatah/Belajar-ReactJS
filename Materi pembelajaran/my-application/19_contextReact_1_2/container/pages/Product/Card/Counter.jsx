import React, { Component } from "react";
// import { connect } from "react-redux";
// import ActionType from "../../../../redux/reducer/globalActionType";

/// ini dari home   stateGlobal
import { RootContext } from "../../../home/Home";
// import { GlobalConsumer } from "../../../../context/context";

class Counter extends Component {
  render() {
    console.log(this);
    return (
      // <div className="counter">
      //   <button className="minus" onClick={() => this.props.dispatch({ type: "MINUS_ORDER" })}>
      //     -
      //   </button>
      //   <input type="text" value={this.props.state.totalOrder} />
      //   <button className="plus" onClick={() => this.props.dispatch({ type: "PLUS_ORDER" })}>
      //     +
      //   </button>
      // </div>

      <RootContext.Consumer>
        {(value) => {
          return (
            <div className="counter">
              <button className="minus" onClick={() => value.dispatch({ type: "MINUS_ORDER" })}>
                -
              </button>
              <input type="text" value={value.state.totalOrder} />
              <button className="plus" onClick={() => value.dispatch({ type: "PLUS_ORDER" })}>
                +
              </button>
            </div>
          );
        }}
      </RootContext.Consumer>
    );
  }
}

/// 3. dispatching
// state order  global yang terhunung ke index.js store{getState()}
// const mapStateToProps = (state) => {
//   return {
//     order: state.totalOrder,
//   };
// };

/// dipatchnya
// const mapDispatchToProps = (dispatch) => {
//   return {
//     handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
//     handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
//   };
// };

/// 4. Subcrabtion
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);

/// punya context
// export default GlobalConsumer(Counter);
export default Counter;
