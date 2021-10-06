import { useLocalStorageState } from '../utils/localStorage';
import './TodoItem.css';

export const TodoItem = ({ name, id, onRemove }) => {
  const [isDone, setIsDone, removeIsDone] = useLocalStorageState(
    'todo--is-done:' + id,
    false,
  );

  return (
    <li className={isDone ? 'TodoItem TodoItem--is-done' : 'TodoItem'}>
      <span
        className="TodoItem__name"
        onClick={() => {
          setIsDone(!isDone);
        }}
        role="button"
      >
        {name}
      </span>{' '}
      <button
        type="button"
        className="TodoItem__remove"
        title={`Remove "${name}"`}
        onClick={() => {
          onRemove?.();
          removeIsDone();
        }}
      >
        ❌
      </button>
    </li>
  );
};
