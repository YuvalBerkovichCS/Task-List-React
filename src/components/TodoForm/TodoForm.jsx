import { useState } from 'react';
import * as S from './style';

const TodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === '') return;
    onSubmit(newItem);
    setNewItem('');
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormRow>
        <label htmlFor="item">New Task</label>
        <S.Input value={newItem} onChange={(e) => setNewItem(e.target.value)} type="text" id="item" />
      </S.FormRow>
      <S.Button type="submit">Add</S.Button>
    </S.Form>
  );
};

export default TodoForm;
