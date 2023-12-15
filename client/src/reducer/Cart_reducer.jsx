const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    console.log(action.payload);
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem._id !== action.payload),
    };
  }
  if (action.type === "INCREASE") {
    console.log("increase called");
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem._id === action.payload) {
        console.log("Increasing quantity for item with ID", cartItem.id);
        console.log("Before increase:", cartItem.qty);
        return { ...cartItem, qty: cartItem.qty + 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem._id === action.payload) {
          return { ...cartItem, qty: cartItem.qty - 1 };
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.qty !== 0);
    return { ...state, cart: tempCart };
  }

  if (action.type === "GET_TOTALS") {
    console.log("Calculating totals...");
    console.log("Cart data:", state.cart);

    let { total, qty } = state.cart.reduce(
      (cartTotal, cartItem) => {
        console.log("Processing item:", cartItem);

        const { price } = cartItem;
        const { qty } = cartItem;

        if (price === undefined || qty === undefined) {
          console.log("Missing price or qty for item:", cartItem);
          return cartTotal;
        }

        const itemTotal = price * qty;
        console.log("Item Total:", itemTotal);

        cartTotal.total += itemTotal;
        cartTotal.qty += qty;
        return cartTotal;
      },
      {
        total: 0,
        qty: 1,
      }
    );

    total = parseFloat(total.toFixed(2));
    console.log("Total:", total);

    return { ...state, total, qty };
  }

  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, cart: action.payload, loading: false };
  }
  // Inside your reducer
  if (action.type === "ADD_TO_CART") {
    console.log("add to cart");
    const newItem = action.payload;
    console.log(newItem);
    const existingItem = state.cart.find((item) => item._id === newItem._id);

    if (existingItem) {
      // If the item already exists in the cart, increase the quantity by 1.
      console.log("Ex");
      const updatedCart = state.cart.map((item) => {
        if (item._id === newItem._id) {
          return { ...item, qty: item.qty + 1 };
        }
        return item;
      });

      return { ...state, cart: updatedCart };
    } else {
      // If the item doesn't exist in the cart, add it with a quantity of 1.
      newItem.qty = 1;
      return { ...state, cart: [...state.cart, newItem] };
    }
  }

  if (action.type === "TOGGLE_AMOUNT") {
    let tempCart = state.cart
      .map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          if (action.payload.type === "inc") {
            return { ...cartItem, qty: cartItem.qty + 1 };
          }
          if (action.payload.type === "dec") {
            return { ...cartItem, qty: cartItem.qty - 1 };
          }
        }
        return cartItem;
      })
      .filter((cartItem) => cartItem.qty !== 0);
    return { ...state, cart: tempCart };
  }
  throw new Error("no matching action type");
};

export default reducer;
