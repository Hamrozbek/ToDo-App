import { createContext, useState, useEffect } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title) => {
    const newTodo = {
      id: todos[todos.length - 1]?.id ? todos[todos.length - 1].id + 1 : 1,
      title,
      isCompleted: false
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index) => {
    const updated = [...todos];
    updated.splice(index, 1);
    setTodos(updated);
  };

  const editTodo = (id) => {
    const findObj = todos.find(item => item.id === id);
    const newValue = prompt("Yangi qiymat:", findObj.title);
    if (newValue !== null) {
      findObj.title = newValue;
      setTodos([...todos]);
    }
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
