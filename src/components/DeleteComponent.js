import React from 'react'
import { Link,browserHistory } from 'react-router'
import PropTypes from 'prop-types'

class DeleteComponent extends React.Component {
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(e) {
		e.preventDefault();
   	this.props.deleteItemData('product',this.props.item.data.id)
  }
	render(){
		const {item } = this.props;
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
				{item.data?
					<div className="wrapper wrapper-content">
						<div className="row">
							<div className="col-lg-12">
								<div className="row grid-view" height="100%">
									<div className="form-title">
										<h5><span>Delete Product #{ item.data.name}</span></h5>
									</div>
									<div className="row list-view">
										<div className="row col-lg-12">
											<h4>Are you sure you want to delete {item.data.name}?</h4>
											<form ref={el => (this.form = el)} onSubmit={ this.handleSubmit }>
												<input type='hidden' name='id' id='id' value={item.data.id} />
												<button type="submit" className="btn btn-default">Delete</button>
												<a className="btn btn-default" onClick={browserHistory.goBack}>
													<span className="glyphicon glyphicon-menu-left" aria-hidden="true"></span>&nbsp;<span className="hidden-xs ng-scope" >Back</span>
												</a>
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
																				
DeleteComponent.propTypes = {
	item:PropTypes.object,
	deleteItemData:PropTypes.func.isRequired
}

export default DeleteComponent
