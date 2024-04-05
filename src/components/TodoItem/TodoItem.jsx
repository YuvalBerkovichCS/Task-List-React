import React from 'react';
import * as S from './style';

const TodoItem = ({ completed, id, title, onToggle, onDelete }) => {
  return (
    <S.ListItem>
      <label>
        <input type="radio" checked={completed} onChange={(e) => onToggle(id, e.target.checked)} />
        {title}
      </label>
      <S.Button onClick={() => onDelete(id)} className="btn-danger">
        Delete
      </S.Button>
    </S.ListItem>
  );
};

export default TodoItem;
