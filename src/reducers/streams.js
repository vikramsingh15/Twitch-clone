import _ from "lodash"
const Streams=(state={},action)=>{
	switch(action.type){
		case 'CREATE_STREAM':
			  return {...state,[action.payload.id]:action.payload}	

		case 'SHOW_STREAM':
			  return 		

		case 'EDIT_STREAM':
			  return {...state,[action.payload.id]:action.payload}

		case 'DELETE_STREAM':
			  return _.omit(...state,action.payload);

		case 'INDEX_STREAM':
		
			  return {...state,..._.mapKeys(action.payload,'id')}		

		default: 
				return state;

	}
}

export default Streams;