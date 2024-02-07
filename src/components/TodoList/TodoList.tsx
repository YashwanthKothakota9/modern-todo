import { useState } from 'react';
import { Todo } from '../Todo/Todo';
import { TodoComposer } from '../TodoComposer/TodoComposer';

export type TodoStructure = {
  id: number;
  label: string;
  completed: boolean;
};

export const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, label: 'Learn React', completed: false },
    { id: 2, label: 'Practice React', completed: false },
    { id: 3, label: 'Learn Redux', completed: false },
  ]);

  const handleUpdateTodo = (updatedTodo: TodoStructure) => {
    const newTodos = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(newTodos);
  };

  const handleDeleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const handleAddTodo = (newTodo: TodoStructure) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <ul>
      <TodoComposer handleAddTodo={handleAddTodo} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
};
