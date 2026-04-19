import { useState } from "react";
import ContextCarWidgetGidget from "./ContextCarWidgetGidget";
import WidgetGidget from "./WidgetGidget";
import Total from "./Total";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <ContextCarWidgetGidget.Provider value={{ cart, setCart }}>
      <WidgetGidget />
      <Total />
    </ContextCarWidgetGidget.Provider>
  );
}

export default App;