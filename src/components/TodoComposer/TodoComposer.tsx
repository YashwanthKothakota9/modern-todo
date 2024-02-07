import { useState } from 'react';
import './TodoComposer.css';

import { TodoStructure } from '../TodoList/TodoList';

interface TodoComposerProps {
  handleAddTodo: (newTodo: TodoStructure) => void;
}

function createTodo(label: string) {
  return {
    id: Math.floor(Math.random() * 100000),
    label,
    completed: false,
  };
}

export const TodoComposer = ({ handleAddTodo }: TodoComposerProps) => {
  const [label, setLabel] = useState('');
  const handleUpdateLabel = (e: React.ChangeEvent<HTMLInputElement>) =>
    setLabel(e.target.value);

  const handleAddTodoClick = () => {
    const todo = createTodo(label);
    handleAddTodo(todo);
    setLabel('');
  };

  return (
    <li>
      <input
        placeholder="Add a new Todo"
        type="text"
        value={label}
        onChange={handleUpdateLabel}
      />
      <button disabled={label.length === 0} onClick={handleAddTodoClick}>
        Add Todo
      </button>
    </li>
  );
};
