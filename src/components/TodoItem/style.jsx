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

  input {
    outline: none;
    width: 0;
    height: 0;
    appearance: none;
    pointer-events: none;
    position: absolute;
  }

  label::before {
    content: '';
    display: block;
    width: 0.9rem;
    height: 0.9rem;
    background: hsl(200, 100%, 90%);
    border-radius: 0.25em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input:checked + label::before {
    content: '✔';
    background: hsl(200, 100%, 40%);
    color: hsl(200, 100%, 90%);
    font-size: 0.75rem;
    font-weight: bold;
  }
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
