import React, { Component, createContext } from "react";

// context react
//// High Order Provider
/// 1. Untuk Provider
// untuk menyimpan state global
const RootContext = createContext();

// provider sebagai penampung
const Provider = RootContext.Provider;
const GlobalProvider = (Children) => {
  return (
    class ParentComp extends Component {
      state = {
        totalOrder: 5,
      };

      dispatch = (action) => {
        if (action.type === 'PLUS_ORDER') {
          return this.setState({
            totalOrder: this.state.totalOrder + 1,
          });
        }
        if (action.type === 'MINUS_ORDER') {
          return this.setState({
            totalOrder: this.state.totalOrder - 1,
          });
        }
      };
      render() {
        return (
          <Provider value={
              {
                state: this.state,
                dispatch: this.dispatch,
              }
            }>
              {/* agar terpangil semua propsnya dari home kesini */}
            <Children {...this.props} />
          </Provider>
        )
      }
    }
  )
}

export default GlobalProvider;

///// high order consumer
/// 2. Untuk Consumer
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
  return (
      class ParentConsumer extends Component {
        render() {  
          return (
            <Consumer>
              {
                value => {
                  return (
                    <Children {...this.props} {...value} />
                  )
                }
              }
            </Consumer>
          );
        }
    }
  )
}
 
