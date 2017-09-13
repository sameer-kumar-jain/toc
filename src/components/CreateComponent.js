import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'
var NumberFormat = require('react-number-format');

class CreateComponent extends React.Component {
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		const params = {};
		this.props.fields.map((field) => params[field.field] = this.form[field.field].value)
   	this.props.saveItemData('product',params)
  }
	componentWillReceiveProps(nextProps){
		if(nextProps.product.isCreated){
			 this.props.router.push('/product/list');
		}
	}
	render(){
		const {fields} = this.props;
		return (
			<div style={{ margin: '0 auto' }} >
				<div className="row wrapper border-bottom white-bg page-heading">
    			<div className="col-lg-12">
						<div className="ma-view-actions">
							<Link className="btn btn-default"  to={`/product/list`}>
								<span className="glyphicon glyphicon-list" aria-hidden="true"></span>&nbsp;<span className="hidden-xs ng-scope" >List</span>
							</Link>
						</div>
						<h1><span>Products</span></h1>
    			</div>
				</div>
				<div className="wrapper wrapper-content">
					<div className="row">
						<div className="col-lg-12">
							<div className="row grid-view" height="100%">
								<div className="form-title">
										<h5><span>New Product</span></h5>
								</div>
								<div className="row list-view">
									<form ref={el => (this.form = el)} onSubmit={ this.handleSubmit }>
										{
											fields.map((field,key) => (
												<div key={key} className="form-group col-lg-6">
													<label htmlFor={field.field}>{field.label}:</label>
													{
														field.type==='number'?
															<NumberFormat required='true' className="form-control" name={field.field} id={field.field}/>
														:
															<input required='true' type={field.type} className="form-control" name={field.field} id={field.field} />
													}
												</div>
											))
										}
										<button type="submit" className="btn btn-default">Submit</button>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
																				
CreateComponent.propTypes = {
	saveItemData:PropTypes.func.isRequired
}

export default CreateComponent
