export const getBanners = () => {
  return (dispatch, getState) => {
    window
      .fetch("http://localhost:5000/banners")
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
      .fetch("http://localhost:5000/products")
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
      .fetch("http://localhost:5000/categories")
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
    try {
      dispatch({ type: "ADD_TO_CART_SUCCESS", product });
    } catch (err) {
      dispatch({ type: "ADD_TO_CART_ERROR", err });
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
