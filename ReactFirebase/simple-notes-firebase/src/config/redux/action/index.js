// suatu aksi yang dibuat untuk redux
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, push, onValue, set, remove} from "firebase/database";
// import { database } from "../../firebase";

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
        // console.log("success: ", user);
        const dataUser = {
          email: user.email,
          uid: user.uid,
          emailVerified: user.emailVerified,
          refreshToken: user.refreshToken
        };
        dispatch({ type: "CHANGE_LOADING", value: false });
        dispatch({ type: "CHANGE_ISLOGIN", value: true });
        dispatch({ type: "CHANGE_USER", value: dataUser });
        resolve(dataUser);
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

/// -https://firebase.google.com/docs/database/web/read-and-write?authuser=0#write_data
export const addDataToAPI = (data) => (dispatch) => {
  const db = getDatabase();
  push(ref(db, 'notes/' + data.userId), {
    title: data.title,
    content: data.content,
    date: data.date
  });
}

export const getDataFromAPI = (userId) => (dispatch) => {
  const db = getDatabase();
  const urlNotes = ref(db, 'notes/' + userId );
  return new Promise((resolve, reject) => {
    onValue(urlNotes, (snapshot) => {
      // const data = snapshot.val();
      // updateUrlNotes(postElement, data);
  
      // cara cek database
      console.log('get Data: ', snapshot.val())

      ///Merubah object ke array
      const data = [];
      Object.keys(snapshot.val()).map(key => {
        data.push({
          id: key,
          data: snapshot.val()[key]
        })
      });
      dispatch({type: 'SET_NOTES', value: data})
      resolve(snapshot.val())
    });
  })
}

export const updateDataFromAPI = (data) => (dispatch) => {
  const db = getDatabase();
  /// digunakan untuk mengambil spesifik data di databases
  // const urlNotes = ref(db, `notes/${data.userId}/${data.noteId}`);
  return new Promise((resolve, reject) => {
    set(ref(db, `notes/${data.userId}/${data.noteId}`), {
      title: data.title,
      content: data.content,
      date: data.date
    });

    // set(urlNotes, {
    //   title: data.title,
    //   content: data.content,
    //   date: data.date,
    // } , (err) => {
    //   if (err) {
    //     reject(false);
    //   }else {
    //     resolve(true)
    //   }
    // })
  })
}

export const deleteDataFromAPI = (data) => (dispatch) => {
  const db = getDatabase();
  /// digunakan untuk mengambil spesifik data di databases
  const urlNotes = ref(db, `notes/${data.userId}/${data.noteId}`);
  return new Promise((resolve, reject) => {
    remove(urlNotes);
  })
}