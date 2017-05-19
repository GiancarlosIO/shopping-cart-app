import React from 'react';
import glamorous, { Div } from 'glamorous';
import PropTypes from 'prop-types';

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

export const Product = ({ id, name, price, image, description, handleClick }) => {

  const handleClickButton = () => handleClick({id, name, price, image, description});

  return (
    <ContainerProduct className="product" >
      <ImageProduct>
        <img className="img-card" src={image} alt={name} />
      </ImageProduct>
      <DescriptionProduct>
        <h5 className="margin-top-none text-blue">{name}</h5>
        <h6 className="text-red"> ${ price }.00 </h6>
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

Product.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Product;