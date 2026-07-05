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
   <div className="min-h-screen bg-gray-50 py-10">
  <div className="m-10 flex justify-center gap-4">
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="enter a new todo"
      className="bg-white p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400 w-64"
    />

    <button
      onClick={handleAdd}
      className="bg-pink-400 hover:bg-pink-500 text-white w-20 h-10 rounded-lg font-medium transition-colors"
    >
      Add
    </button>
  </div>

  <ul className="flex flex-col items-center gap-3 max-w-md mx-auto">
    {state.map((todo) => (
      <li
        key={todo.id}
        className="flex justify-between items-center w-full bg-white p-3 rounded-lg shadow-sm"
      >
        <span
          className={`cursor-pointer select-none ${
            todo.complete ? "line-through text-gray-400" : "text-gray-800"
          }`}
          onClick={() => dispatch({ type: "toggle", playload: todo.id })}
        >
          {todo.text}
        </span>
        <button
          className="text-red-400 hover:text-red-600 text-sm font-medium transition-colors"
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
