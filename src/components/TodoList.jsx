import { CreateTodo } from './CreateTodo';
import { TodoItem } from './TodoItem';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorageState } from '../utils/localStorage';

const useTodos = () => {
  const [todos, setTodos] = useLocalStorageState('todos', []);

  const addTodo = (name) => {
    setTodos([...todos, { id: uuidv4(), name }]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return {
    todos,
    addTodo,
    removeTodo,
  };
};

export const TodoList = () => {
  const { todos, addTodo, removeTodo } = useTodos();

  return (
    <>
      <ul>
        {todos.map(({ id, name }) => (
          <TodoItem
            key={id}
            id={id}
            name={name}
            onRemove={() => removeTodo(id)}
          />
        ))}
      </ul>
      <CreateTodo onCreate={(name) => addTodo(name)} />
    </>
  );
};
