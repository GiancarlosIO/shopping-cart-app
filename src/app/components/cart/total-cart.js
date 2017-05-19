import React from 'react';
import glamorous from 'glamorous';
import PropTypes from 'prop-types';

const TotalCartContainer = glamorous.div({
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'flex-end',
  padding: '20px'
});

const TotalCartRow = glamorous.div({
  padding: '10px 0'
});

const TotalCart = ({ total, subtotal }) => (
    <TotalCartContainer className="total-cart">
      <TotalCartRow className="midnight">Subtotal: {subtotal}</TotalCartRow>
      <TotalCartRow className="text-green text-14">IGV(18%): {parseFloat(subtotal*0.18).toFixed(2)}</TotalCartRow>
      <TotalCartRow className="text-red text-title text-bold">Total: ${total}</TotalCartRow>
    </TotalCartContainer>
);

TotalCart.propTypes = {
  total: PropTypes.number,
  subtotal: PropTypes.number
}

export default TotalCart;