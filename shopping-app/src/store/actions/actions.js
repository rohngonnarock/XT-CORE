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
