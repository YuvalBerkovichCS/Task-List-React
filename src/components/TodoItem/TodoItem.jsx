import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripVertical } from '@fortawesome/free-solid-svg-icons';
import * as S from './style';

const TodoItem = ({ completed, id, title, onToggle, onDelete }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: id });
  return (
    <S.ListItem ref={setNodeRef} {...attributes} style={{ transform: CSS.Transform.toString(transform), transition: transition }}>
      <S.DraggableArea {...listeners}>
        <FontAwesomeIcon icon={faGripVertical} />
      </S.DraggableArea>
      <S.Label>
        <S.Input type="checkbox" checked={completed} onChange={(e) => onToggle(id, e.target.checked)} />
        {title}
      </S.Label>
      <S.Button onClick={() => onDelete(id)} className="btn-danger">
        Delete
      </S.Button>
    </S.ListItem>
  );
};

export default TodoItem;
