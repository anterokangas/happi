import React from 'react';
import {connect} from 'react-redux';

class EmptyForm extends React.Component {
	 
	render() {
        return(
            <p>Empty Form</p>
        )
	}
}

export default connect()(EmptyForm);
