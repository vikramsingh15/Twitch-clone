import React from "react";
import  StreamForm from "./streamForm";
import {createStream} from "../../actions";
import {connect} from "react-redux";


class StreamCreate extends React.Component{

	submit=formValues=>{  //data from form rendered here
		this.props.createStream(formValues);
	}

	render(){
		return	<StreamForm onSubmit={this.submit}/>
	}
}

export default connect(null,{
	createStream
})(StreamCreate);