import { useState, useEffect } from 'react';
import GlobalStyles from './GlobalStyles';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import * as S from './style';

const App = () => {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    return localValue == null ? [] : JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    setTodos((currentTodos) => [...currentTodos, { id: crypto.randomUUID(), title, completed: false }]);
  };

  const toggleTodo = (id, completed) => {
    setTodos((currentTodos) => currentTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <GlobalStyles />
      <S.Container>
        <TodoForm onSubmit={addTodo} />
        <S.Header>Todo List</S.Header>
        <TodoList todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </S.Container>
    </>
  );
};

export default App;
