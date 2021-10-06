import { useState } from 'react';
import './TodoItem.css';

export const TodoItem = ({ name }) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <li
      onClick={() => {
        setIsDone(!isDone);
      }}
      className={isDone ? 'TodoItem TodoItem--is-done' : 'TodoItem'}
    >
      {name}
    </li>
  );
};
