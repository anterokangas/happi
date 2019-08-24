import {
	GET_SHOPPINGLIST_SUCCESS,
	GET_SHOPPINGLIST_FAILED,
	ADD_TO_LIST_SUCCESS,
	ADD_TO_LIST_FAILED,
	REMOVE_FROM_LIST_SUCCESS,
	REMOVE_FROM_LIST_FAILED,
	EDIT_ITEM_SUCCESS,
	EDIT_ITEM_FAILED,
	LOGOUT_DONE,
	SAVE_HAPPENINGS_SUCCESS,
	SAVE_HAPPENINGS_FAILED,
	GET_HAPPENING_LIST_SUCCESS,
	GET_HAPPENING_LIST_FAILED,
	GET_HAPPENING_SUCCESS,
	GET_HAPPENING_FAILED,
} from '../actions/happeningActions';

const HAPPENINGSTATE = "happeningstate";

const getInitialState = () => {
	if(sessionStorage.getItem(HAPPENINGSTATE)) {
		let state = JSON.parse(sessionStorage.getItem(HAPPENINGSTATE))
		return state;
	} else {
		return {
			list: [],
			happeningList: [
				{
					"": {
						"title": "Valitse tapahtuma",
						"activated": true,
						"description": ""
					},
				},
			],
			error: "",
		}
	}
}

const saveToStorage = (state) => {
	sessionStorage.setItem(HAPPENINGSTATE, JSON.stringify(state));
}

const initialState = getInitialState();

const happeningReducer = (state = initialState, action) => {
	console.log("happeningReducer: state=")
	console.log(state)
	console.log("happeningReducer: action=")
	console.log(action)
	let tempState = {};
	switch(action.type) {
		case GET_SHOPPINGLIST_SUCCESS: 
			tempState = {
				...state,
				error: "",
				list: action.list
			}
			saveToStorage(tempState);
			return tempState;

		case GET_SHOPPINGLIST_FAILED: 
			tempState = {
				...state,
				error: action.error
			}
			saveToStorage(tempState);
			return tempState;	

		case ADD_TO_LIST_SUCCESS: 
			tempState = {
				...state,
				error: ""
			}
			saveToStorage(tempState);		
			return tempState;

		case ADD_TO_LIST_FAILED: 
			tempState = {
				...state,
				error: action.error
			}
			saveToStorage(tempState);		
			return tempState;

		case REMOVE_FROM_LIST_SUCCESS: 
			tempState = {
				...state,
				error: ""
			}
			saveToStorage(tempState);		
			return tempState;

		case REMOVE_FROM_LIST_FAILED: 
			tempState = {
				...state,
				error: action.error
			}
			saveToStorage(tempState);		
			return tempState;

		case EDIT_ITEM_SUCCESS: 
			tempState = {
				...state,
				error: ""
			}
			saveToStorage(tempState);		
			return tempState;

		case EDIT_ITEM_FAILED: 
			tempState = {
				...state,
				error: action.error
			}
			saveToStorage(tempState);		
			return tempState;
			
		case LOGOUT_DONE: 
			tempState = {
				...state,
				list: [],
				error: ""
			}
			saveToStorage(tempState);		
			return tempState;	
			
			
		case SAVE_HAPPENINGS_SUCCESS: 
			tempState = {
				...state,
				error: ""
			}
			saveToStorage(tempState);		
			return tempState;

		case SAVE_HAPPENINGS_FAILED: 
			tempState = {
				...state,
				error: action.error
			}
			saveToStorage(tempState);		
			return tempState;
				
		case GET_HAPPENING_LIST_SUCCESS: 
		tempState = {
			...state,
			happeningList: action.happeningList,
			error: ""
		} 
		saveToStorage(tempState);		
		return tempState;

		case GET_HAPPENING_LIST_FAILED: 
			tempState = {
				...state,
				error: action.error
			}
			saveToStorage(tempState);		
			return tempState;

		case GET_HAPPENING_SUCCESS: 
			tempState = {
				...state,
				happening: action.happening,
				error: ""
			}
			saveToStorage(tempState);		
			return tempState;

		case GET_HAPPENING_FAILED: 
			tempState = {
				...state,
				error: action.error
			}
			saveToStorage(tempState);		
			return tempState;

		default: 
			return state;
	}
}

export default happeningReducer;