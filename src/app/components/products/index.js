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
  getProductsByPage
} from '../../actions/products-action';

// Components
import Filter from './filter';
import ProductList from './product-list';

export class ProductsIndex extends Component {

  handleChangeFilter = (event) => {
    const value = event.target.value;
    this.handleChangeFilterDebounce(value);
  }

  handleChangeFilterDebounce = _.debounce((value) => {
    console.log('value filter', value);
  }, 300);

  componentDidMount() {
    this.props.dispatch(getProductsByPage(1));
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
          <ProductList products={products} />
        </Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => ({ products: state.products.all })

export default connect(mapStateToProps)(ProductsIndex);