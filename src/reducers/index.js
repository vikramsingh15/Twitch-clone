import {combineReducers} from "redux";
import authReducer from "./auth";
import streamReducer from "./streams";
import {reducer} from "redux-form";



export default combineReducers({
	auth:authReducer,
	form:reducer,
	streams:streamReducer
});