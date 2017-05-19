import React from 'react';
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
    } else {
      return (
        <Well>
          <h4>You have not products for checkout, go back to products page and add some products Buddy (屮◉◞益◟◉)屮</h4>
          <Link to="/">t(ツ)_/¯ Back to products</Link>
        </Well>
      )
    }
  };

  return (
    <div>
      { renderCartProducts() }
    </div>
  )

};

export default CartList;