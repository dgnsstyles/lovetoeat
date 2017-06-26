import React, { Component } from 'react';
import Ingredients from './Ingredients';

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
				 <form>
                     <div className="row">
                       <div className="col-xs-12 col-sm-12">
                           <h1>Submit</h1>
                           <div className="form-group">
                            <label htmlFor="name">Name</label>
					    <input type="text" 
					          ref={(input) => {this.name = input;}}
					    	  className="form-control" 
					    	  classID="name" 
					    	  placeholder="Enter the name of the recipie" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Description">Description</label>
                            <textarea className="form-control" 
					         id="description" 
					         ref={(input) => {this.description = input;}}
					         placeholder="Enter a brief description" />
                        </div>
                        
					    <Ingredients addIngredient={(quantity, ingredient) => {this.addIngredient(quantity, ingredient)}}/>
					  <button type="button" onClick={this.submitRecipe} className="btn btn-danger btn-lg">Submit</button>
            
                       </div>
                     </div>
                 </form>        
				
			</div>
		);
	}
}

export default Submit;