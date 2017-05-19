import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Well } from 'react-bootstrap';

// Components
import Cart from './cart';

const CartList = ({ products, updateQuantity, removeProduct }) => {

  const renderCartProducts = () => {
    if (Object.keys(products).length > 0) {
      return Object.keys(products).map(index => (
        <Cart
          key={index}
          {...products[`${index}`]}
          updateQuantity={updateQuantity}
          removeProduct={removeProduct}
        />
      ));
    }
  };

  return (
    <div className="cart-list">
      { renderCartProducts() }
    </div>
  )

};

CartList.propTypes = {
  products: PropTypes.object,
  updateQuantity: PropTypes.func.isRequired,
  removeProduct: PropTypes.func.isRequired
}

export default CartList;