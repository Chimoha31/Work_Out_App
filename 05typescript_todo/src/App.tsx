import { type } from "os";
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  type Todo = {
    inputValue: string;
    id: number;
    checked: boolean;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    // console.log(e.target.value)
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo: Todo = {
      inputValue: inputValue,
      id: todos.length,
      checked: false,
    };

    if (inputValue !== "") {
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };

  const handleEdit = (id: number, inputValue: string) => {
    const editTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }
      return todo;
    });
    setTodos(editTodos);
  };

  const handleChecked = (id: number, checked: boolean) => {
    const checkedTodo = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }
      return todo;
    });
    setTodos(checkedTodo);
  };

  const handleDelete = (id: number) => {
    const deleteTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(deleteTodo);
  };

  return (
    <div className="App">
      <div>
        <h2>Typescript</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="inputText"
            value={inputValue}
            onChange={(e) => handleChange(e)}
          />
          <input type="submit" value="Add" className="submitButton" />
        </form>
        <ul className="todoList">
          {todos.map((todo) => (
            <div key={todo.id}>
              <li>
                <input
                  type="text"
                  className="inputText"
                  value={todo.inputValue}
                  onChange={(e) => handleEdit(todo.id, e.target.value)}
                  disabled={todo.checked}
                />
                <input
                  type="checkbox"
                  onChange={() => handleChecked(todo.id, todo.checked)}
                />
                <button onClick={() => handleDelete(todo.id)}>Delete</button>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
