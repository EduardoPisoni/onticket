import React, { Component } from 'react';

import { Navbar, NavItem, Row, Col} from 'react-materialize';

import LogoSite from '../../images/logo/LogoSite.png';

import { NavLink } from 'react-router-dom';

import './header.css';

const Header = () => (
  <Row className="headerbar">  
    <Navbar className="transparent headerbar" fixed >
    	<Col s={3}>
    			<Col s={8} m={8} offset="s2 m2" >
            <NavLink to="/">
              <img src={LogoSite} className="responsive-img"/> 
            </NavLink>
	         </Col>
    	</Col>

    	<Col s={7}></Col>

    	<Col s={1}>
			<NavLink className="aa" to="/">Home </NavLink>
    	</Col>

    	<Col s={1}>
			<NavLink className="aa" to="/">Login </NavLink>
    	</Col>
      	
      	
    </Navbar>
  </Row>
);

export default Header;