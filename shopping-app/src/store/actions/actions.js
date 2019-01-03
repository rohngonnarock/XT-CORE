const bannersUrl = "https://ps-shopping-cart.firebaseio.com/banners.json";
const categoriesUrl = "https://ps-shopping-cart.firebaseio.com/categories.json";
const productsUrl = "https://ps-shopping-cart.firebaseio.com/products.json";
const addToCartUrl = "https://ps-shopping-cart.firebaseio.com/addToCart.json";

// const bannersUrl = "http://localhost:5000/banners";
// const categoriesUrl = "http://localhost:5000/categories";
// const productsUrl = "http://localhost:5000/products";
// const addToCartUrl = "http://localhost:5000/addToCart";

export const getBanners = () => {
  return (dispatch, getState) => {
    window
      .fetch(bannersUrl)
      .then(res => res.json())
      .then(res => {
        dispatch({ type: "GET_BANNERS_SUCCESS", banner: res });
      })
      .catch(err => {
        dispatch({ type: "GET_BANNERS_ERROR", err });
      });
  };
};

export const getProducts = () => {
  return (dispatch, getState) => {
    window
      .fetch(productsUrl)
      .then(res => res.json())
      .then(res => {
        dispatch({ type: "GET_PRODUCTS_SUCCESS", products: res });
      })
      .catch(err => {
        dispatch({ type: "GET_PRODUCTS_ERROR", err });
      });
  };
};

export const getCategories = () => {
  return (dispatch, getState) => {
    window
      .fetch(categoriesUrl)
      .then(res => res.json())
      .then(res => {
        dispatch({ type: "GET_CATEGORIES_SUCCESS", categories: res });
      })
      .catch(err => {
        dispatch({ type: "GET_CATEGORIES_ERROR", err });
      });
  };
};

export const addToCart = product => {
  return (dispatch, getState) => {
    let itm = getState().cartItems.filter(itm => {
      return product === itm.product;
    });
    if (itm.length === 0) {
      window
        .fetch(addToCartUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(product)
        })
        .then(res => {
          dispatch({ type: "ADD_TO_CART_SUCCESS", product });
        })
        .catch(err => {
          dispatch({ type: "ADD_TO_CART_ERROR", err });
        });
    } else {
      try {
        dispatch({ type: "ADD_TO_CART_SUCCESS", product });
      } catch (err) {
        dispatch({ type: "ADD_TO_CART_ERROR", err });
      }
    }
  };
};

export const removeFromCart = product => {
  return (dispatch, getState) => {
    try {
      dispatch({ type: "REMOVE_FROM_CART_SUCCESS", product });
    } catch (err) {
      dispatch({ type: "REMOVE_FROM_CART_ERROR", err });
    }
  };
};

export const showCart = () => {
  return (dispatch, getState) => {
    try {
      dispatch({ type: "SHOW_CART_SUCCESS" });
    } catch (err) {
      dispatch({ type: "SHOW_HIDE_CART_ERROR", err });
    }
  };
};

export const hideCart = () => {
  return (dispatch, getState) => {
    try {
      dispatch({ type: "HIDE_CART_SUCCESS" });
    } catch (err) {
      dispatch({ type: "SHOW_HIDE_CART_ERROR", err });
    }
  };
};
