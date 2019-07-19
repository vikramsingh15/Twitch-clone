import React from "react";
import {connect} from 'react-redux';
import {showStream,editStream} from '../../actions';
import StreamForm from './streamForm';

class StreamEdit extends React.Component{
	componentDidMount(){
		this.props.showStream(this.props.match.params.id);
	}

	submit=(formValues)=>{
			this.props.editStream(this.props.match.params.id,formValues)
	}

	renderContent(){
		
		if(this.props.stream){
			const {title,description}=this.props.stream;
			return <div><StreamForm initialValues={{title,description}} onSubmit={this.submit}/></div>
		}else{
			return <div></div>
		}
	}

	render(){

		return <div>
					<h3>Edit stream</h3>
					{this.renderContent()}
			</div>
		}
	}



const mapStateToProps=(state,ownProps)=>{


	return {stream:state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{showStream,editStream})(StreamEdit);