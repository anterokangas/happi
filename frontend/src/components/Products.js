import React from 'react';
// import {Form, Button, Select, Checkbox, Radio, TextArea} from 'semantic-ui-react';
import {connect} from 'react-redux';

// import {getPrice, uniqueKey} from "../javascript/tools"
import Product from "./Product.js"

class Products extends React.Component {

    // constructor (props) {
    //     // console.log("n===================\nProducts: props="+JSON.stringify(props.products))
 
    //     super(props)
    //     this.state = {
    //         ...this.state, 
    //         order:{}
    //     }
    // }

    render () {
        console.log("Products.render: props=")
        console.log(this.props)
        let tmpProducts = []
        for (let product of this.props.products) {
            tmpProducts.push(
                (
                <Product key={product.name}
                         happening={this.props.happening}
                         parts={this.props.parts}
                         part={this.props.part}
                         products={this.props.products}
                         product={product}/>
                )
            )
        }
        return (
            <div>
                {tmpProducts}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("Products: mapStateToProps: state="+state+":"+JSON.stringify(state))
    return {
        ...state,
        theHappening: state.theHappening,
        isLogged: state.isLogged,
        task: state.task,
        order: {...state.order},
    }
}

export default connect(mapStateToProps)(Products);
