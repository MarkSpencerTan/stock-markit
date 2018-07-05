import React, { Component } from 'react';
import logo from '../img/stockmarkit.png'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import '../css/Navigation.css';

class Navigation extends Component {
	constructor(){
		super();
		this.state = {
			'search_result': {}
		}
	}

	searchStock(e){
		if(e.key === 'Enter'){
			e.preventDefault();
			let stock = e.target.value;

			// call api

			// clear the search input
			document.getElementById("search_stock").value = '';

		}
	}


	render() {
		return (
			<Navbar inverse collapseOnSelect staticTop>
				<Navbar.Header>
					<img src={logo} height="50px"/>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Navbar.Form pullRight>
						<FormGroup>
							<FormControl id="search_stock" type="text" placeholder="Search Stocks ..." onKeyPress={this.searchStock}/>
						</FormGroup>
					</Navbar.Form>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}

export default Navigation;
