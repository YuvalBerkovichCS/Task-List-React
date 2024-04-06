import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import * as S from './style';

const TodoItem = ({ completed, id, title, onToggle, onDelete }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id });
  return (
    <S.ListItem ref={setNodeRef} {...attributes} {...listeners} style={{ transform: CSS.Transform.toString(transform), transition: transition }}>
      <label>
        <input type="checkbox" checked={completed} onChange={(e) => onToggle(id, e.target.checked)} />
        {title}
      </label>
      <S.Button onClick={() => onDelete(id)} className="btn-danger">
        Delete
      </S.Button>
    </S.ListItem>
  );
};

export default TodoItem;
