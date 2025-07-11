import React from 'react';
import TodoForm from './modules/TodoForm';
import TodoList from './modules/TodoList';
import { TodoProvider } from './modules/TodoContxt';


const App = () => {
  return (
    <TodoProvider>
      <div>
        <h1 className='font-bold text-[30px] text-white text-center pt-10'>ToDo App</h1>
      </div>
      <TodoForm/>
      <TodoList/>
    </TodoProvider>
  );
};

export default App;
