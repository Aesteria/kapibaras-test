export const getCartStateFromLocalStorage = () => {
  const cart = localStorage.getItem("cartState");

  if (!cart) {
    return;
  }

  return {
    items: JSON.parse(cart).items,
    totalQuantity: JSON.parse(cart).totalQuantity,
    totalPrice: JSON.parse(cart).totalPrice,
  };
};

export const updateCartStateInLocalStorage = (cartState) => {
  localStorage.setItem(
    "cartState",
    JSON.stringify({
      items: cartState.items,
      totalPrice: cartState.totalPrice,
      totalQuantity: cartState.totalQuantity,
    })
  );
};
