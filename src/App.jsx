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
  console.log({ todos });
  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    setTodos((currentTodos) => [...currentTodos, { id: crypto.randomUUID(), title, completed: false }]);
  };

  const toggleTodo = (id, completed) => {
    console.log('toggleTodo', id, completed);
    setTodos((currentTodos) => currentTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo)));
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };
  const handleTodoReorder = ({ sourceIndex, targetIndex }) => {
    console.log(todos, sourceIndex, targetIndex);
    setTodos((prev) => {
      const sourceTodo = prev[sourceIndex];
      const newTodos = [...prev];
      newTodos.splice(sourceIndex, 1);
      newTodos.splice(targetIndex, 0, sourceTodo);

      return newTodos;
    });
  };

  return (
    <>
      <GlobalStyles />
      <S.Container>
        <TodoForm onSubmit={addTodo} />
        <S.Header>Todo List</S.Header>
        <TodoList todos={todos} onTodoReorder={handleTodoReorder} onToggle={toggleTodo} onDelete={deleteTodo} />
      </S.Container>
    </>
  );
};

export default App;
