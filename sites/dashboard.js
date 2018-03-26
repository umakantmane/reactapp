import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class DashBoard extends Component{

	constructor(props){
		super(props);
            this.state = {
            	errors:{},
                isAuth:localStorage.getItem('access_token'),
                username:localStorage.getItem('username'),
                isLogin:localStorage.getItem('isLogin'),
                redirectTo:false
            };
        if(this.state.isLogin)
           localStorage.removeItem('isLogin');
	}
	componentDidMount(){
		if(this.state.isLogin) {
			location.reload();
		}
	}
	render(){
		if(!this.state.isAuth) return <Redirect to='/login'  />;
		return(<h2>welcome:{this.state.username}</h2>);
	}

}

export default DashBoard