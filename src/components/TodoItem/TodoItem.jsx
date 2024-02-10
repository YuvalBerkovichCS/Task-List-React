import React from 'react';
import * as S from './style';

const TodoItem = ({ completed, id, title, toggleTodo, deleteTodo }) => {
  return (
    <S.ListItem>
      <input type="checkbox" checked={completed} onChange={(e) => toggleTodo(id, e.target.checked)} />
      <label>{title}</label>
      <S.Button onClick={() => deleteTodo(id)} className="btn btn-danger">
        {' '}
        Delete
      </S.Button>
    </S.ListItem>
  );
};

export default TodoItem;
