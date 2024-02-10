import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import * as S from "./style";

export default function App() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);

  const handleInputChange = (value) => {
    setNewItem(value);
  };

  const handleSumbit = () => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: Math.random(), title: newItem, completed: false },
    ]);
    setNewItem("");
  };

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  return (
    <S.Container>
      <TodoForm
        newItem={newItem}
        onInputChange={handleInputChange}
        onSubmit={handleSumbit}
      />
      <S.InnerContainer>
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </S.InnerContainer>
    </S.Container>
  );
}
