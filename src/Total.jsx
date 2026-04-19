import { useContext } from "react";
import ContextCarWidgetGidget from "./ContextCarWidgetGidget";

const CartSummary = () => {
  const { cart, setCart } = useContext(ContextCarWidgetGidget);

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Cart Summary</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <span>{item.name} - ${item.price}</span>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default CartSummary;