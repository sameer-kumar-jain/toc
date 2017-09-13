import React from 'react'
import { Link } from 'react-router'
import PropTypes from 'prop-types'


export const ListComponent = ({ product }) => (
		<div style={{ margin: '0 auto' }} >
			<div className="row wrapper border-bottom white-bg page-heading">
				<div className="col-lg-12">
					<div className="ma-view-actions">
						<Link className="btn btn-default"  to={`/product/create`}>
							<span className="glyphicon glyphicon-plus" aria-hidden="true"></span>&nbsp;<span className="hidden-xs ng-scope" >Create</span>
						</Link>
					</div>
					<h1><span>Products</span></h1>
				</div>
			</div>
		{
			product.dataList ?
			(
				<div className="wrapper wrapper-content">
					<div className="row">
						<div className="col-lg-12">
							<div className="row grid-view" height="100%">
								<div className="form-title">
										<h5><span>Product List</span></h5>
								</div>
								<div className="row list-view">
									<div className="col-lg-12">
										<table className="grid table table-condensed table-hover table-striped">
											<thead>
												<tr>
												{product.dataList.cols.map((col,key) => (
													<th key={col}>{col}</th>
												))}
												<th>Action</th>
												</tr>
											</thead>
											<tbody>
											{product.dataList.data.map((row,key) => (
												<tr key={row.id}>
												{product.dataList.cols.map((col,key) => (
													<td key={row.id + '' + key}>{row[col]}</td>
												))}
													<td>
														<span><span>
														<Link className="btn btn-default btn-xs"  to={`/product/${row.id}/edit`}>
															<span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>&nbsp;<span className="hidden-xs ng-scope" >Edit</span>
														</Link>
															</span></span>
																<span><span>
														<Link className="btn btn-default btn-xs"  to={`/product/${row.id}/delete`}>
															<span className="glyphicon glyphicon-trash" aria-hidden="true"></span>&nbsp;<span className="hidden-xs ng-scope" >Delete</span>
														</Link>
															</span></span>
																<span><span>
															<Link className="btn btn-default btn-xs"  to={`/product/${row.id}/calculate`}>
															<span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>&nbsp;<span className="hidden-xs ng-scope" >Calculate</span>
														</Link>
															</span></span>
													</td>
												</tr>
												))}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)
			:
				<div>test</div>
		}
		</div>
	)

ListComponent.propTypes = {
	product:PropTypes.object
}

export default ListComponent
