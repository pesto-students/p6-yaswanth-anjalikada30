import { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';
import { Header } from './components';
import { InputField } from './components/inputfield';
import TodoList from './components/todolist/TodoList';
import { TODOSTATUS_DONE, TODOSTATUS_INPROGRESS, TODOSTATUS_TODO } from './constants/todoStatus';

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

  const todoActions = {
    Todo_list: TODOSTATUS_TODO,
    Inprogress_list: TODOSTATUS_INPROGRESS,
    Completed_list: TODOSTATUS_DONE
  }

  const onDragEnd = (result) => {
    const { source, destination } = result;
    //nothing to do if we drop in non-droppable zone
    if (!destination)
      return;
    //nothing to do if we drop in same position
    if (source.droppableId === destination.droppableId && source.index === destination.index)
      return;
    let newTodos = todos.map(todo => {
      if (todo.id === Number(result.draggableId))
        todo.status = todoActions[destination.droppableId]
      return todo;
    })
    setTodos(newTodos)
  }
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='App'>
        <Header className='header' title='Todo-List' />
        <InputField onChange={handleChange} onSubmit={handleSubmit} todo={todo} />
        <TodoList todoList={todos} setTodos={setTodos} />
      </div>
    </DragDropContext>
  );
}

export default App;
