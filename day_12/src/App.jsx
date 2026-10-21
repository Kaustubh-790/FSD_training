import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addHandler = () => {
    if (todo.trim() === "") {
      alert("Please add something");
      return;
    }

    if (editIndex !== null) {
      const updatedList = todoList.map((item, i) =>
        i === editIndex ? todo.trim() : item
      );
      setTodoList(updatedList);
      setEditIndex(null);
    } else {
      setTodoList([...todoList, todo.trim()]);
    }
    setTodo("");
  };

  const deleteHandler = (index) => {
    if (editIndex === index) {
      setEditIndex(null);
      setTodo("");
    } else if (editIndex !== null && index < editIndex) {
      setEditIndex(editIndex - 1);
    }

    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };

  const editHandler = (index) => {
    setTodo(todoList[index]);
    setEditIndex(index);
  };

  const cancelEditHandler = () => {
    setEditIndex(null);
    setTodo("");
  };

  return (
    <div>
      <h1>ToDo List</h1>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter todo..."
      />
      <button onClick={addHandler}>
        {editIndex !== null ? "UPDATE" : "ADD"}
      </button>
      {editIndex !== null && (
        <button onClick={cancelEditHandler}>CANCEL</button>
      )}

      <ul>
        {todoList.map((t, index) => (
          <li key={index}>
            <span>{t}</span>
            <button onClick={() => editHandler(index)}>EDIT</button>
            <button onClick={() => deleteHandler(index)}>DEL</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
