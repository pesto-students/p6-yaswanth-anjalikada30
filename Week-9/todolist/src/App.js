import { useState } from 'react';
import './App.css';
import { Header } from './components';
import { InputField } from './components/inputfield';
import TodoList from './components/todolist/TodoList';
import { TODOSTATUS_TODO } from './constants/todoStatus';

function App() {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState({ name: '' })
  const handleChange = (event) => {
    setTodo({
      name: event.target.value
    })
  }
  const handleSubmit = () => {
    todo.id = Math.floor(Math.random() * 1000)
    todo.status = TODOSTATUS_TODO;
    if (todo.name !== '') {
      setTodos([...todos, todo])
      setTodo({ name: '' });
    }
  }

  return (
    <div className='App'>
      <Header className='header' title='Todo-List' />
      <InputField onChange={handleChange} onSubmit={handleSubmit} todo={todo} />
      <TodoList todoList={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
