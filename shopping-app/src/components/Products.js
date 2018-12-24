import React, { Component } from "react";
import { connect } from "react-redux";
import { getProducts, getCategories } from "../store/actions/actions";

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
                      onClick={() => {
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
                onClick={() => {
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
                  <div key={product.id}>
                    <h3>{product.name}</h3>
                    <img src={product.imageURL} />
                    <p>{product.description}</p>
                    {`MRP Rs. ${product.price}`}
                  </div>
                );
              })
            : products.map(product => {
                return (
                  <div key={product.id}>
                    <h3>{product.name}</h3>
                    <img src={product.imageURL} />
                    <p>{product.description}</p>
                    {`MRP Rs. ${product.price}`}
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
    getCategories: () => dispatch(getCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
