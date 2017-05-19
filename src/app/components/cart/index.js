import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Grid,
  Row,
  Column,
  Jumbotron,
  Well
} from 'react-bootstrap';

// Components
import CartList from './cart-list';

// actions
import {
  removeProductCart,
  updateQuantityCart
} from '../../actions/cart-actions';

export class CartIndex extends Component {

  updateQuantity = (id, value) => {
    console.log('updating quantity of', id);
    console.log('updating quantity value', value);
    this.props.dispatch(updateQuantityCart(id, value));
  }

  removeProduct = (id) => {
    console.log('removing product', id);
    this.props.dispatch(removeProductCart(id));
  }

  render() {
    const { products } = this.props;
    return (
      <Grid>
        <Row>
          {
            products ?
            <CartList
              products={products}
              updateQuantity={this.updateQuantity}
              removeProduct={this.removeProduct}
            /> :
            <h3 className="text-green">Loading</h3>
          }
        </Row>
      </Grid>
    )
  }

};

const mapStateToProps = (state) => ({ products: state.cart.products });

export default connect(mapStateToProps)(CartIndex);

