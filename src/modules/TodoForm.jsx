import React, { useContext } from 'react';
import { TodoContext } from '../modules/TodoContxt';

const TodoForm = () => {
  const { addTodo } = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.todo.value.trim();
    if (title) {
      addTodo(title);
      e.target.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-2 rounded-md w-[500px] mx-auto mt-5 flex justify-between">
      <input name="todo" required autoComplete="off" placeholder="Enter your todo" className="outline-none w-[80%] border-[2px] border-white text-white p-2 rounded-md"/>
      <button type="submit" className="w-[19%] p-2 rounded-md cursor-pointer border-[2px] border-white text-white" > Create </button>
    </form>
  );
};

export default TodoForm;
