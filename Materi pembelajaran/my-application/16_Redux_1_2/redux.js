// memangil redux
const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
  value: 0,
  age: 17,
};

/// { node redux.js } digunakan untuk mengecek di console
// 2. Reducer
// hanya Reducer yang bisa mengupgrade state.
const rootReducer = (state = initialState, action) => {
  /// memakai if
  //   if (action.type === "ADD_AGE") {
  //     return {
  //       // state untuk membawa nilai yang lain seperti value: 0;
  //       ...state,
  //       age: state.age + 1,
  //     };
  //   }
  //   if (action.type === "CHANGE_VALUE") {
  //     return {
  //       ...state,
  //       value: state.value + action.newValue,
  //     };
  //   }

  switch (action.type) {
    case "ADD_AGE":
      return {
        ...state,
        age: state.age + 1,
      };
    case "CHANGE_VALUE":
      return {
        ...state,
        value: state.value + action.newValue,
      };
    default:
      return state;
  }
};

// 1. Store
// Store adalah wadah besar menyimpan state secara global.
// Store memiliki state yang dapat diubah oleh action.
const store = createStore(rootReducer);
console.log(store.getState());

// 4. Subracription
// pemangilan store yang kita perlukan/ butuhkan/ miliki.
store.subscribe(() => {
  console.log("store change", store.getState());
});

// 3. Dispatching Action
// pemanggilaan sebuah instruksi oleh reducer / harus dipangil dengan distpaching action
store.dispatch({ type: "ADD_AGE" });
store.dispatch({ type: "CHANGE_VALUE", newValue: 12 });
console.log(store.getState());
