import React from 'react';
import {List, Dropdown} from 'semantic-ui-react';
import {connect} from 'react-redux';

class TaskBar extends React.Component {
    
    // handleSelectHappening = (event, data) => {
    //     // let action  = {
    //     //     type: "HAPPENING_SELECTED_SUCCESS",
    //     //     happeningTitle: data.value
    //     // }    
    //     alert("clicked "+ data.value)
    //     this.setState({
    //         selectedHappening: data.value,
    //     });
        
    //     // this.props.dispatch(getHappening(data.value))
    // }


    render () {
        // let happeningOptions = []
        // console.log("typeof(happeningOptions)="+typeof(happeningOptions))
        
        // let i = 0
        // let happening = {title: "Valitse tapahtuma"}
        // happeningOptions.push ({
        //     key: i+":"+happening.title,
        //     value: happening.title,
        //     text: happening.title,
        // })
        // i += 1
        // console.log("this.props.happeningList="+typeof(this.props.happeningList))
        // console.log(this.props.happeningList)
        // // if (this.props.happeningsList) {
        //     for (let happening of this.props.happeningList) {
        //         happeningOptions.push ({
        //             key: i+":"+happening.title,
        //             value: happening.title,
        //             text: happening.title,
        //         })
        //         i += 1
        //     }
        // // }
        // // if (happeningOptions.length <= 1) {
        // //     happeningOptions= []
        // //     // let i = 0
        // //     // let happening = {title: "Ei tapahtumia"}
        // //     // happeningOptions = [
        // //     //     {
        // //     //         key: i+":"+happening.title,
        // //     //         value: happening.title,
        // //     //         text: happening.title,    
        // //     //     }
        // //     // ]
        // // }
        // console.log("-->happeningOptions="+typeof(happeningOptions)+" "+happeningOptions.length)
        // console.log(happeningOptions)
        let selectHappening = (
            <p>Dropdown</p>
           /*  <Dropdown placeholder="Valitse tapahtuma"
                id="theHappening"
                options={happeningOptions}
                fluid
                search
                selection
                onChange={this.handleSelectHappening}
            /> */
        )


        let taskBar = (
            <List horizontal divided>
                <List.Item>{selectHappening}</List.Item>
            </List>
        )
        return {taskBar}
    }
}


const mapStateToProps = (state) => {
    console.log("TaskBar: mapStateToProps: state=")
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
        selectedHappening: state.happening.selectedHappening,
        happeningList: state.happening.happeningList,
        isLogged: state.login.isLogged,
        loading: state.login.loading,
        error: error,
    }
}

export default connect(mapStateToProps)(TaskBar);