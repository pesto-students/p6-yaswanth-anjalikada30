import React from 'react'
import { Droppable } from 'react-beautiful-dnd';
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
            todoList?.filter(todo => todo.status === status).map((todo, index) =>
                <React.Fragment key={todo.id}>
                    <Todo content={todo} handleTodoAction={handleTodoAction} index={index} />
                </React.Fragment>)
        )
    }
    return (
        <div className='todo_list'>
            <Droppable droppableId='Todo_list'>
                {
                    (provided) => (
                        <div className='todo_items_container'
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            <div className='todo_items'>
                                <div>To do</div>
                                {getItems(TODOSTATUS_TODO)}
                                {provided.placeholder}
                            </div>
                        </div>
                    )
                }
            </Droppable>
            <Droppable droppableId='Inprogress_list'>
                {
                    (provided) => (
                        <div className='inprogress_items_container'
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            <div className='inprogress_items'>
                                <div>In progress</div>
                                {getItems(TODOSTATUS_INPROGRESS)}
                                {provided.placeholder}
                            </div>
                        </div>
                    )
                }
            </Droppable>
            <Droppable droppableId='Completed_list'>
                {
                    (provided) => (
                        <div className='completed_items_container'
                            ref={provided.innerRef}
                            {...provided.droppableProps}>
                            <div className='completed_items'>
                                <div>Done</div>
                                {getItems(TODOSTATUS_DONE)}
                                {provided.placeholder}
                            </div>
                        </div>
                    )
                }
            </Droppable>
        </div>
    )
}

export default TodoList
