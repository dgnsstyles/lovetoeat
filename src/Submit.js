import React, { Component } from 'react';

class Submit extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};
	  this.submitRecipe = this.submitRecipe.bind(this);
	}

	submitRecipe() {
		console.log('button clicked');
		this.props.history.push('/');
	}

	render() {
		return (
			<div>
				 <div className="row">
                    <div className="col-xs-12 col-sm-12">
                        <h2>Submit</h2>
                        <label htmlFor="Name">Name:</label>
                        <input type="text"/>
                    </div>
                </div>
				
			</div>
		);
	}
}

export default Submit;