import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  Nav,
  Navbar,
  NavItem,
  Glyphicon
} from 'react-bootstrap';

import CustomLink from './custom-link';

export class Header extends Component {
  render() {
    return (
      <Navbar inverse collapseOnSelect fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Shopping cart App</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <CustomLink to="/asdasd" label="NotFound"/>
            <CustomLink to="/cart" childrenComponent={ () => (
                  <div className="text-normal">
                    <Glyphicon glyph="shopping-cart" />
                    { this.props.cartCount }
                  </div>
                )
              }
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;