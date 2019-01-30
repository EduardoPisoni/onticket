import React, { Component } from 'react';

import { Row, Col} from 'react-materialize';

import './footerSite.css';

import LogoSite from '../../images/logo/LogoSite.png';

import { NavLink } from 'react-router-dom';


const FooterSite = () => (
	<Row className="rowFooter">
	    <footer className='footero'  >
	    	<Col s={4}>
		    	<Col s={8} m={8} offset="s2 m2" >
	          		<img src={LogoSite} className="responsive-img"/> 
	          	</Col>
		    </Col>
		    <Col s={3}>

		    </Col>
		    <Col s={5}>
			    <ul className="links">
			      <li><NavLink className="grey-text text-lighten-3" to="/">  Home  </NavLink></li>
			      <li><a className="grey-text text-lighten-3" to="/">  Formas de Pagamento  </a></li>
			      <li><a className="grey-text text-lighten-3" to="/">  Sobre nós  </a></li>
			    </ul>
			</Col>
		</footer>
	</Row>
);

export default FooterSite;