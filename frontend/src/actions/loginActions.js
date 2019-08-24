import {getShoppingList, logoutDone} from './happeningActions';
import {getHappeningList} from './happeningActions';

//ACTION CONSTANTS

export const FETCH_LOADING = "FETCH_LOADING"
export const LOADING_DONE = "LOADING_DONE"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"
export const REGISTER_FAILED = "REGISTER_FAILED"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAILED = "LOGIN_FAILED"
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS"
export const LOGOUT_FAILED = "LOGOUT_FAILED"

//ACTIONS

export const onLogin = (user) => {
	return dispatch => {
	  let request = {
		  method: "POST",
		  mode: "cors",
		  headers: {"Content-Type":"application/json"},
		  body: JSON.stringify(user)
	  }
	  dispatch(fetchLoading());
	  return fetch("/login", request).then(response => {
		  if(response.ok) {
			  response.json().then(data => {
				  console.log(">loginSuccess data.token=")
				  console.log(data.token)
				 dispatch(loginSuccess(data.token));
				 console.log(">getShoppingList")
				 dispatch(getShoppingList(data.token));
				 console.log(">getHappeningList")
				 dispatch(getHappeningList(data.token));
				 console.log(">done")
			  }).catch(error => {
				 dispatch(loginFailed("Error parsing JSON"));
			  })
		  } else {
			  dispatch(loginFailed("Server responded with status:"+response.statusText));
		  }
	  }).catch(error => {
		  dispatch(loginFailed(error));
	  })		
	}
}

export const onRegister = (user) => {
	return dispatch => {
	  let request = {
		  method:"POST",
		  mode:"cors",
		  headers:{"Content-Type":"application/json"},
		  body:JSON.stringify(user)
	  }
	  dispatch(fetchLoading());
	  return fetch("/register", request).then(response => {
		  if(response.ok) {
			  alert("Register success!");
			  dispatch(registerSuccess());
		  } else {
			  dispatch(registerFailed("Server responded with status:"+response.statusText));
		  }
	  }).catch(error => {
		  dispatch(registerFailed(error));
	  })		
	}
}

export const onLogout = (token) => {
	return dispatch => {
	 let request = {
		 method:"POST",
		 mode:"cors",
		 credentials:"include",
		 headers:{"Content-Type":"application/json",
					"token":token}
	 }
	 dispatch(fetchLoading());
	 return fetch("/logout",request).then(response => {
		dispatch(logoutSuccess());
		dispatch(logoutDone());
	}).catch(error => {
		dispatch(logoutFailed(error));
		dispatch(logoutDone());
	})		
	}
}


//ACTION CREATORS

export const fetchLoading = () => {
	return {
		type:FETCH_LOADING
	}
}

export const loadingDone = () => {
	return {
		type:LOADING_DONE
	}	
}


const loginSuccess = (token) => {
	return {
		type:LOGIN_SUCCESS,
		token:token
	}
}

const loginFailed = (error) => {
	return {
		type:LOGIN_FAILED,
		error:error
	}
}

const registerSuccess = () => {
	return {
		type:REGISTER_SUCCESS
	}
}

const registerFailed = (error) => {
	return {
		type:REGISTER_FAILED,
		error:error
	}
} 

const logoutSuccess = () => {
	return {
		type:LOGOUT_SUCCESS
	}
}

const logoutFailed = (error) => {
	return {
		type:LOGOUT_FAILED,
		error:error
	}
}