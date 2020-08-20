import React, { Component } from 'react'
import { Result, Button } from 'antd';
import { connect } from "react-redux";
import {logoutUser} from "../Redux/Actions/UsersAction"
import '../Assets/styles/Profile.css'


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          currentUser :{}, 
          title:""
        };
    }
    componentDidMount(){
        this.setState({
            currentUser: this.props.auth.currentUser,
            title: `Welcom back ${this.props.auth.currentUser.email} !` 
        })

     
    }
    handleLogOut= ()=>{
        this.props.logoutUser(); 
    }
    render() {
        const {title} = this.state
        return (
            <div className="profile_page">
                <div className="profile_info_wrapper">
                <Result
                    status="success"
                    title={title}
                    subTitle="JWT token is stored in localstorage"
                    extra={
                        <Button type="primary" danger onClick ={this.handleLogOut}>
                         Logout
                        </Button>
                    }
                />
                </div>
               
            </div>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.users
});
const mapDispatchToProps = (dispatch) => {
    return {
        logoutUser: () => dispatch(logoutUser()),
    }
}

const ProfileWrapper = connect(mapStateToProps,mapDispatchToProps)(Profile);

export default ProfileWrapper;