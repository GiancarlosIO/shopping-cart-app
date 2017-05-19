import React from 'react';
import glamorous, { Div } from 'glamorous';

import {
  Button,
  Glyphicon
} from 'react-bootstrap';

const ContainerProduct = glamorous.div({
  marginTop: '20px',
  padding: '10px',
  width: '380px',
  minHeight: '190px',
  border: '1px solid rgba(0,0,0,0.2)',
  borderRadius: '6px',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'flex-start'
});

const ImageProduct = glamorous.div({
  width: '160px',
  height: '120px'
});

const DescriptionProduct = glamorous.div({
  width: '195px',
  height: '100%',
  padding: '10px',
  boxSizing: 'border-box'
});

const ActionsProduct = glamorous.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const Product = ({ id, name, price, image, description, handleClick }) => {

  const handleClickButton = () => handleClick({id, name, price, image, description});

  return (
    <ContainerProduct >
      <ImageProduct>
        <img className="img-card" src={image} alt={name} />
      </ImageProduct>
      <DescriptionProduct>
        <h5 className="margin-top-none text-blue">{name}</h5>
        <h6 className="text-red"> { price } </h6>
        <h6 className="margin-top-none text-midnight" >{description}</h6>
        <ActionsProduct>
          <Button bsStyle="success" onClick={handleClickButton}>
            <Glyphicon glyph="plus"/>
            Add to cart
          </Button>
        </ActionsProduct>
      </DescriptionProduct>
    </ContainerProduct>
  )
};

export default Product;