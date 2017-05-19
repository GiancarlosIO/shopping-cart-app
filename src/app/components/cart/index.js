import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Grid,
  Row,
  Column,
  Jumbotron,
  Well,
  Button,
  Modal
} from 'react-bootstrap';

// Components
import CartList from './cart-list';
import TotalCart from './total-cart';
import Spinner from './spinner';

// actions
import {
  removeProductCart,
  updateQuantityCart,
  updateTotalCart
} from '../../actions/cart-actions';

export class CartIndex extends Component {

  state = {
    showConfirm: false,
    loadingCheckout: false,
    copySpinner: ''
  }

  updateQuantity = (id, value) => {
    this.props.dispatch(updateQuantityCart(id, value));
    this.props.dispatch(updateTotalCart());
  }

  removeProduct = (id) => {
    this.props.dispatch(removeProductCart(id));
    this.props.dispatch(updateTotalCart());
  }

  showConfirm = () => this.setState({showConfirm: true});
  hideConfirm = () => this.setState({showConfirm: false});

  handleCheckout = () => {
    this.hideConfirm();
    // Simulate process payment
    this.setState({loadingCheckout: true, copySpinner: 'Processing payment...'}, () => {
      setTimeout(() => {
        this.setState({copySpinner: 'Process completed!, thx buddy  (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'}, () => {
          setTimeout(() => {
            this.setState({loadingCheckout: false, copySpinner: ''});
            location.replace("/");
          }, 2000);
        });
      }, 3500)
    });
  }

  render() {
    const { products, total, subtotal } = this.props;
    return (
      <div>
        {
          Object.keys(products).length > 0 ?
          <Grid>
            <Row>
              {
                products ?
                <CartList
                  products={products}
                  updateQuantity={this.updateQuantity}
                  removeProduct={this.removeProduct}
                /> :
                <h3 className="text-green">Loading</h3>
              }
            </Row>
            <Row>
              <TotalCart total={total} subtotal={subtotal} />
            </Row>
            <Row>
              <Button
                bsStyle="success"
                className="float-right margin-right-15 margin-bottom-15"
                onClick={this.showConfirm}
              >
                Check-out
              </Button>
            </Row>
            <Row>
              <Modal show={this.state.showConfirm} onHide={this.hideConfirm}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    Are you sure?
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Button bsStyle="success" onClick={this.handleCheckout}>Yes!</Button>
                  <Button className="margin-left-10" bsStyle="danger" onClick={this.hideConfirm}>No</Button>
                </Modal.Body>
              </Modal>
              <Spinner loading={this.state.loadingCheckout} text={this.state.copySpinner} />
              <Modal show={this.state.showConfirm} onHide={this.hideConfirm}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    Are you sure?
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Button bsStyle="success" onClick={this.handleCheckout}>Yes!</Button>
                  <Button className="margin-left-10" bsStyle="danger" onClick={this.hideConfirm}>No</Button>
                </Modal.Body>
              </Modal>
            </Row>
          </Grid> :
          <Grid>
            <Row>
              <Well>
                <h4>You have not products for checkout, go back to products page and add some products Buddy (屮◉◞益◟◉)屮</h4>
                <Link to="/">t(ツ)_/¯ Back to products</Link>
              </Well>
            </Row>
          </Grid>
        }
      </div>
    )
  }

};

const mapStateToProps = (state) => ({
  products: state.cart.products,
  subtotal: state.cart.subtotal,
  total: state.cart.total
});

export default connect(mapStateToProps)(CartIndex);

