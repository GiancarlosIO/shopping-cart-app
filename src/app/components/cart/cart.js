import React from 'react';
import glamorous from 'glamorous';

import {
  Glyphicon,
  Button
} from 'react-bootstrap';

const ContainerCart = glamorous.div({
  display: 'flex',
  padding: '10px',
  border: '1px solid rgba(0,0,0,0.15)',
  flexFlow: 'row wrap',
  justifyContent: 'flex-start',
  alignItems: 'flex-start'
});

const ImageCart = glamorous.div({
  width: '120px',
  height: '130px'
});

const HeaderCart = glamorous.div({
  minHeight: '20px',
  textAlign: 'center'
});

const BodyCart = glamorous.div({
  position: 'relative',
  minHeight: '110px',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  alignItems: 'center'
});

const TitleCart = glamorous.div({
  width: 'calc(100% - 420px)',
  minHeight: '130px',
  padding: '0 15px',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'flex-start'
});

const NumberCart = glamorous.div({
  width: '100px',
  minHeight: '130px',
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'flex-start'
});

const Cart = ({updateQuantity, removeProduct, id, name, image, description, quantity, price}) => {

  const handleChange = (e) => {
    const value = e.target.value;
    updateQuantity(id, value);
  }

  const handleRemove = () => {
    removeProduct(id);
  }

  return (
    <ContainerCart>
      <ImageCart>
        <img className="img-card" src={image} alt={name} />
      </ImageCart>
      <TitleCart>
        <HeaderCart>
          Name
        </HeaderCart>
        <div>
          <h4>{name}</h4>
          <small>{description}</small>
        </div>
      </TitleCart>
      <NumberCart>
        <HeaderCart>
          Price
        </HeaderCart>
        <BodyCart>
          <span className="text-16 text-red">${price}.00</span>
        </BodyCart>
      </NumberCart>
      <NumberCart>
        <HeaderCart>Quantity</HeaderCart>
        <BodyCart>
          <input
            className="form-control"
            value={quantity}
            type="number"
            min={0} max={999}
            onChange={(e) => {handleChange(e)}} 
          />
        </BodyCart>
      </NumberCart>
      <NumberCart>
        <HeaderCart>
        </HeaderCart>
        <BodyCart>
          <span className="text-green">
            ${ price * quantity }.00
          </span>
          <Button
            bsStyle="warning"
            bsSize="xsmall"
            className="position-absolute position-bottom"
            onClick={handleRemove}
          >
            <Glyphicon glyph="remove" />
            Remove
          </Button>
        </BodyCart>
      </NumberCart>
    </ContainerCart>
  );
}

export default Cart;