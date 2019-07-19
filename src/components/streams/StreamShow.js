import React from "react";
import {showStream} from '../../actions';
import {connect} from 'react-redux';



class StreamShow extends React.Component{

	componentDidMount(){
		this.props.showStream(this.props.match.params.id);
	}
	
	renderContent(){
		const { stream }=this.props;

		if(stream){
			return <div>{stream.title}</div>
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

export default connect(mapStateToProps,{showStream})(StreamShow);