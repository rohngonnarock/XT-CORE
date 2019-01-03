import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getProducts,
  getCategories,
  addToCart,
  showCart
} from "../store/actions/actions";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: null,
      filteredProducts: null
    };
  }
  componentDidMount() {
    this.props.getProducts();
    this.props.getCategories();
    this.selectCategory(null);
  }

  selectCategory(categoryId) {
    let filteredProducts = this.props.products.filter(
      itm => itm.category === categoryId
    );
    this.setState({
      categoryId,
      filteredProducts
    });
  }

  addToCart(product) {
    this.props.addToCart(product);
    this.props.showCart();
  }
  render() {
    const { categories, products } = this.props;
    const { filteredProducts } = this.state;
    return (
      <div className="Product">
        <aside>
          <ul>
            {categories &&
              categories.map(category => {
                return category.enabled ? (
                  <li key={category.id}>
                    <a
                      href="/"
                      onClick={e => {
                        e.preventDefault();
                        this.selectCategory(category.id);
                      }}
                    >
                      {category.name}
                    </a>
                  </li>
                ) : null;
              })}
            <li>
              <a
                href="/"
                onClick={e => {
                  e.preventDefault();
                  this.selectCategory(null);
                }}
              >
                Remove Category
              </a>
            </li>
          </ul>
        </aside>
        <div className="main">
          {filteredProducts && filteredProducts.length > 0
            ? filteredProducts.map(product => {
                return (
                  <div className="product" key={product.id}>
                    <div className="title">
                      <h3>{product.name}</h3>
                    </div>
                    <div className="image">
                      <img src={product.imageURL} alt={product.description} />
                    </div>
                    <div className="description"> {product.description}</div>
                    {`MRP Rs. ${product.price}`}
                    <button
                      onClick={() => {
                        this.addToCart(product);
                      }}
                    >
                      Buy Now
                    </button>
                  </div>
                );
              })
            : products.map(product => {
                return (
                  <div className="product" key={product.id}>
                    <div className="title">
                      <h3>{product.name}</h3>
                    </div>
                    <div className="image">
                      <img src={product.imageURL} alt={product.description} />
                    </div>
                    <div className="description"> {product.description}</div>
                    <div className="input-group">
                      {`MRP Rs. ${product.price}`}
                      <button
                        onClick={() => {
                          this.addToCart(product);
                        }}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts()),
    getCategories: () => dispatch(getCategories()),
    addToCart: product => dispatch(addToCart(product)),
    showCart: () => dispatch(showCart())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
