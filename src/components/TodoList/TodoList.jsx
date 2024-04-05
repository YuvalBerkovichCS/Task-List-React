import React from 'react';
import TodoItem from '../TodoItem';
import * as S from './style';

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <S.List>
      {todos.length === 0 && 'No Todos'}
      {todos.map((todo) => (
        <TodoItem {...todo} key={todo.id} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </S.List>
  );
};

export default TodoList;
