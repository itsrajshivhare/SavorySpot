import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1>Cart Items - {cartItems.length}</h1>
      <h1>
        <button onClick={() => handleClearCart()}>Clear Cart</button>
      </h1>
      {cartItems.map((item) => (
        <CartItems key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cart;
