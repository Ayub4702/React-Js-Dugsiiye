import { useReducer, useState } from "react";

const initial = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.playload];

    case "toggle":
      return state.map((todo) =>
        todo.id === action.playload
          ? { ...todo, complete: !todo.complete }
          : todo,
      );

    case "delete":
      return state.filter((todo) => todo.id !== action.playload);

    default:
      return state;
  }
};

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initial);

  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text: text,
        complete: false,
      };

      dispatch({ type: "add", playload: newTodo });

      setText("");
    }
  };
  return (
    <div>
      <h2>hello</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="enter a new todo"
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {state.map((todo) => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.complete ? "line-throug" : "none" }}
              onClick={() => dispatch({ type: "toggle", playload: todo.id })}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: "delete", playload: todo.id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
