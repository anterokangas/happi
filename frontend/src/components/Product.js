import React from 'react';
// import {Form, Button, Select, Checkbox, Radio, TextArea} from 'semantic-ui-react';
import {connect} from 'react-redux';

// import {getPrice, uniqueKey} from "../javascript/tools"
import {uniqueKey} from "../javascript/tools"
import TextProduct from "./TextProduct"
 
class Product extends React.Component {

    // constructor (props) {
    //     // console.log("Product: props="+JSON.stringify(props))

    //     super(props)
    //     this.state = {
    //         ...this.state, 
    //         order:{}
    //     }
    // }

    render () {
        console.log("Product.render: props=")
        console.log(this.props)
    
        switch (this.props.product.type.toUpperCase()) {
            case "TEXT":
            case "EMAIL":
                return (
                    <TextProduct happening={this.props.happening} 
                                 parts={this.props.parts} 
                                 part={this.props.part} 
                                 product={this.props.product} />
                )
            default:
                return (
                <p key={uniqueKey()}>
                    Unknown Product Type: {this.props.product.type}
                </p>
                )
            }

        }
}

const mapStateToProps = (state) => {
    console.log("Product: mapStateToProps: state="+state+":"+JSON.stringify(state))
    return {
        ...state,
        theHappening: state.theHappening,
        isLogged: state.isLogged,
        task: state.task,
        order: {...state.order},
    }
}

export default connect(mapStateToProps)(Product);
