import React from 'react';
import {Form} from 'semantic-ui-react';
import {connect} from 'react-redux';

// import {getPrice, uniqueKey} from "../javascript/tools"

class TextProduct extends React.Component {

    // constructor (props) {
    //     // console.log("Product: props="+JSON.stringify(props))

    //     super(props)
    //     this.state = {
    //         ...this.state, 
    //         order:{}
    //     }
    // }

    onChange = (event) => {
        console.log("TextProduct onChange/Blue name="
                    + event.target.name 
                    + " value="
                    + event.target.value)
        let state = {
            ...this.state,
        }
        if (!state.order) {
            state.order = {}
        }
        state.order[event.target.name] = event.target.value
        this.setState(state)
    }

    render () {
        console.log("\n=====\nTextProduct.render props=")
        console.log(this.props)
        let product = this.props.product 
        let required = false
        if (product.required) required = product.required
        let value = ""
        if (this.state && this.state.order && this.state.order[product.name]) {
            value = this.state.order[product.name]
        }
        let comment = ""
        if (product.comment) comment = <p>{product.comment}</p>
        return (
            <Form.Field>
            <label className="large-label" 
                htmlFor={product.name}>
                {product.name}
            </label> 
            <span className="required">*</span>
            <input type={product.type.toLowerCase()}
                   name={product.name}
                   required={required}
                   className="form-control"
                   onChange={this.onChange}
                   value={value}
            />
            {comment}
            </Form.Field>
        ) 
    }
}

const mapStateToProps = (state) => {
    console.log("TextProduct: mapStateToProps: state="+state+":"+JSON.stringify(state))
    return {
        ...state,
        theHappening: state.theHappening,
        isLogged: state.isLogged,
        task: state.task,
        order: {...state.order},
    }
}

export default connect(mapStateToProps)(TextProduct);
