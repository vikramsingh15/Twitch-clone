import React from "react";
import {Link} from "react-router-dom";
import GoogleAuth from "./GoogleAuth";


const Navbar=()=>{
	return (
		<div className="ui teal segment">
			<div className="ui teal secondary menu">
				<Link className="active item" to="/">Streammy</Link>
				<div className="right menu">
						<Link className="ui item" to="/">
							All Streams	
						</Link>
						<div className="ui item">
							<GoogleAuth />
						</div>
						
				</div>
			</div>


		</div>
				)
}

export default Navbar;