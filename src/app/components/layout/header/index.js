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
          <Nav>
              <CustomLink to="/asdasd" childrenComponent={ () => (
                    <Glyphicon glyph="send" />
                  )
                }
              />
          </Nav>
          <Nav pullRight>
            <CustomLink to="/" label="Products" />
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