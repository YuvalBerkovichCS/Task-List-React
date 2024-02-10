import React from "react";
import * as S from "./style";

const TodoForm = ({ newItem, onInputChange, onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newItem);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Text>New Task</S.Text>
      <S.Input
        value={newItem}
        onChange={(e) => onInputChange(e.target.value)}
        type="text"
        id="item"
      />

      <S.Button type="submit">Add</S.Button>
    </S.Form>
  );
};

export default TodoForm;
