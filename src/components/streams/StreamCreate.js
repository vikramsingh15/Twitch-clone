import React from "react";
import {Field,reduxForm} from "redux-form";
import {createStream} from "../../actions";
import {connect} from "react-redux";


class StreamCreate extends React.Component{

// onchange and value automatically assign from input convert into controlled form (value=input.value and onChange=input.onChange)

	renderError=({touched,error})=>{
		if (touched&&error) {
			return <div className="ui red message " style={{'marginTop':3}}>{error}</div>
		}


	}	

	renderField=({input,label,meta})=>{
		const className= `field ${meta.error&&meta.touched?'error':''}`;
		
		return <div className={className}>
			<label>{label}</label>
			<input type="text"  {...input} placeholder={label}/>
			<div>{this.renderError(meta)}</div>
		</div>
		
	}

	onSubmit=formValues=>{  //data from form rendered here
		this.props.createStream(formValues);
	}

	render(){
		return	<form action="" className="ui container inverted segment" 
		onSubmit={this.props.handleSubmit(this.onSubmit)}>
					<div className="ui inverted form">
						<div className="one field">
							<Field component={this.renderField} label="Title" name="title"/>
						</div>
						<div className="one field">
							<Field component={this.renderField} label="Description" name="description"/>
						</div>	
						
						<button className="ui submit button">Submit</button>
				
					</div>
					
				</form>
	}
}

const validate = formValues=>{
	const error={}
	if(!formValues.title){
		error.title="title required !!"
	}else if(!formValues.description){
		error.description="description required  !!"
	}

	return error
}

const streamForm = reduxForm({
					form:"createStream",
					validate
				})(StreamCreate);


/*various helper this.props added due to redux form automatically*/

export default connect(null,{
	createStream
})(streamForm);