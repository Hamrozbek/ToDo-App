import React, { useContext } from 'react';
import { TodoContext } from '../modules/TodoContxt';

const TodoList = () => {
  const { todos, deleteTodo, editTodo } = useContext(TodoContext);

  return (
    <ul className="space-y-3 p-2 rounded-md w-[500px] mx-auto mt-5">
      {todos.map((item, index) => (
        <li key={item.id} className="p-1 rounded-md border-[2px] border-white text-white flex justify-between">
          <div className="flex items-center gap-2">
            <span>#{index + 1}.</span>
            <strong>{item.title}</strong>
          </div>
          <div className="flex items-center gap-2 outline-none">
            <button onClick={() => editTodo(item.id)} className="p-2 cursor-pointer rounded-md">
              ✏️
            </button>
            <button onClick={() => deleteTodo(index)} className="p-2 cursor-pointer rounded-md">
              🗑️
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
