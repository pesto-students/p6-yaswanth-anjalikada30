import React from 'react'
import { TODOSTATUS_DONE, TODOSTATUS_INPROGRESS, TODOSTATUS_TODO } from '../../constants/todoStatus';
import Todo from '../todo/Todo';
import './styles.css';

function TodoList({ todoList, setTodos }) {
    const handleTodoAction = (action, todo, editText) => {
        let todos;
        switch (action) {
            case "delete":
                todos = todoList.filter(todoItem => todoItem.id !== todo.id)
                setTodos(todos)
                break;
            case "done":
                todos = todoList.map(todoItem => {
                    if (todoItem.id === todo.id)
                        todoItem.status = TODOSTATUS_DONE
                    return todoItem;
                })
                setTodos(todos)
                break;
            case "start":
                todos = todoList.map(todoItem => {
                    if (todoItem.id === todo.id)
                        todoItem.status = TODOSTATUS_INPROGRESS
                    return todoItem;
                })
                setTodos(todos)
                break;
            case "todo":
                todos = todoList.map(todoItem => {
                    if (todoItem.id === todo.id)
                        todoItem.status = TODOSTATUS_TODO
                    return todoItem;
                })
                setTodos(todos)
                break;
            case "edit":
                todos = todoList.map(todoItem => {
                    if (todoItem.id === todo.id)
                        todoItem.name = editText
                    return todoItem;
                })
                setTodos(todos)
                break;
        }
    }
    const getItems = (status) => {
        return (
            todoList?.filter(todo => todo.status === status).map(todo =>
                <React.Fragment key={todo.id}>
                    <Todo content={todo} handleTodoAction={handleTodoAction} />
                </React.Fragment>)
        )
    }
    return (
        <div className='todo_list'>
            <div className='todo_items_container'>
                <div className='todo_items'>
                    <div>To do</div>
                    {getItems(TODOSTATUS_TODO)}
                </div>
            </div>
            <div className='inprogress_items_container'>
                <div className='inprogress_items'>
                    <div>In progress</div>
                    {getItems(TODOSTATUS_INPROGRESS)}
                </div>
            </div>
            <div className='completed_items_container'>
                <div className='completed_items'>
                    <div>Done</div>
                    {getItems(TODOSTATUS_DONE)}
                </div>
            </div>
        </div>
    )
}

export default TodoList
