import React, { Component } from "react";
import { connect } from "react-redux";
// import { actionUserName } from '../../../config/redux/action';
import Button from "../../../components/atoms/Button";
import { loginUserAPI } from "../../../config/redux/action";

class Login extends Component {
  // changeUser = () => {
  //     this.props.changeUserName()
  // }

  state = {
    email: "",
    password: "",
    // isLoading: false
  };

  handleChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleLoginSubmit = async () => {
    const { email, password } = this.state;
    // agar jalan ke dasboard
    const { history } = this.props;
    // bentuk function async await untuk memberi error dan login  
    const res = await this.props.loginAPI({ email, password }).catch(err => err);
    if (res) {
      console.log("login success", res);
      /// dirubah ke string karena localObject bagusnya string terhubung ke didmount Dashboard
      localStorage.setItem('userData', JSON.stringify(res) )
      this.setState({
        email: "",
        password: "",
      });
      history.push("/")
    } else {
      console.log("Login Failed");
    }
  };

  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h1 className="auth-title">Login</h1>
          <input className="input" id="email" placeholder="Email" type="text" onChange={this.handleChangeText} value={this.state.email}></input>
          <input className="input" id="password" placeholder="Password" type="password" onChange={this.handleChangeText} value={this.state.password}></input>
          {/* <button className='btn' onClick={this.handleRegisterSubmit}>Register</button> */}
          <Button onClick={this.handleLoginSubmit} title="Login" loading={this.props.isLoading} />
        </div>
      </div>
    );
  }
}

const reduxState = (state) => ({
  isLoading: state.isLoading,
});

const reduxDispatch = (dispatch) => ({
  loginAPI: (data) => dispatch(loginUserAPI(data)),
});

export default connect(reduxState, reduxDispatch)(Login);
