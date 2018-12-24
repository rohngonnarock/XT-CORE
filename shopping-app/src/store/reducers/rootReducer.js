const initState = {
  products: [],
  banner: [],
  categories: []
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("LOGIN_ERROR");
      return {
        ...state,
        authError: "Login failed"
      };

    case "LOGIN_SUCCESS":
      console.log("LOGIN_SUCCESS");
      return {
        ...state,
        authError: null
      };

    case "SIGNOUT_SUCCESS":
      console.log("SIGNOUT_SUCCESS");
      return state;

    case "SIGNUP_SUCCESS":
      console.log("SIGNUP_SUCCESS");
      return {
        ...state,
        authError: null
      };

    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message
      };

    case "GET_BANNERS_SUCCESS":
      console.log("GET_BANNERS_SUCCESS");
      return {
        ...state,
        banner: action.banner
      };

    case "GET_BANNERS_ERROR":
      console.log("GET_BANNERS_ERROR");
      return {
        ...state,
        authError: action.err.message
      };

    case "GET_CATEGORIES_SUCCESS":
      console.log("GET_CATEGORIES_SUCCESS");
      return {
        ...state,
        categories: action.categories
      };

    case "GET_CATEGORIES_ERROR":
      console.log("GET_CATEGORIES_ERROR");
      return {
        ...state,
        authError: action.err.message
      };

    case "GET_PRODUCTS_SUCCESS":
      console.log("GET_PRODUCTS_SUCCESS");
      return {
        ...state,
        products: action.products
      };

    case "GET_PRODUCTS_ERROR":
      console.log("GET_PRODUCTS_ERROR");
      return {
        ...state,
        authError: action.err.message
      };

    case "ADD_TO_CART_SUCCESS":
      console.log("ADD_TO_CART_SUCCESS");
      return {
        ...state,
        authError: action.err.message
      };

    case "ADD_TO_CART_ERROR":
      console.log("ADD_TO_CART_ERROR");
      return {
        ...state,
        authError: action.err.message
      };

    default:
      return state;
  }
};

export default rootReducer;
