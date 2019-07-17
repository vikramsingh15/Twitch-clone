import React from "react";
import {connect} from 'react-redux';
import {showStream} from '../../actions';

class StreamEdit extends React.Component{
componentDidMount(){
		this.props.showStream(this.props.match.params.id);
	}

	renderContent(){
		if(this.props.stream){
			return <div>{this.props.stream.title}</div>
		}else{
			return <div></div>
		}
	}

	render(){

		return <div>{this.renderContent()}</div>
		}
	}



const mapStateToProps=(state,ownProps)=>{


	return {stream:state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{showStream})(StreamEdit);