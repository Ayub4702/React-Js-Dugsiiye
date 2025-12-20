import { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  return (
    <div>
      <h2>to-do-list</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button onClick={handleTodo}>add task</button>
      <ul>
        {todos.map((todo) => (
          <li>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
