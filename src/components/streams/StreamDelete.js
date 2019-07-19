import React from "react";
import Modal from '../Modal';
import history from '../../history'
import {showStream,deleteStream} from '../../actions';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

class StreamDelete extends React.Component{
	componentDidMount(){
		this.props.showStream(this.props.match.params.id);
	}

	renderAction(){
		const {id}=this.props.match.params;

		return <React.Fragment>
					<button className="ui negative button" 
					onClick={()=>this.props.deleteStream(id)}>Delete</button>
					<Link className="ui primary button" to="/">Cancel</Link>
			   </React.Fragment>
	}


	renderContent(){
		if(this.props.stream){
			return `Are you sure you wanna delete stream with title ${this.props.stream.title}`

		}

		return <div>Are you sure wanna delete this stream ?</div>
	}

	
	render(){			
				
			return	<Modal content={this.renderContent()} 
					action={this.renderAction()} 
					title="Delete stream"
					onDismiss={()=>history.push('/')}/>
					
	}
}

const mapStateToProps=(state,ownProps)=>{

	return {stream:state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,
	{showStream,deleteStream})(StreamDelete);