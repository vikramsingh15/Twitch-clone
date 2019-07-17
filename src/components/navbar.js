import React from "react";
import {Link} from "react-router-dom";
import GoogleAuth from "./GoogleAuth";
import {connect} from "react-redux"


const Navbar=(props)=>{

	const createStream=()=>{
		if(props.isSignedIn){
			return <Link to="/streams/new">newStream</Link>
		}

	}

	return (
		<div className="ui teal segment">
			<div className="ui teal secondary menu">
				<Link className="active item" to="/">Streams</Link>
				

				<div className="right menu">
						<div className="ui item">{createStream()}</div>
						<div className="ui item">
							<GoogleAuth />
						</div>
						
				</div>
			</div>


		</div>
				)
}

const mapStateToProps=(state)=>{
	return {isSignedIn:state.auth.isSignedIn}
}

export default connect(mapStateToProps)(Navbar);