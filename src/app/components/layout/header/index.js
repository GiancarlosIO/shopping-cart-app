import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
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
      <Navbar inverse collapseOnSelect fluid fixedTop>
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
            <CustomLink to="/" activeOnlyWhenExact label="Products" />
            <CustomLink to="/cart" childrenComponent={ () => (
                  <div className="text-normal">
                    <Glyphicon glyph="shopping-cart" />
                    <span className="margin-left-10">{ this.props.cartCount }</span>
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

const mapStateToProps = (state) => {
  const products = { ...state.cart.products };
  const count = Object.keys(products).length > 0 ? Object.keys(products).map(index => products[index].quantity).reduce((total, quantity) => (total + quantity)) : 0;
  return {
    cartCount: count
  }
}

const HeaderConnected = connect(mapStateToProps)(Header);

export default withRouter(HeaderConnected);