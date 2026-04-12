import { useReducer, useState } from "react";

const initialState = { items: [] };

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return { ...state, items: [...state.items, action.payload] };

    case "remove":
      return {
        ...state,
        items: state.items.filter((i) => i.name !== action.payload),
      };

    case "increment":
      return {
        ...state,
        items: state.items.map((i) =>
          i.name === action.payload ? { ...i, count: i.count + 1 } : i,
        ),
      };

    case "clear":
      return initialState;

    default:
      return state;
  }
}

function MyCart() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState("");
  const itemPrice = 19;
  const totalPrice = state.items.reduce(
    (total, item) => total + item.count * itemPrice,
    0,
  );

  function handleAdd() {
    dispatch({ type: "add", payload: { name: input, count: 1 } });
    setInput("");
  }

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>add</button>
      <button onClick={() => dispatch({ type: "clear" })}>clear</button>

      {state.items.map((item) => (
        <li key={item.name}>
          <p>
            {item.name} : <span>{item.count}</span>
          </p>

          <button
            onClick={() => dispatch({ type: "increment", payload: item.name })}
          >
            +
          </button>
          <button
            onClick={() => dispatch({ type: "remove", payload: item.name })}
          >
            remove
          </button>
          <p>{item.count * itemPrice}</p>
          <p>Total: {totalPrice}</p>
        </li>
      ))}
    </div>
  );
}

export default MyCart;
