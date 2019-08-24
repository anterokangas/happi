import React from 'react';
// import {Form, Button, Select, Checkbox, Radio, TextArea} from 'semantic-ui-react';
import {connect} from 'react-redux';

// import {getPrice, uniqueKey} from "../javascript/tools"
import Products from "./Products"

class Part extends React.Component {
 
    // constructor (props) {
    //     // console.log("Part: props="+JSON.stringify(props))

    //     super(props)
    //     this.state = {
    //         ...this.state, 
    //         order:{}
    //     }
    // }

    render () {
        console.log("Part.render: props=")
        console.log(this.props)
        return (
            <fieldset>
            <legend>{this.props.part.header}</legend>
            <Products happening={this.props.happening}
                      parts={this.props.parts}
                      part={this.props.part}
                      products={this.props.part.products}/>
            </fieldset>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("Part mapStateToProps: state=")
    console.log(state)
	let error = ""
	if(state.happening.error.length > 0) {
		error = state.happening.error
	}
	if(state.login.error.length > 0) {
		error = state.login.error
	}
    return {
        ...state,
		token: state.login.token,
		selectedHappening: state.happening.selectedHappening,
		happening: state.happening.happening,
		happeningList: state.happening.happeningList,
        isLogged: state.login.isLogged,
        loading: state.login.loading,
        error: error,
    }
}
export default connect(mapStateToProps)(Part);
