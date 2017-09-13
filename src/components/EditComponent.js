import React from 'react'
import { Link,browserHistory } from 'react-router'
import PropTypes from 'prop-types'
var NumberFormat = require('react-number-format');

class EditComponent extends React.Component {
	
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
		const params = {};
		this.props.fields.map((field) => params[field.field] = this.form[field.field].value);
		params.id = this.props.product.dataItem.data.id;
   	this.props.updateItemData('product',params)
  }
	componentWillReceiveProps(nextProps){
		if(nextProps.product.isUpdated){
			 this.props.router.push('/product/list');
		}
	}
	render(){ 
		const { product,fields } = this.props;
		return (
			<div style={{ margin: '0 auto' }} >
				<div className="row wrapper border-bottom white-bg page-heading">
    			<div className="col-lg-12">
						<div className="ma-view-actions">
							<a className="btn btn-default" onClick={browserHistory.goBack}>
								<span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span> <span className="hidden-xs ng-scope" >Back</span>
							</a>
							<Link className="btn btn-default"  to={`/product/list`}>
								<span className="glyphicon glyphicon-list" aria-hidden="true"></span> <span className="hidden-xs ng-scope" >List</span>
							</Link>
							
						</div>
						<h1><span>Products</span></h1>
    			</div>
				</div>
			{ product.dataItem?
				<div className="wrapper wrapper-content">
					<div className="row">
						<div className="col-lg-12">
							<div className="row grid-view" height="100%">
								<div className="form-title">
										<h5><span>Edit Product #{ product.dataItem.data.name}</span></h5>
								</div>
								<div className="row list-view">
									<div className="row col-lg-12">
										<form ref={el => (this.form = el)} onSubmit={ this.handleSubmit }>
											{
												fields.map((field,key) => (
													<div key={key} className="form-group col-lg-6">
														<label htmlFor={field.field}>{field.label}:</label>
														{
															field.type==='number'?
																<NumberFormat required='true'  className="form-control" value={product.dataItem.data[field.field]} name={field.field} id={field.field}/>
															:
																<input required='true' type={field.type} defaultValue={product.dataItem.data[field.field]} className="form-control" name={field.field} id={field.field} />
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
				:
				''
			}
			</div>
		)
	}
}
																				
EditComponent.propTypes = {
	product:PropTypes.object,
	updateItemData:PropTypes.func.isRequired
}

export default EditComponent
