import Streams from "../api/Stream";
import history from '../history';


export const signIn=(userId)=>({type:"SIGN_IN",payload:userId});

export const signOut=()=>({type:"SIGN_OUT",payload:null});
export const createStream=formValue=>async (dispatch,getState)=>{

	const {userId}=getState().auth;
	const response=await Streams.post("/streams",{...formValue,userId});
	dispatch({type:"CREATE_STREAM",payload:response.data});
	history.push('/');
}

export const indexStream=()=>async dispatch=>{
	const response=await Streams.get("/streams");
	dispatch({type:"INDEX_STREAM",payload:response.data});  //will show array
}

export const showStream =id=>async dispatch=>{
	const response=await Streams.get(`/streams/${id}`);
	dispatch({type:"SHOW_STREAM",payload:response.data});
}

export const editStream = (id,formValue) =>async dispatch=>{
	const response = await Streams.patch(`/streams/${id}`,formValue);
	dispatch({type:"EDIT_STREAM",payload:response.data});
	history.push('/');
}

export const deleteStream=id=>async dispatch=>{
	await Streams.delete(`/streams/${id}`);
	dispatch({type:"DELETE_STREAM",payload:id});
	history.push('/');
}