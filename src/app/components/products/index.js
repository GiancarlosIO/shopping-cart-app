import React, { Component } from 'react';
import _ from 'lodash';
import {
  Grid,
  Row,
  Column,
  PageHeader,
  Glyphicon
} from 'react-bootstrap';


// Components
import Filter from './filter';

export class ProductsIndex extends Component {

  handleChangeFilter = (event) => {
    const value = event.target.value;
    this.handleChangeFilterDebounce(value);
  }

  handleChangeFilterDebounce = _.debounce((value) => {
    console.log('value filter', value);
  }, 300)

  render() {
    return (
      <Grid>
        <PageHeader className="text-center">
          Buy the perfect product for you and change your entire life!
          <Glyphicon glyph="heart" />
        </PageHeader>
        <Row>
          <Filter handleChange={this.handleChangeFilter} />
        </Row>
        <h1>Products Index</h1>
      </Grid>
    )
  }
}

export default ProductsIndex;