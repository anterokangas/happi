import React from 'react';
import {Form} from 'semantic-ui-react';
import {connect} from 'react-redux';

// import {getPrice, uniqueKey} from "../javascript/tools"

class TextProduct extends React.Component {

    // constructor (props) {

    //     super(props)
    //     // this.state = {
    //     //     order: {}
    //     // }
    // }

    onChange = (event) => {
        event.preventDefault()
        let state = {
            // "id": event.target.id,
            "type": event.target.type,
            "name": event.target.name,
            "value": event.target.value,
        }
        // console.log("tag changed state=")
        // console.log(state)
        this.setState(state)
    }

    render () {
        // console.log("\n=====\nTextProduct.render props=")
        // console.log(this.props)
        let product = this.props.product 
        let required = false
        if (product.required) required = product.required
        let value = ""
        value = this.props.value
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
                //    id={product.id}
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
    console.log("TextProduct: mapStateToProps: state=")
    console.log(state)
    return {
        ...state,
        selectedHappening: state.selectedHappening,
        isLogged: state.isLogged,
        // task: state.task,
        // order: state.order,
    }
}

export default connect(mapStateToProps)(TextProduct);
