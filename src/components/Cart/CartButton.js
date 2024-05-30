import classes from './CartButton.module.css';
import {useDispatch,useSelector} from 'react-redux'
import { uiActions } from '../../store/ui-slice';


const CartButton = (props) => {
  const dispatch= useDispatch()
  const cartQuantity=useSelector(state => state.cart.totalQuantity)

  function togglerHandle(){

    dispatch(uiActions.showUiCart())




  }
  return (
    <button className={classes.button} onClick={togglerHandle}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
