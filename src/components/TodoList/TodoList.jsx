import React from "react";
import * as S from "./style";

const TodoList = ({ todos, onToggle, onDelete }) => {
  return (
    <S.List>
      {todos.map((todo) => (
        <S.ListItem key={todo.id}>
          <label>
            <S.Checkbox
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => onToggle(todo.id, e.target.checked)}
            />
            {todo.title}
          </label>
          <S.DeleteButton onClick={() => onDelete(todo.id)}>
            Delete
          </S.DeleteButton>
        </S.ListItem>
      ))}
    </S.List>
  );
};

export default TodoList;
