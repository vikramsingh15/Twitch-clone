const INIT_STATE={
		isSignedIn:null,
		userId:null
}


const auth=(state=INIT_STATE,action)=>{
	switch(action.type){
		case 'SIGN_IN':
			return {...state,isSignedIn:true,userId:action.payload};
		case 'SIGN_OUT':
			return {...state,isSignedIn:false,userId:action.payload};
		default:
			return state;
	}
}


export default auth;