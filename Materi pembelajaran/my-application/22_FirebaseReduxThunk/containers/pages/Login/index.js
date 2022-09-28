import React, {Component} from 'react';
import {connect} from 'react-redux';
import { actionUserName } from '../../../config/redux/action';

class Login extends Component {
    changeUser = () => {
        this.props.changeUserName()
    }

    render() {
        return (
            <div>
                <h1>Login {this.props.userName}</h1>
                <button onClick={this.changeUser}>Change User Name</button>
                <button>Go to Dashboard</button>
            </div>
        );
    }
}

// const actionUserName = () => {
//     return (dispatch) => {
//         setTimeout(() => {
//             return dispatch({type: 'CHANGE_USER', value: 'imam abdul'})
//         }, 2000)
//     }
// }
// Sama saja seperti yang diatas



const reduxState = (state) =>  ({
    popupProps : state.popup,
    userName : state.user
})

/// perubahan ketika diklik atau merubah reducer
const reduxDispatch = (dispatch) => ({
    changeUserName: () => dispatch(actionUserName())
})

export default connect(reduxState, reduxDispatch)(Login);
