import { cartSliceActions } from "./cartSlice";
import { uiSliceActions } from "./uiSlice";

export  function fetchCartData() {
  return async (dispatch) => {
    async function fetchData() {
      const response = await fetch(
        "https://redux-advanced-7261d-default-rtdb.firebaseio.com/cart.json",
      );

      if (!response.ok) {
        throw new Error("failed fetching data");
      }

      const data = await response.json();

      return data;
    }

    try {
      const cartData = await fetchData();
      dispatch(cartSliceActions.replaceCart(cartData))
    } catch (error) {
      dispatch(
        uiSliceActions.showNotification({
          status: "error",
          title: "error",
          message: "Sending cart data failed",
        }),
      );
    }
  };
}

export function sendCartData(cart) {
  return async function (dispatch) {
    dispatch(
      uiSliceActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      }),
    );

    async function sendRequest() {
      const response = await fetch(
        "https://redux-advanced-7261d-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items : cart.items || [],
            totalQuantity : cart.totalQuantity
          }),
        },
      );

      if (!response.ok) {
        throw new Error("fialed fetching data");
      }
    }

    try {
      await sendRequest();
      dispatch(
        uiSliceActions.showNotification({
          status: "success",
          title: "success...",
          message: "success cart data!",
        }),
      );
    } catch (error) {
      sendCartData().catch((err) => {
        dispatch(
          uiSliceActions.showNotification({
            status: "error",
            title: "error",
            message: "Sending cart data failed",
          }),
        );
      });
    }
  };
}
