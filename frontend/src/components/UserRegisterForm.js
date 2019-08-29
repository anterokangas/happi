import React from 'react';
import {Form, Button} from 'semantic-ui-react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Parts from "./Parts.js"
import EmptyForm from './EmptyForm'

class UserRegisterForm extends React.Component {
	
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		type: "",
	// 		price: 0,
	// 		count: 0			
	// 	}
	// }
	
	// onChange = (event) => {
	// 	let state = {};
	// 	state[event.target.name] = event.target.value;
	// 	this.setState(state);
	// }
	
	// onSubmit = (event) => {
	// 	event.preventDefault();
	// 	let item = {
	// 		type: this.state.type,
	// 		count: this.state.count,
	// 		price: this.state.price,
	// 		id: 0
	// 	}
	// 	this.props.dispatch(addToList(item,this.props.token,this.props.history));
	// 	this.setState({
	// 		type: "",
	// 		count: 0,
	// 		price: 0
	// 	})
	// }

	onSaveOrder = (event) => {
		alert("Save Clicked")
		// let order = {}

	}
	
	render() {
		
        console.log("UserRegisterForm.render: props=")
		console.log(this.props)
		if (typeof this.props.happening == "undefined") {
			return <EmptyForm/>
		} 
		let happening = this.props.happening[0]
		// console.log("happening=")
		console.log(happening)
		console.log(happening.parts)
		return (
			<Form onSubmit={this.onSubmit} name="UserRegisterForm">
				<Form.Field>
					<h1>{happening.title}</h1>
					<h2>{happening.description}</h2>
				
					<Parts happening={happening}
						   parts={happening.parts}/>
					<h3>
						<label htmlFor={happening.total}>{happening.total}:</label>
						<input type="number"
							readOnly 
							name={happening.total}
							value="0" />
					</h3>
				</Form.Field>
				
				<Button onClick={this.onSaveOrder}
					    disabled={!this.props.isLogged}
				>Talleta lomake</Button>
				<Button type="submit">Vahvista</Button>
			</Form> 
			
		)		
	}

}


const mapStateToProps = (state) => {
    console.log("UserRegisterForm: mapStateToProps: state=")
    // console.log(state)
	let error = ""
	if(state.happening.error.length > 0) {
		error = state.happening.error
	}
	if(state.login.error.length > 0) {
		error = state.login.error
	}
    return {
        ...state,
		// token: state.login.token,
		selectedHappening: state.happening.selectedHappening,
		happening: state.happening.happening,
		// happeningList: state.happening.happeningList,
        isLogged: state.login.isLogged,
        // loading: state.login.loading,
        error: error,
    }
}

export default withRouter(connect(mapStateToProps)(UserRegisterForm));