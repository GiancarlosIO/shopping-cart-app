import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

import Product from './product';

const PaddedDiv = glamorous.div({
  padding: '20px 0',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around'
});

export const ProductList = ({ products, handleClick }) => {

  const renderProducts = () => {
    return Object.keys(products).length > 0 ?
      Object.keys(products).map( index => (
        <Product key={index} handleClick={handleClick} {...products[`${index}`]} />
      )) :
      (<h3>Products not found ヽ(ヅ)ノ</h3>)
  }

  return (
    <PaddedDiv>
      {
        products ?
        renderProducts() :
        (<h3>Loading...</h3>)
      }
    </PaddedDiv>
  );
}

ProductList.propTypes = {
  products: PropTypes.object,
  handleClick: PropTypes.func.isRequired
}

export default ProductList;