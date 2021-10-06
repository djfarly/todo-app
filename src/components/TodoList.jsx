import { CreateTodo } from './CreateTodo';
import { TodoItem } from './TodoItem';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorageState } from '../utils/localStorage';

export const TodoList = () => {
  const [todos, setTodos] = useLocalStorageState('todos', [
    { id: uuidv4(), name: 'Learn about components' },
    { id: uuidv4(), name: 'Learn about props' },
    { id: uuidv4(), name: 'Learn about state' },
  ]);

  return (
    <>
      <ul>
        {todos.map(({ id, name }) => (
          <TodoItem key={id} id={id} name={name} />
        ))}
      </ul>
      <CreateTodo
        onCreate={(name) => {
          setTodos([
            ...todos,
            {
              id: uuidv4(), // or todos.length
              name,
            },
          ]);
        }}
      />
    </>
  );
};
