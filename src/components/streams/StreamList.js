import React from "react";
import {connect} from "react-redux";
import {indexStream} from "../../actions";
import {Link} from 'react-router-dom';

class StreamIndex extends React.Component{
	componentDidMount() {
	    this.props.indexStream();
	  }

	renderAdmin({userId,id}){
		if(this.props.curentUserId===userId){
			return <div className="right floated content">
						<Link className="ui button primary" to={`/streams/edit/${id}`}>
							Edit
						</Link>
						<Link className="ui button negative">
							Delete
						</Link>
			</div>
		}
	}  

	renderList=()=>{
		return this.props.streams.map(stream=>{
				return <div className="item" key={stream.id}>
							{this.renderAdmin(stream)}
							<i className="large middle aligned icon camera" />
							
							<div className="content">
								{stream.title}
							<div className="description">{stream.description}</div>
							</div>
						</div>
		})
	} 


	render(){
		return <div className="ui huge celled list">{this.renderList()}</div>
	}


}

const mapStateToProps=(state)=>{
	return {streams:Object.values(state.streams),
		curentUserId:state.auth.userId}
}

export default connect(mapStateToProps,{indexStream})(StreamIndex);