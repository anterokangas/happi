import React from 'react';
import {Select} from 'semantic-ui-react';
import {connect} from 'react-redux';
// import {removeFromList,editItem} from '../actions/happeningActions';

class SelectHappening extends React.Component {

    constructor(props) {
        super(props)
        console.log("SelectHappening props=")
        console.log(props)
    }

    handleSelectHappening = (event, data) => {
        // let action  = {
        //     type: "HAPPENING_SELECTED_SUCCESS",
        //     happeningTitle: data.value
        // }    
        alert("clicked "+ data.value)
        // this.props.dispatch(getHappening(data.value))
    }

	render() {
		console.log("Navbar render this.props=")
		console.log(this.props)
		 
		let happeningOptions = []
		console.log("happeningActions this.props=")
		console.log(this.props)
		for (let happening in this.props.happeningList) {
			happeningOptions.push ({
				key: happening,
				value: happening,
				text: this.props.happeningList[happening].title,
			})
		}

        return (
            <Select placeholder="Valitse Tapahtuma"
            id="theHappening"
            options={happeningOptions}
            onChange={this.handleSelectHappening}
            />
        )
	}
}

const mapStateToProps = (state) => {
	return {
		happeningList:state.happening.happeningList,
		token:state.login.token
	}
}

export default connect(mapStateToProps)(SelectHappening);