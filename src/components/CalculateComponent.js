import React from 'react'
import { Link,browserHistory } from 'react-router'
import PropTypes from 'prop-types'
var NumberFormat = require('react-number-format');

class CalculateComponent extends React.Component {
	constructor(props){
		super(props);
		this.profit = 0;
	}
	handleOnChange(e,values){
		const data = this.props.product.dataItem.data;
		if(this.refs.price){
			const profit = this.refs.price.state.value-(data.cost + data.freight)
			this.setState({profit:profit})
		}
			
	}
	render(){
		const {product} = this.props;
		const profit = this.state?this.state.profit : 0;
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
									<h2>Profit Calculator for #{product.dataItem.data.name}</h2>
								</div>
								<div className="row list-view">
									<div className="row col-lg-12">
										<div className="form-group">
											<label htmlFor='price'>Price:</label>
											<NumberFormat onChange={(e,values)=> this.handleOnChange(e,values) } ref='price' className="form-control" />
										</div>
										<div className="form-group">
											<label htmlFor='cost'>Cost:</label>
											<input disabled value={product.dataItem.data.cost} className="form-control" ref='cost' />
										</div>
										<div className="form-group">
											<label htmlFor='freight'>Freight:</label>
											<input disabled value={product.dataItem.data.freight} className="form-control" ref='freight' />
										</div>
										<h2>Total Profit { profit }</h2>
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
																				
CalculateComponent.propTypes = {
	item:PropTypes.object
}

export default CalculateComponent
