import React, {Component} from 'react';
// import { getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {connect} from 'react-redux';

/// jika mau mengunakan sass {npm install node-sass}
import './Register.scss'
import Button from '../../../components/atoms/Button';
import { registerUserAPI } from '../../../config/redux/action';

// const auth = getAuth();
class Register extends Component {

    state = {
        email: '',
        password: '',
        // isLoading: false
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id] : e.target.value,
        })
    }

    handleRegisterSubmit = () => {
    const {email, password} = this.state;
    console.log('data before send: ', email, password)
    /// yang dikirim dibawah dispatch
    // this.props.registerAPI({email: email, password: password})
    /// versi singkat
    this.props.registerAPI({email, password})

    // const auth = getAuth();
    // createUserWithEmailAndPassword(auth, data.email, data.password)
    // .then((userCredential) => {
    //     // Signed in 
    //     const user = userCredential.user;
    //     console.log(user)
    // })
    // .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode, errorMessage)
    // })

    }

    render() {
        return (
            <div className='auth-container'>
                <div className='auth-card'>
                    <h1 className='auth-title'>Register</h1>
                    <input className='input' id='email' placeholder='Email' type="text" onChange={this.handleChangeText}></input>
                    <input className='input' id='password' placeholder='Password' type="password" onChange={this.handleChangeText}></input>
                    {/* <button className='btn' onClick={this.handleRegisterSubmit}>Register</button> */}
                    <Button onClick={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading}/>
                </div>
                {/* <button>Go to Dashboard</button> */}
            </div>
        );
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})


export default connect(reduxState, reduxDispatch)(Register);
