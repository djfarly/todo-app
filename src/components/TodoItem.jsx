import { useEffect } from 'react';
import { useLocalStorageState } from '../utils/localStorage';
import './TodoItem.css';

export const TodoItem = ({ name, id }) => {
  const [isDone, setIsDone] = useLocalStorageState(
    'todo--is-done:' + id,
    false,
  );

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
