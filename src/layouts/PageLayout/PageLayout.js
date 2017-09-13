import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import './PageLayout.css';

var divStyle = {
  marginBottom:0
};
export const PageLayout = ({ children }) => (
	<div>
		<nav className="navbar-default navbar-static-side" role="navigation">
				<div className="sidebar-collapse">
					<ul className="nav metismenu" id="side-menu">
						<li className="nav-header">
							<div className="dropdown profile-element">
								<span>The Overdrive Challenge</span>
							</div>
						</li>
						<li><Link className="link" to="/home">Home</Link></li>
						<li><Link className="link" to="/product/list">Product</Link></li>
					</ul>
				</div>
		</nav>
		<div id="page-wrapper" className="gray-bg">
				<div className="row border-bottom">
						<nav className="navbar navbar-static-top" role="navigation" style={divStyle}>
								<div className="navbar-header">
										<a className="navbar-minimalize minimalize-styl-2 btn btn-primary " href="#"><i className="icon-bar"></i> </a>
								</div>
						</nav>
				</div>
				
				{children}
				<div id="loader"></div>
		</div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
