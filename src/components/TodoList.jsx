import { useState } from 'react';
import { CreateTodo } from './CreateTodo';
import { TodoItem } from './TodoItem';
import { v4 as uuidv4 } from 'uuid';

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 0, name: 'Learn about components' },
    { id: 1, name: 'Learn about props' },
    { id: 2, name: 'Learn about state' },
  ]);

  return (
    <>
      <ul>
        {todos.map(({ id, name }) => (
          <TodoItem key={id} name={name} />
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
