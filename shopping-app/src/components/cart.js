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

  render() {
    let { cartItems, cartTotal, totalItems, showForm, hideCart } = this.props;
    return (
      <div className="cart">
        <div className="chat-popup" hidden={showForm}>
          <div className="form-container">
            <div className="cart-header">
              <div>
                <h4>My Cart </h4>
                {totalItems > 0 ? (
                  <span>
                    ({totalItems} {totalItems > 1 ? "items" : "item"})
                  </span>
                ) : null}
              </div>

              <button className="btn btn-cancel" onClick={hideCart}>
                <i className="fas fa-times" />
              </button>
            </div>
            <div className="content">
              {cartItems && cartItems.length > 0 ? (
                []
                  .concat(cartItems)
                  .sort((a, b) => {
                    var nameA = a.product.id.toUpperCase();
                    var nameB = b.product.id.toUpperCase();
                    if (nameA < nameB) {
                      return -1;
                    }
                    if (nameA > nameB) {
                      return 1;
                    }
                    return 0;
                  })
                  .map(itm => {
                    return itm.qty > 0 ? (
                      <div key={itm.product.id} className="content-item">
                        <div className="item-box">
                          <div className="image-box">
                            <img
                              src={itm.product.imageURL}
                              alt={itm.product.description}
                            />
                          </div>
                          <div className="price-box">
                            <div> {itm.product.name} </div>
                            <div>
                              <button
                                onClick={() => {
                                  this.addToCart(itm.product);
                                }}
                              >
                                <i className="fas fa-plus" />
                              </button>
                              {itm.qty}
                              <button
                                onClick={() => {
                                  this.removeFromCart(itm.product);
                                }}
                              >
                                <i className="fas fa-minus" />
                              </button>
                              <i className="fas fa-times" />
                              {`Rs.${itm.product.price}`}
                            </div>
                          </div>
                        </div>

                        <div>{`Rs.${itm.qty * itm.product.price}`}</div>
                      </div>
                    ) : null;
                  })
              ) : (
                <div className="empty-cart">
                  <div> No items in your cart </div>
                  <p>Your favourite items are just a click away</p>
                </div>
              )}
            </div>
            {cartItems && cartItems.length > 0 ? (
              <div className="proceed">
                <p>Promo code can be applied on payment page.</p>
                <button type="button" className="btn cancel" onClick={hideCart}>
                  <span> Proceed to Checkout</span>
                  <span>
                    Rs.{cartTotal} <i className="fas fa-angle-right" />
                  </span>
                </button>
              </div>
            ) : (
              <div>
                <button type="button" className="btn start" onClick={hideCart}>
                  <span> Start Shopping</span>
                </button>
              </div>
            )}
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
    totalItems: state.cartTotolItems,
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
