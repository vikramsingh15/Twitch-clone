import React from "react";
import {Link} from "react-router-dom";


const Navbar=()=>{
	return (
		<div className="ui inverted segment">
			<div className="ui inverted secondary menu">
				<Link className="active item" to="/">Streammy</Link>
				<div className="right menu">
						<Link className="ui item" to="/">
							All Streams	
						</Link>
				</div>
			</div>


		</div>
				)
}

export default Navbar;