import React from 'react';
import TodoItem from '../TodoItem';
import { DndContext, KeyboardSensor, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext } from '@dnd-kit/sortable';

import * as S from './style';

const TodoList = ({ todos, onTodoReorder, onToggle, onDelete }) => {
  const reorderTodoList = (e) => {
    const sourceIndex = e.active.data.current.sortable.index;
    const targetIndex = e.over.data.current.sortable.index;

    onTodoReorder({ sourceIndex, targetIndex });
  };
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const keyboardSensor = useSensor(KeyboardSensor);
  const sensors = useSensors(mouseSensor, keyboardSensor);
  return (
    <DndContext sensors={sensors} onDragEnd={reorderTodoList}>
      <S.List>
        {todos.length === 0 && 'No Todos'}
        <SortableContext items={todos}>
          {todos.map((todo) => (
            <TodoItem {...todo} key={todo.id} onToggle={onToggle} onDelete={onDelete} />
          ))}
        </SortableContext>
      </S.List>
    </DndContext>
  );
};

export default TodoList;
