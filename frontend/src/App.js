import React from 'react';
import './App.css';
import MyForm from './components/MyForm';
import MyList from './components/MyList';
// import SelectHappening from './components/SelectHappening'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {List, Dropdown} from 'semantic-ui-react'
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import EmptyForm from './components/LoginForm';
// import TaskBar from './components/TaskBar';
import UserRegisterForm from './components/UserRegisterForm';
import {connect} from 'react-redux';
import {getHappening} from './actions/happeningActions'

 
class App extends React.Component{
    
    handleSelectHappening = (event, data) => {
        // let action  = {
        //     type: "HAPPENING_SELECTED_SUCCESS",
        //     happeningTitle: data.value
        // }    
        // alert("clicked "+ data.value)
        this.setState({
            selectedHappening: data.value,
        });
        
        this.props.dispatch(getHappening(this.props.token, data.value))
	}
	
  	render() {   
		let happeningOptions = []
        let i = 0
        let happening = {title: "Valitse tapahtuma"}
        happeningOptions.push ({
            key: i+":"+happening.title,
            value: happening.title,
            text: happening.title,
        })
        i += 1

        if (this.props.happeningList) {
            for (let happening of this.props.happeningList) {
                happeningOptions.push ({
                    key: i+":"+happening.title,
                    value: happening.title,
                    text: happening.title,
                })
                i += 1
            }
		}
        if (happeningOptions.length <= 1) {
            happeningOptions= []
            let i = 0
            let happening = {title: "Ei tapahtumia"}
            happeningOptions = [
                {
                    key: i+":"+happening.title,
                    value: happening.title,
                    text: happening.title,    
                }
            ]
        }

        let selectHappening = (
            <Dropdown placeholder="Valitse tapahtuma"
                id="theHappening"
                options={happeningOptions}
                fluid
                search
                selection
                onChange={this.handleSelectHappening}
            />
        )
		let isHappeningSelected = this.props.selectedHappening == true
		isHappeningSelected = isHappeningSelected && this.props.selectedHappening !== ""
		

		console.log("###############################")
		console.log("selectedHappening="+this.props.selectHappening)
		console.log("ishappeningSelected="+isHappeningSelected)
		console.log("isLogged="+this.props.isLogged)
	  	return (
			<div className="App">
			<NavBar/>
			<hr/>
			<List horizontal>
				<List.Item>
					{selectHappening}
				</List.Item>
				<List.Item>
					<p>Task Buttons</p>
				</List.Item>
			</List>
			<hr/>
			<UserRegisterForm />
			<hr />
			<Switch>
				<Route exact path="/" render={() => {
					if (isHappeningSelected) {
						return (<UserRegisterForm />)
					}
					if (this.props.isLogged) {
						return( <EmptyForm />)
					}
					return (<EmptyForm />)
				}}/>
				<Route path="/list" render={() => 
					this.props.isLogged ?				
					(<MyList/>) :
					(<Redirect to="/"/>)
				}/>
				<Route path="/form" render={() => 
					this.props.isLogged ?
					(<MyForm/>) :
					(<Redirect to="/"/>)
				}/>
			 	<Route path="/userregister" render={() =>
					isHappeningSelected ?
					(<UserRegisterForm />) :
					(<Redirect to="/" />)
				}/> 
				<Route render={() => 
					(<Redirect to="/"/>)
				}/>
			</Switch>
			</div>
	  );
  }
}
// force loginform
const mapStateToProps = (state) =>  {
	console.log("App,js: mapStateToProps state=")
	console.log(state)
	return {
		isLogged: state.login.isLogged,
		happening: state.happening.happening,
		happeningList: state.happening.happeningList,
		selectedHappening: state.happening.selectedHappening,
		token: state.login.token,
	}
}

export default withRouter(connect(mapStateToProps)(App));
