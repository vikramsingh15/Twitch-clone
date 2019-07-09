import React from "react";


class GoogleAuth extends React.Component{
	componentDidMount(){
		window.gapi.load('client:auth2',()=>{
			window.gapi.client.init({
				clientId:"648468102916-qavo46otsql53vnr29pekm4bul5rsqea.apps.googleusercontent.com",
				scope:"email"
				
			})
		})
	}

	render(){
		return <div>GoogleAuth</div>
	}


} 

export default GoogleAuth;