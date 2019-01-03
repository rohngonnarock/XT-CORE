const initState = {
  products: [],
  banner: [],
  categories: [],
  cartItems: [],
  cartTotal: 0,
  hideCart: false
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
        authError: action.err
      };

    case "GET_BANNERS_SUCCESS":
      return {
        ...state,
        banner: action.banner
      };

    case "GET_BANNERS_ERROR":
      console.log("GET_BANNERS_ERROR");
      return {
        ...state,
        authError: action.err
      };

    case "GET_CATEGORIES_SUCCESS":
      return {
        ...state,
        categories: action.categories
      };

    case "GET_CATEGORIES_ERROR":
      console.log("GET_CATEGORIES_ERROR");
      return {
        ...state,
        authError: action.err
      };

    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.products
      };

    case "GET_PRODUCTS_ERROR":
      console.log("GET_PRODUCTS_ERROR");
      return {
        ...state,
        authError: action.err
      };

    case "ADD_TO_CART_SUCCESS":
      let empObj = {
        product: action.product
      };
      let itm = state.cartItems.filter(itm => {
        return action.product === itm.product;
      });

      let prevArr = state.cartItems.filter(itm => {
        return action.product !== itm.product;
      });

      if (itm.length > 0) {
        if (itm[0].stockLeft > 0) {
          empObj.qty = itm[0].qty + 1;
          empObj.stockLeft = itm[0].stockLeft - 1;
        } else {
          empObj.qty = itm[0].qty;
          empObj.stockLeft = itm[0].stockLeft;
        }
      } else {
        empObj.qty = 1;
        empObj.stockLeft = action.product.stock - 1;
      }

      return {
        ...state,
        cartItems: [...prevArr, empObj]
      };

    case "ADD_TO_CART_ERROR":
      console.log("ADD_TO_CART_ERROR");
      return {
        ...state,
        authError: action.err
      };

    case "REMOVE_FROM_CART_SUCCESS":
      let cartItems = [];
      let emptyObj = {
        product: action.product
      };
      let item = state.cartItems.filter(itm => {
        return action.product === itm.product;
      });

      let prevArray = state.cartItems.filter(itm => {
        return action.product !== itm.product;
      });

      if (item.length > 0) {
        if (item[0].qty > 1) {
          emptyObj.qty = item[0].qty - 1;
          emptyObj.stockLeft = item[0].stockLeft + 1;
          cartItems = [...prevArray, emptyObj];
        } else {
          cartItems = [...prevArray];
        }
      }

      return {
        ...state,
        cartItems: [...cartItems]
      };

    case "REMOVE_FROM_CART_ERROR":
      console.log("REMOVE_FROM_CART_ERROR");
      return {
        ...state,
        authError: action.err
      };

    case "SHOW_CART_SUCCESS":
      console.log("SHOW_CART_SUCCESS");
      return {
        ...state,
        hideCart: false
      };

    case "SHOW_HIDE_CART_ERROR":
      console.log("SHOW_HIDE_CART_ERROR");
      return {
        ...state
      };

    case "HIDE_CART_SUCCESS":
      console.log("HIDE_CART_SUCCESS");
      return {
        ...state,
        hideCart: true
      };

    default:
      return state;
  }
};

export default rootReducer;
