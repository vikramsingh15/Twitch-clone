import React from "react";


class GoogleAuth extends React.Component{

	state={isSignedIn:null,text:null}

	componentDidMount(){
		window.gapi.load('client:auth2',()=>{
			window.gapi.client.init({
				clientId:"648468102916-qavo46otsql53vnr29pekm4bul5rsqea.apps.googleusercontent.com",
				scope:"email"
				
			}).then(()=>{
				this.auth=window.gapi.auth2.getAuthInstance();
				this.setState({isSignedIn:this.auth.isSignedIn.get()})
			});
		
		});
	}

	renderAuthButton(){
		if(this.state.isSignedIn===null){
			return <div>Loading...</div>
		}else if(this.state.isSignedIn){
			return <div>{this.setState({text:"signed in"})}</div>
		}else{
			return <div>{this.setState({text:"not signed in"})}</div>
		}
	}

	render(){
		return <div>{this.renderAuthButton()}</div>
	}


} 

export default GoogleAuth;