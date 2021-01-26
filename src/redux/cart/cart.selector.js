import { createSelector } from 'reselect';

//input selector
const selectCart = state => state.cart; 

//output selector - outputs via memoization
export const selectorCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems  
);

//As input you can also use output of other output selector instead of input selector - reuse of memoization/caching
export const selectCartItemsCount = createSelector(
    [selectorCartItems],
    cartItems =>
        cartItems.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,0)
);
