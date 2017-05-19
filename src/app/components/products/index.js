import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
  Grid,
  Row,
  Column,
  PageHeader,
  Glyphicon
} from 'react-bootstrap';


// Actions
import {
  setSearchText,
  getProductsByPage,
  getAllProducts
} from '../../actions/products-action';
import {
  addProductCart,
  removeProductCart
} from '../../actions/cart-actions';

// Components
import Filter from './filter';
import ProductList from './product-list';

// Selectors
import {
  getFilteredProducts
} from '../../selectors/';

export class ProductsIndex extends Component {

  handleChangeFilter = (event) => {
    const value = event.target.value;
    this.handleChangeFilterDebounce(value);
  }

  handleChangeFilterDebounce = _.debounce((value) => {
    console.log('value filter', value);
    this.props.dispatch(setSearchText(value));
  }, 300);

  handleClickProduct = (product) => {
    this.props.dispatch(addProductCart(product));
  }

  componentDidMount() {
    // this.props.dispatch(getProductsByPage(1));
    this.props.dispatch(getAllProducts());
  }

  render() {
    const { products } = this.props;

    return (
      <Grid>
        <PageHeader className="text-center">
          Buy the perfect product for you and change your entire life!
          <Glyphicon glyph="heart" />
        </PageHeader>
        <Row>
          <Filter handleChange={this.handleChangeFilter} />
        </Row>
        <Row>
          <ProductList products={products} handleClick={this.handleClickProduct} />
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({ products: getFilteredProducts(state) });

export default connect(mapStateToProps)(ProductsIndex);