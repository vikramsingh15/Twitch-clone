import React from "react";


class GoogleAuth extends React.Component{

	state={isSignedIn:null}

	componentDidMount(){
		window.gapi.load('client:auth2',()=>{
			window.gapi.client.init({
				clientId:"648468102916-qavo46otsql53vnr29pekm4bul5rsqea.apps.googleusercontent.com",
				scope:"email"
				
			}).then(()=>{
				this.auth=window.gapi.auth2.getAuthInstance();
				this.setState({isSignedIn:this.auth.isSignedIn.get()})
				this.auth.isSignedIn.listen(this.listener); //this listens for change in sign in and sign out
			});
		
		});
	}

	listener=()=>{
			this.setState({isSignedIn:this.auth.isSignedIn.get()});
	}

	renderAuthButton(){
		if(this.state.isSignedIn===null){
			return null
		}else if(this.state.isSignedIn){
			return <div className="ui white google button" onClick={()=>this.auth.signOut()}>
			<i className="google icon"/>
				Sign-out	
			</div>
		}else{
			return  <div className="ui red google button" onClick={()=>this.auth.signIn()}>
			<i className="google icon" />
					Sign-in
			</div>
		}
	}

	render(){
		return <div>{this.renderAuthButton()}</div>
	}


} 

export default GoogleAuth;