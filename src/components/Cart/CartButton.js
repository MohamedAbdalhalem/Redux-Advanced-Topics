import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiSliceActions } from '../../store/uiSlice';

const CartButton = (props) => {
  const totalQuantity = useSelector(state => state.cartSlice.totalQuantity)
  const dispatch = useDispatch()
  function handleToggle(){
    dispatch(uiSliceActions.toggle())
  }
  return (
    <button className={classes.button} onClick={handleToggle}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
