const initialState = {
  products: [
    { id: 1, name: "Apple", price: 1 },
    { id: 2, name: "Banana", price: 2 },
    { id: 3, name: "Orange", price: 3 },
  ],
  cart: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const product = state.products.find((p) => p.id === action.payload);
      const existingItem = state.cart.find(
        (item) => item.id === action.payload,
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...product, quantity: 1 }],
      };
    }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item,
          )
          .filter((item) => item.quantity > 0),
      };
    case "UPDATE_CART_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item,
        ),
      };
    default:
      return state;
  }
};
export default cartReducer;
