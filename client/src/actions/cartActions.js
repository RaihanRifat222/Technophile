export const addToCart = (p, quantity, varient) => (dispatch, getState) => {
    var cartItem = {
      name: p.name,
      _id: p._id,
      image: p.image,
      varient: varient,
      quantity: Number(quantity),
      prices: p.prices,
      price: p.prices[0][varient] * quantity,
    };
  


if (cartItem.quantity > 10) {
    alert("you Can only add 10 products");
  } else {
    if (cartItem.quantity < 1) {
      dispatch({ type: "DELETE_FROM_CART", payload: p });
    } else {
      dispatch({ type: "ADD_TO_CART", payload: cartItem });
      localStorage.setItem(
        "cartItems",
        JSON.stringify(getState().cartReducer.cartItems)
      );
    }
  }
};

export const deleteFromCart = (p) => (dispatch, getState) => {
  dispatch({ type: "DELETE_FROM_CART", payload: p });
  const cartItems = getState().cartReducer.cartitems;
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};