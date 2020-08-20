import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import {loginUser} from '../Redux/Actions/UsersAction'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "../Assets/styles/Login.css"

 class Login extends Component {

    componentDidMount() {
        // If the user is already Authenticated redirect user to the profile page
        if (this.props.auth.isAuthenticated) {this.props.history.push("/profile")};
    } 

    componentDidUpdate(prevProps, prevState) {
        // When auth props change that means, the user is login successfully so the user can redirect to the profile page  
        if (prevProps.auth !== this.props.auth) {this.props.history.push("/profile")} 
    }
    onFinish = value => {
       this.props.loginUser(value); 
    };
    render() {
        return (
       
            <div className="login_page">
            
              <div className="login_form_wrapper">
              <div  className="login_titel_wrapper" >
                <h4 className="login_titel"  >Welcome back! Please login to your account. </h4>
              </div>
              
              <Form
                onFinish={this.onFinish} 
                className="login_form"
              >
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
                className ="form_item"
              >
                <Input 
                size="large"
                className ="input_item"
                />
              </Form.Item>
              
    
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                className ="form_item"
              >
                <Input.Password 
                size="large" 
                className ="input_item"
                />
              </Form.Item>
            
    
            
              <Form.Item>
                <Button type="primary" htmlType="submit"  className ="button_item">
                  login
                </Button>
              </Form.Item>
            </Form>
            </div>
    
            </div>
         
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,  
};
const mapStateToProps = state => ({
    auth: state.users
});
const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: (value) => dispatch(loginUser(value)),
    }
}
const LoginWrapper = connect(mapStateToProps,mapDispatchToProps)(Login);

export default LoginWrapper;
