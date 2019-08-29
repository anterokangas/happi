import {fetchLoading,loadingDone} from './loginActions';

import {happenings} from '../javascript/dbData'

//SHOPPING ACTIONS 
export const GET_SHOPPINGLIST_SUCCESS = "GET_SHOPPINGLIST_SUCCESS"
export const GET_SHOPPINGLIST_FAILED = "GET_SHOPPINGLIST_FAILED"
export const ADD_TO_LIST_SUCCESS = "ADD_TO_LIST_SUCCESS"
export const ADD_TO_LIST_FAILED = "ADD_TO_LIST_FAILED"
export const REMOVE_FROM_LIST_SUCCESS = "REMOVE_FROM_LIST_SUCCESS"
export const REMOVE_FROM_LIST_FAILED = "REMOVE_FROM_LIST_FAILED"
export const EDIT_ITEM_SUCCESS = "EDIT_ITEM_SUCCESS"
export const EDIT_ITEM_FAILED = "EDIT_ITEM_FAILED"
export const LOGOUT_DONE = "LOGOUT_DONE"

export const SAVE_HAPPENINGS_SUCCESS = "SAVE_HAPPENINGS_SUCCESS"
export const SAVE_HAPPENINGS_FAILED = "SAVE_HAPPENINGS_FAILED"

export const SAVE_DETAILED_HAPPENINGS_SUCCESS = "SAVE_DETAILED_HAPPENINGS_SUCCESS"
export const SAVE_DETAILED_HAPPENINGS_FAILED = "SAVE_DETAILED_HAPPENINGS_FAILED"

export const GET_HAPPENING_LIST_SUCCESS = "GET_HAPPENING_LIST_SUCCESS"
export const GET_HAPPENING_LIST_FAILED = "GET_HAPPENING_LIST_FAILED"
export const GET_HAPPENING_SUCCESS = "GET_HAPPENING_SUCCESS"
export const GET_HAPPENING_FAILED = "GET_HAPPENING_FAILED"

//ACTIONS
export const getShoppingList = (token) => {
	console.log("getShoppingList")
	return dispatch => {
		let request = {
			  method: "GET",
			  mode: "cors",
			  credentials: "include",
			  headers: {"Content-Type": "application/json",
						"token": token}
		  }
		dispatch(fetchLoading());
		return fetch("/api/shopping",request).then(response => {
				dispatch(loadingDone());
				if(response.ok) {
					response.json().then(data => {
						dispatch(getShoppingListSuccess(data))
					}).catch(error => {
						dispatch(getShoppingListFailed("Error in parsing response json"));	
					});
				} else {
					dispatch(getShoppingListFailed("Server responded with status: "+response.statusText));

		  }}).catch(error => {
				dispatch(loadingDone());
				dispatch(getShoppingListFailed(error));
			});		
		}
}

export const addToList = (item,token,history) => {
	return dispatch => {
		 let request = {
			  method: "POST",
			  mode: "cors",
			  credentials: "include",
			  headers: {"Content-Type": "application/json",
						"token": token},
			  body: JSON.stringify(item)
		  }
		  dispatch(fetchLoading());
		  return fetch("/api/shopping",request).then(response => {
				if(response.ok) {
					dispatch(addToListSuccess());
					dispatch(getShoppingList(token));
					dispatch(getHappeningList());
					history.push("/list");
				} else {
					dispatch(addToListFailed("Server responded with status: "
					+response.statusText));
					dispatch(loadingDone());

				}
		  }).catch(error => {
				dispatch(addToListFailed(error));
				dispatch(loadingDone());
		  })
		
		}
}

export const removeFromList = (id,token) => {
	return dispatch => {
	  let request = {
		  method: "DELETE",
		  mode: "cors",
		  credentials: "include",
		  headers: {"Content-Type": "application/json",
					"token": token}
	  }
	  dispatch(fetchLoading());
	  return fetch("/api/shopping/"+id,request).then(response => {
			if(response.ok) {
				dispatch(removeFromListSuccess());
				dispatch(getShoppingList(token));
				dispatch(getHappeningList());
			} else {
				dispatch(removeFromListFailed("Server responded with status: "+response.statusText));
				dispatch(loadingDone());

			}
	  }).catch(error => {
			dispatch(removeFromListFailed(error));
			dispatch(loadingDone());
	  })		
	}
}

export const editItem = (item,token) => {
	return dispatch => {
	  let request = {
		  method: "PUT",
		  mode: "cors",
		  credentials: "include",
		  headers: {"Content-Type": "application/json",
					"token": token},
		  body: JSON.stringify(item)
	  }
	  dispatch(fetchLoading());
	  return fetch("/api/shopping/"+item._id,request).then(response => {
			if(response.ok) {
				dispatch(editItemSuccess());
				dispatch(getShoppingList(token));
				dispatch(getHappeningList());
			} else {
				dispatch(loadingDone());
				dispatch(editItemFailed("Server responded with status: "+response.statusText));

			}
	  }).catch(error => {
			dispatch(loadingDone());
			dispatch(editItemFailed(error));
	  })
		
	}
}


export const onSaveHappenings = (token) => {
	console.log("happeningActions:  onSaveHappenings token=")
	console.log("token")
	console.log("happenings:")
	console.log(happenings)
	return dispatch => {
		 let request = {
			  method: "POST",
			  mode: "cors",
			  credentials: "include",
			  headers: {"Content-Type":  "application/json",
				 	   "token":  token},
			  body: JSON.stringify(happenings)
		  }
		  console.log("dispatch fetchLoading")
		  dispatch(fetchLoading());
		  console.log(request.body)
		  return fetch("/api/happenings", request).then(response => {
			  console.log("response")
			  console.log(response)
				if(response.ok) {
					dispatch(saveHappeningsSuccess());
					dispatch(getShoppingList(token));
					dispatch(getHappeningList());
					// history.push("/list");
				} else {
					dispatch(saveHappeningsFailed("Server responded with status: "
					+ response.statusText));
					dispatch(loadingDone());

				}
		  }).catch(error => {
				dispatch(saveHappeningsFailed(error));
				dispatch(loadingDone());
		  })
		
		}
}


