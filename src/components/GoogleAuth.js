import React from "react";
import {connect} from "react-redux";
import {signIn,signOut} from "../actions";


class GoogleAuth extends React.Component{
	componentDidMount(){
		window.gapi.load('client:auth2',()=>{
			window.gapi.client.init({
				clientId:"648468102916-qavo46otsql53vnr29pekm4bul5rsqea.apps.googleusercontent.com",
				scope:"email"
				
			}).then(()=>{
				this.auth=window.gapi.auth2.getAuthInstance();

				this.listener(this.auth.isSignedIn.get())
				this.auth.isSignedIn.listen(this.listener); //this listens for change in sign in and sign out
			});
		
		});
	}

	listener=(isSignedIn)=>{
		if(isSignedIn){
			this.props.signIn(this.auth.currentUser.get().getId());
		}else{
			this.props.signOut();
		}

	}


	onSignInClick=()=>{
		this.auth.signIn();
		
	}

	onSignOutClick=()=>{
		this.auth.signOut();
		
	}

	renderAuthButton(){
		if(this.props.isSignedIn===null){
			return null
		}else if(this.props.isSignedIn){
			return <div className="ui red google button" onClick={this.onSignOutClick}>
			<i className="google icon"/>
				Sign-out	
			</div>
		}else{
			return  <div className="ui red google button" onClick={this.onSignInClick}>
			<i className="google icon" />
					Sign-in
			</div>
		}
	}

	render(){
		return <div>{this.renderAuthButton()}</div>
	}


} 


const mapStateToProps=state=>{
	return ({isSignedIn:state.auth.isSignedIn})
	
}

export default connect(mapStateToProps,{signIn,signOut})(GoogleAuth);