// suatu aksi yang dibuat untuk redux
import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';

// action login
export const actionUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({type: 'CHANGE_USER', value: 'imam abdul'})
    }, 2000)   
}

const auth = getAuth();
export const registerUserAPI = (data) => (dispatch) => {
    /// merubah isLoading di index.js/action menjadi true
    dispatch({type: 'CHANGE_LOADING', value: true})
    return (
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            dispatch({type: 'CHANGE_LOADING', value: false})
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
            dispatch({type: 'CHANGE_LOADING', value: false})
        })
    )
}