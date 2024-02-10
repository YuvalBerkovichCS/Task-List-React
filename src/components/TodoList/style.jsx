import styled from "styled-components";

export const List = styled.ul`
  margin: 0;
  padding: 0;
  margin-left: 1rem;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 0.3rem;
`;

export const Checkbox = styled.input`
  outline: none;
  width: 0;
  height: 0;
  appearance: none;
  pointer-events: none;
  position: absolute;

  &:checked + label::before {
    content: "✔";
    background: hsl(200, 100%, 40%);
    color: hsl(200, 100%, 90%);
    font-size: 0.75rem;
    font-weight: bold;
  }

  &:checked + label:hover::before {
    background: hsl(200, 100%, 30%);
  }
`;

export const DeleteButton = styled.button`
  background: hsl(0, 100%, 40%, 0.1);
  border: 1px solid hsl(0, 100%, 40%);
  color: hsl(0, 100%, 40%);
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus-visible {
    background: hsl(0, 100%, 40%, 0.2);
  }
`;
