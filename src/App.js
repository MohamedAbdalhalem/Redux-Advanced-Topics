import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { uiSliceActions } from "./store/uiSlice";
import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cartActions";

let intialStart = true;
function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state) => state.uiSlice.showCart);
  const notification = useSelector((state) => state.uiSlice.notification);
  const cart = useSelector((state) => state.cartSlice);

  useEffect(()=>{
    dispatch(fetchCartData())
  },[dispatch])

  useEffect(() => {
    
    if (intialStart) {
      intialStart = false;
      return;
    }
    if(cart.changed){
      dispatch(sendCartData(cart))
    }
    
  }, [cart,dispatch]);
  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
