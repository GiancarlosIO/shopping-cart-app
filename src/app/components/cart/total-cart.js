import React from 'react';
import glamorous from 'glamorous';

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
    <TotalCartContainer>
      <TotalCartRow className="midnight">Subtotal: {subtotal}</TotalCartRow>
      <TotalCartRow className="text-green text-14">IGV(18%): {parseFloat(subtotal*0.18).toFixed(2)}</TotalCartRow>
      <TotalCartRow className="text-red text-title text-bold">Total: ${total}</TotalCartRow>
    </TotalCartContainer>
);

export default TotalCart;