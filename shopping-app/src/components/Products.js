import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getProducts,
  getCategories,
  addToCart
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
    if (this.state.categoryId === categoryId) {
      categoryId = null;
    }
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
                  <li
                    key={category.id}
                    className={
                      category.id === this.state.categoryId ? "active" : null
                    }
                  >
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
          </ul>
          <select
            name="dropdown"
            onChange={e => {
              this.selectCategory(e.target.value);
            }}
          >
            <option value="null">Select category</option>
            {categories &&
              categories.map(category => {
                return category.enabled ? (
                  <option
                    key={category.id}
                    className={
                      category.id === this.state.categoryId ? "active" : null
                    }
                    value={category.id}
                  >
                    {category.name}
                  </option>
                ) : null;
              })}
          </select>
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
    addToCart: product => dispatch(addToCart(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
