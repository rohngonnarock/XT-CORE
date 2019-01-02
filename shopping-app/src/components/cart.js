import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart, hideCart } from "../store/actions/actions";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  addToCart(product) {
    this.props.addToCart(product);
  }

  removeFromCart(product) {
    this.props.removeFromCart(product);
  }

  toggleForm() {
    this.props.hideCart();
  }
  render() {
    let { cartItems, cartTotal, totalItems, showForm } = this.props;
    return (
      <div className="cart">
        <div className="chat-popup" hidden={showForm}>
          <div className="form-container">
            <div className="cart-header">
              <h1>My Cart</h1>
              <button
                onClick={() => {
                  this.toggleForm();
                }}
              >
                X
              </button>
            </div>
            <div className="cart-item">cart items -- {totalItems}</div>
            {cartItems &&
              cartItems.map(itm => {
                return itm.qty > 0 ? (
                  <div key={itm.product.id}>
                    {itm.product.name}
                    <button
                      onClick={() => {
                        this.addToCart(itm.product);
                      }}
                    >
                      +
                    </button>
                    {itm.qty}
                    <button
                      onClick={() => {
                        this.removeFromCart(itm.product);
                      }}
                    >
                      -
                    </button>

                    {`Total Price is : ${itm.qty * itm.product.price}`}
                  </div>
                ) : null;
              })}
            Promo code can be applied on payment page.
            <button
              type="button"
              className="btn cancel"
              onClick={this.toggleForm}
            >
              {`Proceed to Checkout : ${cartTotal} `}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let total = 0;
  if (state.cartItems.length > 0) {
    total = state.cartItems.reduce((acc, currVal) => {
      return acc + currVal.product.price * currVal.qty;
    }, 0);
  }
  return {
    cartItems: state.cartItems,
    cartTotal: total,
    totalItems: state.cartItems.length,
    showForm: state.hideCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: product => dispatch(addToCart(product)),
    removeFromCart: product => dispatch(removeFromCart(product)),
    hideCart: () => dispatch(hideCart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