export const onSaveDetailedHappenings = (token) => {
	console.log("happeningActions:  onSaveDetailedHappenings token=")
	console.log("token")
	console.log("happenings:")
	console.log(happenings)
	return dispatch => {
		 let request = {
			  method: "POST",
			  mode: "cors",
			  credentials: "include",
			  headers: {"Content-Type":  "application/json",
				 	   "token":  token},
			  body: JSON.stringify(happenings)
		  }
		  console.log("dispatch fetchLoading")
		  dispatch(fetchLoading());
		//   console.log(request.body)
		  return fetch("/api/detailedhappenings", request).then(response => {
			  console.log("response")
			  console.log(response)
				if(response.ok) {
					dispatch(saveDetailedHappeningsSuccess());
					dispatch(getShoppingList(token));
					dispatch(getHappeningList());
					// history.push("/list");
				} else {
					dispatch(saveDetailedHappeningsFailed("Server responded with status: "
					+ response.statusText));
					dispatch(loadingDone());

				}
		  }).catch(error => {
				dispatch(saveDetailedHappeningsFailed(error));
				dispatch(loadingDone());
		  })
		
		}
}



export const getHappeningList = (token) => {
	console.log("getHappeningList")
	return dispatch => {
		let request = {
			  method: "GET",
			  mode: "cors",
			  credentials: "include",
			  headers: {"Content-Type": "application/json",
						token: token}
		  }
		dispatch(fetchLoading());
		console.log("getHappeningList after fetchLoading")
		return fetch("/api/happenings", request).then(response => {
				console.log("getHappeningList after fetch")
				dispatch(loadingDone());
				
				console.log("getHappeningList after loadingDone response=")
				console.log(response)
				if(response.ok) {
					response.json().then(data => {
						dispatch(getHappeningListSuccess(data))
					}).catch(error => {
						dispatch(getHappeningListFailed("Error in parsing response json"));	
					});
				} else {
					dispatch(getHappeningListFailed("Server responded with status: "+response.statusText));

		  }}).catch(error => {
				dispatch(loadingDone());
				dispatch(getHappeningListFailed(error));
			});		
		}
}

export const getHappening = (token, id) => {
	console.log("happeningActions getHappening id="+id)
	return dispatch => {
		let request = {
			  method: "GET",
			  mode: "cors",
			  credentials: "include",
			  headers: {"Content-Type": "application/json",
						token: token,}
		  }
		dispatch(fetchLoading());
		console.log("AFTER fetch load")
		return fetch("/api/happening/"+id, request).then(response => {
				dispatch(loadingDone());
				console.log("happeningActions getHappening response=")
				console.log(response)
				if(response.ok) {
					response.json().then(data => {
						dispatch(getHappeningSuccess(data))
					}).catch(error => {
						dispatch(getHappeningFailed("Error in parsing response json"));	
					});
				} else {
					dispatch(getHappeningFailed("Server responded with status: "+response.statusText));

		  }}).catch(error => {
				dispatch(loadingDone());
				dispatch(getHappeningFailed(error));
			});		
		}
}

//ACTION CREATORS

const getShoppingListSuccess = (list) => {
	return {
		type: GET_SHOPPINGLIST_SUCCESS,
		list: list
	}
}

const getShoppingListFailed = (error) => {
	return {
		type: GET_SHOPPINGLIST_FAILED,
		error: error
	}
}

const addToListSuccess = () => {
	return {
		type: ADD_TO_LIST_SUCCESS
	}
}

const addToListFailed = (error) => {
	return {
		type: ADD_TO_LIST_FAILED,
		error: error
	}	
}

const removeFromListSuccess = () => {
	return {
		type: REMOVE_FROM_LIST_SUCCESS
	}
}

const removeFromListFailed = (error) => {
	return {
		type: REMOVE_FROM_LIST_FAILED,
		error: error
	}
}

const editItemSuccess = () => {
	return {
		type: EDIT_ITEM_SUCCESS
	}
}

const editItemFailed = (error) => {
	return {
		type: EDIT_ITEM_FAILED,
		error: error
	}
}

export const logoutDone = () => {
	return {
		type: LOGOUT_DONE
	}
}

const saveHappeningsSuccess = () => {
	return {
		type: SAVE_HAPPENINGS_SUCCESS
	}
}

const saveHappeningsFailed = (error) => {
	return {
		type: SAVE_HAPPENINGS_FAILED,
		error: error
	}
}

const saveDetailedHappeningsSuccess = () => {
	return {
		type: SAVE_DETAILED_HAPPENINGS_SUCCESS
	}
}

const saveDetailedHappeningsFailed = (error) => {
	return {
		type: SAVE_DETAILED_HAPPENINGS_FAILED,
		error: error
	}
}

const getHappeningListSuccess = (happeningList) => {
	return {
		type: GET_HAPPENING_LIST_SUCCESS,
		happeningList: happeningList,
	}
}

const getHappeningListFailed = (error) => {
	return {
		type: GET_HAPPENING_LIST_FAILED,
		error: error
	}
}

const getHappeningSuccess = (happening) => {
	console.log("*** getHappeningSuccess happening="+happening[0].title)
	console.log(happening[0])
	return {
		type: GET_HAPPENING_SUCCESS,
		happening: happening,
	}
}

const getHappeningFailed = (error) => {
	return {
		type: GET_HAPPENING_FAILED,
		error: error
	}
}
