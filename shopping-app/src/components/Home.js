import React, { Component } from "react";
import { connect } from "react-redux";
import Banner from "./Banner";
import { getBanners, getCategories } from "../store/actions/actions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.getBanners();
    this.props.getCategories();
  }

  render() {
    const { categories, banners } = this.props;

    return (
      <div className="main">
        <Banner banners={banners} />
        {categories &&
          categories.map(post => {
            return post.enabled ? (
              <div className="content" key={post.id}>
                <div className="image">
                  <img src={post.imageUrl} alt={post.name} />
                </div>
                <div className="image-detail">
                  <div className="heading">{post.name}</div>
                  <p>{post.description}</p>
                  <button>Explore fruit-and-veg</button>
                </div>
              </div>
            ) : null;
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    banners: state.banner
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getBanners: () => dispatch(getBanners()),
    getCategories: () => dispatch(getCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
