import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  label {
    display: flex;
    gap: 0.25rem;
    cursor: pointer;
    align-items: center;

    &:hover::before {
      background: hsl(200, 100%, 80%);
    }
  }
`;

export const Input = styled.input``;

export const Label = styled.label``;

export const DraggableArea = styled.div`
  cursor: pointer;
`;

export const Button = styled.button`
  background: hsl(200, 100%, 50%, 0.1);
  border: 1px solid hsl(200, 100%, 50%);
  color: hsl(200, 100%, 50%);
  padding: 0.25em 0.5em;
  border-radius: 0.25em;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus-visible {
    background: hsl(200, 100%, 50%, 0.2);
  }

  &.btn-danger {
    background: hsl(0, 100%, 40%, 0.1);
    border: 1px solid hsl(0, 100%, 40%);
    color: hsl(0, 100%, 40%);

    &:hover,
    &:focus-visible {
      background: hsl(0, 100%, 40%, 0.2);
    }
  }
`;
