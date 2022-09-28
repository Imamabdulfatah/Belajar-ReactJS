// suatu aksi yang dibuat untuk redux
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// action login
export const actionUserName = () => (dispatch) => {
  setTimeout(() => {
    return dispatch({ type: "CHANGE_USER", value: "imam abdul" });
  }, 2000);
};

export const registerUserAPI = (data) => (dispatch) => {
  /// merubah isLoading di index.js/action menjadi true
  const auth = getAuth();
  dispatch({ type: "CHANGE_LOADING", value: true });
  return createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      dispatch({ type: "CHANGE_LOADING", value: false });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      dispatch({ type: "CHANGE_LOADING", value: false });
    });
};

export const loginUserAPI = (data) => (dispatch) => {
  // Promise digunakan untuk melakukan accept atau rejectnya untuk memberi respone serta memberi experience
  // dan juga sebelum digunakan untuk memberi async await
  return new Promise((resolve, reject) => {
    const auth = getAuth();
    dispatch({ type: "CHANGE_LOADING", value: true });
    // digunkana login firebase
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("success: ", user);
        const dataUser = {
          email: user.email,
          uid: user.uid,
          emailVerified: user.emailVerified,
        };
        dispatch({ type: "CHANGE_LOADING", value: false });
        dispatch({ type: "CHANGE_ISLOGIN", value: true });
        dispatch({ type: "CHANGE_USER", value: dataUser });
        resolve(true);
      })
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        dispatch({ type: "CHANGE_LOADING", value: false });
        dispatch({ type: "CHANGE_ISLOGIN", value: false });
        reject(false);
      });
  });
  /// merubah isLoading di index.js/action menjadi true
};
