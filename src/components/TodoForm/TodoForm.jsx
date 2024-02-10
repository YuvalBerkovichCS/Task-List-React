import React from 'react';
import * as S from './style';

const TodoForm = ({ onSubmit }) => {
  const [newItem, setNewItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newItem === '') return;
    onSubmit(newItem);
    onInputChange('');
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.FormRow>
        <S.Label htmlFor="item">New Task</S.Label>
        <S.Input value={newItem} onChange={(e) => setNewItem(e.target.value)} type="text" id="item" />
      </S.FormRow>
      <S.Button type="submit">Add</S.Button>
    </S.Form>
  );
};

export default TodoForm;
