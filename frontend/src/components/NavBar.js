import React from 'react';
import {Link} from 'react-router-dom'
import {List, Header} from 'semantic-ui-react'
import {connect} from 'react-redux';
import {onLogout} from '../actions/loginActions';
import {onSaveHappenings} from '../actions/happeningActions';
import {onSaveDetailedHappenings} from '../actions/happeningActions';
// import {doUserRegister} from '../actions/happeningActions';


class NavBar extends React.Component {
    
    loginregister = () => {
        this.setState({
            loginClicked: true,
        })
    }

    logout = () => {
        this.props.dispatch(onLogout(this.props.token))
    }

    saveHappenings = () => {
        console.log("save happenings clicked")
        this.props.dispatch(onSaveHappenings(this.props.token))
    }
    
    saveDetailedHappenings = () => {
        console.log("save detailed happenings clicked")
        this.props.dispatch(onSaveDetailedHappenings(this.props.token))
    }
    
    render() {
        let status = "Happy - Happening Register and Marketplace App"
        if (this.props.loading) {
            status = "Loading..."
        } 
        if (this.props.error.length > 0) {
            status = this.props.error
        }
        let navbar = <List></List>
		
        if (this.props.isLogged) {
            navbar = (
                <List horizontal>
                <List.Item><Link to="/userregister">User Register</Link></List.Item>
                <List.Item><Link to="/list">Shopping List</Link></List.Item>
                <List.Item><Link to="/form">Add to List</Link></List.Item>
                <List.Item><Link to="/" onClick={this.loginregister}>Login/Register</Link></List.Item>
                <List.Item><Link to="/" onClick={this.logout}>Logout</Link></List.Item>
                <List.Item><Link to="/" onClick={this.saveDetailedHappenings}>Save Detailed Happenings</Link></List.Item>
                <List.Item><Link to="/" onClick={this.saveHappenings}>Save Happenings</Link></List.Item>
                {/* <List.Item><Link to="/" onClick={this.getHappeningList}>Get Happenings</Link></List.Item> */}
                </List>
            )
        }
        console.log("Navbar generated")
        return (
            <div style={{height: 100, backgroundColor: "LightBlue"}}>
                <Header>{status}</Header>
                {navbar}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    let error = ""
    if (state.happening.error.length > 0) {
        error = state.happening.error
    }
    if (state.login.error.length > 0) {
        error = state.login.error
    }
    return {
        isLogged: state.login.isLogged,
        token: state.login.token,
        loading: state.login.loading,
        error: error,
        happeningList: state.happening.happeningList,
        selectedHappening: state.happening.selectedHappening,
        loginClicked: state.login.loginClicked,
    }
}

export default connect(mapStateToProps)(NavBar);
