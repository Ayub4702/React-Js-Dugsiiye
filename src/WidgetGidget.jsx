import { useContext } from "react";
import ContextCarWidgetGidget from "./ContextCarWidgetGidget";

const WidgetGidget = () => {
  const { cart, setCart } = useContext(ContextCarWidgetGidget);

  const handleAdd = (name, price) => {
    setCart([...cart, { id: Date.now(), name, price }]);
  };

  return (
    <div>
      <h2>Widget - $19.99</h2>
      <button onClick={() => handleAdd("Widget", 19.99)}>Add to cart</button>

      <h2>Gadget - $18.00</h2>
      <button onClick={() => handleAdd("Gadget", 18)}>Add to cart</button>
    </div>
  );
};

export default WidgetGidget;