import React from 'react';
import TodoItem from '../TodoItem';
import * as S from './style';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <S.List>
      {todos.length === 0 && 'No Todos'}
      {todos.map((todo) => (
        <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </S.List>
  );
};

export default TodoList;
