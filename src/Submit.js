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
				 <form>
                     <div className="row">
                       <div className="col-xs-12 col-sm-12">
                           <h1>Submit</h1>
                           <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Description">Description</label>
                            <textarea type="Text" className="form-control" placeholder="Description" />
                        </div>
                        <button type="submit" className="btn btn-lg btn-info">Submit</button>
                       </div>
                     </div>
                 </form>        
				
			</div>
		);
	}
}

export default Submit;