import { useState } from 'react';
import './Todo.css';

import type { TodoStructure } from '../TodoList/TodoList';

interface TodoProps {
  todo: TodoStructure;
  handleUpdateTodo: (updatedTodo: TodoStructure) => void;
  handleDeleteTodo: (id: number) => void;
}

export const Todo = ({
  todo,
  handleUpdateTodo,
  handleDeleteTodo,
}: TodoProps) => {
  const [editing, setEditing] = useState(false);

  const handleCheckboxClick = () =>
    handleUpdateTodo({
      ...todo,
      completed: !todo.completed,
    });
  const handleEditClick = () => setEditing(!editing);
  const handleUpdateLabel = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleUpdateTodo({
      ...todo,
      label: e.target.value,
    });

  const handleDeleteClick = () => handleDeleteTodo(todo.id);

  return (
    <div className="wrapper">
      <div className="todo-wrapper">
        <input
          type="checkbox"
          id={todo.id.toString()}
          checked={todo.completed}
          onChange={handleCheckboxClick}
        />
        <label htmlFor={todo.id.toString()}>
          {editing === true ? (
            <input
              type="text"
              value={todo.label}
              onChange={handleUpdateLabel}
            />
          ) : (
            <span>{todo.label}</span>
          )}
        </label>
      </div>
      <div className="button-wrapper">
        <button className="edit" onClick={handleEditClick}>
          {editing ? 'Save' : 'Edit'}
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};
